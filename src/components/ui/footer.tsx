import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";

import wongso from "@/assets/images/wongso.png"

export default function Footer() {
    return (
        <footer className="bg-[#3C3C43] text-gray-300 px-10 py-12">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & Info */}
                <div>
                    <img
                        src={wongso} // 👉 ganti sesuai path logomu
                        alt="Wongso Logo"
                        className="h-12 mb-4"
                    />
                    <p className="text-sm leading-6">
                        UAY is a place where education meets ambition, fostering a
                        community of bright minds eager to grow, innovate, and lead.
                        Here, students are equipped with the knowledge, skills, and
                        character to navigate challenges and shape the future.
                    </p>

                    {/* Social Icons */}
                    <div className="flex space-x-4 mt-6">
                        <div className="flex space-x-4 mt-6">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="bg-[#3C3C43] p-2 rounded-md hover:bg-green-400 text-white shadow-lg"
                            >
                                <FaFacebookF size={18} aria-hidden="true" />
                            </a>

                            <a
                                href="#"
                                aria-label="Instagram"
                                className="bg-[#3C3C43] p-2 rounded-md hover:bg-green-400 text-white shadow-lg"
                            >
                                <FaInstagram size={18} aria-hidden="true" />
                            </a>

                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="bg-[#3C3C43] p-2 rounded-md hover:bg-green-400 text-white shadow-lg"
                            >
                                <FaLinkedinIn size={18} aria-hidden="true" />
                            </a>

                            <a
                                href="#"
                                aria-label="Twitter"
                                className="bg-[#3C3C43] p-2 rounded-md hover:bg-green-400 text-white shadow-lg"
                            >
                                <FaTwitter size={18} aria-hidden="true" />
                            </a>

                            <a
                                href="#"
                                aria-label="YouTube"
                                className="bg-[#3C3C43] p-2 rounded-md hover:bg-green-400 text-white shadow-lg"
                            >
                                <FaYoutube size={18} aria-hidden="true" />
                            </a>
                        </div>

                    </div>
                </div>

                {/* Navigasi */}
                <div>
                    <h3 className="text-white font-semibold mb-4">NAVIGASI</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:text-green-500">
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">
                                Tentang Kami
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">
                                Kontak
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">
                                Masuk
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-500">
                                Daftar
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Alamat */}
                <div>
                    <h3 className="text-white font-semibold mb-4">ALAMAT</h3>
                    <p className="text-sm leading-6">
                        Jl. Biak No.17, Kepatihan Wetan, Kec. Jebres,
                        <br />
                        Kota Surakarta, Jawa Tengah 57129
                    </p>
                    <p className="text-sm mt-4">Telepon: (+62) 858-6423-2063</p>
                    <p className="text-sm">FAX : 456 -908 -111</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400 mt-10">
                © 2025 PT. Wongso Abadi Sejahtera
            </div>
        </footer>
    );
}
