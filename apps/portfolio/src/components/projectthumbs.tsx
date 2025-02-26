"use client";

import { Intersection } from "~/lib/intersection";
import { Project, ProjectThumb } from "./project";
import { SectionHeader } from "./section-header";

import trusthab from "~/../public/showcase/Trusthab.webp";
import reguard from "~/../public/showcase/Reguard.webp";
import nylas from "~/../public/showcase/Nylas.webp";

import TrusthabContent from "./project-trusthab.mdx";
import ReguardContent from "./project-reguard.mdx";
import HighwingContent from "./project-highwing.mdx";

const content = [
  {
    image: trusthab,
    title: "TrustHab: An IoT Platform for Property Management",
    body: <TrusthabContent />,
  },
  {
    image: nylas,
    title: "Nylas: Solving Out of Band Communications",
    body: <HighwingContent />,
  },
  {
    image: reguard,
    title: "Reguard Protection: A Customer-Focused Warranty Platform",
    body: <ReguardContent />,
  },
];

const ProjectThumbsContent = () => {
  return content.map((project: Project, index: number) => (
    <ProjectThumb key={`project-${index}`} {...project}>
      <Project {...project} />
    </ProjectThumb>
  ));
};

export const ProjectThumbs = () => {
  return (
    <>
      <SectionHeader title="showcase." theme="storm" />

      <div id="showcase" className="grid place-items-center pb-20 sm:pt-20">
        <div className="container">
          <Intersection classSuffix="staggeredslidein">
            <div className="grid md:grid-cols-[repeat(auto-fill,minmax(30%,1fr))] gap-6 p-2">
              <ProjectThumbsContent />
            </div>
          </Intersection>
        </div>
      </div>
    </>
  );
};
