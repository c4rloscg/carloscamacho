import { FC, PropsWithChildren } from "react";

type TextProps = PropsWithChildren & { className?: string };

const Text: FC<TextProps> = ({ className = "", children }) => (
  <div className={`${className} text-lg md:text-xl font-normal !leading-8`}>
    {children}
  </div>
);

export default Text;
