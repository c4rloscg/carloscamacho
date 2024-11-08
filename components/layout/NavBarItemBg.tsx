import { FC, useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";

import useWindowResize from "@/hooks/useWindowResize";
import throttle from "@/helpers/throttle";

const pillPadding = { x: 18, y: 6 };

const NavBarItemBg: FC = () => {
  const router = useRouter();
  const [position, setPosition] = useState<Pick<
    DOMRect,
    "left" | "width" | "top" | "height"
  > | null>(null);

  const handleBgPosition = useCallback(
    throttle(() => {
      const navItem = document.getElementById(router.pathname);
      if (navItem) {
        const elRect = navItem.getBoundingClientRect();
        const left = navItem.offsetLeft - pillPadding.x;
        const top = navItem.offsetTop - pillPadding.y;
        const width = elRect.width + pillPadding.x * 2;
        const height = elRect.height + pillPadding.y * 2;
        setPosition({ height, width, left, top });
      } else {
        setPosition(null);
      }
    }, 100),
    [router.pathname]
  );

  useWindowResize(handleBgPosition);
  useEffect(handleBgPosition, [handleBgPosition]);

  if (!position) return null;

  return (
    <div
      className={`
        transition-all
        absolute
        rounded-full
        bg-backdrop-selected
        backdrop-blur-lg
      `}
      style={position}
    />
  );
};

export default NavBarItemBg;
