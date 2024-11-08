import { FC, PropsWithChildren } from "react";

type PillProps = PropsWithChildren;

const Pill: FC<PillProps> = ({ children }) => {
  return (
    <div
      className="
        rounded-full
        bg-red
      "
    >
      {children}
    </div>
  );
};

export default Pill;
