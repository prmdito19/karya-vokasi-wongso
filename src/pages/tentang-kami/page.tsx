import { HeroSection } from "@/components/ui/section/heroSection";
import { HeroSectionCentered } from "@/components/ui/section/heroSectionCentered";
import { VMCard } from "@/components/ui/card/vmcard";
import Footer from "@/components/ui/footer"
import CtaSection from "@/components/ui/section/ctasection";
import Accordion from "@/components/ui/accordion";
import TimSection from "@/components/ui/section/timSection";
import BrandSection from "@/components/ui/section/brandSection";

import wongso from "@/assets/images/img-wongso.png"
import tentangKami from "@/assets/images/img-tentang-kami.png"
import logo from "@/assets/images/karya-vokasi-lms.svg"
import pelajar from "@/assets/images/pelajar.png"
import visi from "@/assets/images/img-visi.svg"
import misi from "@/assets/images/img-misi.svg"

export default function TentangKami() {
    return (
        <div>
            <div>
                <HeroSection
                    title={wongso}
                    subtitle="Karya Vokasi LMS"
                    description={`Tentang Kami`}
                    highlightColor="text-green-400"
                    imageSrc={tentangKami}
                    imageAlt="Ilustrasi LMS"
                    showTopRightCircle={false}
                    showBottomLeftCircle={false}
                />
            </div>
            <div>
                <HeroSection
                    title={logo}
                    subtitle="Bersama kita tumbuh menginspirasi perubahan “Inovasi dan Kolaborasi” menuju pembangunan keberlanjutan"
                    description={`Karya Vokasi LMS adalah platform pembelajaran online yang dirancang khusus untuk mendukung pelajar, karyawan, maupun masyarakat yang ingin meningkatkan keterampilan vokasi agar siap bersaing di dunia kerja.\n
                                    Melalui kursus-kursus terstruktur, para peserta tidak hanya mendapatkan materi pembelajaran yang relevan dengan kebutuhan industri, tetapi juga berkesempatan memperoleh sertifikat kompetensi yang dapat dijadikan bekal untuk bekerja dan mengembangkan karier.`}
                    highlightColor="text-green-400"
                    imageSrc={pelajar}
                    imageAlt="Ilustrasi LMS"
                    backgroundColor="#BAE4C5"
                />
            </div>
            <div
                className="
                    flex flex-col lg:flex-row
                    justify-center items-center
                    gap-8
                    mt-[85px] mb-[85px] mx-[60px]
                "
            >
                <VMCard
                    title="Visi"
                    description="Pemberdayaan bersama Pendidikan dan Industri untuk masa depan berkelanjutan"
                    imageSrc={visi}
                />
                <VMCard
                    title="Misi"
                    description="Mengubah masa depan melalui kolaborasi pendidikan dan industri menuju inovasi pembelajaran dimana Pendidikan dan industri bertumbuh bersama"
                    imageSrc={misi}
                />

            </div>

            <HeroSectionCentered
                title="Value Proposition"
                backgroundColor="#fff"
                titleColor="text-[#197A0A]"
                layout="full"
            >
                <div
                    className="flex items-center justify-center w-screen"
                    style={{ backgroundColor: "#BAE4C5" }}
                >
                    {/* Grid Content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 py-12">
                        <div className="w-full max-w-[350px] sm:max-w-[300px] xs:max-w-[250px] h-[200px] bg-white rounded-3xl p-6 flex items-center justify-center">
                            <p className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#197A0A]">Berdampak</p>
                        </div>
                        <div className="w-full max-w-[350px] sm:max-w-[300px] xs:max-w-[250px] h-[200px] bg-white rounded-3xl p-6 flex items-center justify-center">
                            <p className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold text-[#197A0A]">Komitmen</p>
                        </div>
                        <div className="w-full max-w-[350px] sm:max-w-[300px] xs:max-w-[250px] h-[200px] bg-white rounded-3xl p-6 flex items-center justify-center">
                            <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#197A0A] text-center">
                                Inovasi Pembelajaran dan Pelatihan
                            </p>
                        </div>
                        <div className="w-full max-w-[350px] sm:max-w-[300px] xs:max-w-[250px] h-[200px] bg-white rounded-3xl p-6 flex items-center justify-center">
                            <p className="text-[18px] sm:text-[20px] lg:text-[24px] font-semibold text-[#197A0A] text-center">
                                Kelanjutan Sosial dan Lingkungan
                            </p>
                        </div>
                    </div>
                </div>

            </HeroSectionCentered>
            <div className="flex flex-col items-center mb-[50px]">
                {/* Judul */}
                <h1 className="text-3xl md:text-[48px] font-semibold text-[#3C3C43]">Kenapa Memilih</h1>
                <h1 className="text-3xl md:text-[64px] font-semibold text-[#197A0A] mb-[60px]">Karya Vokasi LMS?</h1>

                {/* Step Items */}
                <div className="grid grid-cols-1 gap-y-8 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-6">
                    <Accordion></Accordion>
                </div>

            </div>
            <TimSection />
            <BrandSection />
            <CtaSection />
            <Footer />
        </div>
    );
}
