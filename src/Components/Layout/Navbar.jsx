import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar({ title }) {
  return (
    <nav className="navbar shadow-lg bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <FaGithub className="text-4xl mr-3" />
          <Link to="/" className="text-2xl font-bold hover:text-gray-300 transition duration-300">
            {title}
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link to="/" className="btn btn-ghost text-lg hover:bg-gray-700 transition duration-300 rounded">
            Home
          </Link>
          <Link to="/about" className="btn btn-ghost text-lg hover:bg-gray-700 transition duration-300 rounded">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};

export default Navbar;
