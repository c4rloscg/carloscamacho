import type { FC } from "react";

import Email from "@/icons/Email";
import Github from "@/icons/Github";
import LinkedIn from "@/icons/LinkedIn";

export const links: { href: string; Icon: FC; title: string }[] = [
  {
    Icon: LinkedIn,
    href: "https://www.linkedin.com/in/ingcarlosandres/",
    title: "See my LinkedIn profile",
  },
  { Icon: Github, href: "https://github.com/c4rloscg", title: "Github" },
];
