"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { RiCommunityFill } from "react-icons/ri";
import { FaBell, FaUsers } from "react-icons/fa";
import Image from "next/image";
import { useCurrentUser } from "@/context/ProfileContexts";
import axios from "axios";
import { NavLink } from "./NavLink";
import NotificationsSidebar from "./NotificationsSidebar";
import { getSocket } from "@/utils/socket";

const Header = () => {
  const { user, loading } = useCurrentUser();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  // Fetch token from localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    setToken(storedToken);
  }, []);

  // Fetch notifications and handle real-time updates
  useEffect(() => {
    if (!token) return;

    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/notification/getNotifications",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setNotifications(response.data.notifications || []);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();

    // Setup WebSocket connection for real-time notifications
    const socket = getSocket();
    socket.on("newNotification", (populateNotifi) => {
      console.log(populateNotifi);
      setNotifications((prev) => [populateNotifi, ...prev]);
    });

    // Cleanup socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, [token]);

  // Toggle notifications sidebar and mark unread notifications as read
  const toggleNotifications = async () => {
    setShowNotifications((prev) => !prev);

    const unreadNotifications = notifications.filter((notif) => !notif.isRead);

    if (unreadNotifications.length > 0) {
      try {
        await axios.patch(
          "http://localhost:5000/api/notification/updateStatueNotification",
          unreadNotifications,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } catch (error) {
        console.error("Error updating notification status:", error);
      }
    }
  };

  // Return skeleton UI while loading user data
  if (loading) {
    return (
      <div className="z-10 fixed left-32 right-32 bg-white/10 h-[80px] rounded-t-3xl backdrop-blur-3xl bottom-0 flex items-center justify-around">
        <NavLink icon={AiFillHome} label="Home" />
        <NavLink icon={RiCommunityFill} label="Communities" />
        <Link href="/profile" className="relative text-white top-[-20px]">
          <div className="mx-auto border-2 object-cover bg-gray-200 animate-pulse rounded-full w-[80px] h-[80px] mb-2"></div>
          <div className="text-center animate-pulse px-6 rounded-xl py-2 bg-gray-200"></div>
        </Link>
        <NavLink icon={FaUsers} label="Friends" />
        <NavLink icon={FaBell} label="Notifications" badgeCount={0} />
      </div>
    );
  }

  // Generate profile image URL
  const serverUrl =
    process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:5000";
  const profileImage = user?.avatar
    ? `${serverUrl}/assets/userAvatars/${user.avatar}`
    : "/default-avatar.png";

  return (
    <div className="z-10 fixed left-32 right-32 bg-[#E6EEFA] h-[80px] rounded-t-3xl backdrop-blur-3xl bottom-0 flex items-center justify-around">
      {/* Navigation links */}
      <NavLink icon={AiFillHome} label="Home" />
      <NavLink icon={RiCommunityFill} label="Communities" />
      <Link href="/profile" className="relative top-[-20px]">
        <Image
          src={profileImage}
          alt="Profile"
          width={2000}
          height={2000}
          className="mx-auto border-2 object-cover rounded-full w-[80px] h-[80px] mb-2"
        />
        <div className="text-center">{user?.fullName || "Guest"}</div>
      </Link>
      <NavLink icon={FaUsers} label="Friends" />
      <NavLink
        icon={FaBell}
        label="Notifications"
        badgeCount={notifications.filter((notif) => !notif.isRead).length}
        onClick={toggleNotifications}
      />

      {/* Notifications Sidebar */}
      {showNotifications && (
        <NotificationsSidebar
          notifications={notifications}
          serverUrl={serverUrl}
        />
      )}
    </div>
  );
};

export default Header;
