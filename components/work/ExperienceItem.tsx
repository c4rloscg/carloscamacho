import { FC } from "react";

import { Experience } from "@/types";
import cx from "classix";
import OpenInNew from "@/icons/OpenInNew";

type ExperienceItemProps = Experience & {
  className?: string;
};

const ExperienceItem: FC<ExperienceItemProps> = ({
  className = "",
  position,
  company,
  companyUrl,
  description,
  duration,
}) => {
  return (
    <div
      className={`
        ${className}
        p-8
        flex
        flex-col
        gap-2
        sm:flex-row
        sm:gap-8
        text-secondary
        transition-all
        rounded-xl
        bg-box-background
        hover:bg-box-background-focused
      `}
    >
      <div className="text-sm whitespace-nowrap">{duration}</div>
      <div
        className="
          flex
          flex-col
          gap-2
        "
      >
        <div className="flex flex-col text-primary">
          <div className="font-medium">{position}</div>
          <a
            href={companyUrl}
            target="_blank"
            className={cx(
              `
              flex
              gap-1
              transition-all
              hover:text-primary-focus
            `,
              !companyUrl && "pointer-events-none"
            )}
          >
            {company}
            {companyUrl && <OpenInNew className="w-3" />}
          </a>
        </div>
        <div className="text-sm">{description}</div>
      </div>
    </div>
  );
};

export default ExperienceItem;
