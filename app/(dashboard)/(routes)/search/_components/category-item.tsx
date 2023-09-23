"use client";

import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface CategoryItemProps {
  label: string;
  value?: string;
  icon?: IconType;
}

export const CategoryItem = ({
  label,
  value,
  icon: Icon,
}: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");
  const currentTitle = searchParams.get("title");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          title: currentTitle,
          categoryId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <button
    onClick={onClick}
      className={cn(
        "py-2 px-3 text-sm border border-slate-200 rounded-full flex items-center gap-x-1 hover:border-indigo-600 transition",
        isSelected && "border-indigo-600 bg-gray-600/20 text-indigo-800"
      )}
      type="button"
    >
      {Icon && <Icon size={20} />}
      <div className="truncate">{label}</div>
    </button>
  );
};
