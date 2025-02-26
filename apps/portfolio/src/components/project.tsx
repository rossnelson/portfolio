"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Modal } from "~/lib/modal";

export type Project = {
  image: StaticImageData;
  title: string;
  body?: React.ReactNode;
};

export type Projects = Project[];

type ProjectThumbProps = {
  image: StaticImageData;
  title: string;
  children?: React.ReactNode;
};

export const ProjectThumb = ({ image, title, children }: ProjectThumbProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden"
        role="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <figure className="overflow-hidden h-32">
          <Image src={image} alt="hero" className="object-cover w-full" />
        </figure>

        <div className="card-body">
          <h3 className="text-sm card-title">{title}</h3>
        </div>
      </div>

      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        {children}
      </Modal>
    </>
  );
};

export const Project = ({ image, title, body }: Project) => {
  return (
    <div className="">
      <div className="">
        <h3 className="font-bold text-2xl">{title}</h3>

        <figure className="overflow-hidden max-h-96 my-5 rounded-md">
          <Image src={image} alt="hero" className="object-cover w-full" />
        </figure>

        <div className="markdown text-lg">{body}</div>
      </div>
    </div>
  );
};
