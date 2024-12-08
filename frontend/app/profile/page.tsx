import AboutMe from "@/components/AboutMe";
import FollowerAndIng from "@/components/FollowerAndIng";
import Header from "@/components/Header";
import InfoProfilePage from "@/components/InfoProfilePage";
import LeftBottomProfile from "@/components/LeftBottomProfile";
import MiddeBottomProfile from "@/components/MiddeBottomProfile";
import RightProfile from "@/components/RightProfile";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <Image
        src="/c68a76b53574a65a366b6556cdd8edf0.jpg"
        alt="Background image"
        fill
        className="absolute z-[-10] object-cover"
        priority
      />
      <Header />
      <div className=" w-[97%] flex mx-auto p-5 h-screen overflow-hidden  justify-around">
        <div className="w-[20%]">
          <InfoProfilePage />
          <LeftBottomProfile />
        </div>

        <div className=" w-[47%]">
          <AboutMe />
          <MiddeBottomProfile />
        </div>

        <div className=" w-[30%] ">
          <FollowerAndIng />
          <RightProfile />
        </div>
      </div>
    </div>
  );
};
export default page;
