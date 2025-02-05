import { NavMenu } from "~/lib/nav-menu";

export function Header() {
  return (
    <header className="border border-accent border-l-0 border-r-0 m-2 mt-5 mb-0 grid place-items-center">
      <div className="container navbar min-h-0 p-0 py-2">
        <div className="flex-1">
          <a href="https://drive.google.com/file/d/1X8CupdUsfcfgeuEETMyXmHeeNR-Z2TAJ/view?usp=drive_link">
            <h1 className="text-2xl font-bold text-warning">󰦗 Ross Nelson</h1>
          </a>
        </div>

        <div className="flex-none">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
