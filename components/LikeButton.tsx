import React, { useEffect, useState } from "react";
import { MdFavorite } from "react-icons/md";
import { NextPage } from "next";

import useAuthStore from "../store/auth-store";

interface Iprops {
  handleLike: () => void;
  handleDislike: () => void;
  flex: string;
  likes: any[];
}
const LikeButton = ({ likes, handleLike, flex, handleDislike }: Iprops) => {
  const [alreadyLikes, setalreadyLikes] = useState(false);
  const { userProfile }: any = useAuthStore();
  const filterLikes = likes?.filter((like) => like._ref === userProfile?._id);

  useEffect(() => {
    if (filterLikes?.length > 0) {
      setalreadyLikes(true);
    } else {
      setalreadyLikes(false);
    }
  }, [likes]);

  return (
    <div className={`${flex} gap-6`}>
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLikes ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#F00]  "
            onClick={handleDislike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4 "
            onClick={handleLike}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold ">{likes?.length || 0}</p>
      </div>
    </div>
  );
};
export default LikeButton;
