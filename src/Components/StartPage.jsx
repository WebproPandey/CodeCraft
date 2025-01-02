import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const StartPage = () => {
    const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    setIsClicked(true);
    setTimeout(() => {
      navigate("/home");
    }, 1000); 
  };
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#3f3e41] relative">
      <div className="MainHeading relative flex flex-col leading-[5rem] justify-center shadow-md h-[50%] border-2 rounded-md border-[#222] px-4 items-center">
        <h1 className="text-[4vw] font-sans">Welcome to</h1>
        <h1 className="text-[6vw] font-sans font-semibold">CodeCraft</h1>
      </div>
      <div className="auth flex justify-center items-center gap-2 mt-2">
      <button
          onClick={handleStart}
          className={`bg-white cursor-pointer font-semibold px-4 py-2 rounded-md transform transition duration-300 ${
            isClicked ? "scale-110 bg-blue-500 text-white" : "scale-100"
          }`}
        >
          Start Code
        </button>
      </div>
    </div>
  );
};

export default StartPage;
