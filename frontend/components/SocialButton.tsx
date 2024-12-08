import Image from "next/image";

const SocialButton = ({
  iconSrc,
  alt,
  text,
}: {
  iconSrc: string;
  alt: string;
  text: string;
}) => (
  <button className="w-full flex items-center justify-center hover:scale-[1.01] transition mt-7 border p-1 text-lg text-white rounded-xl">
    <Image src={iconSrc} alt={alt} width={30} height={30} className="mx-3" />
    {text}
  </button>
);

export default SocialButton;
