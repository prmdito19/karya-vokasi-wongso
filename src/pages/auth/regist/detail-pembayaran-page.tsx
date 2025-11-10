import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import wongsoLogo from "@/assets/images/img-wongso.png";

import bca from "@/assets/images/vendor/bca.svg";
import bri from "@/assets/images/vendor/bri.svg";
import mandiri from "@/assets/images/vendor/mandiri.svg";
import ovo from "@/assets/images/vendor/ovo.svg";
import gopay from "@/assets/images/vendor/gopay.svg";
import visa from "@/assets/images/vendor/visa.svg";
import masterCard from "@/assets/images/vendor/master-card.svg";

export default function DetailPembayaranPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const { product, vendor } = location.state || {};

  if (!product || !vendor) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <p className="text-gray-600 text-lg">Data pembayaran tidak ditemukan.</p>
        <button
          onClick={() => navigate("/metode-pembayaran")}
          className="mt-4 px-6 py-3 bg-green-500 text-white rounded-xl"
        >
          Kembali
        </button>
      </div>
    );
  }

  // perhitungan harga
  const subtotal = product.price;
  const fee = Math.round(subtotal * 0.1 + 2000);
  const total = subtotal + fee;

  const formatRupiah = (num: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);

  

  const vendorLogos: Record<string, string> = {
    "Bank BCA": bca,
    "Bank BRI": bri,
    "Bank Mandiri": mandiri,
    OVO: ovo,
    GoPay: gopay,
    Visa: visa,
    MasterCard: masterCard,
  };

  return (
    <>
      {/* Back Button */}
      <button
        className="fixed top-4 left-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                    rounded-full bg-black/20 backdrop-blur-md border border-white/30 
                    shadow-lg text-white hover:bg-black/30 transition z-10 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <ArrowLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="mt-20 flex flex-col items-center px-4">
        {/* Logo */}
        <div className="flex justify-center mb-3">
          <img src={wongsoLogo} alt="Wongso Logo" className="h-16 lg:h-20" />
        </div>

        {/* Judul */}
        <h1 className="text-[28px] font-bold text-center mb-10 text-gray-800">
          Detail Pembayaran
        </h1>

        {/* Card */}
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="flex justify-between items-center px-8 py-6 bg-gradient-to-r from-green-50 to-green-100">
            <span className="text-green-600 font-extrabold text-xl">WONGSO</span>
            <span className="text-gray-500 text-sm">
              {new Date().toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Body */}
          <div className="px-8 py-8 space-y-6">
            {/* Produk */}
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-800 font-semibold text-lg">
                  {product.title}
                </p>
                <p className="text-gray-500 text-sm">{product.description}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">x1</p>
                <p className="font-medium">{formatRupiah(subtotal)}</p>
              </div>
            </div>

            {/* Subtotal & Total */}
            <div className="pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>{formatRupiah(subtotal)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>PPN (10%) + Fee</span>
                <span>{formatRupiah(fee)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold mt-4">
                <span>Total</span>
                <span>{formatRupiah(total)}</span>
              </div>
              <div className="flex justify-between text-xl font-extrabold text-green-600">
                <span>Amount due</span>
                <span>{formatRupiah(total)}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center px-8 py-5 bg-gray-50">
            <span className="text-gray-600 text-sm">
              Metode Pembayaran | Virtual Account
            </span>
            {vendorLogos[vendor] && (
              <img src={vendorLogos[vendor]} alt={vendor} className="h-6" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
