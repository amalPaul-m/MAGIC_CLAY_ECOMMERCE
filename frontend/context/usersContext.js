"use client";

import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import api from "@/api/axiosApi"

const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get("/account");
      setUser(response.data.userdata);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <UsersContext.Provider
      value={{
        user,
        loading
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export const useUser = () => useContext(UsersContext);
