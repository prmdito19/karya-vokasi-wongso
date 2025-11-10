// card-list.tsx
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentCheckIcon } from "@heroicons/react/24/solid";
import { useParams } from "react-router-dom";
import { dummyProducts } from "@/utils/data/paket"; // ambil data dummy paket

import userIcon from "@/assets/images/user-icon.svg"; 
import mapelIcon from "@/assets/images/mata-pelajaran.svg"; 
import topikIcon from "@/assets/images/topik.svg"; 

export default function CardList() {
  const { id } = useParams();
  // const navigate = useNavigate();
  const product = dummyProducts.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center py-10">Paket tidak ditemukan</div>;
  }

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 py-6">
      <div className="flex justify-center items-center mx-auto w-full max-w-[1200px] mb-6">
        <h1 className="font-semibold text-[32px]">
          {product.title}
        </h1>
      </div>

      {/* Header */}
      <div className="flex flex-col max-w-[1200px] md:flex-row items-start md:items-center justify-between mb-3 mx-auto">
        <div className="flex justify-between mx-auto w-full">
          <h1 className="flex items-start text-[18px] font-medium text-[#8F8F8F]">
            <img src={userIcon} alt="" className="mr-3 h-7" />
            {product.author}
          </h1>
          <h1 className="flex items-end text-[18px] font-medium text-[#8F8F8F]">
            {product.subjects.length} Mata Pelajaran
            <img src={mapelIcon} alt="" className="ml-3 h-5 mb-[3px]" />
          </h1>
        </div>
      </div>

      {/* Card List Mata Pelajaran */}
      <div className="grid gap-6 max-w-[1200px] mx-auto">
        {product.subjects.map((mapel) => (
          <div
            key={mapel.id}
            className="flex flex-col md:flex-row bg-white dark:bg-gray-900 rounded-[20px] border border-[#E3E3E3] overflow-hidden"
          >
            {/* Bagian Icon */}
            <div className="w-full md:w-1/3 flex items-center justify-center bg-green-100 p-6 rounded-[20px]">
              <ClipboardDocumentCheckIcon className="w-16 h-16 text-[#7FB8A7]" />
            </div>

            {/* Bagian Konten */}
            <div className="w-full md:w-2/3 flex flex-col justify-between p-4 md:p-6">
              <div>
                <h2 className="text-[28px] font-semibold text-gray-900 dark:text-white">
                  {mapel.title}
                </h2>
                <p className="text-[14px] font-light text-[#7C7C7C] mt-1">
                  {mapel.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-3">
                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                    {mapel.tag}
                  </span>
                  <span className="flex text-sm text-gray-700 dark:text-gray-400 ">
                    <img src={topikIcon} alt="topik" className="mr-2" /> {mapel.topics} Topik
                  </span>
                </div>

                <div className="mt-3">
                  <div className="flex items-center justify-between text-[15px] font-medium text-gray-500 dark:text-gray-400 mb-1">
                    <span>{mapel.progress}% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-green-500 rounded-full"
                      style={{ width: `${mapel.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6 flex justify-end">
                <button className="p-4 rounded-[10px] bg-[#7FB8A7] hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <ArrowTopRightOnSquareIcon className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
