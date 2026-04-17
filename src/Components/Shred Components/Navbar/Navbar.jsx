// import { ChartLine, Clock3, House } from "lucide";


import { ChartLine, Clock3, House } from "lucide-react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className=" bg-base-100 shadow-sm">
      <div className="max-w-[95%] md:max-w-[90%] navbar mx-auto">
        <div className="flex-1">
          <a className=" text-xl md:text-2xl">
            <span className="font-extrabold dark-blue">Keen</span>
            <span className="font-semibold light-dark-green">Keeper</span>
            </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
           
            {/* ............. */}
            <div className="dropdown md:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content  font-medium rounded-box z-1 top-15 w-52 p-2 shadow right-[0] light-blue"
              >
                <li>
                <NavLink to={"/"}><House size={15}/> Home</NavLink>
              </li>
              <li>
                <NavLink to={"/timeLine"}><Clock3 size={15}/> Timeline</NavLink>
              </li>
              <li>
                <NavLink to={"/status"}><ChartLine size={15}/> Stats</NavLink>
              </li>
              </ul>
            </div>
            {/* ............. */}

            <ul className="hidden gap-5  md:flex light-blue font-medium">
              <li>
                <NavLink to={"/"}><House size={18}/> Home</NavLink>
              </li>
              <li>
                <NavLink to={"/timeLine"}> <Clock3 size={18}/> Timeline</NavLink>
              </li>
              <li>
                <NavLink to={"/status"}><ChartLine size={18}/> Stats</NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
