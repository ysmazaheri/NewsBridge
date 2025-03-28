import { User } from "../dtos/UserDTO";

export interface UserViewModel {
  id: number;
  fullName: string;
  email: string;
  profilePicUrl?: string | null;
  role: "admin" | "user";
  createdAt: string;
}

export const mapUserToViewModel = (user: User): UserViewModel => ({
  id: user.user_id,
  fullName: `${user.first_name} ${user.last_name}`,
  email: user.email,
  profilePicUrl: user.profile_pic ? `/images/${user.profile_pic}` : null,
  role: user.role,
  createdAt: user.created_at,
});
