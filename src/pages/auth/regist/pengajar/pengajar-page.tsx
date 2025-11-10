import AuthSection from "@/components/ui/section/authSection";
import FormDataDiri from "@/components/ui/form/formDataDiri";
import wongsoLogo from "@/assets/images/img-wongso.png";

import img1 from "@/assets/images/pengajar.png"
import img2 from "@/assets/images/carousel-section/daftar-pengajar.svg"

export default function RegistPengajarPage() {
    return (
        <AuthSection images={[img1, img2]}>
            <div className="w-full flex items-center justify-center px-8 mb-15">
                <div className="w-full max-w-xl">
                    <div className="flex justify-center mb-0">
                        <img src={wongsoLogo} alt="Wongso Logo" className="h-15 lg:h-20" />
                    </div>

                    <h1 className="text-[36px] font-medium text-center mb-2">
                        Form Pengajar
                    </h1>
                    <FormDataDiri />
                    
                </div>
            </div>
        </AuthSection>
    );
}
