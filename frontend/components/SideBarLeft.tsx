"use client";

import React from "react";
import Image from "next/image";
import Following from "./Following";
import { useCurrentUser } from "@/context/ProfileContexts";

const SideBarLeft = () => {
  const { user } = useCurrentUser();

  return (
    <div className="w-[18%] rounded-3xl overflow-y-auto bg-white/10 backdrop-blur-2xl h-[90%]">
      <Image
        src="/beautiful-night-sky-sunset-scenery-digital-art-563@0@i.jpg"
        alt="Background image"
        width={2000}
        height={2000}
        className="rounded-xl w-[90%] mx-auto my-4"
      />
      <div className="p-3 pt-1 text-white">
        Believe in yourself, embrace challenges, and stay persistent. Every step
        forward brings you closer to your goals. Keep going, success is within
        your reach!
      </div>
      <hr className="w-[90%] mx-auto" />

      <div className=" flex items-center mt-2 justify-around">
        <h1 className="text-gray-100 text-xl font-medium">Your Following</h1>
        <div className=" text-slate-200">{user?.followings?.length}</div>
      </div>

      {/* تمرير البيانات من SideBarLeft إلى Following */}
      {user?.followings &&
        user?.followings.map((follower, index) => (
          <Following
            key={index}
            name={follower?.fullName}
            email={follower?.email}
            mainJob={follower?.mainJob}
            imageSrc={follower?.avatar}
          />
        ))}
    </div>
  );
};

export default SideBarLeft;
