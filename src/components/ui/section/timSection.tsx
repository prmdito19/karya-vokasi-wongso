import React from "react";

import tim1 from "@/assets/images/tim/pak-harry-lesto-hadi.png"
import tim2 from "@/assets/images/tim/pak-kristiyanto-widiyawan.png"
import tim3 from "@/assets/images/tim/bu-elly-suprihatin.png"

type TeamCardProps = {
  image: string;
  name: string;
  role: string;
};

const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col max-w-[360px] w-full mx-auto">
      <div className="h-[360px] w-full flex items-center justify-center bg-gray-100">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const team = [
    {
      image: tim1,
      name: "Harry Lesto Hadi",
      role: "Direktur Utama",
    },
    {
      image: tim2,
      name: "Kristiyanto Widiyawan",
      role: "Direktur Pemasaran & Kerjasama",
    },
    {
      image: tim3,
      name: "Elly Suprihatin",
      role: "Direktur FAT & Pengadaan",
    },
  ];

  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="flex justify-center text-3xl md:text-[64px] font-semibold text-black mb-[60px]">
          Tim Profesional Kami
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {team.map((member, index) => (
            <TeamCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
