"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "@/api/axiosApi";

const AuthGuard = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    api.get("/auth/me").catch(() => { });
  }, [router]);

  return children;
};

export default AuthGuard;
