import React, { useEffect } from "react";
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
  const signingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch(() => {
        navigate("/error");
      });
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

  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-gray-950 flex justify-between">
      <div>
        <img className="w-52 " alt="netflix-logo" src={NETFLIX_LOGO}></img>
      </div>
      <div>
        {user && (
          <div className="flex justify-center items-center">
            {isSearching && (
              <input
                className="p-2 h-11 mr-3 w-72 bg-inherit border-spacing-2 text-blue-50 outline backdrop-opacity-95 rounded-md  transition duration-150 ease-out hover:ease-in"
                onChange={(e) => {
                  dispatch(setSearchValue(e.target.value));
                }}
              ></input>
            )}
            <button
              className="w-24 h-12 rounded-sm text-white bg-slate-500 hover:opacity-50"
              onClick={setSearch}
            >
              Search
            </button>
            <div className="flex-col pl-8 justify-items-center">
              <div>
                <img
                  className="w-14 rounded-sm"
                  alt="netflix-logo"
                  src={SIGN_UP_URL}
                />
              </div>
              <div>
                <span className="text-white" onClick={() => signingOut()}>
                  Sign-Out
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
