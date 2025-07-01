// import Welcome from "./components/Welcome";
// import Header from "./components/Header";
// import ProfileCard from "./components/ProfileCard";
// import Counter from "./components/Counter";
import { Routes, Route } from "react-router";
import TermsPage from "./pages/TermsPage";
import HomePages from "./pages/HomePages";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductListPage from "./pages/ProductListPage";
import FormPage from "./pages/FormPage";
import RHFPage from "./pages/RHFPage";

// type Teacher = {
//   name: string;
//   job: string;
//   year: number;
//   id: number;
// };

// const teachers: Teacher[] = [
//   {
//     job: "Dosen",
//     name: "Pak Dika",
//     year: 1995,
//     id: 1,
//   },
//   {
//     name: "Theo",
//     job: "Creator",
//     year: 2000,
//     id: 2,
//   },
//   {
//     name: "pak eko",
//     job: "tech lead",
//     year: 2000,
//     id: 3,
//   },
//   {
//     name: "Nurzaman",
//     job: "pengangguran",
//     year: 2000,
//     id: 4,
//   },
// ];

// component
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/terms" element={<TermsPage />} />

        <Route path="/product-list" element={<ProductListPage />} />

        {/* Dynamic Route */}
        <Route path="/product/:slug" element={<ProductDetailPage />} />
        {/* localhost:5173/product/kaos-oblong */}

        <Route path="/form" element={<FormPage />} />
        <Route path="/rhf" element={<RHFPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
