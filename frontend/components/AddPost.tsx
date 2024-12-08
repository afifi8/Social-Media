import React, { useState } from "react";
import axios from "axios";
import TextareaComponent from "./TextareaComponent";
import ActionsComponent from "./ActionsComponent";
import Image from "next/image";

interface AddPostProps {
  context: string;
  setContext: React.Dispatch<React.SetStateAction<string>>;
  token: string | null;
}

const AddPost: React.FC<AddPostProps> = ({ context, setContext, token }) => {
  const [isUploading, setIsUploading] = useState(false); // Uploading state
  const [imageName, setImageName] = useState<string | null>(null); // Uploaded image name

  const handleImagePostUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("PostImage", file);

    setIsUploading(true); // Start uploading
    try {
      const response = await axios.post(
        "http://localhost:5000/api/post/addImagePost",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        setImageName(response.data.fileName); // Store image name
      } else {
        alert("Failed to upload the image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    } finally {
      setIsUploading(false); // Stop uploading
    }
  };

  const handlePost = async () => {
    if (!token) {
      alert("Token is missing! Please log in.");
      return;
    }

    const postData = {
      content: context,
      imageName: imageName || null, // Include the image name if uploaded
    };

    console.log(postData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/post/createPost",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert("Post created successfully!");
        setContext(""); // Clear context after successful submission
        setImageName(null); // Clear image preview
      } else {
        alert("Failed to create the post.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("An error occurred while creating the post.");
    }
  };

  return (
    <div className="w-full rounded-3xl bg-white/10 backdrop-blur-lg mb-4 min-h-[20%]">
      {/* Textarea Component */}
      <TextareaComponent
        value={context}
        onChange={(e) => setContext(e.target.value)}
      />

      {/* Image Preview or Uploading Indicator */}
      {isUploading ? (
        <div className="flex justify-center items-center w-full px-5 py-2 text-white">
          <span className="text-lg font-semibold animate-pulse">
            Uploading image, please wait...
          </span>
        </div>
      ) : (
        imageName && (
          <div
            className="w-[97%] mx-auto rounded-2xl mb-3 flex items-center
           justify-center  bg-[#E6EEFA] p-5"
          >
            <Image
              src={`http://localhost:5000/assets/ImagePosts/${imageName}`}
              alt={`Uploaded Image: ${imageName}`}
              className="w-full shadow-2xl rounded-lg "
              width={800}
              height={600}
            />
          </div>
        )
      )}

      {/* Actions Component */}
      <ActionsComponent
        handleImageUpload={handleImagePostUpload}
        onPost={handlePost}
      />
    </div>
  );
};

export default AddPost;
