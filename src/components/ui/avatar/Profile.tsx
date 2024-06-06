"use client"
import Image from "next/image";

const Profile: React.FC<{ name: string; avatar: string }> = ({
    name,
    avatar,
  }) => {
    const handleErrorAvatar = (
      e: React.SyntheticEvent<HTMLImageElement, Event>
    ) => {
      const target = e.target as HTMLImageElement;
      target.onerror = null; // To prevent infinite loop in case the default image also fails to load
      target.src = "/images/default_avatar.png";
      target.srcset = "/images/default_avatar.png";
    };
  
    return (
      <div className="flex gap-2 items-center">
        <p className="text-sm text-jet-black-200">{name}</p>
        <Image
          src={avatar}
          width={30}
          height={30}
          alt="avatar"
          onError={handleErrorAvatar}
        />
      </div>
    );
  };

  export default Profile