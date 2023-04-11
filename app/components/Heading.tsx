"use client";

import useMode from "../hooks/useMode";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  isDarkMode?: boolean;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  center,
  subtitle,
  isDarkMode,
}) => {
  const mode = useMode();
  return (
    <div className={`${center ? "text-center" : "text-start"}`}>
      {isDarkMode ? (
        <div
          className={`text-2xl font-bold ${
            mode.isDarkMode ? "text-white/80" : "text-black"
          }`}
        >
          {title}
        </div>
      ) : (
        <div className="text-2xl font-bold">{title}</div>
      )}
      {isDarkMode ? (
        <div
          className={`${
            mode.isDarkMode ? "text-neutral-500" : "text-neutral-200"
          } mt-2`}
        >
          {subtitle}
        </div>
      ) : (
        <div className="text-neutral-500 mt-2">{subtitle}</div>
      )}
    </div>
  );
};

export default Heading;
