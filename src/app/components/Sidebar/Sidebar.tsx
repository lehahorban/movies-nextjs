"use client";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";
import { useBurgerMenu } from "@/app/hooks/useBurgerMenu";
import { getMovieGenres } from "@/app/services/reguest";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";

const sidebarList = [
  { title: "Popular", params: "popular" },
  { title: "Trending", params: "top_rated" },
  { title: "Upcoming", params: "upcoming" },
  { title: "Now playing", params: "now_playing" },
];

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState("Popular");
  const [isActiveGenre, setIsActiveGenre] = useState("");
  const [genreId, setGenreId] = useState<any>(null);
  const [currentParams, setCurrentParams] = useState("popular");
  const [currentData, setCurrentData] = useState("trending");

  const [isToggle, setIsToggle] = useState(false);
  const [mowiesGenres, setMowiesGenres] = useState([]);
  const [isOpen, toggleMenu, showButton, setIsOpen] = useBurgerMenu(768);
  const [toggleChildren, setToggleChildren] = useState(true);
  const isBreakpoint =
    typeof window !== "undefined" && window.innerWidth <= 768;

  const router = useRouter();

  useEffect(() => {
    getMovieGenres().then((data) => {
      setMowiesGenres(data);
    });
  }, []);

  useEffect(() => {
    if (!isBreakpoint) {
      setIsOpen(true);
      setToggleChildren(true);
    }
  }, [setIsOpen, isBreakpoint]);

  const handleActive = (title: string, params: string) => {
    setIsActive(title);
    setCurrentParams(params);
    setCurrentData("trending");
    setGenreId(null);
  };
  const handleActiveGenres = (id: number, name: string) => {
    setGenreId(id);
    setIsActiveGenre(name);
    setCurrentData("genres");
    setIsActive("");
  };

  const closeMenu = () => {
    if (!isOpen) {
      setToggleChildren(false);
    } else {
      setToggleChildren(true);
    }
  };

  const handleToggleChildren = () => {
    if (isBreakpoint) {
      toggleMenu();
    }
  };

  return (
    <ParamsContext.Provider
      value={{
        currentParams,
        isActive,
        isToggle,
        genreId,
        isActiveGenre,
        currentData,
      }}
    >
      <div className="main-wrapp pt-14 pb-4 flex-1 ">
        {showButton && (
          <button
            className="z-50 fixed right-3 top-4"
            onClick={() => {
              toggleMenu();
              closeMenu();
            }}
          >
            {isOpen ? (
              <IoCloseCircleOutline className="dark:text-black w-10 h-10 text-white" />
            ) : (
              <RxHamburgerMenu className="dark:text-black w-10 h-10 text-white" />
            )}
          </button>
        )}
        {isOpen && (
          <div
            className={`${
              isOpen ? "dark:bg-slate-200" : ""
            } mt-10 absolute z-20 inset-0 bg-slate-700 md:static md:bg-transparent border-r-2 border-r-gray-800/60`}
          >
            <div className="px-4 flex flex-col sticky top-24">
              <h2 className="text-4xl md:text-xl text-stone-800 font-bold text-shadow-3d">
                Discover
              </h2>
              <ul className="pl-5">
                {sidebarList.map(({ title, params }) => (
                  <li
                    onClick={() => {
                      handleActive(title, params);
                      setIsToggle(!isToggle);
                      handleToggleChildren();
                      setToggleChildren(true);
                      router.push("/");
                    }}
                    className={` cursor-pointer text-3xl md:text-sm hover:!text-orange-600 text-shadow-halo transition-all duration-300  ${
                      isActive === title
                        ? "text-red-700 font-extrabold text-shadow-3d"
                        : "dark:text-slate-800 text-neutral-50 font-medium"
                    }`}
                    key={title}
                  >
                    <p>{title}</p>
                  </li>
                ))}
              </ul>
              <h2 className="text-4xl md:text-xl text-stone-800 font-bold text-shadow-3d ">
                Genres
              </h2>
              <ul className="pl-5">
                {mowiesGenres?.map(({ id, name }) => (
                  <li
                    key={id}
                    className={` cursor-pointer text-3xl md:text-sm hover:!text-orange-600 text-shadow-halo transition-all duration-300 ${
                      genreId === id
                        ? "text-red-700 font-extrabold text-shadow-3d "
                        : "dark:text-slate-800 text-neutral-50  font-medium "
                    }`}
                    onClick={() => {
                      handleActiveGenres(id, name);
                      setIsToggle(!isToggle);
                      handleToggleChildren();
                      setToggleChildren(true);
                      router.push("/");
                    }}
                  >
                    <p>{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {toggleChildren && children}
      </div>
    </ParamsContext.Provider>
  );
};

export const ParamsContext = createContext({
  currentParams: "popular",
  isActive: "Popular",
  isToggle: false,
  genreId: null,
  isActiveGenre: "",
  currentData: "trending",
});
export default Sidebar;
