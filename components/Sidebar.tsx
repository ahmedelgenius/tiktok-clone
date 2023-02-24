import React, { useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { GoogleLogin } from "react-google-login";
import { AiFillHome, AiOutlineMenu } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";
import Footer from "./Footer";
import SuggestedAccounts from "./SuggestedAccounts";
import Discover from "./Discover";
import useAuthStore from "../store/auth-store";

const Sidebar = () => {
  const [showSideBar, setShowSideBar] = useState(true);

  const { fetchAllUsers, allUsers }: any = useAuthStore();

  const normalLink =
    "flex items-center gap-3 hover:bg-primary xl:p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#e64980] rounded";

  return (
    <div>
      <div
        className="block xl:hidden  m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSideBar((prev) => !prev)}
      >
        {showSideBar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      {showSideBar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href="/">
              <div className={normalLink}>
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="text-xl hidden xl:block">For You</span>
              </div>
            </Link>
          </div>

          <Discover />
          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
