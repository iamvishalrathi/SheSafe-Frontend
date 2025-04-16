import React from "react";
import { Link, NavLink } from "react-router-dom";
import RippleButton from "./RippleButton";
const Navbar = () => {
  return (
    // <div className="flex flex-row h-[120px] p-8 justify-around items-center bg-[#180722] border-b-2 border-b-white">
    //   <div className="flex flex-row justify-between items-center w-[1096px]">
    //     <div className=" flex flex-col w-[154px] gap-0">
    //       <span className="text-4xl text-white font-black font-sans italic text-center">
    //         Safe
    //       </span>
    //       <span className="text-4xl text-white text-end">Watch</span>
    //     </div>
    //     <div className="flex flex-row justify-between items-center gap-4">
    //       <NavLink
    //         to="/"
    //         className={({ isActive }) =>
    //           ` ${
    //             isActive ? "bg-slate-400" : " "
    //           } text-lg px-2 rounded-lg text-white`
    //         }
    //       >
    //         Home
    //       </NavLink>
    //       <NavLink
    //         to="/live"
    //         className={({ isActive }) =>
    //           ` ${
    //             isActive ? "bg-slate-400" : " "
    //           } text-lg px-2 rounded-lg text-white`
    //         }
    //       >
    //         Live
    //       </NavLink>
    //       <NavLink
    //         to="/event"
    //         className={({ isActive }) =>
    //           ` ${
    //             isActive ? "bg-slate-400" : " "
    //           } text-lg px-2 rounded-lg text-white`
    //         }
    //       >
    //         Event
    //       </NavLink>
    //       <NavLink
    //         to="/contact"
    //         className={({ isActive }) =>
    //           ` ${
    //             isActive ? "bg-slate-400" : " "
    //           } text-lg px-2 rounded-lg text-white`
    //         }
    //       >
    //         Contact
    //       </NavLink>
    //     </div>
    //   </div>
    //   <div className="flex flex-row justify-between items-center gap-2">
    //     <Link className=" text-lg rounded-lg bg-[#E3E3E3] px-1 ">Sign in</Link>
    //     <Link className=" text-lg text-white rounded-lg bg-[#2C2C2C] px-1">
    //       Register
    //     </Link>
    //   </div>
    // </div>

    //---------------------------------------------------------------/Uttkarsh/--------------------------------------
    <nav>
      <div className="logo">
        <svg
          width="40"
          height="27"
          viewBox="0 0 40 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.84 26.58C6.32 26.58 5.94 26.4 5.7 26.04C5.5 25.72 5.4 25.4 5.4 25.08C5.4 24.44 5.68 23.78 6.24 23.1C6.44 22.86 6.72 22.54 7.08 22.14C7.44 21.7 7.7 21.36 7.86 21.12C7.34 20.4 6.64 19.74 5.76 19.14C4.88 18.54 4.02 17.78 3.18 16.86C2.42 16.02 1.78 15 1.26 13.8C0.74 12.56 0.48 11.38 0.48 10.26C0.48 8.94 0.78 7.68 1.38 6.48C1.98 5.28 2.72 4.24 3.6 3.36C4.56 2.4 5.62 1.64 6.78 1.08C7.94 0.479999 9.14 0.179999 10.38 0.179999C11.22 0.179999 12.04 0.379999 12.84 0.779999C13.64 1.18 14.04 1.84 14.04 2.76C14.04 3.84 13.8 4.38 13.32 4.38C13.12 4.38 12.98 4.18 12.9 3.78C12.86 3.58 12.84 3.38 12.84 3.18C12.84 2.94 12.84 2.78 12.84 2.7C12.84 2.3 12.66 1.96 12.3 1.68C11.94 1.36 11.54 1.2 11.1 1.2C10.18 1.2 9.16 1.56 8.04 2.28C6.92 3 5.98 3.84 5.22 4.8C4.46 5.8 3.84 6.94 3.36 8.22C2.88 9.46 2.64 10.66 2.64 11.82C2.64 13.26 2.96 14.5 3.6 15.54C4.24 16.58 5 17.5 5.88 18.3C6.8 19.1 7.62 19.88 8.34 20.64C8.7 20.2 9.08 19.78 9.48 19.38C9.92 18.98 10.32 18.66 10.68 18.42C11 18.22 11.22 18.12 11.34 18.12C11.46 18.12 11.52 18.18 11.52 18.3C11.52 18.5 11.34 18.74 10.98 19.02C10.9 19.1 10.66 19.34 10.26 19.74C9.9 20.1 9.46 20.56 8.94 21.12C9.26 21.48 9.52 21.86 9.72 22.26C9.92 22.66 10.02 23.1 10.02 23.58C10.02 24.22 9.66 24.88 8.94 25.56C8.22 26.24 7.52 26.58 6.84 26.58ZM7.5 24.96C7.78 24.96 8.04 24.7 8.28 24.18C8.56 23.7 8.7 23.22 8.7 22.74C8.7 22.5 8.66 22.28 8.58 22.08C8.5 21.88 8.44 21.76 8.4 21.72C8.08 22.12 7.78 22.56 7.5 23.04C7.26 23.48 7.14 23.88 7.14 24.24C7.14 24.72 7.26 24.96 7.5 24.96ZM18.3366 25.38C16.8166 25.38 16.0566 23.6 16.0566 20.04C16.0566 18.16 16.1566 16.56 16.3566 15.24C16.5566 13.88 16.7566 12.56 16.9566 11.28C17.1566 9.96 17.2566 8.46 17.2566 6.78C17.2566 5.74 17.1766 4.84 17.0166 4.08C16.8566 3.32 16.5166 2.94 15.9966 2.94C15.7166 2.94 15.4766 3.06 15.2766 3.3C15.1166 3.5 14.9566 3.72 14.7966 3.96C14.6366 4.28 14.5166 4.44 14.4366 4.44C14.3566 4.44 14.3166 4.34 14.3166 4.14C14.3166 3.7 14.4566 3.2 14.7366 2.64C15.0566 2.08 15.4766 1.8 15.9966 1.8C16.6766 1.8 17.1966 2.16 17.5566 2.88C17.9166 3.6 18.1566 4.32 18.2766 5.04C18.3966 6.12 18.4566 7.12 18.4566 8.04C18.4566 9.64 18.3566 11.18 18.1566 12.66C17.9566 14.1 17.8566 15.78 17.8566 17.7C17.8566 19.62 18.0366 21.08 18.3966 22.08C18.7566 23.04 19.1766 23.52 19.6566 23.52C20.0166 23.52 20.4166 23.26 20.8566 22.74C21.2966 22.22 21.7166 21.6 22.1166 20.88C22.8766 19.56 23.5166 18.06 24.0366 16.38C24.5566 14.66 25.0366 13.06 25.4766 11.58C25.5966 11.1 25.8766 10.86 26.3166 10.86C26.9166 10.86 27.3566 11.16 27.6366 11.76C27.7566 12 27.8366 12.52 27.8766 13.32C27.9166 14.08 27.9366 15.08 27.9366 16.32C27.9366 16.96 27.9566 17.66 27.9966 18.42C28.0766 19.18 28.2166 19.82 28.4166 20.34C28.6166 20.86 28.9166 21.12 29.3166 21.12C29.8366 21.12 30.3366 20.46 30.8166 19.14C31.2566 17.82 31.5966 16.14 31.8366 14.1C32.1166 12.02 32.4766 10.08 32.9166 8.28C33.2366 6.88 33.6766 5.68 34.2366 4.68C34.8366 3.68 35.6366 3.18 36.6366 3.18C37.1566 3.18 37.6366 3.32 38.0766 3.6C38.5566 3.84 38.9366 4.1 39.2166 4.38C39.4966 4.66 39.6566 4.88 39.6966 5.04C39.7766 5.16 39.8166 5.28 39.8166 5.4C39.8166 5.68 39.7566 5.82 39.6366 5.82C39.4766 5.82 39.2966 5.72 39.0966 5.52C38.8566 5.28 38.4166 5.16 37.7766 5.16C36.9766 5.16 36.2966 5.58 35.7366 6.42C35.1766 7.26 34.7366 8.12 34.4166 9C33.9766 10.28 33.5966 11.68 33.2766 13.2C32.9566 14.72 32.6966 16.14 32.4966 17.46C32.2966 18.74 32.0966 19.7 31.8966 20.34C31.6566 21.22 31.3566 21.84 30.9966 22.2C30.6766 22.56 30.3166 22.74 29.9166 22.74C29.2766 22.74 28.6166 22.36 27.9366 21.6C27.2566 20.84 26.6566 19.94 26.1366 18.9C25.6566 17.82 25.3566 16.88 25.2366 16.08H25.1166C24.9566 17.04 24.6366 18.06 24.1566 19.14C23.6766 20.22 23.0966 21.24 22.4166 22.2C21.7766 23.12 21.0966 23.88 20.3766 24.48C19.6566 25.08 18.9766 25.38 18.3366 25.38Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="menu">
        <ul>
          <li>
            <div className="flex flex-row justify-between items-center gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-red-600" : "text-white "
                  } text-lg px-2 rounded-lg text-white`
                }
              >
                Home
              </NavLink>
            </div>
          </li>
          <li>
            <div className="flex flex-row justify-between items-center gap-4">
              <NavLink
                to="/live"
                className={({ isActive }) =>
                  ` ${
                    isActive ? "text-red-600" : "text-white "
                  } text-lg px-2 rounded-lg text-white`
                }
              >
                Live
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink
              to="/event"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-red-600" : "text-white "
                } text-lg px-2 rounded-lg text-white`
              }
            >
              Event
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-red-600" : "text-white "
                } text-lg px-2 rounded-lg text-white`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="log">
        <RippleButton text="Sign in" />
        <RippleButton text="Register" />
        {/* <button>Sign In</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
