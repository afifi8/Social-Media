"use client";
import { useCurrentUser } from "@/context/ProfileContexts";
import axios from "axios";
import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";

const AboutMe = () => {
  const { user, setUser, loading } = useCurrentUser();
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [bio, setBio] = useState(user?.bio || "");

  const handleSaveBio = async () => {
    try {
      setIsEditingBio(false);
      const response = await axios.patch(
        "http://localhost:5000/api/user/editBio",
        { bio }, 
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response.status === 200) {
        setUser({ ...user, bio }); 
        alert("Bio updated successfully!");
      } else {
        alert("Failed to update bio.");
      }
    } catch (error) {
      console.error("Error updating bio:", error);
      alert("An error occurred while updating bio.");
    }
  };

  if (loading) {
    return (
      <div className="w-full flex-auto h-fit p-5 bg-[#E6EEFA] shadow-2xl rounded-3xl">
        <h1 className="text-xl text-gray-900 flex items-center mx-3 justify-between font-semibold">
          About Me
        </h1>
        <p className="mt-2 rounded-xl bg-slate-300 py-2 px-6 animate-pulse"></p>
      </div>
    );
  }

  return (
    <div className="w-full h-fit flex-auto p-5 bg-[#E6EEFA] mb-4 shadow-2xl rounded-3xl">
      <h1 className="text-xl text-gray-900 flex items-center mx-3 justify-between font-semibold">
        About Me
        <button onClick={() => setIsEditingBio(!isEditingBio)}>
          <CiEdit className="text-2xl" />
        </button>
      </h1>
      {isEditingBio ? (
        <div className="mt-2">
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded-lg"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
          <button
            onClick={handleSaveBio}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      ) : (
        <div className="mt-2 whitespace-pre-line">
          {user?.bio || "No bio available."}
        </div>
      )}
    </div>
  );
};

export default AboutMe;
