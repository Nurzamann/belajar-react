import SkillsBadge from "./SkillsBadge";
import SocialLinks from "./SocialLinks";

type MahasiswaCardProps = {
  nama: string;
  tahun: number;
  jurusan: string;
  status?: "Aktif" | "Cuti" | "Lulus" | "Tidak diketahui";
  link?: {
    instagram?: string;
    linkedin?: string;
  };
  skills: string[];
};

const MahasiswaCard = ({
  nama,
  tahun,
  jurusan,
  status = "Tidak diketahui",
  link,
  skills,
}: MahasiswaCardProps) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "12px", width: "280px" }}>
      <p><strong>Nama:</strong> {nama}</p>
      <p><strong>Tahun Lahir:</strong> {tahun}</p>
      <p><strong>Jurusan:</strong> {jurusan}</p>
      <p><strong>Status:</strong> {status}</p>
      <div style={{ marginTop: "8px" }}>
        <strong>Keahlian:</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
          {skills.map((skill, idx) => (
            <SkillsBadge skill={skill} key={idx} />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "12px" }}>
        <strong>Social Media:</strong>
        <SocialLinks link={link} />
      </div>
    </div>
  );
};

export default MahasiswaCard;
