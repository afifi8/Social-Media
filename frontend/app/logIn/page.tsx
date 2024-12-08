"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SocialButton from "@/components/SocialButton";
import { useRouter } from "next/navigation";
import handleLogin from "@/api/handleLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Handle login button click
  // const handleLoginClick = async () => {
  //   if (!email || !password) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }

  //   await handleLogin(email, password, router);
  // };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/Blue-Abstract-Background-4K-Wallpaper.jpg"
        alt="Background image"
        fill
        className="absolute z-[-10] object-cover"
        priority
      />

      {/* Decorative spinning circles */}
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 absolute left-6 animate-slow-spin bottom-6"></div>
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-700 to-cyan-400 absolute right-6 animate-slow-spin top-6"></div>

      {/* Main container */}
      <div className="w-[90%] h-[80%] bg-white/10 backdrop-blur-lg shadow-2xl rounded-3xl flex flex-col p-6 relative">
        {/* Header Section */}
        <div className="absolute right-[300px] top-10 w-[500px]">
          <h1 className="text-white text-4xl font-bold">Log In Page</h1>
          <p className="text-gray-100 ml-9 mt-7">
            An innovative social media platform that enables users to connect, share content, communicate effortlessly, build niche communities, and enjoy modern features with a sleek, user-friendly interface.
          </p>

          {/* Social Login Buttons */}
          <SocialButton
            iconSrc="/google-icon.png"
            alt="Google"
            text="Log In with Google Account!"
          />
          <SocialButton
            iconSrc="/Facebook_Logo_(2019).png"
            alt="Facebook"
            text="Log In with Facebook Account!"
          />
          <SocialButton
            iconSrc="/github_PNG40.png"
            alt="Github"
            text="Log In with Github Account!"
          />
        </div>

        {/* Login Form */}
        <div className="w-[90%] m-20 max-w-[500px] space-y-6">
          {/* Email Input */}
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
              aria-label="Email"
              required
            />
          </div>

          {/* Password Input */}
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
              aria-label="Password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={() => handleLogin(email, password, router)}
            className="w-full py-3 mt-4 bg-gradient-to-r from-violet-700 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-[1.03] transition"
          >
            Log In
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-white mt-4">
            I do not have any account!{" "}
            <Link href="/signUp" className="text-blue-800 underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
