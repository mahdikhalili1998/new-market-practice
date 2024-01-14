import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";
import { useSearchParams } from "react-router-dom";

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
        setData(fetch.products);
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

export default DataContext;
export { useInfo };
