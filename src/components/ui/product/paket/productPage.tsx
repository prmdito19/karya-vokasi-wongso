import ProductHeader from "@/components/ui/product/paket/productHeader";
import ProductList from "@/components/ui/product/paket/productList";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function ProductPage() {
    return (
        <section className="bg-gray-50 py-8 dark:bg-gray-900 md:py-3">
            <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                {/* Header */}
                {/* Back Button */}
                <button
                    className="fixed top-4 left-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                            rounded-full bg-black/20 backdrop-blur-md border border-white/30 
                            shadow-lg text-white hover:bg-black/30 transition z-10 cursor-pointer"
                    onClick={() => window.history.back()}
                >
                    <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                <ProductHeader />

                {/* List Produk */}
                <ProductList />
            </div>
        </section>
    );
}
