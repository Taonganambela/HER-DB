import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextField } from "@mui/material";
import SidebarItem from "../components/SidebarItem";
import BackgroundLetterAvatars from "../components/Avatar";
import ThemeSwitcher from "../components/ThemeSwitcher";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";

type DashboardLayoutProps = {
  Component: React.ComponentType;
};

function DashboardLayout({ Component }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      <div
        id="1"
        className="bg-content dark:bg-bkg dark:text-content w-[22%] h-screen flex flex-col items-center fixed "
      >
        <div className="flex items-center">
          <img
            src="/ZamtelLogo.png"
            alt="Zamtel Logo"
            className="w-10 mt-10 mb-10"
          />
          <h1 className="uppercase ml-2">HR Database MNGT System</h1>
        </div>
        <Link to="/dashboard">
          <SidebarItem Icon={GridViewIcon} text="dashboard" />
        </Link>
        <Link to="/notifications">
          <SidebarItem Icon={NotificationsActiveIcon} text="notifications" />
        </Link>
        <Link to="/requisitions">
          <SidebarItem Icon={DescriptionIcon} text="requisitions" />
        </Link>
        <Link to="/onboarding">
          <SidebarItem Icon={PersonAddAltIcon} text="onboarding" />
        </Link>
        <Link to="/offboarding">
          <SidebarItem Icon={PersonRemoveAlt1Icon} text="offboarding" />
        </Link>
        <Link to="/employees">
          <SidebarItem Icon={GroupsIcon} text="employees" />
        </Link>

        <Link to="/announcements">
          <SidebarItem Icon={CampaignOutlinedIcon} text="announcements" />
        </Link>

        <Link to="/departments">
          <SidebarItem Icon={AccountTreeIcon} text="departments" />
        </Link>

        <div className="p-2 rounded-md space-x-4 flex items-center justify-center absolute bottom-2 bg-green-700 w-56">
          <LogoutIcon className="text-white  dark:text-content" />
          <h1 className=" dark:text-content text-white ">Logout</h1>
        </div>
      </div>

      <div className="w-[78%] fixed top-0 right-0 ">
        <div className="flex justify-between py-6 border-b-2 dark:border-b-bkg dark:bg-bkg">
          <div className="flex items-center space-x-8 px-2 mr-4">
            <div className=" rounded-xl dark:bg-bkg text-gray-500 border border-green-500 dark:border-sky-500">
              <IconButton>
                <SearchIcon className="dark:text-content" />
              </IconButton>
              <input
                type="text"
                className="p-2 w-64 rounded-xl dark:bg-bkg dark:text-content focus:outline-none hover:outline-none focus:border-green-500 px-4 py-2"
                placeholder="Search"
              />
            </div>
          </div>

          <div className="flex items-center">
            <ThemeSwitcher />
            <div className="flex space-x-2 ml-4 items-center mr-4">
              <BackgroundLetterAvatars name="Nahshon Kampamba" size={56} />
              <div className="flex flex-col">
                <h2 className="font-semibold text-bkg dark:text-content">
                  Nahshon Kampamba
                </h2>
                <h3 className="text-gray-600 dark:text-gray-400">
                  Software Developer
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen overflow-y-scroll pb-20 bg-gray-100">
          <Component />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
