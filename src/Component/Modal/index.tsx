import { modalProps } from "../../Helper/interface";
import "./index.css";

const Modal: React.FC<modalProps> = ({
  handleModalClosed,
  id,
  name,
  language,
  description,
  created_at,
  updated_at,
}) => {
  return (
    <div className="background-modal">
      <div className="modal">
        <p className="title-repos">
          [{id}] {name}
        </p>
        <p className="description-repos">{description}</p>
        <p className="language-repos">Language: {language}</p>
        <p className="created-repos">Date Created: {created_at}</p>
        <p className="updated-repos">Date Updated: {updated_at}</p>
        <button className="btn-close-modal" onClick={handleModalClosed}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
