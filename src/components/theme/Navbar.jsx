import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="one">One</Link>
            <Link to="two">Two</Link>
        </nav>
    );
};

export default Navbar;
