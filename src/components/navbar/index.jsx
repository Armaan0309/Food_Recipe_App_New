import { useContext } from "react";
import { BiSolidDish } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);
  console.log(searchParam);

  return (
    <nav className="flex border-b-2 justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold ">
        <ul>
          <li>
            <NavLink to={"/"} className="flex gap-1 items-center">
              Dish <BiSolidDish className="text-orange-500" /> e's
            </NavLink>
          </li>
        </ul>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Search your dish name here...."
          className="bg-white/75 p-3 px-8 rounded-lg outline-none lg:w-96 shadow-lg"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/favourites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
