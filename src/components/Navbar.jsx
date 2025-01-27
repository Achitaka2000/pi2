import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-green-700/80 bg-light">
      <div className="container px-4 mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <a
              href="/"
              className="text-xl text-green-800 font-semibold tracking-tight"
            >
              FoodShare
            </a>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-green-800 hover:text-green-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-12 items-center">
            <a
              href="#"
              className="py-2 px-3 border border-green-600 text-green-800 rounded-md hover:bg-green-100"
            >
              Connexion
            </a>
            <a
              href="donner"
              className="bg-gradient-to-r from-green-500 to-green-700 text-white py-2 px-3 rounded-md hover:from-green-600 hover:to-green-800"
            >
              Je Veux Donner !
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
