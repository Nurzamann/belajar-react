import ProfileCard from "./components/ProfileCard";

type Profile = {
  name: string;
  lahir: string;
  tahun: number;
  alamat: string;
  tlp: number;
  hobis: string[];
  id: number;
};

const profile: Profile[] = [
  {
    name: "Nurzaman",
    lahir: "Jakarta",
    tahun: 2000,
    alamat: "Jl. H. Kodja",
    tlp: 6289661498035,
    hobis: ["Ngopi", "ngoding", "Nonton Anime"],
    id: 1,
  },
  {
    name: "Miftahul Zanna",
    lahir: "Jakarta",
    tahun: 2001,
    alamat: "Jl. Pancoran",
    tlp: 6282983298432,
    hobis: ["Ngedrakor", "Baca Buku", "Ngajar"],
    id: 2,
  },
];

function App() {
  return (
    <div>
      <h1>Daftar Profile</h1>
      <div>
        {profile.map((p) => (
          <ProfileCard
            key={p.id}
            name={p.name}
            lahir={p.lahir}
            tahun={p.tahun}
            alamat={p.alamat}
            tlp={p.tlp}
            hobis={p.hobis}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
