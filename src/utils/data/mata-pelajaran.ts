// src/data/subjects.ts
export interface MataPelajaran {
  id: number;
  title: string;
  description: string;
  tag: string;
  topics: number;
  progress: number;
}

export const dummySubjects: MataPelajaran[] = [
  {
    id: 1,
    title: "Belajar Pengembangan Diri dan Profesional",
    description: "Materi ini dirancang untuk memahami teknik dasar berpikir kritis.",
    tag: "CNC MILLING",
    topics: 5,
    progress: 0,
  },
  {
    id: 2,
    title: "Manajemen Proyek Dasar",
    description: "Pelajari dasar manajemen proyek secara praktis.",
    tag: "SOLID WORK",
    topics: 6,
    progress: 0,
  },
  {
    id: 3,
    title: "Komunikasi Efektif",
    description: "Latih kemampuan komunikasi interpersonal.",
    tag: "BMC",
    topics: 4,
    progress: 0,
  },
  {
    id: 4,
    title: "Dasar Mekanik",
    description: "Pengenalan dunia mekanik untuk pemula.",
    tag: "ME",
    topics: 7,
    progress: 0,
  },
  {
    id: 5,
    title: "Kepemimpinan Dasar",
    description: "Menjadi pemimpin yang inspiratif.",
    tag: "LEAD",
    topics: 3,
    progress: 0,
  },
];
