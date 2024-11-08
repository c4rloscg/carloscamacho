import { FC, useCallback, useMemo, useState } from "react";

import cx from "classix";
import { useRouter } from "next/router";
import Head from "next/head";

import NavBarItem, { NavBarItemProps } from "./NavBarItem";
import NavBarItemBg from "./NavBarItemBg";
import { ScrollCallback, useScroll } from "@/hooks/useScroll";

const navItems: NavBarItemProps[] = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
];

const NavBar: FC = () => {
  const router = useRouter();
  const [scrollY, setScrollY] = useState<number>(0);

  const handleScrollChange: ScrollCallback = useCallback(({ scrollY }) => {
    setScrollY(scrollY);
  }, []);

  useScroll(handleScrollChange);

  const pathLabel = useMemo(
    () =>
      navItems.find((item) => item.path === router.pathname)?.label || "Error",
    [router.pathname]
  );

  return (
    <div className="fixed z-20 inset-x-0 top-4 flex text-secondary">
      <Head>
        <title>Carlos Camacho - {pathLabel}</title>
      </Head>
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
