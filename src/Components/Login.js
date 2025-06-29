import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../Utils/signInValidate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Slice/userSlice";
import {
  APP_BACKGROUND_IMAGE,
  DUMMY_EMAIL,
  DUMMY_PASSWORD,
} from "../Utils/constants";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const toggleSigninForm = () => setIsSigninForm(!isSigninForm);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);

  const signUpSuccess = (user) => {
    dispatch(addUser({ email: user.email, accessToken: user.accessToken }));
  };

  const handleFormSubmit = (email, password) => {
    const errorMessage = validateForm(
      email.current.value,
      password.current.value
    );

    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }
    if (!isSigninForm)
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          signUpSuccess(userCredential.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          signUpSuccess(userCredential.user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSkipSignIn = () => {
    signInWithEmailAndPassword(auth, DUMMY_EMAIL, DUMMY_PASSWORD)
      .then((userCredential) => {
        signUpSuccess(userCredential.user);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 w-full h-full">
        <img
          alt="background-img"
          className="w-full h-full object-cover bg-gradient-to-t from-black"
          src={APP_BACKGROUND_IMAGE}
        />
      </div>
      <form
        className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit(email, password);
        }}
      >
        <h1 className="font-bold py-4 text-3xl">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-2 w-full  bg-gray-700 rounded-md"
        />
        {errorMessage && (
          <p className="text-red-500 py-4 text-sm">{errorMessage}</p>
        )}
        <button type="submit" className="p-4 my-6 bg-red-500 w-full rounded-md">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 my-6 hover:cursor-pointer" onClick={toggleSigninForm}>
          {isSigninForm
            ? "Are you new to netflix Sign-up now"
            : "Already registered! Sign-in now"}
        </p>
        <div className="border-t border-gray-700 my-4"></div>
        <button
          type="button"
          onClick={handleSkipSignIn}
          className="p-4 my-2 w-full bg-gray-700 hover:bg-gray-600 rounded-md transition-colors duration-200"
        >
          Skip Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
