import { Barlow } from "next/font/google";
import hero from "~/../public/hero.svg";
import globe from "~/../public/globe.svg";
import branch from "~/../public/branch.svg";
import brackets from "~/../public/brackets.svg";
import db from "~/../public/db.svg";
import github from "~/../public/github.svg";
import linkedin from "~/../public/linked.svg";
import insta from "~/../public/insta.svg";
import { TextFit } from "~/lib/text-fit";
import Image from "next/image";
import Link from "next/link";

const barlow = Barlow({ weight: "900", subsets: ["latin"] });

export function Hero() {
  return (
    <div className="container grid grid-cols-[1fr_40vw] gap-7 m-auto mt-10 transition-all">
      <div className="text-right">
        <TextFit
          className={`hero-title text-[12vw] leading-[75%] text-[#C0CAF5] ${barlow.className}`}
        >
          software
          <br />
          engineer
        </TextFit>

        <div className="hero-subtitle mt-12">
          specializing in full stack cloud native platform development and event
          driven architectures
        </div>

        <div className="border border-l-0 border-r-0 border-b-0 border-t-accent mt-8 pt-5 flex gap-3">
          <div className="w-[5vw] h-[5vw] border-4 border-[#9ece6a] rounded-full flex items-center content-center p-3">
            <Link target="_blank" href="https://github.com/rossnelson">
              <Image
                src={github}
                alt="github"
                layout="responsive"
                width={555}
                height={555}
              />
            </Link>
          </div>

          <div className="w-[5vw] h-[5vw] border-4 border-[#9ece6a] rounded-full flex items-center content-center p-3">
            <Link
              target="_blank"
              href="https://linkedin.com/in/ross-philip-nelson"
            >
              <Image
                src={linkedin}
                alt="linkedin"
                layout="responsive"
                width={555}
                height={555}
              />
            </Link>
          </div>

          <div className="w-[5vw] h-[5vw] border-4 border-[#9ece6a] rounded-full flex items-center content-center p-3">
            <Link target="_blank" href="https://instagram.com/simiancreative">
              <Image
                src={insta}
                alt="instagram"
                layout="responsive"
                width={555}
                height={555}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative pb-5 box-border">
        <Image
          src={hero}
          alt="Hero image"
          layout="responsive"
          width={555}
          height={555}
        />

        <div className="absolute w-[5vw] h-[5vw] bg-[#9ece6a] rounded-full top-0 right-0 left-auto flex items-center content-center p-2">
          <Image
            src={globe}
            alt="globe"
            layout="responsive"
            width={555}
            height={555}
          />
        </div>

        <div className="absolute w-[5vw] h-[5vw] bg-[#9ece6a] rounded-full left-0 top-auto bottom-[7.5rem] p-3">
          <Image
            src={brackets}
            alt="brackets"
            layout="responsive"
            width={555}
            height={555}
          />
        </div>

        <div className="absolute w-[5vw] h-[5vw] bg-[#9ece6a] rounded-full left-0 top-auto bottom-[3.75rem] pl-4 p-3 flex items-center content-center">
          <Image
            src={branch}
            alt="branch"
            layout="responsive"
            width={555}
            height={555}
          />
        </div>

        <div className="absolute w-[5vw] h-[5vw] bg-[#9ece6a] rounded-full left-0 top-auto bottom-0 p-3 flex items-center content-center">
          <Image
            src={db}
            alt="database"
            layout="responsive"
            width={555}
            height={555}
          />
        </div>
      </div>
    </div>
  );
}
