"use client";
import { useCurrentUser } from "@/context/ProfileContexts";
import Image from "next/image";
import React from "react";

const FollowerAndIng = () => {
  const { user, loading, error } = useCurrentUser();
  const arr = ["0px", "10px", "20px", "30px", "40px"];

  if (loading) {
    return (
      <div className=" w-full h-fit mb-10 p-5 flex items-center justify-between bg-[#E6EEFA] shadow-2xl rounded-3xl">
        <div className=" text-center w-[50%] h-full">
          <h1 className=" rounded-xl bg-slate-300 py-2 px-6 animate-pulse"></h1>
          <div className=" flex items-center justify-center mt-4">
            {arr.map((arr, index) => (
              <div
                key={index}
                className={`w-[50px]  h-[50px] relative rounded-full bg-slate-300 py-2 px-6 left-[-${arr}]  animate-pulse`}
              ></div>
            ))}
          </div>
        </div>

        <div className=" text-center w-[50%] h-full">
          <h1 className=" rounded-xl bg-slate-300 py-2 mx-4 animate-pulse"></h1>
          <div className=" flex items-center justify-center mt-4">
            {arr.map((arr, index) => (
              <div
                key={index}
                className={`w-[50px]  h-[50px] relative rounded-full bg-slate-300 py-2 px-6 left-[-${arr}]  animate-pulse`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" w-full h-fit p-5 flex mb-6 items-center justify-between bg-[#E6EEFA] shadow-2xl rounded-3xl">
      <div className=" text-center w-[50%] h-full">
        <h1 className=" text-lg font-semibold">Following : {user?.followings?.length}</h1>
        <div className=" flex items-center justify-center mt-4">
          <Image
            src="/1.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89]"
          />
          <Image
            src="/2.png"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-10px]"
          />
          <Image
            src="/3.png"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-20px]"
          />{" "}
          <Image
            src="/4.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-30px]"
          />
          <Image
            src="/5.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-40px]"
          />
        </div>
      </div>

      <div className=" text-center w-[50%] h-full">
        <h1 className=" text-lg font-semibold">Followers : {user?.followers?.length}</h1>
        <div className=" flex items-center justify-center mt-4">
          <Image
            src="/6.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89]"
          />
          <Image
            src="/7.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-10px]"
          />
          <Image
            src="/8.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-20px]"
          />{" "}
          <Image
            src="/9.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-30px]"
          />
          <Image
            src="/10.jpg"
            alt="picture"
            width={60}
            height={60}
            className=" rounded-full object-cover w-[50px] h-[50px] border-2 border-[#093D89] relative left-[-40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FollowerAndIng;
