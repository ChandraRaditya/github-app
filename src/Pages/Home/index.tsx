import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardRepos from "../../Component/CardRepos";
import Search from "../../Component/Search";
import { getReposSearch } from "../../Helper/getData";
import { Repos } from "../../Helper/interface";
import "./index.css";

function Home() {
  const [repo, setRepo] = useState<Repos[] | undefined>([]);
  const currentSearch: string = useSelector(
    (state: any) => state.serachData.value
  );

  useEffect(() => {
    getReposSearch(currentSearch).then((response) => {
      console.log("data from api", response);
      setRepo(response);
    });
  }, [currentSearch]);

  const cardRepo = repo?.map((val) => {
    return <CardRepos id={val.id} name={val.name} language={val.language} />;
  });

  return (
    <div className="home-section">
      <div className="home-section-container">
        <Search />
        <div className="card-repos-container">{cardRepo}</div>
      </div>
    </div>
  );
}

export default Home;
