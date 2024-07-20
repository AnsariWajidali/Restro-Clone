import React from "react";
import { FaCaretDown, FaUser } from "react-icons/fa";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "About",
    link: "/#",
  },

  {
    id: 3,
    name: "Contact",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegitables",
    link: "/#",
  },

  {
    id: 2,
    name: "Fruits",
    link: "/#",
  },

  {
    id: 3,
    name: "Grains",
    link: "/#",
  },
];

const Navbar = ({ HandlePopup }) => {
  return (
    <div className=" bg-gray-100 shadow-md">
      <div className="container flex justify-between py-4 sm:py-3">
        {/* logo section */}
        <div className="font-bold text-3xl cursor-pointer">Logo</div>
        {/* Navlink section */}
        <div>
          <ul className=" flex items-center gap-16">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="hidden sm:inline-block hover:text-primary text-xl font-semibold"
                >
                  {name}
                </a>
              </li>
            ))}

            <li>
              {/* DropDown */}
              <li className="hidden sm:block cursor-pointer group">
                <a
                  href="/#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className=" flex items-center gap-[5px] py-2">
                    Dropdown
                    <span>
                      <FaCaretDown className=" group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>

                {/* DropDown Section */}
                <div className=" absolute z-[9999] hidden group-hover:block w-[200px] text-black bg-white rounded-md shadow-md p-2">
                  <ul>
                    {DropdownLinks.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className="text-xl inline-block hover:text-primary  w-full rounded-md p-2 hover:bg-primary/20"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </li>
            {/* Login Button Section */}
            <li>
              <button
                onClick={HandlePopup}
                className="flex items-center gap-2 h-[40px] justify-center font-semibold bg-blue-500 px-2 md:px-5 py-2 text-gray-200 hover:scale-105 duration-300"
              >
                <FaUser />
                My Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
