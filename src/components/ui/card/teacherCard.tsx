type TeacherCardProps = {
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
};

export function TeacherCard({ imageSrc, alt, title, description }: TeacherCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center w-full max-w-[320px] min-h-[240px] flex flex-col justify-start">
      <img
        src={imageSrc}
        alt={alt}
        className="mx-auto mb-3 w-[64px] h-[64px] sm:w-[80px] sm:h-[80px]"
      />
      <h3 className="font-medium text-lg sm:text-xl md:text-2xl text-[#3C3C43]">
        {title}
      </h3>
      <p className="font-regular text-sm sm:text-base text-[#3C3C43] mt-2">
        {description}
      </p>
    </div>
  );
}
