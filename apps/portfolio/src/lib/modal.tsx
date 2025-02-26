import React, {
  ReactNode,
  ReactElement,
  MouseEvent,
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
  cloneElement,
} from "react";
import { createPortal } from "react-dom";

// Types for the Modal Context
interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

// Default context value
const defaultModalContext: ModalContextType = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
};

// Modal Context to manage the modal state globally if needed
const ModalContext = createContext<ModalContextType>(defaultModalContext);

// Props for the Modal Provider
interface ModalProviderProps {
  children: ReactNode;
}

// Modal Provider component
export const ModalProvider = ({
  children,
}: ModalProviderProps): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Props for the Modal Trigger
interface ModalTriggerProps {
  children: ReactElement;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

// Modal trigger component - wraps any element to make it a trigger
export const ModalTrigger = ({
  children,
  onClick,
}: ModalTriggerProps): ReactElement => {
  const { openModal } = useContext(ModalContext);

  const handleClick = (e: MouseEvent<HTMLElement>): void => {
    openModal();
    if (onClick) onClick(e);
  };

  // Cast the children element to have appropriate props
  // This tells TypeScript that the element can accept an onClick prop
  return cloneElement(
    children as React.ReactElement<{ onClick?: React.MouseEventHandler }>,
    {
      onClick: handleClick,
    },
  );
};

// Props for the Modal component
interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  className?: string;
}

// Handle closing the modal
const wrapHandleClose =
  (
    controlledIsOpen: boolean | undefined,
    contextModal: ModalContextType,
    onClose: (() => void) | undefined,
  ) =>
  (): void => {
    if (controlledIsOpen !== undefined && onClose) {
      onClose();
      return;
    }
    contextModal.closeModal();
  };

// The actual Modal component
export const Modal = ({
  children,
  isOpen: controlledIsOpen,
  onClose,
  className = "",
}: ModalProps): ReactElement | null => {
  // Support both controlled and uncontrolled modes
  const contextModal = useContext(ModalContext);
  const [isOpen, setIsOpen] = useState<boolean>(
    controlledIsOpen !== undefined ? controlledIsOpen : contextModal.isOpen,
  );
  const modalRef = useRef<HTMLDivElement>(null);

  // Sync with props or context
  useEffect(() => {
    if (controlledIsOpen !== undefined) {
      setIsOpen(controlledIsOpen);
      return;
    }
    setIsOpen(contextModal.isOpen);
  }, [controlledIsOpen, contextModal.isOpen]);

  const handleClose = wrapHandleClose(controlledIsOpen, contextModal, onClose);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    // Need to cast to any because the DOM types don't match React's event types
    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpen, handleClose]);

  // Handle clicking outside the modal
  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>): void => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div
      className="modal-overlay fixed p-6 top-0 left-0 right-0 bottom-0 bg-base-100 bg-opacity-95 z-50 fadein"
      onClick={handleOutsideClick}
    >
      <div
        ref={modalRef}
        className={`
          modal-content rounded-md shadow-lg bg-gray-900 p-6
          max-h-full overflow-scroll mx-auto max-w-full lg:max-w-screen-lg 
          z-10 slidein ${className}
        `}
        role="dialog"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    document.body,
  );
};
