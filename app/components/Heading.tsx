"use client";

import useMode from "../hooks/useMode";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ title, center, subtitle }) => {
  const mode = useMode();
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      <div
        className={`${
          mode.isDarkMode ? "text-white/80" : "text-black"
        } text-2xl font-bold`}
      >
        {title}
      </div>

      <div
        className={`font-light ${
          mode.isDarkMode ? "text-neutral-400" : "text-neutral-500"
        } mt-2`}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default Heading;
