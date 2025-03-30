import { User } from "../entities/dtos/UserDTO";

const mockUser: User = {
    user_id: 100,
    first_name: "Kieran",
    last_name: "Serra",
    email: "kieranserra@umass.edu",
    password_hash: "dk1312i3das",
    profile_pic: null,
    date_of_birth: "02/13/2004",
    role: "user",
    created_at: "02/13/2004",
};

export default mockUser;