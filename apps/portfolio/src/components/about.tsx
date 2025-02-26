"use client";

import { Intersection } from "~/lib/intersection";
import { SectionHeader } from "./section-header";

import Competencies from "./about-competencies.mdx";
import Body from "./about-body.mdx";

export function About() {
  return (
    <>
      <SectionHeader title="about." theme="light" />

      <div
        data-theme="tokyonight-light"
        className={`
          transition-all duration-500 ease-in-out 
          grid place-items-center pb-20 sm:pt-20 
        `}
      >
        <div className="container">
          <div className="markdown text-lg grid md:grid-cols-[60%,_1fr] gap-12 p-2">
            <Intersection classSuffix="slideinleft">
              <Body />
            </Intersection>

            <Intersection classSuffix="slideinright">
              <a
                href="https://drive.google.com/file/d/1X8CupdUsfcfgeuEETMyXmHeeNR-Z2TAJ/view?usp=drive_link"
                target="_blank"
                className=" btn border-2 border-[#24283b] w-full text-lg"
              >
                Download My Resume
              </a>

              <Competencies />
            </Intersection>
          </div>
        </div>
      </div>
    </>
  );
}
