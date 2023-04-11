"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Categories from "./Categories";
import useMode from "@/app/hooks/useMode";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  const mode = useMode();

  return (
    <div
      className={`fixed w-full z-10 shadow-sm transition duration-1000 ${
        mode.isDarkMode ? "bg-slate-800" : "bg-white"
      }`}
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>

      <Categories />
    </div>
  );
};

export default Navbar;
