"use client";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import { IoMdSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

const ToggleTheam = () => {
  const [enabled, setEnabled] = useState(
    typeof window !== "undefined" && localStorage.theme === "dark"
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const htmlTeg = document.querySelector("html");
      if (enabled) {
        htmlTeg?.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        htmlTeg?.classList.remove("dark");
        localStorage.theme = "light";
      }
    }
  }, [enabled]);

  return (
    <div className="mr-14 md:mr-0 flex items-center gap-1">
      <IoMdSunny
        className={`w-6 h-6 hidden-toogle-theame ${
          enabled ? "text-orange-600" : ""
        }`}
      />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-black" : "bg-white"}
          relative inline-flex h-5 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
      >
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-5" : "translate-x-0"}
            pointer-events-none inline-block h-4 w-4 transform rounded-full ${
              enabled ? "bg-white" : "bg-black"
            } shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <FaMoon
        className={`hidden-toogle-theame ${!enabled ? "text-white" : ""}`}
      />
    </div>
  );
};

export default ToggleTheam;
