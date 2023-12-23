import React, { useEffect } from "react";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../Slice/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

const SIGN_UP_URL =
  "https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4";

const Header = () => {
  const user = auth.currentUser;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch(() => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/browse");
      } else {
        navigate("/");
      }
    });
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
