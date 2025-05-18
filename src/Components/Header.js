import React, { useEffect, useState, useRef } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Slice/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, SIGN_UP_URL } from "../Utils/constants";
import { setSearchValue, setSearching } from "../Slice/searchSlice";

const Header = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearching = useSelector((store) => store.search.isSearching);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const signingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(() => {
        navigate("/error");
      });
  };

  const navigateHome = () => {
    navigate("/browse");
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });

    return () => {
      unSubscribe();
    };
  }, [navigate]);

  const setSearch = () => {
    dispatch(setSearching());
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-gray-950 flex justify-between align-middle ">
      <div>
        <img
          className="w-52"
          alt="netflix-logo"
          src={NETFLIX_LOGO}
          onClick={navigateHome}
        ></img>
      </div>
      <div>
        {user && (
          <div className="flex justify-center items-center align-middle mt-2">
            {isSearching && (
              <input
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base text-white font-normal leading-[1.6] outline-none focus:z-[3] focus:border-primary focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary focus:bg-slate-900"
                placeholder="Search"
                onChange={(e) => {
                  dispatch(setSearchValue(e.target.value));
                }}
              ></input>
            )}
            <button
              class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
              onClick={setSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="h-6 w-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div className="flex-col pl-4 justify-center align-middle transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative">
              <div
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="relative"
              >
                <img
                  className="w-10 h-10 rounded-sm cursor-pointer"
                  alt="netflix-logo"
                  src={SIGN_UP_URL}
                />
                {showDropdown && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-black bg-opacity-95 rounded-md shadow-2xl py-1 z-20 border border-gray-800 transform transition-all duration-200 ease-in-out animate-fadeIn backdrop-blur-sm"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="block w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#E50914] font-medium transition-all duration-200 ease-in-out hover:translate-x-1">
                      Settings
                    </button>
                    <div className="border-t border-gray-800 my-1 opacity-50"></div>
                    <button
                      onClick={() => signingOut()}
                      className="block w-full text-left px-4 py-2.5 text-sm text-white hover:bg-[#E50914] font-medium transition-all duration-200 ease-in-out hover:translate-x-1"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
