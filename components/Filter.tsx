"use client";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";

function Filter() {
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState(searchParams.get("filter") || "");
  const router = useRouter();

  const handleFilterClick = (value: string) => {
    if (filter === value) {
      setFilter("");
    } else {
      setFilter(value);
    }
    const currentQuery = queryString.parse(window.location.search);
    const updatedQuery = {
      ...currentQuery,
      filter: value === filter ? "" : value,
    };
    const url = queryString.stringifyUrl(
      {
        url: window.location.pathname,
        query: updatedQuery,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  };
  return (
    <div className="flex space-x-6 p-5">
      <button
        onClick={() => handleFilterClick("React")}
        className={`px-4 py-2 w-[100px] text-gray-300 rounded-xl ${
          filter === "React" ? "bg-blue-500" : "bg-blue-900"
        }`}
      >
        React
      </button>
      <button
        onClick={() => handleFilterClick("TypeScript")}
        className={`px-4 py-2 w-[100px] text-gray-300 rounded-xl ${
          filter === "TypeScript" ? "bg-blue-500" : "bg-blue-900"
        }`}
      >
        TypeScript
      </button>
    </div>
  );
}

export default Filter;
