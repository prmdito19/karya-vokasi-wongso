import { HeroSection } from "@/components/ui/section/heroSection";
import Footer from "@/components/ui/footer"
import CtaSection from "@/components/ui/section/ctasection";
import ContactCard from "@/components/ui/card/contactCard";
import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { MapSection } from "@/components/ui/section/mapSection";
import ContactForm from "@/components/ui/form/contactForm";
import Map from "@/components/ui/map";

import wongso from "@/assets/images/img-wongso.png"
import imgKontak from "@/assets/images/img-kontak.png"

export default function Kontak() {
    return (
        <div>
            <div>
                <HeroSection
                    title={wongso}
                    subtitle="Karya Vokasi LMS"
                    description={`Kontak`}
                    highlightColor="text-green-400"
                    imageSrc={imgKontak}
                    imageAlt="Ilustrasi LMS"
                />
            </div>
            <div className="flex flex-col items-center mb-[50px]">
                {/* Judul */}
                <h1 className="text-3xl md:text-[64px] font-semibold text-[#3C3C43]">Kontak Kami</h1>
                {/* Card Phone */}
                <div className="grid gap-12 md:grid-cols-3 p-10">
                    <ContactCard
                        icon={<PhoneIcon className="w-6  h-6 text-[#D7885B]" />}
                        title="Hubungi Langsung"
                        content="(+62) 858-6423-2063"
                    />
                    {/* Card WhatsApp */}
                    <ContactCard
                        icon={<ChatBubbleLeftRightIcon className="w-6 h-6 text-[#D7885B]" />}
                        title="WhatsApp Kami"
                        content="(+62) 858-6423-2063"
                    />
                    {/* Card Email */}
                    <ContactCard
                        icon={<EnvelopeIcon className="w-6 h-6 text-[#D7885B]" />}
                        title="Email Kami"
                        content="info@example.com"
                    />
                </div>

            </div>
            <MapSection 
                backgroundColor="#BAE4C5"
            >
                <ContactForm />
                <div>
                   <Map />
                </div>
            </MapSection>
            <CtaSection />
            <Footer />
        </div>
    )

}