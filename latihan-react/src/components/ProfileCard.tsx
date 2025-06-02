import Hobbies from "./Hobbies";

type ProfileCardProps = {
  name: string;
  lahir: string;
  tahun: number;
  alamat: string;
  tlp: number;
  hobis: string[];
};

const ProfileCard = ({
  name,
  lahir,
  tahun,
  alamat,
  tlp,
  hobis,
}: ProfileCardProps) => {
  return (
    <div>
      <p>Nama: {name} </p>
      <p>lahir: {lahir} </p>
      <p>tahun: {tahun} </p>
      <p>alamat: {alamat} </p>
      <p>telp: {tlp} </p>
      <div>
        {hobis.map((hobi, idx) => (
          <Hobbies hobi={hobi} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
