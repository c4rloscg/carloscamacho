import H1 from "@/components/common/H1";
import H2 from "@/components/common/H2";
import Text from "@/components/common/Text";
import { aboutText } from "@/constants/about";
import { animationDelay } from "@/constants/animationClassnames";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <H1
        className={`
        lg:pt-20
        md:pt-16
        pt-8
        md:pb-24
        pb-14
        text-center
        opacity-0
        animate-fadeIn
        ${animationDelay[1]}
        `}
      >
        {aboutText.title}
      </H1>
      <div className="flex flex-col md:flex-row xl:gap-24 lg:gap-18 md:gap-12 gap-10">
        <img
          src="/carlos.png"
          alt="Carlos Camacho"
          className={`
            h-96
            flex-none
            md:h-auto
            xl:h-[30vw]
            max-h-[500px]
            md:w-2/6
            md:max-w-[400px]
            md:px-2
            rounded-t-10xl
            md:rounded-t-full
            object-cover
            opacity-0
            animate-fadeIn
            ${animationDelay[2]}
          `}
        />

        <div
          className={`
        flex
        flex-col
        gap-4
        sm:gap-10
        opacity-0
        animate-fadeIn
        ${animationDelay[2]}
        `}
        >
          <H2>{aboutText.subtitle}</H2>
          <Text>
            {aboutText.description1}
            <br />
            <br />
            {aboutText.description2}
          </Text>
        </div>
      </div>
    </div>
  );
}
