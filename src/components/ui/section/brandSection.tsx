import netflix from "@/assets/images/brand-icon/netflix.svg"
import youtube from "@/assets/images/brand-icon/youtube.svg"
import google from "@/assets/images/brand-icon/google.svg"
import lenovo from "@/assets/images/brand-icon/lenovo.svg"
import slack from "@/assets/images/brand-icon/slack.svg"
import verizon from "@/assets/images/brand-icon/verizon.svg"
import lexmark from "@/assets/images/brand-icon/lexmark.svg"
import microsoft from "@/assets/images/brand-icon/microsoft.svg"

const brands = [
  { name: "Netflix", logo: netflix },
  { name: "YouTube", logo: youtube },
  { name: "Google", logo: google },
  { name: "Lenovo", logo: lenovo },
  { name: "Slack", logo: slack },
  { name: "Verizon", logo: verizon },
  { name: "Lexmark", logo: lexmark },
  { name: "Microsoft", logo: microsoft },
];

export default function BrandSection() {
  return (
    <section className="w-full bg-[#BAE4C5] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Text Section */}
        <div className="flex-1 mb-8 lg:my-15">
          <h2 className="text-3xl font-bold text-[#197A0A] mb-4">
            Kemitraan Kami
          </h2>
          <p className="text-[#3C3C43] text-lg max-w-md">
            Nullam egestas tellus at enim ornare tristique. Class aptent taciti
            sociosqu ad litora torquent
          </p>
        </div>

        {/* Brand Cards */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-8 place-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-full max-w-[250px] h-[100px] bg-white rounded-md flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-[50%] max-w-[60%] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
