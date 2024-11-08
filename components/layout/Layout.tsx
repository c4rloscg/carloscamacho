import { FC, PropsWithChildren } from "react";

import cx from "classix";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { Rubik } from "next/font/google";

const font = Rubik({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
});

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={cx(
        `
        flex
        flex-col
        relative
        bg-primary-background
        text-primary
      `,
        font.className
      )}
    >
      <div
        className="
        absolute
        top-0
        h-[700px]
        w-full
        bg-[linear-gradient(to_right,#ace0f9,#fff1eb,#ace0f9)]
        bg-[length:200%_auto]
        animate-gradient
        "
        style={{
          maskImage:
            "-webkit-gradient(linear, left top, left bottom,  from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
        }}
      />
      <NavBar />
      <main className="flex min-h-screen mt-20 mx-14 md:mx-20 lg:mx-28 xl:mx-56 2xl:mx-72 z-10 md:mb-10">
        <div className="mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
