import React from "react";
import { FaShare } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { FaRegCircleUser } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";

interface ActionsProps {
  handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPost: () => void;
}

const ActionsComponent: React.FC<ActionsProps> = ({ handleImageUpload, onPost }) => {
  return (
    <div className="flex items-center p-7 pt-1 justify-around">
      <button
        onClick={onPost}
        className="flex items-center justify-center shadow-lg w-[500px] bg-gradient-to-r from-violet-700 to-blue-600 text-white font-semibold py-2 px-5 rounded-xl"
      >
        Public Post <GrSend className="text-2xl ml-3" />
      </button>

      <div className="flex items-center justify-between text-2xl text-white">
        <FaShare className="mx-2" />
        <MdDeleteOutline className="mx-2" />
        <div>
          <label htmlFor="UploadImagePost">
            <IoImagesOutline className="mx-2 hover:scale-[1.09] hover:text-red-500 transition" />
          </label>
          <input
            type="file"
            id="UploadImagePost"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
        <LuMapPin className="mx-2" />
        <FaRegCircleUser className="mx-2" />
      </div>
    </div>
  );
};

export default ActionsComponent;
