import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import SideBarLeft from "@/components/SideBarLeft";
import Content from "@/components/Content";
import SideBarRight from "@/components/SideBarRight";
// import Link from "next/link";

const Page = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex pt-5   justify-around">
      <Image
        src="/R.jpg"
        alt="Background image"
        fill
        className="absolute z-[-10] object-cover"
        priority
      />
      <Header />
      <SideBarLeft />
      <Content />
      <SideBarRight />
    </div>
  );
};
export default Page;
