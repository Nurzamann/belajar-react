import Greeting from "./components/Greeting";
import Header from "./components/Header";
import UseCard from "./components/useCard";

type User = {
  name: string;
  id: number;
};

const users: User[] = [
  {
    name: "Nurzaman",
    id: 1,
  },
  {
    name: "Zaman",
    id: 2,
  },
  {
    name: "Nur",
    id: 3,
  },
  {
    name: "Ujang",
    id: 4,
  },
  {
    name: "Samsul",
    id: 5,
  },
  {
    name: "Arip",
    id: 6,
  },
  {
    name: "Rido",
    id: 7,
  },
  {
    name: "Jangkung",
    id: 8,
  },
];

type Profile = {
  name: string;
  gender: string;
  ttg: string;
  email: string;
  id: number;
};

const profiles: Profile[] = [
  {
    name: "Nurzaman",
    gender: "Laki-Laki",
    ttg: "4-2-2000",
    email: "nurzaman0001@gmail.com",
    id: 1,
  },
  {
    name: "Ujang",
    gender: "Laki-Laki",
    ttg: "8-5-1995",
    email: "ujang0001@gmail.com",
    id: 1,
  },
  {
    name: "Miftahul Zanna",
    gender: "Perempuan",
    ttg: "25-10-2001",
    email: "mfthznnh@gmail.com",
    id: 1,
  },
  {
    name: "Asep",
    gender: "Laki-Laki",
    ttg: "15-11-2006",
    email: "asepganteng@gmail.com",
    id: 1,
  },
];

function App() {
  return (
    <>
      <Header />
      <h1>Hallo guys</h1>

      <div
        style={{
          gap: "10px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        {users.map((users) => {
          return (
            <div>
              <Greeting name={users.name} key={users.id} />
            </div>
          );
        })}
      </div>
      <div
        style={{
          gap: "10px",
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
        }}
      >
        {profiles.map((profiles) => {
          return (
            <div>
              <UseCard
                name={profiles.name}
                gender={profiles.gender}
                ttg={profiles.ttg}
                email={profiles.email}
                key={profiles.id}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
