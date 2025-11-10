import Footer from "@/components/ui/footer";
import { HeroSectionCentered } from "@/components/ui/section/heroSectionCentered";
import CourseCard from "@/components/ui/card/courseCard";

export default function Katalog() {
  return (
    <div className="mt-10">
      <HeroSectionCentered title="Paket">
        {Array.from({ length: 12 }).map((_, index) => (
          <CourseCard
            key={index}
            title={`Paket ${index + 1}`}
            description={"Paket ini berisi materi tentang..."}
            imageUrl={"https://via.placeholder.com/150"}
            duration={"1 jam"}
            price={"Rp 100.000"}
            category={"Matematika"}
            isPremium={true}
            // onCardClick={() => onCourseClick(course.title)}
          />
        ))}
      </HeroSectionCentered>
      <Footer />
    </div>
  );
}
