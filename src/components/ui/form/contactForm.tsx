import React from "react";
import { Send } from "lucide-react";

const ContactForm: React.FC = () => {
  return (
    <div className="flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        {/* Header */}
        <h2 className="text-2xl font-semibold text-green-600">Hubungi Kami</h2>
        <p className="text-gray-500 text-sm mb-6">
          Siap Bantu, Kontak Kami Kapan Saja
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Nama */}
          <input
            type="text"
            placeholder="Nama"
            className="w-full border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Telepon */}
          <input
            type="tel"
            placeholder="Telepon"
            className="w-full border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Pesan */}
          <textarea
            placeholder="Pesan...."
            rows={4}
            className="w-full border border-green-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
          ></textarea>

          {/* Tombol Kirim */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-200 hover:bg-green-300 text-green-700 font-medium py-2 rounded-lg transition"
          >
            Kirim <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
