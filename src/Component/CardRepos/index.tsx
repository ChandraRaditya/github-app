import { Repos } from "../../Helper/interface";
import "./index.css";

const CardRepos: React.FC<Repos> = ({
  id,
  name,
  language,
  handleCardClicked,
}) => {
  return (
    <div onClick={handleCardClicked} className="card-repos">
      <p className="repo-title">
        [{id}] {name}
      </p>
      <p className="repo-language">{language}</p>
    </div>
  );
};

export default CardRepos;
