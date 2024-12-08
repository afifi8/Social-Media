"use client";
import { useCurrentUser } from "@/context/ProfileContexts";
import React from "react";

const LeftBottomProfile = () => {
  const { user, loading } = useCurrentUser();

  if (loading) {
    return (
      <div className=" w-full relative  h-fit rounded-3xl p-6 bg-white/10 backdrop-blur-2xl">
        <h1 className=" text-white text-lg flex items-center font-semibold mb-3">
          Likes :{" "}
          <span className=" bg-slate-600 ml-3 animate-pulse  h-[10px] rounded-2xl px-11 "></span>
        </h1>
        <h1 className=" text-white text-lg flex items-center font-semibold mb-3">
          Comments :{" "}
          <span className=" bg-slate-600 ml-3 animate-pulse  h-[10px] rounded-2xl px-11 "></span>
        </h1>
        <h1 className=" text-white text-lg flex items-center font-semibold mb-3">
          Saved Post :{" "}
          <span className=" bg-slate-600 ml-3 animate-pulse  h-[10px] rounded-2xl px-11 "></span>
        </h1>
        <h1 className=" text-white text-lg flex items-center font-semibold mb-3">
          Created Post :{" "}
          <span className=" bg-slate-600 ml-3 animate-pulse  h-[10px] rounded-2xl px-11 "></span>
        </h1>
        <h1 className=" text-white text-lg flex items-center font-semibold mb-3">
          Communities :{" "}
          <span className=" bg-slate-600 ml-3 animate-pulse  h-[10px] rounded-2xl px-11 "></span>
        </h1>
      </div>
    );
  }

  return (
    <div className=" w-full relative  h-fit rounded-3xl p-6 bg-white/10 backdrop-blur-2xl">
      <h1 className=" text-white text-lg font-semibold mb-3">
        Likes : <span className=" font-normal">{user?.numberOfLikes}</span>
      </h1>
      <h1 className=" text-white text-lg font-semibold mb-3">
        Comments :{" "}
        <span className=" font-normal">{user?.numberOfComments || 0}</span>
      </h1>
      <h1 className=" text-white text-lg font-semibold mb-3">
        Saved Post : <span className=" font-normal">46</span>
      </h1>
      <h1 className=" text-white text-lg font-semibold mb-3">
        Created Post : <span className=" font-normal">70</span>
      </h1>
      <h1 className=" text-white text-lg font-semibold mb-3">
        Communities : <span className=" font-normal">28</span>
      </h1>
    </div>
  );
};

export default LeftBottomProfile;
