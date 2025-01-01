import React, { useState } from "react";

const ChangeView = ({ onLayoutChange }) => {
  const [show, setShow] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("ri-layout-top-fill");

  const handleIconChange = (iconClass, layoutClass) => {
    setSelectedIcon(iconClass);
    onLayoutChange(layoutClass); 
    setShow(false);
  };


  return (
    <div className="ChangeView relative">
      <button
        onClick={() => setShow((prevopen) => !prevopen)}
        className="mainButtonLayout bg-gray-800/40 px-3 py-2 rounded-md"
      >
        <i className={`${selectedIcon} text-md`}></i>
      </button>

      <div
        className={`${ show ? "" : "hidden"} layout absolute right-[0%] w-[25vh] h-fit shadow-md bg-gray-800/90 z-[22] px-2 py-2 rounded-md`}>
        <h2 className="pb-1 text-md">Change View</h2>
        <div className="mode border flex justify-between items-center">
          <button  
             onClick={() => handleIconChange("ri-layout-left-fill", "flex-row")}
             className={`px-3 py-2 rounded-md ${
              selectedIcon === "ri-layout-left-fill"
                ? "bg-gray-400/50"
                : "bg-gray-800/40"
            }`}
          >
            <i className="ri-layout-left-fill text-md"></i>
          </button>

          <button  onClick={() => handleIconChange("ri-layout-top-fill" , "flex-col")}
            className={`px-3 py-2 rounded-md ${
              selectedIcon === "ri-layout-top-fill"
                ? "bg-gray-400/50"
                : "bg-gray-800/40"
            }`}
          >
            <i className="ri-layout-top-fill text-md"></i>
          </button>

          <button  onClick={() => handleIconChange("ri-layout-right-fill" , "flex-row-reverse")}
            className={`px-3 py-2 rounded-md ${
              selectedIcon === "ri-layout-right-fill"
                ? "bg-gray-400/50"
                : "bg-gray-800/40"
            }`}
          >
            <i className="ri-layout-right-fill text-md"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeView;
