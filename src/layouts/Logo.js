import logoDark from "../assets/images/logos/logoIcon.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
     <img src={logoDark} alt="Logo" style={{ width: '50px' }} />
    </Link>
  );
};

export default Logo;
