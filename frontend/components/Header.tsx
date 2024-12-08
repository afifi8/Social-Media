"use client";
import React from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { RiCommunityFill } from "react-icons/ri";
import { FaBell, FaUsers } from "react-icons/fa";
import Image from "next/image";
import { useCurrentUser } from "@/context/ProfileContexts";

// NavLink component
const NavLink = ({
  href,
  icon: Icon,
  label,
  badgeCount,
}: {
  href: string;
  icon: React.ComponentType;
  label: string;
  badgeCount?: number;
}) => (
  <Link href={href} className="text-white text-center relative">
    <div className="relative mx-auto w-fit">
      <Icon className="text-3xl mb-1 mx-auto" />
      {badgeCount !== undefined && (
        <span
          className="absolute bg-red-600 w-[20px] h-[20px] flex 
          justify-center items-center text-xs rounded-full top-[-9px] right-[-9px]"
        >
          {badgeCount}
        </span>
      )}
    </div>
    <div>{label}</div>
  </Link>
);

const Header = () => {
  const { user, loading } = useCurrentUser();

  if (loading)
    return (
      <div
        className="z-10 fixed left-32 right-32 bg-white/10 h-[80px] 
      rounded-t-3xl backdrop-blur-3xl bottom-0 flex items-center justify-around"
      >
        <NavLink href="/" icon={AiFillHome} label="Home" />
        <NavLink href="#" icon={RiCommunityFill} label="Communities" />

        <Link href="/profile" className="relative text-white top-[-20px]">
          <div className="mx-auto border-2 object-cover bg-gray-200 animate-pulse rounded-full w-[80px] h-[80px] mb-2"></div>
          <div className="text-center animate-pulse px-6 rounded-xl py-2 bg-gray-200"></div>
        </Link>

        <NavLink href="#" icon={FaUsers} label="Friends" />
        <NavLink href="#" icon={FaBell} label="Notifications" badgeCount={25} />
      </div>
    );

  const serverUrl =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";
  const profileImage = `${serverUrl}/assets/userAvatars/${user.avatar}`;

  return (
    <div
      className="z-10 fixed left-32 right-32 bg-white/10 h-[80px] 
      rounded-t-3xl backdrop-blur-3xl bottom-0 flex items-center justify-around"
    >
      <NavLink href="/" icon={AiFillHome} label="Home" />
      <NavLink href="#" icon={RiCommunityFill} label="Communities" />

      <Link href="/profile" className="relative text-white top-[-20px]">
        <Image
          src={profileImage}
          alt="Profile"
          width={70}
          height={70}
          className="mx-auto border-2 object-cover rounded-full w-[80px] h-[80px] mb-2"
        />
        <div className="text-center">{user?.fullName || "Guest"}</div>
      </Link>

      <NavLink href="#" icon={FaUsers} label="Friends" />
      <NavLink href="#" icon={FaBell} label="Notifications" badgeCount={25} />
    </div>
  );
};

export default Header;
