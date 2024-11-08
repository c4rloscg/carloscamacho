import { FC, PropsWithChildren } from "react";

type H2Props = PropsWithChildren & { className?: string };

const H2: FC<H2Props> = ({ className = "", children }) => (
  <div
    className={`
      ${className}
      text-3xl
      md:text-[3.5vw]
      lg:text-[3vw]
      font-bold
      !leading-h2-default
      md:!leading-h2
      lg:!leading-tight
    `}
  >
    {children}
  </div>
);

export default H2;
