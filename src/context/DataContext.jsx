import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";
import axios from "axios";

export const InfoContext = createContext();
function DataContext({ children }) {
  const [data, setData] = useState([]);
  // console.log(data);
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
      <InfoContext.Provider value={data}>{children}</InfoContext.Provider>
    </>
  );
}
const useInfo = () => {
  const result = useContext(InfoContext);
  return result;
};

export default DataContext;
export { useInfo };
