
import { Link } from "react-router-dom";
import { Leaf, Info } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative h-10 w-10 bg-white rounded-full flex items-center justify-center mr-2">
                <span 
                  className="text-green-700 font-extrabold text-xl z-10 
                  text-stroke text-stroke-green-500 text-stroke-2"
                >
                  AO
                </span>
                <Leaf 
                  className="absolute top-0 left-0 w-full h-full text-green-400 opacity-70 z-0" 
                  strokeWidth={2.5}
                />
              </div>
              <span className="text-white font-semibold text-xl">AyurOne</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              to="/explore-plants"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Explore Plants
            </Link>
            <Link
              to="#search"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Search & Filter
            </Link>
            <Link
              to="#about"
              className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
            >
              <Info className="mr-2 h-4 w-4" />
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
