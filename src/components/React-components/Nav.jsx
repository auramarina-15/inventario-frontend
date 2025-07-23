import { useState, useEffect } from "react";
import { NavData } from "../../utils/StaticData";
import { Close, Menu } from "../../assets/Icons/IconsMenu";
import HeaderTitle from "./HeaderTitle";
import UserBar from "./UserBar";

const useActiveLink = (url) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    // Solo se ejecuta en el cliente después del montaje
    setIsActive(window.location.pathname === url);
  }, [url]);
  return isActive;
};

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed left-2 p-2 z-50 bg-[var(--primary)] rounded transition-all"
        style={{ left: isOpen ? "210px" : "0.5rem" }} // Ajusta posición del botón
      >
        {isOpen ? <Close /> : <Menu />}
      </button>

      <aside
        className={`max-md:bg-[var(--bg-primary)] max-md:backdrop-blur-sm flex flex-col fixed md:relative h-screen md:h-full w-[260px] md:w-[200px] transition-all duration-200
      ${isOpen ? "left-0 shadow-2xl" : "-left-full md:left-0"}`}>
        {/* Encabezado */}
        <div className="flex justify-center items-center p-4 border-b-2 border-[var(--primary)] mb-2">
          <HeaderTitle />
        </div>

        <div className="flex-1 overflow-y-auto px-2 mb-4">
          {NavData.map((e) => {
            const isActive = useActiveLink(e.url);

            return (
              <div
                className={`w-full p-2 my-1 rounded-lg group transition-all ${
                  isActive
                    ? "bg-[var(--secondary)]"
                    : "hover:bg-[var(--secondary)]"
                } ${isActive ? "!duration-300" : ""}`}>
                <a href={e.url} className="hover:no-underline block relative">
                  <div
                    className={`w-full flex items-center gap-0.5 transition-transform duration-500 ${
                      isActive
                        ? "translate-x-4 duration-[0ms]"
                        : "group-hover:translate-x-4"
                    }`}>
                    <div className="w-8 flex-shrink-0">
                      <div
                        className={`${
                          isActive
                            ? "text-white"
                            : "text-[var(--primary)] group-hover:text-white"
                        }`}>
                        {e.icon}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <p
                        className={`font-mono text-[16px] md:text-[18px] truncate ${
                          isActive
                            ? "text-white"
                            : "text-[var(--text-main)] group-hover:text-white"
                        }`}>
                        {e.title}
                      </p>
                      <span
                        className={`absolute bottom-0 left-0 h-[2px] bg-white transition-all duration-300 ${
                          isActive ? "w-[70%]" : "w-0 group-hover:w-[70%]"
                        }`}
                      />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* User content */}
        <div className="w-full px-2 pb-4">
          <UserBar />
        </div>
      </aside>
    </>
  );
};
