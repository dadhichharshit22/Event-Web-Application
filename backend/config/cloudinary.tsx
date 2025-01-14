import { v2 as cloudinary } from 'cloudinary'; 

interface CloudinaryConfig {
  cloud_name: string | undefined;
  api_key: string | undefined;
  api_secret: string | undefined;
}

export const cloudinaryConnect = (): void => {
  try {
    const config: CloudinaryConfig = {
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    };

    cloudinary.config(config);
  } catch (error) {
    console.error(error);
  }
};
