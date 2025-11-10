import CardList from "@/components/ui/product/mata-pelajaran/card-list"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

function mataPelajaran() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mb-20">
      {/* Back Button */}
      <button
        className="fixed top-4 left-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                            rounded-full bg-black/20 backdrop-blur-md border border-white/30 
                            shadow-lg text-white hover:bg-black/30 transition z-10 cursor-pointer"
        onClick={() => window.history.back()}
      >
        <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <CardList />
    </div>
  );
}

export default mataPelajaran;
