import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "../../Component/Search";
import { getReposSearch } from "../../Helper/getData";
import "./index.css";

function Home() {
  const [search, setSearch] = useState("");
  const currentSearch: string = useSelector(
    (state: any) => state.serachData.value
  );

  useEffect(() => {
    getReposSearch(currentSearch).then((response) => {
      console.log("data from api", response);
    });
  }, [currentSearch]);

  return (
    <div className="home-section">
      <div className="home-section-container">
        <Search />
      </div>
    </div>
  );
}

export default Home;
