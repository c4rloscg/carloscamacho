import { FC, PropsWithChildren } from "react";

type H1Props = PropsWithChildren & { className?: string };

const H1: FC<H1Props> = ({ className = "", children }) => (
  <div className={`${className} text-5xl sm:text-[7.5vw] font-bold`}>
    {children}
  </div>
);

export default H1;
