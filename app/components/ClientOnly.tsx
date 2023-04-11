"use client";

import { useEffect, useState } from "react";
import useMode from "../hooks/useMode";

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  const mode = useMode();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <div
      className={`${
        mode.isDarkMode ? "dark:bg-slate-800" : "bg-white"
      } transition duration-1000`}
    >
      <div>{children}</div>
    </div>
  );
};

export default ClientOnly;
