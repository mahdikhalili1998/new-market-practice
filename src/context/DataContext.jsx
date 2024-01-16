import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
export const InfoContext = createContext();
function DataContext({ children }) {
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const fetch = await api.get("/products");
        const newProducts = fetch.products.map((item) => ({
          ...item,
          images: item.images.map((url) => ({ id: uuidv4(), img: url })),
        }));
        setData(newProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <InfoContext.Provider
        value={{
          data,
          query,
          setQuery,
          searchParams,
          setSearchParams,
          search,
          setSearch,
        }}
      >
        {children}
      </InfoContext.Provider>
    </>
  );
}

const useInfo = () => {
  const result = useContext(InfoContext);
  return result;
};
const detailProduct = (id) => {
  const { data } = useContext(InfoContext);
  const finder = data.find((item) => item.id === id);
  return finder;
};
export default DataContext;
export { useInfo, detailProduct };
