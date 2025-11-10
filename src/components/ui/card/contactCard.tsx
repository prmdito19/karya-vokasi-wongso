import React from "react";

type ContactCardProps = {
  icon: React.ReactNode; // Bisa Heroicons atau icon lain
  title: string;
  content: string;
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#E9D8C1] rounded-3xl px-20 py-10 w-full max-w-sm mx-auto text-center">
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white mb-3">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-[#D7885B] mb-1">{title}</h2>

      {/* Content */}
      <p className="text-gray-800 text-base font-medium">{content}</p>
    </div>
  );
};

export default ContactCard;
