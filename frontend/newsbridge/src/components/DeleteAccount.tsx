import React from "react";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import { Button } from "./FormElements";

interface DeleteAccountProps {
  onClose: () => void;
}

const DeleteAccount: React.FC<DeleteAccountProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    // To be replaced with backend API call
    console.log("Account deleted");
    // Redirect to Sign In page
    navigate("/sign-in");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-2">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-6 rounded-lg shadow-lg text-center">
        <FaQuestionCircle className="w-12 h-12 mx-auto mb-4" />
        <h2 className="text-xl mb-4 font-bold">
          Confirm deletion. This CANNOT be undone.
        </h2>
        <div className="flex justify-center space-x-4">
          <Button
            value="Cancel"
            width={100}
            bgColor="bg-gray-300"
            borderColor="border-gray-300"
            textColor="text-black"
            boldness="font-bold"
            handleClick={onClose}
          />
          <Button
            value="Yes"
            width={100}
            bgColor="bg-red-600"
            borderColor="border-red-600"
            textColor="text-white"
            boldness="font-bold"
            handleClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
