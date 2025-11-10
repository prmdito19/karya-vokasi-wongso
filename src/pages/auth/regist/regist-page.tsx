import { Outlet, useNavigate } from "react-router-dom";
import AuthSection from "@/components/ui/section/authSection";
import wongsoLogo from "@/assets/images/img-wongso.png";
import img1 from "@/assets/images/img-login.png";
import img2 from "@/assets/images/img-beranda.png";
import pelajar from "@/assets/images/pelajar.png"
import pengajar from "@/assets/images/pengajar.png"

export default function RegistPage() {
    const navigate = useNavigate();

    return (
        <AuthSection images={[img1, img2]}>
            <div className="w-full flex items-center justify-center px-8">
                <div className="w-full max-w-xl">
                    <div className="flex justify-center mb-2">
                        <img src={wongsoLogo} alt="Wongso Logo" className="h-15 lg:h-20" />
                    </div>

                    <h1 className="text-[40px] font-medium text-center -mb-4">
                        Pilih Tipe Akun
                    </h1>

                    <div className="grid-row mt-10 space-y-6">
                        {/* Card Pengajar */}
                        <div
                            onClick={() => navigate("pengajar")}
                            className="flex items-center rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition cursor-pointer"
                        >
                            {/* Left Section - Illustration */}
                            <div className="w-1/3 flex justify-center items-center p-6 border-r border-gray-200">
                                <img
                                    src={pengajar}
                                    alt="Teacher Illustration"
                                    className="w-32 h-32 object-contain"
                                />
                            </div>

                            {/* Right Section - Text */}
                            <div className="w-2/3 p-6">
                                <h3 className="text-lg font-semibold text-gray-800">Untuk Pengajar</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Daftar sebagai Pengajar menciptakan pembelajaran bagi Generasi Emas
                                </p>
                            </div>
                        </div>

                        {/* Card Pelajar */}
                        <div
                            onClick={() => navigate("pelajar")}
                            className="flex items-center rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition cursor-pointer mb-20"
                        >
                            {/* Left Section - Illustration */}
                            <div className="w-1/3 flex justify-center items-center p-6 border-r border-gray-200">
                                <img
                                    src={pelajar}
                                    alt="Student Illustration"
                                    className="w-32 h-32 object-contain"
                                />
                            </div>

                            {/* Right Section - Text */}
                            <div className="w-2/3 p-6">
                                <h3 className="text-lg font-semibold text-gray-800">Untuk Pelajar</h3>
                                <p className="text-sm text-gray-600 mt-2">
                                    Daftar sebagai Pelajar untuk belajar dan meraih sertifikat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </AuthSection>
    );
}
