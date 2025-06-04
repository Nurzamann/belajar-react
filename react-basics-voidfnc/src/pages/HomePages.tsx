import { Link } from "react-router";

const HomePages = () => {
  return (
    <div>
      <h1>Ini Home Page</h1>
      <p>Setujui syarat dibawah ini</p>
      <Link to="/terms">Menuju Halaman Terms</Link>
      {/* Hanya ganti di browser, gak request ke server lagi */}
    </div>
  );
};

export default HomePages;
