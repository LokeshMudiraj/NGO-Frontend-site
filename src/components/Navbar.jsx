import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    "py-2 px-3 rounded text-sm sm:text-base transition-colors " +
    (isActive
      ? "bg-red-600 text-white"
      : "text-white hover:bg-white/10");

  return (
    <header className="bg-gray-700 shadow min-h-[80px]">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start"
        >
          <img
            src="./src/assets/Basti_Ki_Pathshala-_Official_Logo-removebg-preview-removebg-preview.png"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <span className="text-base sm:text-lg font-semibold text-white">
            Basti Ki Pathshala
          </span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/volunteer" className={linkClass}>Volunteer</NavLink>
          <button 
            className="px-3 sm:px-4 py-2 rounded bg-yellow-400 font-medium text-gray-900 text-sm sm:text-base hover:scale-105"
          >
            Donate
          </button>
        </nav>

      </div>
    </header>
  );
}
export default Navbar