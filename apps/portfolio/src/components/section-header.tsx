import { Barlow } from "next/font/google";

const barlow = Barlow({ weight: "900", subsets: ["latin"] });

type SectionHeaderProps = {
  title: string;
  theme?: string;
};

export const SectionHeader = ({ title, theme }: SectionHeaderProps) => {
  if (!theme) theme = "light";

  const color = theme === "light" ? "text-[#24283b]" : "text-[#e7e9ec]";

  return (
    <div
      id={title}
      data-theme={`tokyonight-${theme}`}
      className={`
        relative
        h-32
        overflow-hidden
        transition-all duration-500 ease-in-out 
        ${color} text-[178px] ${barlow.className}
      `}
    >
      <div
        className="
          delayedfadein
          absolute top-[-115px] left-[-20px] whitespace-nowrap
          "
      >
        {title.repeat(6)}
      </div>
    </div>
  );
};
