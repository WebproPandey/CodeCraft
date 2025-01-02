import React, { useState } from "react";

const ChangeView = ({ onLayoutChange ,OnPaneLayOutChange ,EditorPaneLayOutChange }) => {
  const [show, setShow] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState("ri-layout-top-fill");

  const handleChange = (iconClass, layoutClass ,PanelayoutClass , EditorLayOutClass) => {
    setSelectedIcon(iconClass);
    onLayoutChange(layoutClass); 
    OnPaneLayOutChange(PanelayoutClass);
    EditorPaneLayOutChange(EditorLayOutClass)
    setShow(false);
  }
 


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
             onClick={() => handleChange("ri-layout-left-fill", "flex-row" ,"h-[90vh] w-[40%] flex-col  " ," min-h-[28vh]  w-full" )}

             className={`px-3 py-2 rounded-md ${
              selectedIcon === "ri-layout-left-fill"
                ? "bg-gray-400/50"
                : "bg-gray-800/40"
            }`}
          >
            <i className="ri-layout-left-fill text-md"></i>
          </button>

          <button  onClick={() => handleChange("ri-layout-top-fill" , "flex-col")}
            className={`px-3 py-2 rounded-md ${
              selectedIcon === "ri-layout-top-fill"
                ? "bg-gray-400/50"
                : "bg-gray-800/40"
            }`}
          >
            <i className="ri-layout-top-fill text-md"></i>
          </button>

          <button  onClick={() => handleChange("ri-layout-right-fill" , "flex-row-reverse" ,"h-[90vh] w-[60%] flex-col  "  ," min-h-[28vh]  w-full" )}
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
