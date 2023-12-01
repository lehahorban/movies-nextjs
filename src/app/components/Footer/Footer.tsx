import { GiFilmSpool } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="dark:bg-slate-200 bg-slate-700 py-4 px-2">
      <div className="flex gap-2 items-center justify-center mb-1">
        <a href={"/"} className="flex items-center gap-2 group w-fit">
          <GiFilmSpool className="dark:text-slate-800 w-8 h-8 text-white group-hover:text-orange-500 transition-all duration-300" />
          <p className="dark:text-slate-800 text-white uppercase font-bold text-xl group-hover:text-orange-500 transition-all duration-300">
            Filmoteka
          </p>
        </a>
      </div>
      <p className="dark:text-slate-800 text-white text-sm text-center">
        &copy; 2023 | All Rights Reserved | Developed by Oleksii
      </p>
    </footer>
  );
};

export default Footer;
