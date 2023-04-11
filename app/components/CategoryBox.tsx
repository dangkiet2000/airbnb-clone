"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons";
import qs from "query-string";
import useMode from "../hooks/useMode";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const mode = useMode();

  /**
   * ! Let's click a category and see the URL => This is how the function works.
   */
  const handleClick = useCallback(() => {
    let currentQuery = {}; // define a empty query

    // Check if params => parse it to string
    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    // Add a category property in this query
    const updatedQuery: any = {
      ...currentQuery,
      category: label,
    };

    // If you click a certain category AGAIN = Do not click.
    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    // Generate the url by using query-string
    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 ${
        mode.isDarkMode ? "hover:text-neutral-100 text-neutral-400" : "hover:text-neutral-800"
      }  transition cursor-pointer 
      ${
        selected && mode.isDarkMode
          ? "border-b-neutral-100 text-neutral-100"
          : "border-transparent"
      }
      ${
        selected && !mode.isDarkMode
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent"
      }
      
      
      `}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{label}</div>
    </div>
  );
};

export default CategoryBox;
