export interface User {
  user_id: number; // Primary key, auto-incremented
  first_name: string; // First name of the user
  last_name: string; // Last name of the user
  email: string; // Email address, unique
  password_hash: string; // Hashed password
  profile_pic?: number | null; // Foreign key referencing images(image_id)
  date_of_birth?: string | null; // Date of birth
  role: 'admin' | 'user'; // Role of the user
  created_at: string; // Timestamp of when the user was created
}