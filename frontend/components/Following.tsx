import Image from "next/image";
import Link from "next/link";
import React from "react";

const Following = ({
  name,
  email,
  mainJob,
  imageSrc,
}: {
  name: string;
  email: string;
  mainJob: string;
  imageSrc: string;
}) => {
  return (
    <div className="w-[95%] rounded-xl mb-3 mx-auto">
      <Link href="#" className="m-3 p-2 flex items-center">
        {/* صورة المتابع */}
        <Image
          src={`http://localhost:5000/assets/userAvatars/${imageSrc}`}
          width={50}
          height={50}
          alt={`${name}'s profile image`}
          className="rounded-full object-cover w-[50px] h-[50px]"
        />
        {/* بيانات المتابع */}
        <div className="text-sm text-white font-semibold ml-3">
          {name}
          <div className="text-slate-200 font-normal">{email}</div>
          <div className="text-slate-200 font-medium">{mainJob}</div>
        </div>
      </Link>
    </div>
  );
};

export default Following;
