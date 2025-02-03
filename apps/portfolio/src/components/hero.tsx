import { Barlow } from "next/font/google";
import heroCircle from "~/../public/small-circle/small-circle_4x.webp";
import hero from "~/../public/hero/hero_4x.webp";
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
      grid gap-7 
      grid-cols-[20%_1fr]
      sm:grid-cols-[1fr_40%]
      m-auto my-10 
      px-2 sm:px-0
      sm:py-10
      "
    >
      <Title />
      <Subtitle />
      <Social />
      <HeroImage />
      <Globe />
    </div>
  );
}

function Title() {
  return (
    <div
      className="
      slideinleft
      col-start-2 row-start-1
      sm:col-start-1 sm:row-start-1
      sm:text-right
      "
    >
      <TextFit
        className={`
          hero-title text-[12vw] leading-[95%]
          sm:leading-[85%] text-[#C0CAF5] ${barlow.className}
        `}
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
      hero-subtitle 
      slideinright

      sm:border sm:border-accent sm:border-l-0 sm:border-r-0 sm:border-b-0

      sm:text-right sm:text-lg md:text-xl lg:text-2xl

      col-start-1 col-end-3 row-start-3 row-end-4

      sm:col-end-2 sm:row-start-2 sm:row-end-3

      mt-0 sm:mt-12
      sm:pt-5
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
      w-[10vw] h-[10vw] 
      sm:w-[4vw] sm:h-[4vw]

      max-w-[69px] max-h-[69px]

      border-2 border-[#9ece6a] rounded-full 

      flex items-center justify-center box-border

      bg-base-100
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
    <>
      <div
        className="
          relative
          top-[5.5vw]

          border border-accent border-b-0 border-l-0 border-r-0

          w-full h-1

          row-start-2 col-start-1 col-end-3
          sm:hidden
        "
      ></div>

      <div
        className="
        staggeredslidein
        bg-base-100
        sm:bg-transparent

        relative z-10 pl-2
        sm:pl-0

        grid grid-flow-col gap-3 sm:gap-2
        sm:grid-flow-row 

        row-start-2 col-start-1 col-end-3
        sm:row-start-1 sm:col-start-2 sm:row-end-3

        self-center justify-self-end
        sm:self-start sm:justify-self-start
        sm:pt-[65%]
        "
      >
        {content.map((item, index) => (
          <SocialItem key={index} {...item} />
        ))}
      </div>
    </>
  );
}

function HeroImage() {
  return (
    <div
      className="
      delayedfadein

      self-center justify-self-center
      sm:self-start sm:justify-self-start

      row-start-1 col-start-1
      sm:row-start-1 sm:col-start-2
      sm:row-end-3
      "
    >
      <Image src={hero} alt="Hero image" className="w-full hidden sm:block" />
      <Image src={heroCircle} alt="Hero image" className="w-full sm:hidden" />
    </div>
  );
}

function Globe() {
  return (
    <div
      className="
        relative
        z-10

        bg-base-100
        sm:bg-transparent

        row-start-2 col-start-1
        sm:row-start-1 sm:col-start-2

        justify-self-start
        sm:justify-self-end

        pr-2
        sm:pr-0
      "
    >
      <div
        className="
          delayedslideinright
          flex items-center content-center

          w-[10vw] h-[10vw] 
          sm:w-[4vw] sm:h-[4vw]

          max-w-[69px] max-h-[69px]

          bg-[#9ece6a] rounded-full
          p-2
          "
      >
        <Image src={globe} alt="globe" layout="responsive" />
      </div>
    </div>
  );
}
