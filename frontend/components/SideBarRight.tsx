"use client"
import React from "react";
import Following from "./Following";
import InfoProfilePage from "./InfoProfilePage";
import { useCurrentUser } from "@/context/ProfileContexts";

const SideBarRight = () => {
  const { user } = useCurrentUser();

  return (
    <div className=" relative w-[18%] h-[90%]  ">
      <div className="rounded-3xl bg-white/10 backdrop-blur-2xl p-3 overflow-y-auto h-[48%] mb-8 ">
        <div className=" flex items-center mt-2 justify-around">
          <h1 className="text-gray-100 text-xl font-medium">Your Followers</h1>
          <div className=" text-slate-200">{user?.followers?.length}</div>
        </div>
        {user?.followers &&
          user?.followers.map((follower, index) => (
            <Following
              key={index}
              name={follower?.fullName}
              email={follower?.email}
              mainJob={follower?.mainJob}
              imageSrc={follower?.avatar}
            />
          ))}
      </div>
      <InfoProfilePage />
    </div>
  );
};

export default SideBarRight;
