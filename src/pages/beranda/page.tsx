import { HeroSection } from "@/components/ui/section/heroSection";
import { ThreeCards } from "@/components/ui/card/card";
import { StepItem } from "@/components/ui/point";
import { TeacherCard } from "@/components/ui/card/teacherCard";
import { Line } from "@/components/ui/line";
import { BenefitCard } from "@/components/ui/card/benefitCard";
import { StatsSection } from "@/components/ui/fun-fact";
import { HeroSectionCentered } from "@/components/ui/section/heroSectionCentered";
import Footer from "@/components/ui/footer"
import CtaSection from "@/components/ui/section/ctasection";


import wongsoLogo from "@/assets/images/img-wongso.png"
import mengenal from "@/assets/images/Mengenal.svg"
import imgBeranda from "@/assets/images/img-beranda.png"
import imgBeranda2 from "@/assets/images/img-beranda-2.png"
import iconPelajar from "@/assets/images/fun-fact-icon/pelajar.png"
import iconPengajar from "@/assets/images/fun-fact-icon/pengajar.png"
import iconKelas from "@/assets/images/fun-fact-icon/kelas.png"
import iconSukses from "@/assets/images/fun-fact-icon/sukses.png"
import teacherCard1 from "@/assets/images/icons-1.png"
import teacherCard2 from "@/assets/images/icons-2.png"
import teacherCard3 from "@/assets/images/icons-3.png"
import teacherCard4 from "@/assets/images/icons-4.png"
import benefit1 from "@/assets/images/benefit-icon/clock-icon.svg"
import benefit2 from "@/assets/images/benefit-icon/money-icon.svg"
import benefit3 from "@/assets/images/benefit-icon/handshake-icon.svg"
import benefit4 from "@/assets/images/benefit-icon/speaker-icon.svg"
import benefit5 from "@/assets/images/benefit-icon/bag-icon.svg"
import benefit6 from "@/assets/images/benefit-icon/note-icon.svg"
import benefit7 from "@/assets/images/benefit-icon/megaphone-icon.svg"
import benefit8 from "@/assets/images/benefit-icon/camera-icon.svg"


export default function Home() {

    const statsData = [
        { icon: iconPelajar, value: "10rb+", label: "Pelajar Seluruh Dunia" },
        { icon: iconPengajar, value: "2rb+", label: "Pengajar Profesional" },
        { icon: iconKelas, value: "26rb++", label: "Kelas Kursus Terdaftar" },
        { icon: iconSukses, value: "99.9%", label: "Tingkat Keberhasilan" },
    ];

    return (
        <div>
            <div>
                <HeroSection
                    title={wongsoLogo}
                    subtitle="Karya Vokasi LMS"
                    description={`Bersama kita tumbuh menginspirasi perubahan "Inovasi dan Kolaborasi" menuju pembangunan keberlanjutan.`}
                    highlightColor="text-green-400"
                    imageSrc={imgBeranda}
                    imageAlt="Ilustrasi LMS"
                    showTopRightCircle={false}
                    showBottomLeftCircle={false}
                />

            </div>

            <div className="-mt-6 p-6 relative z-10">
                <ThreeCards />
            </div>


            <div className="-mt-[100px]">
                <HeroSection
                    title={mengenal}
                    subtitle="Karya Rumah Vokasi"
                    description={`KARYA RUMAH VOKASI - DigiVokasi maka terciptalah solusi inovatif dan menciptakan nilai-nilai yang menembus batas serta memberikan manfaat bagi semua pihak `}
                    highlightColor="text-green-400"
                    imageSrc={imgBeranda2}
                    imageAlt="Ilustrasi LMS"
                    backgroundColor="#BAE4C5"
                    showButton
                    reverse
                    showTopRightCircle={false}
                    showBottomLeftCircle={false}

                />
            </div>
            <div>
                <StatsSection items={statsData} />;
            </div>
            <div className="flex flex-col items-center mt-[85px] mb-[85px]">
                {/* Judul */}
                <h1 className="text-3xl md:text-[48px] font-semibold text-[#197A0A]">Panduan</h1>
                <h1 className="text-3xl md:text-[64px] font-semibold text-[#3C3C43] mb-[60px]">Akses Khusus Pelajar</h1>

                {/* Step Items */}
                <div className="grid grid-cols-1 gap-y-8 lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-6">
                    {/* Baris pertama: Step 1-3 */}
                    <div className="flex flex-row items-center justify-center gap-6">
                        <StepItem
                            number={1}
                            title="Daftar"
                            description="Pengguna mengisi formulir pendaftaran"
                        />
                        <Line length="70px" color="#000" className="hidden md:block" />

                        <StepItem
                            number={2}
                            title="Pilih Paket"
                            description="Pengguna memilih kelas kursus"
                        />
                        <Line length="70px" color="#000" className="hidden md:block" />

                        <StepItem
                            number={3}
                            title="Pembayaran"
                            description="Pengguna membayar kelas kursus"
                        />
                        <Line length="70px" color="#000" className="hidden lg:block" />

                    </div>

                    {/* Baris kedua: Step 4-6 */}
                    <div className="flex flex-row items-center justify-center gap-6">
                        <StepItem
                            number={4}
                            title="Belajar Mandiri"
                            description="pembelajaran dilakukan secara mandiri"
                        />
                        <Line length="70px" color="#000" className="hidden md:block" />

                        <StepItem
                            number={5}
                            title="Evaluasi"
                            description="Pengguna melakukan tahap evaluasi"
                        />
                        <Line length="70px" color="#000" className="hidden md:block" />

                        <StepItem
                            number={6}
                            title="Sertifikasi"
                            description="Pengguna mendapatkan hasil sertifikasinya"
                        />
                    </div>
                </div>

            </div>
            <HeroSectionCentered
                title="Jadilah bagian"
                subtitle="dari tim pengajar kami"
                backgroundColor="#BAE4C5"
            >
                <TeacherCard
                    imageSrc={teacherCard1}
                    alt="Step 1"
                    title="1. Daftar untuk Menjadi Pengajar"
                    description="Mengisi formulir pendaftaran sebagai tim pengajar."
                />
                <TeacherCard
                    imageSrc={teacherCard2}
                    alt="Step 2"
                    title="2. Buat Kelas Kursusmu"
                    description="Setelah mendaftar, pengajar dapat membuat kelas kursus."
                />
                <TeacherCard
                    imageSrc={teacherCard3}
                    alt="Step 3"
                    title="3. Menjual Kelas Kursus"
                    description="Pengajar dapat menjual kelas kursus yang sudah dibuat."
                />
                <TeacherCard
                    imageSrc={teacherCard4}
                    alt="Step 4"
                    title="4. Penilaian dan Pengajaran"
                    description="Memberikan feedback & evaluasi terhadap pelajar."
                />
            </HeroSectionCentered>
            <div className="flex flex-col items-center mt-[85px] mb-[85px]">
                {/* Judul */}
                <h1 className="text-3xl md:text-[48px] font-semibold text-[#197A0A]">Kenapa Kami?</h1>
                <h1 className="text-center text-3xl md:text-[64px] font-semibold text-[#3C3C43] mb-[60px]">Benefit Bergabung Bersama Kami</h1>

                {/* Step Items */}
                <div className="
                    grid grid-cols-1 gap-y-8 gap-x-6 
                    md:grid-cols-2 
                    xl:grid-cols-4 lg:gap-8 lg:justify-center mx-[50px]
                    ">
                    <BenefitCard
                        iconSrc={benefit1}
                        title="Waktu Fleksibel"
                        description="Atur jadwal sesuai kesibukanmu"
                        backgroundColor="#CDCBFF"
                    />
                    <BenefitCard
                        iconSrc={benefit2}
                        title="Penghasilan Tambahan"
                        description="Dapat income dari mengajar"
                        backgroundColor="#BAE4C5"
                    />
                    <BenefitCard
                        iconSrc={benefit3}
                        title="Bangun Relasi"
                        description="Terhubung dengan komunitas pelajar"
                        backgroundColor="#FFD2C8"
                    />
                    <BenefitCard
                        iconSrc={benefit4}
                        title="Skill Komunikasi"
                        description="Asah kemampuan public speaking"
                        backgroundColor="#F7C7C7"
                    />
                    <BenefitCard
                        iconSrc={benefit5}
                        title="Bekal Karier"
                        description="Bangun reputasi sebagai profesional"
                        backgroundColor="#FFDEBC"
                    />
                    <BenefitCard
                        iconSrc={benefit6}
                        title="Pengalaman Nyata"
                        description="Tingkatkan jam terbang mengajar"
                        backgroundColor="#E6CAC0"
                    />
                    <BenefitCard
                        iconSrc={benefit7}
                        title="Peluang Kerja"
                        description="Berpeluang langsung mendapatkan pekerjaan"
                        backgroundColor="#DCC4FC"
                    />
                    <BenefitCard
                        iconSrc={benefit8}
                        title="Portofolio Keren"
                        description="Tambah nilai di CV & LinkedIn"
                        backgroundColor="#D2D2D2"
                    />
                </div>


            </div>
            <CtaSection />
            <Footer />
        </div>
    )
}

