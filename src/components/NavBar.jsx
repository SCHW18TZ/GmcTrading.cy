import React, { useState } from "react";
import { close, menu } from "../assets";
import logov from "../assets/logov.png";
import { navLinks } from "../constants";
import "../style.css";
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1
        className={`font-poppins font-normal cursor-pointer text-[16px] logo-name  text-white`}
      >
        STM TRADER
      </h1>
      {/* <img src={logov} alt="hoobank"  className='nav-logo w-[124px] h-[32px]'  /> */}
      <ul className="list-none sm:flex hidden justify-end items-center flxe-1">
        {navLinks.map((el, index) => {
          return (
            <>
              <li
                key={el.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                } text-white`}
              >
                <a href={`#${el.id}`}>{el.title}</a>
              </li>
            </>
          );
        })}
        <li>
          <a href="/courses">Courses</a>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((el, index) => {
              return (
                <li
                  key={el.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    index === navLinks.length - 1 ? "mr-0" : "mb-4"
                  } text-white`}
                >
                  <a href={`#${el.id}`}>{el.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
