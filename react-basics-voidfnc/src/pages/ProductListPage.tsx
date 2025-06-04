import { useSearchParams } from "react-router";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortValueChange = (sortValue: string) => {
    // ganti search params `sort` dengan value `price-asc`
    searchParams.set("sort", sortValue);

    setSearchParams(searchParams);
  };

  return (
    <div>
      <h1>Ini Product List Page</h1>
      <ul>
        <li>Sort: {searchParams.get("sort")} </li>
        <li>Name: {searchParams.get("name")} </li>
      </ul>

      <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <button onClick={() => handleSortValueChange("price-desc")}>
          Sort price desc
        </button>
        <button onClick={() => handleSortValueChange("price-asc")}>
          Sort price asc
        </button>
        <button onClick={() => handleSortValueChange("most-popular")}>
          Sort most popular
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
