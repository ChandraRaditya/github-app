import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardRepos from "../../Component/CardRepos";
import Pagination from "../../Component/Pagination";
import Search from "../../Component/Search";
import { getReposSearch, getReposSearchWithPage } from "../../Helper/getData";
import { Repos } from "../../Helper/interface";
import "./index.css";

function Home() {
  const [repo, setRepo] = useState<Repos[] | undefined>([]);
  const [repoWithPage, setRepoWithPage] = useState<Repos[] | undefined>([]);
  const [number, setNumber] = useState(5);
  const currentSearch: string = useSelector(
    (state: any) => state.serachData.value
  );
  const currentPage: number = useSelector(
    (state: any) => state.pagesData.value
  );

  useEffect(() => {
    getReposSearch(currentSearch).then((response) => {
      setRepo(response);
    });
  }, [currentSearch]);

  useEffect(() => {
    getReposSearchWithPage(currentSearch, number, currentPage).then(
      (response) => {
        setRepoWithPage(response);
      }
    );
  }, [currentPage, currentSearch, number]);

  const cardRepo = repoWithPage?.map((val, id) => {
    return (
      <CardRepos key={id} id={val.id} name={val.name} language={val.language} />
    );
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
        <div className="show-number-container">
          <span className="show-number-text">show content</span>
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
        <div className="card-repos-container">
          {currentSearch ? cardRepo : null}
        </div>
        <Pagination contentNumber={number} contentLength={repo?.length} />
      </div>
    </div>
  );
}

export default Home;
