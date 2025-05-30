import MahasiswaCard from "./components/MahasiswaCard";

type Mahasiswa = {
  nama: string;
  tahun: number;
  jurusan: string;
  status?: "Aktif" | "Cuti" | "Lulus";
  link?: {
    instagram?: string;
    linkedin?: string;
  };
  skills: string[];
  id: number;
};

const mahasiswa: Mahasiswa[] = [
  {
    nama: "Nurzaman",
    tahun: 2000,
    jurusan: "Teknik Informatika",
    status: "Lulus",
    link: {
      linkedin: "https://linkedin.com/in/nurzaman",
      instagram: "https://instagram.com/nurzaman",
    },
    skills: ["React", "TypeScript", "UI/UX"],
    id: 1,
  },
  {
    nama: "Zahra",
    tahun: 1999,
    jurusan: "Sistem Informasi",
    status: "Aktif",
    link: {
      linkedin: "https://linkedin.com/in/zahra",
    },
    skills: ["Python", "Figma"],
    id: 2,
  },
  {
    nama: "Dito",
    tahun: 1998,
    jurusan: "Teknik Komputer",
    status: "Cuti",
    skills: ["Linux", "Docker", "Networking"],
    id: 3,
  },
];

function App() {
  return (
    <div style={{ padding: "32px" }}>
      <h1>Daftar Mahasiswa</h1>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {mahasiswa.map((mhs) => (
          <MahasiswaCard key={mhs.id} {...mhs} />
        ))}
      </div>
    </div>
  );
}

export default App;
