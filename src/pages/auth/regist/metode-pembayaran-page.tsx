import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import AuthSection from "@/components/ui/section/authSection";
import wongsoLogo from "@/assets/images/img-wongso.png";

import bca from "@/assets/images/vendor/bca.svg";
import bri from "@/assets/images/vendor/bri.svg";
import mandiri from "@/assets/images/vendor/mandiri.svg";
import ovo from "@/assets/images/vendor/ovo.svg";
import gopay from "@/assets/images/vendor/gopay.svg";
import visa from "@/assets/images/vendor/visa.svg";
import masterCard from "@/assets/images/vendor/master-card.svg";

import img from "@/assets/images/pelajar.png";
import img2 from "@/assets/images/carousel-section/daftar-pelajar.svg";

export default function MetodePembayaranPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
    const [selectedVendor, setSelectedVendor] = useState<string | null>(null);

    const toggleAccordion = (section: string) => {
        setOpenAccordion(openAccordion === section ? null : section);
    };

    if (!product) {
        return (
            <AuthSection images={[img]}>
                <div className="flex flex-col items-center justify-center h-full py-12">
                    <p className="text-gray-600 text-center text-lg">
                        Tidak ada paket yang dipilih.
                    </p>
                    <button
                        onClick={() => navigate("/katalog")}
                        className="mt-6 px-6 py-3 rounded-xl bg-green-500 text-white text-lg font-medium hover:bg-green-600"
                    >
                        Kembali ke Katalog
                    </button>
                </div>
            </AuthSection>
        );
    }

    // Data vendor per kategori
    const vendors = {
        bank: ["Bank BCA", "Bank BRI", "Bank Mandiri"],
        ewallet: ["OVO", "GoPay"],
        credit: ["Visa", "MasterCard"],
    };

    const vendorLogos: Record<string, string> = {
        "Bank BCA": bca,
        "Bank BRI": bri,
        "Bank Mandiri": mandiri,
        OVO: ovo,
        GoPay: gopay,
        Visa: visa,
        MasterCard: masterCard,
    };

    const handleConfirm = () => {
        if (selectedVendor) {
            navigate("/detail-pembayaran", {
                state: {
                    product,
                    vendor: selectedVendor,
                },
            });
        }
    };

    return (
        <AuthSection
            images={[
                img,
                img2,
            ]}
        >
            <div className="w-full flex items-center justify-center px-8 mb-12">
                <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    {/* Logo */}
                    <div className="flex justify-center mb-8">
                        <img src={wongsoLogo} alt="Wongso Logo" className="h-20 lg:h-24" />
                    </div>

                    {/* Judul */}
                    <h1 className="text-[32px] font-semibold text-center mb-8">
                        Metode Pembayaran
                    </h1>

                    {/* Detail Produk */}
                    <div className="rounded-xl bg-gray-50 dark:bg-gray-700 p-6 mb-8">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                            {product.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-300 text-base mt-2">
                            {product.description}
                        </p>
                        <p className="text-green-600 font-bold text-lg mt-4">
                            {product.price}
                        </p>
                    </div>

                    {/* Accordion Metode Pembayaran */}
                    <div className="space-y-4">
                        {[
                            { key: "bank", label: "Transfer Bank" },
                            { key: "ewallet", label: "E-Wallet" },
                            { key: "credit", label: "Kartu Kredit" },
                        ].map((item) => (
                            <div
                                key={item.key}
                                className="rounded-2xl shadow-md bg-gray-50 dark:bg-gray-700"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggleAccordion(item.key)}
                                    className="w-full py-5 px-6 flex justify-between items-center text-lg font-medium"
                                >
                                    <span>{item.label}</span>
                                    <ChevronDownIcon
                                        className={`w-6 h-6 transition-transform duration-300 ${openAccordion === item.key ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Panel dengan animasi */}
                                <AnimatePresence initial={false}>
                                    {openAccordion === item.key && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 space-y-3">
                                                {vendors[item.key as keyof typeof vendors].map(
                                                    (v) => (
                                                        <button
                                                            key={v}
                                                            onClick={() => setSelectedVendor(v)}
                                                            className={`w-full py-4 px-5 rounded-xl text-base font-medium shadow flex items-center gap-3 justify-between ${selectedVendor === v
                                                                    ? "bg-green-100 dark:bg-green-600 border-2 border-green-500"
                                                                    : "bg-white dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-500"
                                                                }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <img
                                                                    src={vendorLogos[v]}
                                                                    alt={v}
                                                                    className="w-10 h-10 object-contain"
                                                                />
                                                                <span>{v}</span>
                                                            </div>
                                                            {selectedVendor === v && (
                                                                <CheckCircleIcon className="w-6 h-6 text-green-500" />
                                                            )}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Button Lanjut */}
                    <div className="mt-8 w-full flex justify-center">
                        <button
                            disabled={!selectedVendor}
                            onClick={handleConfirm}
                            className={`px-8 py-4 w-full rounded-xl text-lg font-semibold transition ${selectedVendor
                                    ? "bg-green-500 hover:bg-green-600 text-white"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                        >
                            Lanjut
                        </button>
                    </div>
                </div>
            </div>
        </AuthSection>
    );
}
