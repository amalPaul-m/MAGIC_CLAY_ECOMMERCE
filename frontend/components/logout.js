"use client";

import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";
import api from "@/api/axiosApi"


const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      api.post("/auth/logout");
      router.replace("/"); 
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <button onClick={handleLogout} className="cursor-pointer flex items-center gap-3 text-gray-700 font-medium hover:text-black transition">
    <MdLogout size={20} />
    Logout
    </button>
  );
}

export default LogoutButton;