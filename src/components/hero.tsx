import { Barlow } from "next/font/google";
import hero from "~/../public/hero.svg";
import globe from "~/../public/globe.svg";
import github from "~/../public/github.svg";
import linkedin from "~/../public/linked.svg";
import insta from "~/../public/insta.svg";
import { TextFit } from "~/lib/text-fit";
import Image from "next/image";
import Link from "next/link";

const barlow = Barlow({ weight: "900", subsets: ["latin"] });

export function Hero() {
  return (
    <div
      className="
      container transition-all duration-500 ease-in-out
      grid gap-7 grid-cols-1
      md:grid-cols-[1fr_40%]
      m-auto mt-10 mb-24
      px-2 md:px-0
      "
    >
      <Title />
      <Subtitle />
      <Social />
      <HeroImage />
    </div>
  );
}

function Title() {
  return (
    <div
      className="
      md:text-right
      slidein
      "
    >
      <TextFit
        className={`hero-title text-[12vw] leading-[120%] md:leading-[85%] text-[#C0CAF5] ${barlow.className}`}
      >
        software
        <br />
        engineer
      </TextFit>
    </div>
  );
}

function Subtitle() {
  return (
    <div
      className="
      delayedfadein
      md:border md:border-accent md:border-l-0 md:border-r-0 md:border-b-0
      md:text-right md:col-start-1 md:row-start-2
      sm:text-lg md:text-xl lg:text-2xl
      hero-subtitle 
      mt-0 md:mt-12
      md:pt-12
      "
    >
      Specializing in full stack cloud native platform development and
      event-driven architectures.
    </div>
  );
}

type SocialItemProps = {
  href: string;
  src: string;
  alt: string;
};

function SocialItem({ href, src, alt }: SocialItemProps) {
  return (
    <div
      className="
      w-[10vw] h-[10vw] md:w-[3.5vw] md:h-[3.5vw] xl:w-[4vw] xl:h-[4vw]
      max-w-[69px] max-h-[69px]
      border-2 border-[#9ece6a] rounded-full 
      flex items-center justify-center box-border
      p-2
      "
    >
      <Link target="_blank" href={href}>
        <Image src={src} alt={alt} layout="responsive" width={0} height={0} />
      </Link>
    </div>
  );
}

function Social() {
  const content = [
    {
      href: "https://github.com/rossnelson",
      src: github,
      alt: "github",
    },
    {
      href: "https://linkedin.com/in/ross-philip-nelson",
      src: linkedin,
      alt: "linkedin",
    },
    {
      href: "https://instagram.com/rossnelson",
      src: insta,
      alt: "instagram",
    },
  ];

  return (
    <div
      className="
      staggeredslidein
      relative z-10
      self-end
      grid grid-flow-row gap-3
      row-start-3 col-start-1
      md:row-start-1 md:col-start-2
      md:row-end-3
      mt-0 pt-5 md:pt-0
      "
    >
      {content.map((item, index) => (
        <SocialItem key={index} {...item} />
      ))}
    </div>
  );
}

function HeroImage() {
  return (
    <div
      className="
      box-border 
      row-start-3 col-start-1
      md:row-start-1 md:col-start-2
      md:row-end-3
      "
    >
      <div className="relative">
        <Image
          src={hero}
          className="fadein"
          alt="Hero image"
          layout="responsive"
          width={0}
          height={0}
        />

        <div
          className="
          delayedslideinright
          w-[11vw] h-[11vw] md:w-[5vw] md:h-[5vw] xl:w-[4vw] xl:h-[4vw]
          max-w-[69px] max-h-[69px]
          flex items-center content-center
          bg-[#9ece6a] rounded-full
          p-2
          absolute
          top-0 right-0 left-auto
          "
        >
          <Image
            src={globe}
            alt="globe"
            layout="responsive"
            width={0}
            height={0}
          />
        </div>
      </div>
    </div>
  );
}
