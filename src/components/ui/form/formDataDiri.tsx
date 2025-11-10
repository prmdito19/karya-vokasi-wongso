import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import Dropdown from "@/components/ui/dropdown";
import { useNavigate } from "react-router-dom";
import Modal from "@/components/ui/modal";

const genderOptions = [
  { value: "", label: "Pilih Jenis Kelamin" },
  { value: "Laki-Laki", label: "Laki-Laki" },
  { value: "Perempuan", label: "Perempuan" },
];

interface FieldRequired {
  nama?: boolean;
  email?: boolean;
  telepon?: boolean;
  jenisKelamin?: boolean;
  alamat?: boolean;
  pendidikan?: boolean;
  password?: boolean;
}

interface FormProps {
  fieldRequired?: FieldRequired;
  redirectTo?: string;
}

export default function FormDataDiri({ fieldRequired, redirectTo }: FormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  // default config: semua true
  const mergedRequired: Required<FieldRequired> = {
    nama: true,
    email: true,
    telepon: true,
    jenisKelamin: true,
    alamat: true,
    pendidikan: true,
    password: true,
    ...fieldRequired,
  };

  // schema dinamis sesuai config
  const formSchema = z.object({
    nama: mergedRequired.nama
      ? z.string().min(3, "Nama minimal 3 karakter")
      : z.string().optional(),
    email: mergedRequired.email
      ? z.string().email("Format email tidak valid")
      : z.string().optional(),
    telepon: mergedRequired.telepon
      ? z
          .string()
          .min(10, "Nomor telepon minimal 10 digit")
          .regex(/^[0-9+]+$/, "Nomor telepon hanya boleh angka")
      : z.string().optional(),
    jenisKelamin: mergedRequired.jenisKelamin
      ? z.string().min(1, "Pilih jenis kelamin")
      : z.string().optional(),
    alamat: mergedRequired.alamat
      ? z.string().min(5, "Alamat terlalu pendek")
      : z.string().optional(),
    pendidikan: mergedRequired.pendidikan
      ? z.string().min(3, "Jenjang pendidikan tidak valid")
      : z.string().optional(),
    password: mergedRequired.password
      ? z.string().min(6, "Password minimal 6 karakter")
      : z.string().optional(),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jenisKelamin: "",
    },
  });

  const navigate = useNavigate();

  // ketika klik submit → simpan data ke state, lalu munculkan modal
  const onSubmit = (data: FormData) => {
    setFormData(data);
    setIsModalOpen(true);
  };

  // ketika confirm di modal
  const handleConfirm = () => {
    if (formData) {
      console.log("✅ Form submitted:", formData);
      localStorage.setItem("formDataDiri", JSON.stringify(formData));
      navigate(redirectTo || "/");
    }
    setIsModalOpen(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-2xl p-6 bg-white rounded-3xl border border-gray-200"
      >
        <h2 className="text-[24px] font-semibold mb-3">Form Data Diri</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Nama */}
        {mergedRequired.nama && (
          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-sm font-medium mb-1">
              Nama{mergedRequired.nama && <span className="text-red-500">*</span>}
            </label>
            <input
              {...register("nama")}
              placeholder="Exp. John Carter"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-gray-400 text-[14px] ${errors.nama
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"
                }`}
            />
            {errors.nama && (
              <span className="absolute -bottom-5 text-sm text-red-500">
                {errors.nama.message}
              </span>
            )}
          </div>
        )}

        {/* Email */}
        {mergedRequired.email && (
          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-sm font-medium mb-1">
              Email{mergedRequired.email && <span className="text-red-500">*</span>}
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-gray-400 text-[14px] ${errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"
                }`}
            />
            {errors.email && (
              <span className="absolute -bottom-5 text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>
        )}

        {/* Telepon */}
        {mergedRequired.telepon && (
          <div className="flex flex-col relative">
            <label className="text-sm font-medium mb-1">
              Telepon{mergedRequired.telepon && <span className="text-red-500">*</span>}
            </label>
            <input
              {...register("telepon")}
              placeholder="082142201583"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-gray-400 text-[14px] ${errors.telepon
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"
                }`}
            />
            {errors.telepon && (
              <span className="absolute bottom-0 text-sm text-red-500">
                {errors.telepon.message}
              </span>
            )}
          </div>
        )}

        {/* Jenis Kelamin */}
        {mergedRequired.jenisKelamin && (
          <div className="relative">
            <Controller
              control={control}
              name="jenisKelamin"
              render={({ field }) => (
                <Dropdown
                  label="Jenis Kelamin"
                  required={mergedRequired.jenisKelamin}
                  options={genderOptions}
                  value={
                    genderOptions.find((o) => o.value === field.value) ||
                    genderOptions[0]
                  }
                  onChange={(val) => field.onChange(val.value)}
                  error={errors.jenisKelamin?.message}
                />
              )}
            />
          </div>
        )}

        {/* Alamat */}
        {mergedRequired.alamat && (
          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-sm font-medium mb-1">
              Alamat{mergedRequired.alamat && <span className="text-red-500">*</span>}
            </label>
            <input
              {...register("alamat")}
              placeholder="Yogyakarta"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-gray-400 text-[14px] ${errors.alamat
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"
                }`}
            />
            {errors.alamat && (
              <span className="absolute -bottom-5 text-sm text-red-500">
                {errors.alamat.message}
              </span>
            )}
          </div>
        )}

        {/* Pendidikan */}
        {mergedRequired.pendidikan && (
          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-sm font-medium mb-1">
              Jenjang Pendidikan
              {mergedRequired.pendidikan && <span className="text-red-500">*</span>}
            </label>
            <input
              {...register("pendidikan")}
              placeholder="Exp. SMA St. Aylosius Ketapang"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-gray-400 text-[14px] ${errors.pendidikan
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"
                }`}
            />
            {errors.pendidikan && (
              <span className="absolute -bottom-5 text-sm text-red-500">
                {errors.pendidikan.message}
              </span>
            )}
          </div>
        )}

        {/* Password */}
        {mergedRequired.password && (
          <div className="flex flex-col md:col-span-2 relative">
            <label className="text-sm font-medium mb-1">
              Password{mergedRequired.password && <span className="text-red-500">*</span>}
            </label>
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan password"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 placeholder:text-gray-400 pr-10 text-[14px] ${errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-green-500"
                }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-8 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <span className="absolute -bottom-5 text-sm text-red-500">
                {errors.password.message}
              </span>
            )}
          </div>
        )}
      </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Lanjut
          </button>
        </div>
      </form>

      {/* Modal Konfirmasi */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        description="Apakah Anda yakin data Anda sudah benar dan ingin melanjutkan?"
        confirmText="Ya, Lanjut"
        cancelText="Batal"
      />
    </>
  );
}
