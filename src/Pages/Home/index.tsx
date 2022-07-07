import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardRepos from "../../Component/CardRepos";
import Search from "../../Component/Search";
import { getReposSearch } from "../../Helper/getData";
import { Repos } from "../../Helper/interface";
import "./index.css";

function Home() {
  const [repo, setRepo] = useState<Repos[] | undefined>([]);
  const [number, setNumber] = useState(5);
  const currentSearch: string = useSelector(
    (state: any) => state.serachData.value
  );

  useEffect(() => {
    getReposSearch(currentSearch, number).then((response) => {
      console.log("data from api", response);
      setRepo(response);
    });
  }, [currentSearch, number]);

  const cardRepo = repo?.map((val) => {
    return <CardRepos id={val.id} name={val.name} language={val.language} />;
  });

  const handleContentNumber = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const { value } = event.target;
    const data = parseInt(value);
    setNumber(data);
  };

  return (
    <div className="home-section">
      <div className="home-section-container">
        <Search />
        <div>
          <select
            onChange={handleContentNumber}
            name="content"
            id="content-number"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
        <div className="card-repos-container">{cardRepo}</div>
      </div>
    </div>
  );
}

export default Home;
