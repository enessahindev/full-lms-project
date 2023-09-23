"use client";

import { Category } from "@prisma/client";
import {
  FcEngineering,
  FcCommandLine,
  FcMultipleDevices,
} from "react-icons/fc";
import { MdOutlineDeveloperMode, MdAnalytics } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";
import { IconType } from "react-icons";

import { CategoryItem } from "./category-item";
interface CategoryProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Web Development": FcEngineering,
  "Mobile Application Development": MdOutlineDeveloperMode,
  "Data Science and Analytics": MdAnalytics,
  "Game Development": FaGamepad,
  "Network and Cyber Security": SiFsecure,
  "UI/UX Designer": FcMultipleDevices,
  "Software Test Automation": FcCommandLine,
};

export const Categories = ({ items }: CategoryProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  );
};
