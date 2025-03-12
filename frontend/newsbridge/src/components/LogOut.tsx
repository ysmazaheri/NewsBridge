import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';
import { Button } from './FormElements'; // Import Button component

interface LogOutProps {
    onClose: () => void;
}

const LogOut: React.FC<LogOutProps> = ({ onClose }) => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        // Redirect to Sign In page
        navigate("/sign-in");
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <FaQuestionCircle className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-xl mb-4">Are you leaving?</h2>
                <div className="flex justify-center space-x-4">
                    <Button
                        value="Cancel"
                        width={100} // Set width to a reasonably small number
                        bgColor="bg-gray-300"
                        borderColor="border-gray-300"
                        textColor="text-black"
                        handleClick={onClose}
                    />
                    <Button
                        value="Yes"
                        width={100} // Set width to a reasonably small number
                        bgColor="bg-red-600"
                        borderColor="border-red-600"
                        textColor="text-white"
                        handleClick={handleSignOut}
                    />
                </div>
            </div>
        </div>
    );
};

export default LogOut;
