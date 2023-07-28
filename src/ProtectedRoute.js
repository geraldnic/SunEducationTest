import React from "react";
import { useCookies } from "react-cookie";
import AuthModal from "./components/Modals/authModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["access_token"]);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  const isAuthenticated = cookies.access_token;
  return isAuthenticated ? (
    children
  ) : (
    <AuthModal isOpen={isModalOpen} onClose={closeModal} close={closeModal} />
  );
};

export default ProtectedRoute;
