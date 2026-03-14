import { type FC, useCallback, useEffect, useMemo, useState } from "react";

import { useLocation } from "@tanstack/react-router";
import cx from "classix";

import { type ScrollCallback, useScroll } from "@/hooks/useScroll";
import NavBarItem, { type NavBarItemProps } from "./NavBarItem";
import NavBarItemBg from "./NavBarItemBg";

const navItems: NavBarItemProps[] = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
];

const NavBar: FC = () => {
  const { pathname } = useLocation();
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScrollChange: ScrollCallback = useCallback(({ scrollY }) => {
    setScrollY(scrollY);
  }, []);

  useScroll(handleScrollChange);

  const pathLabel = useMemo(
    () => navItems.find((item) => item.path === pathname)?.label || "Error",
    [pathname]
  );

  useEffect(() => {
    document.title = `Carlos Camacho - ${pathLabel}`;
  }, [pathLabel]);

  return (
    <div className="fixed z-20 inset-x-0 top-4 flex text-secondary">
      <div
        className={cx(
          `
          relative
          mx-auto
          flex
          gap-12
          rounded-full
          px-10
          py-3.5
          z-10
          transition-all
          ease-in
        `,
          scrollY > 40 && "bg-backdrop backdrop-blur-lg"
        )}
      >
        <NavBarItemBg />
        {navItems.map(({ path, label }) => {
          return (
            <NavBarItem key={`nav-item-${label}`} path={path} label={label} />
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
