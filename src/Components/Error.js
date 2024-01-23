import React from "react";
import { useNavigate } from "react-router-dom";
import errorCat from "../Assets/errorcat.svg";

const Error = () => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/browse");
  };
  return (
    <div class="h-screen w-screen bg-slate-900 bg-gradient-to-tr from-black flex items-center">
      <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
        <div class="mb-16 max-w-md">
          <div class="text-8xl font-dark font-bold  text-white">404</div>
          <p class=" text-4xl md:text-3xl font-light leading-normal  text-white">
            Sorry we couldn't find this page.
          </p>
          <p class="mb-8 text-3xl  text-white">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <button
            onClick={navigateHome}
            class="h-14 px-4 inline py-2 text-lg font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-slate bg-slate-600 active:bg-slate-600 hover:bg-slate-700"
          >
            Back to homepage
          </button>
        </div>
        <img alt="error-cat" class="object-cover" src={errorCat}></img>
      </div>
    </div>
  );
};

export default Error;
