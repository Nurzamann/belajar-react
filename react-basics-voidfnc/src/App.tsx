import Welcome from "./components/Welcome";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const teachers: Teacher[] = [
  {
    job: "Dosen",
    name: "Pak Dika",
    year: 1995,
    id: 1
  },
  {
    name: "Theo",
    job: "Creator",
    year: 2000,
    id: 2
  },
  {
    name: "pak eko",
    job: "tech lead",
    year: 2000,
    id: 3
  },
  {
    name: "Nurzaman",
    job: "pengangguran",
    year: 2000,
    id: 4
  },
];

// component
function App() {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <div style={{ gap: "8px", display: "flex", flexDirection: "row" }}>
        {teachers.map((teachers) => {
          return (
            <ProfileCard
              name={teachers.name}
              year={teachers.year}
              job={teachers.job}
              key={teachers.id}
            />
          );
        })}
      </div>
      <Welcome />
    </div>
  );
}

export default App;
