import { FC } from "react";

import { currentYear } from "@/constants";
import { links } from "@/constants/footer";

const Footer: FC = () => {
  return (
    <div className="flex flex-col gap-10 my-10 text-secondary">
      <div className="mx-auto flex gap-14 sm:gap-20">
        {links.map(({ href, Icon, title }) => (
          <a key={href} title={title} href={href} target="_blank">
            <Icon />
          </a>
        ))}
      </div>
      <div className="text-center text-xs">
        © {currentYear} — Built with{" "}
        <a href="https://nextjs.org/" target="_blank">
          Next.js
        </a>
        ,{" "}
        <a href="https://tailwindcss.com/" target="_blank">
          Tailwind CSS
        </a>{" "}
        and{" "}
        <a href="https://sst.dev/" target="_blank">
          sst
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
