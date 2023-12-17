import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="background-img"
          className="bg-gradient-to-t from-black"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        ></img>
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-40 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold py-4 text-3xl">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full  bg-gray-700 rounded-md"
        />
        <button className="p-4 my-6 bg-red-500 w-full rounded-md">
          Sign In
        </button>
        <p className="p-4 my-6">Are you new to netflix Sign-up now</p>
      </form>
    </div>
  );
};

export default Login;
