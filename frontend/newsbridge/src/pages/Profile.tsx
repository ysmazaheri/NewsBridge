import React, { useState } from "react";
import { TextField, Button } from "../components/FormElements";
import { ToastContainer, toast } from "react-toastify";

// Mimics data we would retrieve from some API call
const mockData = {
  // Replace / utilize DTOs once Said's PR goes through
  user_id: 100, // Primary key, auto-incremented
  first_name: "Kieran", // First name of the user
  last_name: "Serra", // Last name of the user
  email: "kieranserra@umass.edu", // Email address, unique
  password_hash: "dk1312i3das", // Hashed password
  profile_pic: null, // Foreign key referencing images(image_id)
  date_of_birth: "02/13/2004", // Date of birth
  role: "user", // Role of the user
  created_at: "02/13/2004", // Timestamp of when the user was created
};

const ProfilePage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
  });

  const [userDetails, setUserDetails] = useState({
    firstName: mockData.first_name,
    lastName: mockData.last_name,
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    formName: string
  ) => {
    setFormData({
      ...formData,
      [formName]: event.target.value,
    });
  };

  const handleButtonClick = () => {
    if (!formData.firstName && !formData.lastName) {
      toast.error("Please fill out first and last name.");
      return;
    }
    if (!formData.firstName) {
      toast.error("First name is required.");
      return;
    }
    if (!formData.lastName) {
      toast.error("Last name is required.");
      return;
    }
    // Handle button click. Once backend is implemented, this will send the changes to backend through some API  call
    console.log("Submitted data:", formData);
    setUserDetails({
      firstName: formData.firstName,
      lastName: formData.lastName,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* User Profile Section */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-700">
            Welcome, {userDetails.firstName}
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            {/* Placeholder for Profile Picture, mockData.profile_pic */}
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div>
              <p className="text-lg font-semibold text-gray-700 hidden sm:block">
                {userDetails.firstName + " " + userDetails.lastName}
              </p>
              <p className="text-gray-500 hidden sm:block">{mockData.email}</p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-15 flex justify-end">
          <Button
            value="Save Changes"
            width={160}
            cornerRadius="rounded-full"
            boldness="font-bold"
            height="h-12"
            handleClick={handleButtonClick}
          />
        </div>

        {/* User Input Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            First Name
          </label>
          <div className="mt-2">
            <TextField
              defaultValue={"Your First Name"}
              onChange={(e) => handleInputChange(e, "firstName")}
              width={"100%"}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Last Name
          </label>
          <div className="mt-2">
            <TextField
              defaultValue={"Your Last Name"}
              onChange={(e) => handleInputChange(e, "lastName")}
              width={"100%"}
            />
          </div>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-600">
            Date of Birth
          </label>
          <div className="mt-2">
            <TextField
              defaultValue={"Your DOB"}
              onChange={(e) => handleInputChange(e, "dob")}
              width={"100%"}
              type={"date"}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProfilePage;
