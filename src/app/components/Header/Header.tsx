import { GiFilmSpool } from "react-icons/gi";
import Link from "next/link";
import ToggleTheam from "../ToggleTheam/ToggleTheam";

const Header = () => {
  return (
    <header className="dark:bg-slate-200 fixed w-full z-40 bg-slate-700  py-4 px-2 bg-shadow">
      <div className="flex gap-5 items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2 w-fit group">
          <GiFilmSpool className="dark:text-slate-800 w-10 h-10 text-white  group-hover:text-orange-500 transition-all duration-300" />
          <p className="dark:text-slate-800 text-white  uppercase font-bold text-3xl group-hover:text-orange-500 transition-all duration-300">
            Filmoteka
          </p>
        </Link>
        <ToggleTheam />
      </div>
    </header>
  );
};

export default Header;