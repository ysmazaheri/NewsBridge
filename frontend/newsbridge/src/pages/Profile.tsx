import { useState, useRef, ChangeEvent, FC } from "react";
import { TextField, Button } from "../components/Form/FormElements";
import { ToastContainer, toast } from "react-toastify";
import DeleteAccount from "../components/Profile/DeleteAccount";
import {
  UserViewModel,
  mapUserToViewModel,
} from "../entities/viewmodels/UserVM";
import mockUser from "../mocks/mockUser";
import { inputFieldsProfile } from "../utils/constants";

// We will utilize this VM to load data into our component
const userVM: UserViewModel = mapUserToViewModel(mockUser);
const today: string = new Date().toISOString().split("T")[0];

const ProfilePage: FC = () => {
  const [displayData, setDisplayData] = useState(userVM);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    date_of_birth: "",
    email: "",
  });
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    formName: string
  ) => {
    setFormData({
      ...formData,
      [formName]: event.target.value,
    });
  };

  const handleButtonClick = () => {
    if (
      !formData.firstName &&
      !formData.lastName &&
      !formData.email &&
      !formData.date_of_birth
    ) {
      toast.error("Please fill out the field(s) to update.");
      return;
    }
    if (
      formData.date_of_birth &&
      (formData.date_of_birth > today || formData.date_of_birth < "1900-01-01")
    ) {
      toast.error("Please input a valid date of birth.");
      return;
    }
    // When the user updates data, we want to update both in-state and backend.
    // If the field is empty, we don't change anything.
    setDisplayData((prevData) => {
      const updatedFirstName =
        formData.firstName.trim() !== ""
          ? formData.firstName
          : prevData.firstName;
      const updatedLastName =
        formData.lastName.trim() !== "" ? formData.lastName : prevData.lastName;
      const updatedEmail =
        formData.email.trim() !== "" ? formData.email : prevData.email;
      return {
        ...prevData,
        firstName: updatedFirstName,
        lastName: updatedLastName,
        email: updatedEmail,
        fullName: `${updatedFirstName} ${updatedLastName}`,
      };
    });
    console.log("Submitted data:", formData);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("File selected:", file);
      const imageURL = URL.createObjectURL(file);
      setDisplayData((prevState) => ({
        ...prevState,
        profilePicUrl: imageURL,
      }));
    }
  };

  const handleProfilePicClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-6xl mx-auto p-6 z-50">
      {/* User Profile Section */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-700">
            Welcome, {displayData.firstName}
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            {/* Profile Picture */}
            <div
              onClick={handleProfilePicClick}
              className="relative w-20 h-20 rounded-full cursor-pointer overflow-hidden group border-4 border-gray-400 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={displayData.profilePicUrl || "Default_pfp.png"}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              {/* Hover Effect with Plus Icon */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-4xl font-bold -mt-2">+</span>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-700 hidden sm:block">
                {displayData.fullName}
              </p>
              <p className="text-gray-500 hidden sm:block">
                {displayData.email}
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end items-center">
          <Button
            value="Save Changes"
            width={160}
            cornerRadius="rounded-full"
            boldness="font-bold"
            height="h-12"
            handleClick={handleButtonClick}
          />
        </div>

        {/* User Input Fields (mapped) */}
        <div className="col-span-2 grid grid-cols-2 gap-4 mt-6">
          {inputFieldsProfile.map((field) => (
            <div key={field.field}>
              <label className="block text-sm font-medium text-gray-600">
                {field.label}
              </label>
              <div className="mt-2">
                <TextField
                  defaultValue={field.defaultValue}
                  onChange={(e) => handleInputChange(e, field.field)}
                  width="100%"
                  type={field.type}
                  {...(field.type === "date" && {
                    min: field.min,
                    max: field.max,
                  })}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-2 mt-5 flex justify-start">
          <Button
            value="Delete Account"
            width={160}
            cornerRadius="rounded-full"
            boldness="font-bold"
            height="h-12"
            bgColor="bg-red-400"
            borderColor="border-red-500"
            handleClick={() => setDeleteOpen(true)}
          />
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <ToastContainer />
      {isDeleteOpen && (
        <div className="text-primary">
          <DeleteAccount onClose={() => setDeleteOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default ProfilePage;