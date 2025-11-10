import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthSection from "@/components/ui/section/authSection";
import { EnvelopeIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

import img from "@/assets/images/img-beranda.png"
import img2 from "@/assets/images/carousel-section/masuk-akun.svg";
import wongso from "@/assets/images/img-wongso-2.png"

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulasi login sederhana
        if (email && password) {
            const user = { name: "Bonnie Green", email };
            localStorage.setItem("user", JSON.stringify(user));
            navigate("/");
        } else {
            alert("Silakan isi email dan password!");
        }
    };

    return (
        <AuthSection images={[img, img2]}>
            <div className="w-full flex items-center justify-center px-4">
                <div className="w-full max-w-xl">
                    <div className="flex justify-left mb-2">
                        <img src={wongso} alt="Wongso Logo" className="h-10" />
                    </div>

                    <h1 className="text-[36px] md:text-[48px] font-reguler text-left -mb-2">Selamat Datang</h1>
                    <h2 className="text-[40px] md:text-[54px] font-semibold text-[#4BD270] text-left mb-8">
                        Karya Vokasi LMS
                    </h2>

                    <form onSubmit={handleLogin} className="space-y-5">
                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Email</label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 w-full max-w-lg focus-within:border-black transition-colors duration-200">
                                <EnvelopeIcon className="w-5 h-5 text-gray-400 mr-4" />
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="flex-1 outline-none"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-3 w-full max-w-lg focus-within:border-black transition-colors duration-200">
                                <LockClosedIcon className="w-5 h-5 text-gray-400 mr-4" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter password"
                                    className="flex-1 outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {showPassword ? (
                                    <EyeSlashIcon
                                        className="w-5 h-5 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(false)}
                                    />
                                ) : (
                                    <EyeIcon
                                        className="w-5 h-5 text-gray-400 cursor-pointer"
                                        onClick={() => setShowPassword(true)}
                                    />
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full max-w-lg h-[55px] bg-[#61EA86] text-white py-2 rounded-lg hover:bg-green-500 transition cursor-pointer"
                        >
                            Login
                        </button>
                        {/* Divider */}
                        <div className="flex items-center my-6 w-full max-w-lg">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-2 text-gray-500 text-sm">Belum Memiliki Akun?</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Sign Up */}
                        <p className="text-center text-sm mt-6 w-full max-w-lg">
                            <a className="text-green-500 font-medium cursor-pointer" onClick={() => navigate("/register")}>
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </AuthSection>
    );
}
