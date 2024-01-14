import { useContext, useEffect, useState } from "react";
import { InfoContext, useInfo } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import Loader from "../components/Loader";
import Card from "../components/card";
import styles from "../css/homepage.module.css";
import Search from "../components/Search";
import {
  categoryHandler,
  createQuery,
  queryHAndler,
  searchFinder,
} from "../helper/help";
function HomePAge() {
  const info = useContext(InfoContext);
  const {
    data,
    query,
    setQuery,
    searchParams,
    setSearchParams,
    search,
    setSearch,
  } = info;

  const [display, setDisplay] = useState([]);
  const [nothing, setNothing] = useState(true);
  console.log(nothing);
  useEffect(() => {
    setDisplay(data);
    setQuery(queryHAndler(searchParams));
    setSearch(query.search || "");
  }, [data]);

  useEffect(() => {
    setSearchParams(query);
    let searchReslt = searchFinder(data, query.search);
    let final = categoryHandler(searchReslt, query.category);
    setDisplay(final);
    console.log(final);
    {
      !final.length ? setNothing(false) : setNothing(true);
    }
  }, [query]);

  const searchHandler = () => {
    setQuery((query) => createQuery(query, { search }));
  };
  return (
    <div>
      {!display.length && <Loader />}
      <Search searchHandler={searchHandler} />
      <div className={styles.container}>
        {!nothing && <p>hi</p>}
        <Card display={display} />
      </div>
    </div>
  );
}

export default HomePAge;
