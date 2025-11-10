import { Search } from "lucide-react";
import Dropdown from "@/components/ui/dropdown";
import { useState } from "react";

const sortOptions = [
  { value: "", label: "Urutkan Berdasarkan" },
  { value: "lowPrice", label: "Harga Terendah" },
  { value: "highPrice", label: "Harga Tertinggi" },
  { value: "lowRating", label: "Rating Terendah" },
  { value: "highRating", label: "Rating Tertinggi" },
];

export default function ProductHeader() {
  const [sortBy, setSortBy] = useState(sortOptions[0]);

  return (
    <div className="mb-2">
      {/* Title */}
      <div className="flex justify-center mb-4">
        <h2 className="text-[48px] font-semibold text-gray-800 dark:text-gray-100">
          Paket
        </h2>
      </div>

      {/* Search & Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:w-64">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <Search className="h-4 w-4" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-lg border border-gray-200 bg-white py-2 pl-9 pr-3 text-sm text-gray-700 focus:outline-none focus:outline-none focus:ring-2 focus:ring focus:ring-green-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
          />
        </div>

        {/* Buttons + Sort By */}
        <div className="flex items-center gap-4">
          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
              Terlaris
            </button>
            <button className="rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
              Terbaru
            </button>
          </div>

          <div className="relative">
            {/* Sort By pakai Dropdown */}
            <Dropdown
              options={sortOptions}
              value={sortBy}
              onChange={setSortBy}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
