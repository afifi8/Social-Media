"use client";
import { useCurrentUser } from "@/context/ProfileContexts";
import Image from "next/image";
import React from "react";

const InfoProfilePage = () => {
  const { user, loading } = useCurrentUser();

  if (loading) {
    return (
      <div className=" w-full mb-4 h-fit p-3  bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl">
        <div className="m-3 p-2 flex items-center">
          <div className="rounded-full object-cover bg-slate-300 animate-pulse w-[60px] h-[60px]"></div>

          <div className="text-sm font-semibold ml-3">
            <div className=" rounded-xl bg-slate-300 py-2 px-6 animate-pulse"></div>

            <div className=" font-normal relative rounded-xl bg-slate-300 m-1 py-2 w-[100px] animate-pulse"></div>
            <h1 className=" rounded-xl bg-slate-300 m-1 py-2 w-[100px] animate-pulse"></h1>
          </div>
        </div>

        <div className=" ml-8">
          <h1 className=" rounded-xl bg-slate-300 m-1 py-2 px-10 w-[100px] animate-pulse "></h1>
          <div className=" ml-10 ">
            <li className="rounded-xl bg-slate-300 my-2 outline-none list-none  py-2 px-10 w-[100px] animate-pulse"></li>
            <li className="rounded-xl bg-slate-300 my-2 outline-none list-none  py-2 px-10 w-[100px] animate-pulse"></li>
            <li className="rounded-xl bg-slate-300 my-2 outline-none list-none  py-2 px-10 w-[100px] animate-pulse"></li>
            <li className=" rounded-xl bg-slate-300 my-2 outline-none list-none  py-2 px-10 w-[100px] animate-pulse"></li>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full h-fit mb-4 p-3 bg-white/10 backdrop-blur-2xl shadow-2xl rounded-3xl">
      <div className="m-3 p-2 flex items-center">
        <Image
          src={`http://localhost:5000/assets/userAvatars/${user?.avatar}`}
          width={2000}
          height={2000}
          alt={`Ahmed Profile`}
          className="rounded-full object-cover w-[60px] h-[60px]"
        />
        <div className="text-sm text-white font-semibold ml-3">
          {user?.fullName}
          <div className="text-slate-200 font-normal">{user?.email} </div>
          <h1 className=" text-xs text-white font-semibold">{user?.mainJob}</h1>
        </div>
      </div>

      <div className=" ml-8">
        <h1 className=" text-xl text-slate-200 font-semibold ">
          Your Skills :{" "}
        </h1>
        <div className=" ml-6 text-white ">
          {user?.Skills?.map((skill, index) => (
            <li key={index} className=" font-medium mb-1">
              {skill}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoProfilePage;
