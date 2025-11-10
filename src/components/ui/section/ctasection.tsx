import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="w-full bg-[#3C3C43] px-6 md:px-16 py-14 md:py-20 text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
            Gabung sekarang, sebarkan ilmu & <br /> inspirasi ke seluruh dunia!
          </h2>
          <div className="flex justify-center md:justify-start gap-[24px]">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#4BD270] text-white rounded-md font-semibold transition"
            >
              Daftar Pelajar
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border-2 border-[#4BD270] text-[#4BD270] rounded-md font-medium hover:bg-green-500/20 transition"
            >
              Daftar Pengajar
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-8 sm:gap-14 text-center md:text-left"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">26k++</h3>
            <p className="text-gray-300 text-sm md:text-base">Kelas Kursus</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">2k++</h3>
            <p className="text-gray-300 text-sm md:text-base">Pengajar Profesional</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">99.9%</h3>
            <p className="text-gray-300 text-sm md:text-base">Tingkat Keberhasilan</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
