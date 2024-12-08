import React from "react";
import DataPost from "./DataPost";

const MiddeBottomProfile = () => {
  return (
    <div className=" w-full h-[700px]  
    relative flex-col items-center overflow-y-auto rounded-3xl
     bg-white/10 backdrop-blur-3xl">
      <DataPost />
    </div>
  );
};

export default MiddeBottomProfile;
