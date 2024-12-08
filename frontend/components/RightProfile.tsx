"use client";
import { useCurrentUser } from "@/context/ProfileContexts";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import SkillsSection from "./SkillsSection";

const RightProfile = () => {
  const { user, setUser } = useCurrentUser();
  const [isUploading, setIsUploading] = useState(false);
  const [isEditMainJob, setIsEditMainJob] = useState(false);
  const [isEditFullName, setIsEditFullName] = useState(false);

  const [token, setToken] = useState<string | null>("");

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    setToken(storedToken || "");
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("avatar", file);

    setIsUploading(true);
    try {
      const response = await axios.patch(
        "http://localhost:5000/api/user/addAvatar",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUser(response.data.user);
        console.log(response);
        console.log(user);
        alert("Avatar updated successfully!");
      } else {
        alert("Failed to upload the image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleEditMainJob = () => {
    setIsEditMainJob(true);
  };

  const handleSaveMainJob = async () => {
    try {
      setIsEditMainJob(false);

      const response = await axios.patch(
        "http://localhost:5000/api/user/editMainJob",
        { mainJob: user?.mainJob },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Main job updated successfully!");
      } else {
        alert("Failed to update main job.");
      }
    } catch (error) {
      console.error("Error updating main job:", error);
      alert("An error occurred while updating main job.");
    }
  };

  const handleEditFullName = () => {
    setIsEditFullName(true);
  };

  const handleSaveFullName = async () => {
    try {
      setIsEditFullName(false);

      const response = await axios.patch(
        "http://localhost:5000/api/user/editFullName",
        { fullName: user?.fullName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Full name updated successfully!");
      } else {
        alert("Failed to update full name.");
      }
    } catch (error) {
      console.error("Error updating full name:", error);
      alert("An error occurred while updating full name.");
    }
  };

  return (
    <div className="w-full relative h-fit rounded-3xl pb-12 bg-white/10 backdrop-blur-3xl">
      <div className="m-3 p-2 flex items-center">
        <div className="relative mr-4">
          <Image
            src={
              user?.avatar
                ? `http://localhost:5000/assets/userAvatars/${user.avatar}`
                : "/default-avatar.png"
            }
            width={60}
            height={60}
            alt="Profile Avatar"
            className="rounded-full object-cover"
          />
          <label
            htmlFor="ProfileImage"
            className="text-white text-3xl absolute bottom-[-10px] cursor-pointer right-[-10px]"
          >
            <IoIosAddCircleOutline />
          </label>
          <input
            type="file"
            className="hidden"
            id="ProfileImage"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        <div className="text-sm font-semibold text-white ml-3">
          {isEditFullName ? (
            <div>
              <input
                type="text"
                value={user?.fullName || ""}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                onBlur={handleSaveFullName}
                className="w-[90%] text-white bg-transparent border-b-2 border-white outline-none"
              />
            </div>
          ) : (
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={handleEditFullName}
            >
              {user?.fullName || "Your Name"} <CiEdit className="text-xl" />
            </div>
          )}

          <div className="text-slate-200 font-normal">
            {user?.email || "Your Email"}
          </div>
          {isEditMainJob ? (
            <div>
              <input
                type="text"
                value={user?.mainJob || ""}
                onChange={(e) => setUser({ ...user, mainJob: e.target.value })}
                onBlur={handleSaveMainJob}
                className="w-[90%] text-white bg-transparent border-b-2
                 border-white outline-none"
              />
            </div>
          ) : (
            <div
              className="text-slate-50 flex items-center justify-between 
              w-[200px] font-semibold cursor-pointer"
              onClick={handleEditMainJob}
            >
              {user?.mainJob || "Your Job"} <CiEdit className="text-xl" />
            </div>
          )}
        </div>
      </div>

      {/* Skills Section */}


      <SkillsSection user={user} token={token} setUser={setUser} />

      {/* Loading State */}
      {isUploading && (
        <div className="absolute inset-0 flex items-center 
        justify-center bg-black/50">
          <p className="text-white font-semibold">Uploading...</p>
        </div>
      )}
    </div>
  );
};
export default RightProfile;
