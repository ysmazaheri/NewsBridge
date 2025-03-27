export interface Image {
  image_id: number; // Primary key, auto-incremented
  s3_key: string; // S3 key for the image
  file_name: string; // Name of the file
  file_size: number; // Size of the file in bytes
  file_type: string; // Type of the file
  uploaded_at: string; // Timestamp of when the image was uploaded
}