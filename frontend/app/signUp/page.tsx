"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import handleSignup from "@/api/handleSignup";
import { useRouter } from "next/navigation";

const Page = () => {
  const [fullName , setFullName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] =useState("");
  const [confirmPassword  ,setConfirmPassword] = useState("");
  const router = useRouter();


  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Image
        src="/1713248.webp"
        alt="Background image"
        fill
        className="absolute z-[-10] object-cover"
      />

      <div
        className=" w-[300px] h-[300px] flex items-center justify-center rounded-full bg-gradient-to-r
       from-purple-600 to-cyan-400 absolute left-6 animate-slow-spin bottom-6 "
      ></div>

      <div
        className=" w-[300px] h-[300px] flex items-center justify-center rounded-full bg-gradient-to-r
       from-blue-700 to-cyan-400 absolute right-6 animate-slow-spin  top-6"
      ></div>

      <div className="w-[90%] h-[80%] relative bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl flex flex-col place-items-end">
        <div className="absolute left-[300px] top-10 w-[500px] h-fit">
          <h1 className="text-white text-4xl font-bold ">Sign Up Page</h1>
          <p className=" text-gray-100 ml-9 mt-7">
            An innovative social media platform that enables users to connect,
            share content, communicate effortlessly, build niche communities,
            and enjoy modern features with a sleek, user-friendly interface
          </p>
          <button
            className=" w-full text-center 
         flex items-center justify-center hover:scale-[1.01] transition mt-7 border p-1 text-lg text-white rounded-xl"
          >
            <Image
              src="/google-icon.png"
              alt="Google"
              width={30}
              height={30}
              className="mx-3"
            />
            LogIn with Google Account!
          </button>

          <button
            className=" w-full text-center 
         flex items-center justify-center hover:scale-[1.01] transition mt-7 border p-1 text-lg  text-white rounded-xl"
          >
            <Image
              src="/Facebook_Logo_(2019).png"
              alt="Google"
              width={30}
              height={30}
              className="mx-3"
            />
            LogIn with Facebook Account!
          </button>

          <button
            className=" w-full text-center 
         flex items-center justify-center hover:scale-[1.01] transition mt-7 border p-1 text-lg  text-white rounded-xl"
          >
            <Image
              src="/github_PNG40.png"
              alt="Google"
              width={30}
              height={30}
              className="mx-3"
            />
            LogIn with Github Account!
          </button>
        </div>

        <div className="w-[90%] m-20 max-w-[500px] space-y-6">
          <div>
            <label className="block text-slate-200 ml-3 mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Ahmed Farag..."
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full py-3 px-5 text-gray-800 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none shadow-md transition"
            />
          </div>

          <div>
            <label className="block text-slate-200 ml-3 mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email356@gmail.com..."
              className="w-full py-3 px-5 text-gray-800 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none shadow-md transition"
            />
          </div>

          <div>
            <label className="block text-slate-200 ml-3 mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mern@14/&&5...."
              className="w-full py-3 px-5 text-gray-800 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none shadow-md transition"
            />
          </div>

          <div>
            <label className="block text-slate-200 ml-3 mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Mern@14/&&5...."
              className="w-full py-3 px-5 text-gray-800 rounded-xl bg-white focus:ring-2 focus:ring-blue-500 outline-none shadow-md transition"
            />
          </div>

          <button 
          onClick={() => handleSignup(fullName , email , password , confirmPassword , router)}
          className="w-full py-3 mt-4 bg-gradient-to-r
           from-violet-700
           to-blue-600 text-white font-semibold rounded-xl 
           shadow-lg hover:scale-[1.03] transition">
            Create Account
          </button>

          <p className="text-center text-white mt-4">
            I already have an account!{" "}
            <Link href="/logIn" className="text-blue-800  underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
