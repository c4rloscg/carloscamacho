import type { FC } from "react";

import { currentYear } from "@/constants";
import { links } from "@/constants/footer";

const Footer: FC = () => {
  return (
    <div className="flex flex-col gap-10 my-10 text-secondary">
      <div className="mx-auto flex gap-14 sm:gap-20">
        {links.map(({ href, Icon, title }) => (
          <a
            key={href}
            title={title}
            href={href}
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        ))}
      </div>
      <div className="text-center text-xs">
        © {currentYear}
      </div>
    </div>
  );
};

export default Footer;
