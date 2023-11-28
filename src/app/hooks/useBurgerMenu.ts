"use client";
import { useState, useEffect } from "react";

export function useBurgerMenu(
  breakpoint: number
): [
  boolean,
  () => void,
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window?.innerWidth);

  const isBreakpoint = windowWidth <= breakpoint;
  const [showButton, setShowButton] = useState(isBreakpoint);
  const [userOpened, setUserOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const isBreakpoint = windowWidth <= breakpoint;
    if (!userOpened) {
      setIsOpen(!isBreakpoint);
      setShowButton(isBreakpoint);
    } else {
      setShowButton(isBreakpoint);
    }
  }, [windowWidth, breakpoint, userOpened]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setUserOpened(!userOpened);
  };

  return [isOpen, toggleMenu, showButton, setIsOpen];
}

// "use client";
// import { useState, useEffect } from "react";

// export function useBurgerMenu(
//   breakpoint: number
// ): [
//   boolean,
//   () => void,
//   boolean,
//   React.Dispatch<React.SetStateAction<boolean>>
// ] {
//   const [isOpen, setIsOpen] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 0
//   );

//   const isBreakpoint = windowWidth <= breakpoint;
//   const [showButton, setShowButton] = useState(isBreakpoint);
//   const [userOpened, setUserOpened] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setWindowWidth(window.innerWidth);
//     if (typeof window !== "undefined") {
//       window.addEventListener("resize", handleResize);
//     }
//     return () => {
//       if (typeof window !== "undefined") {
//         window.removeEventListener("resize", handleResize);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const isBreakpoint = windowWidth <= breakpoint;
//     if (!userOpened) {
//       setIsOpen(!isBreakpoint);
//       setShowButton(isBreakpoint);
//     } else {
//       setShowButton(isBreakpoint);
//     }
//   }, [windowWidth, breakpoint, userOpened]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     setUserOpened(!userOpened);
//   };

//   return [isOpen, toggleMenu, showButton, setIsOpen];
// }