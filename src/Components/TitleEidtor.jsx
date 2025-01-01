import React, { useState } from "react";

const TitleEditor = () => {
  const [title, setTitle] = useState("Untitled");
  const [isEditing, setIsEditing] = useState(false); 

  const handleSave = () => {
    if (title.trim() === "") {
      alert("Title cannot be empty!");
      return;
    }
    setIsEditing(false); 
  };

  return (
    <div className="LeftSide flex gap-2 items-center">
      {isEditing ? (
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-transparent outline-none border-b-2 text-white pl-2 capitalize"
            placeholder="Enter Your Title"
          />
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-1 rounded cursor-pointer"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <h1 className="text-xl capitalize">{title || "Untitled"}</h1>
          <i
            onClick={() => setIsEditing(true)}
            className="ri-edit-fill text-xl cursor-pointer"
          ></i>
        </div>
      )}
    </div>
  );
};

export default TitleEditor;
