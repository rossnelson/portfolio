import { Barlow } from "next/font/google";
import { Intersection } from "~/lib/intersection";

const barlow = Barlow({ weight: "900", subsets: ["latin"] });

export function About() {
  return (
    <>
      <div
        id="about"
        data-theme="tokyonight-light"
        className={`
        relative
        h-40
        overflow-hidden
        transition-all duration-500 ease-in-out 
        text-[#24283b] text-[178px] ${barlow.className}
      `}
      >
        <div
          className="absolute top-[-115px] left-[-20px] whitespace-nowrap
          delayedfadein
          "
        >
          about.about.about.about.about.about.
        </div>
      </div>

      <div
        data-theme="tokyonight-light"
        className={`
          transition-all duration-500 ease-in-out 
          grid place-items-center pb-20
        `}
      >
        <div className="container">
          <div className="grid md:grid-cols-[60%,_1fr] gap-12 p-2">
            <Intersection>
              <div className="slideinleft">
                <p>
                  Over the last 15+ years, I’ve worked to support my teams in
                  designing and developing scalable, cloud-based, event-driven
                  API systems capable of handling high-volume requests. By
                  implementing User friendly UIs, Efficiency focused
                  Apis/Workflows, and DevOps best practices we set our sights on
                  increasing deployment efficiency and enhanced system
                  reliability.
                </p>
                <br />
                <p>
                  I am passionate about mentoring and have guided engineers at
                  all levels, fostering a culture of continuous learning and
                  growth. Ive worked to improve productivity by initiating pair
                  programming sessions, peer review processes, and regular
                  knowledge-sharing sessions, which go a long way to improve
                  code quality and team collaboration.
                </p>
                <br />
                <p>
                  I thrive in fast-paced, dynamic environments and am committed
                  to continuous learning. Continually exploring emerging
                  technologies repeatedly assists in solving complex technical
                  challenges, resulting in vastly improved observability and
                  maintainability in both local and deployed environments.
                </p>
              </div>
            </Intersection>

            <Intersection>
              <div className="slideinright">
                <h2 className="font-bold mb-5">Core Competenties</h2>

                <ul className="mb-10">
                  <li>Front-End Development</li>
                  <li>Back-End Engineering</li>
                  <li>DevOps + CI/CD</li>
                  <li>Cloud Native Infrastructure</li>
                  <li>Event-Driven Architectures</li>
                </ul>

                <ul className="mb-10">
                  <li>Performance Improvement</li>
                  <li>Platform Optimization</li>
                  <li>System Design</li>
                  <li>System Enhancement</li>
                  <li>Cost Control</li>
                </ul>
                <ul>
                  <li>Problem-Solving</li>
                  <li>Software Engineering Leadership</li>
                  <li>Team Leadership</li>
                  <li>Mentorship</li>
                </ul>

                <a
                  href="https://drive.google.com/file/d/1X8CupdUsfcfgeuEETMyXmHeeNR-Z2TAJ/view?usp=drive_link"
                  target="_blank"
                  className="delayedfadein btn border-2 border-[#24283b] w-full mt-10"
                >
                  Download My Resume
                </a>
              </div>
            </Intersection>
          </div>
        </div>
      </div>
    </>
  );
}
