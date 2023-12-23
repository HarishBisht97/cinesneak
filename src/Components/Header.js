import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Slice/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NETFLIX_LOGO, SIGN_UP_URL } from "../Utils/constants";

const Header = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  }, []);

  return (
    <div className="absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-gray-950 flex justify-between">
      <div>
        <img className="w-52 " alt="netflix-logo" src={NETFLIX_LOGO}></img>
      </div>
      <div>
        {user && (
          <div>
            <img
              className="w-14 rounded-sm"
              alt="netflix-logo"
              src={SIGN_UP_URL}
            ></img>
            <span onClick={() => signingOut()}>Sign-Out</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
