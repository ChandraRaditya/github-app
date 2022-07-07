import "./index.css";
import Logo from "../../Assets/logo.svg";

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};

export default Navbar;
