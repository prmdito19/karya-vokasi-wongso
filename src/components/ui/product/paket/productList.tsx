// src/components/ProductList.tsx
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

// Import dummy data
import { dummyProducts } from "@/utils/data/paket";

import userIcon from "@/assets/images/user-icon.svg"; 

export default function ProductList() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  const itemsPerPage = 9;
  const totalPages = Math.ceil(dummyProducts.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dummyProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-4">
      <div className="mx-auto max-w-screen-xl 2xl:px-0">
        {/* GRID PRODUK */}
        <div className="mb-4 grid gap-10 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
          {currentItems.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(`/paket/${product.id}`)}
              className="rounded-[20px] bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="flex h-50 w-full items-center justify-center bg-green-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-24 object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Kategori & Harga */}
                <div className="mb-3 flex items-center justify-between">
                  {product.kategori && (
                    <span className="rounded bg-red-100 px-2.5 py-0.5 text-[10px] font-medium text-red-800 uppercase">
                      {product.kategori}
                    </span>
                  )}
                  <span className="text-[20px] font-semibold text-green-500">
                    {product.price}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[16px] font-medium text-gray-900 dark:text-white leading-snug">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="mt-1 text-[12px] font-light text-gray-500 dark:text-gray-400 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating & Author + Button */}
                <div className="mt-3 flex justify-between items-center gap-3">
                  <span className="flex items-center gap-1 text-[20px] text-yellow-500">
                    ★{" "}
                    <span className="text-[14px] text-gray-900 dark:text-white">
                      {product.rating}
                    </span>
                    <span className="flex items-center gap-1 text-[12px] text-gray-500 dark:text-gray-400 ml-3">
                      <img
                        src= {userIcon}
                        alt="user-icon"
                        className="h-4"
                      />{" "}
                      {product.author}
                    </span>
                  </span>

                  {/* Button Beli */}
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/pembayaran", {
                        state: { product }, // kirim data produk
                      });
                    }}
                    className="px-6 py-2 text-xs font-medium rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    Beli
                  </motion.button>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mt-6">
          <nav
            aria-label="Pagination"
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
          >
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-100
                    ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ring-1 ring-gray-300
                      ${currentPage === page
                    ? "z-10 bg-green-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 hover:bg-gray-100
                    ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}
