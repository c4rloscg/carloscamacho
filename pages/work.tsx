import { FC } from "react";

import ExperienceItem from "@/components/work/ExperienceItem";
import { experiences } from "@/constants/work";
import { animationDelay } from "@/constants/animationClassnames";

const Work: FC = () => {
  return (
    <div
      className="
        md:pt-16
        pt-8
        flex
        flex-col
        gap-8
        lg:mx-20
      "
    >
      {experiences.map((experience, idx) => (
        <ExperienceItem
          key={experience.description}
          className={`
            opacity-0 
            animate-fadeIn
            ${animationDelay[idx + 1]}
          `}
          {...experience}
        />
      ))}
    </div>
  );
};

export default Work;
