import { FC } from "react";

import Link from "next/link";

export type NavBarItemProps = {
  path: string;
  label: string;
};

const NavBarItem: FC<NavBarItemProps> = ({ path, label }) => {
  return (
    <Link className="z-10 text-sm md:text-base lg:text-lg font-normal" id={path} href={path}>
      {label}
    </Link>
  );
};

export default NavBarItem;
