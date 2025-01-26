import Link from "next/link";

export function Header() {
  return (
    <header className="mx-10 mt-8 border border-t-accent border-l-0 border-r-0 border-b-accent">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a href="https://drive.google.com/file/d/1X8CupdUsfcfgeuEETMyXmHeeNR-Z2TAJ/view?usp=drive_link">
            <h1 className="text-2xl font-bold text-warning">󰦗 Ross Nelson</h1>
          </a>
        </div>

        <div className="flex-none">
          <ul className="font-bold text-[#2CC3DF] px-1 flex gap-4 items-center">
            <li>
              <Link href="#about">About</Link>
            </li>

            <li>
              <Link href="#showcase">Showcase</Link>
            </li>

            <li>
              <Link href="#training">Training</Link>
            </li>

            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
