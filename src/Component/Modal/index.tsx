import { buttonCloseModal } from "../../Helper/interface";
import "./index.css";

const Modal: React.FC<buttonCloseModal> = ({ handleModalClosed }) => {
  return (
    <div className="background-modal">
      <div className="modal">
        <p className="title-repos">[ID2001] DIGDIGCOURSE</p>
        <p className="description-repos">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu
          ex quis sem dapibus ullamcorper a in orci. Nulla porta elementum
          laoreet.
        </p>
        <p className="language-repos">Language: Typescript</p>
        <p className="created-repos">Date Created: 12-04-2022</p>
        <p className="updated-repos">Date Updated: 12-04-2022</p>
        <button className="btn-close-modal" onClick={handleModalClosed}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
