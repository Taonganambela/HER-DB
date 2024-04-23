import React from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Menu, MenuItem } from "@mui/material";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SidebarItem from "../components/SidebarItem";
import BackgroundLetterAvatars from "../components/Avatar";
import ThemeSwitcher from "../components/ThemeSwitcher";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

import PersonRemoveAlt1Icon from "@mui/icons-material/PersonRemoveAlt1";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
type DashboardLayoutProps = {
	Component: React.ComponentType;
};

function DashboardLayout({ Component }: DashboardLayoutProps) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="flex h-screen text-black bg-white dark:text-gray-400 dark:bg-[#202E3C]">
			<div
				id="1"
				className=" w-[22%] h-screen flex flex-col items-center fixed "
			>
				<div className="flex items-center ">
					<img
						src="/ZamtelLogo.png"
						alt="Zamtel Logo"
						className="w-10 mt-10 mb-10"
					/>
					<h1 className="uppercase ml-2">HR Database MNGT System</h1>
				</div>
				<Link to="/dashboard" className="">
					<SidebarItem Icon={GridViewIcon} text="dashboard" />
				</Link>
				<Link to="/notifications">
					<SidebarItem
						Icon={NotificationsActiveIcon}
						text="notifications"
					/>
				</Link>
				<Link to="/requisitions">
					<SidebarItem Icon={DescriptionIcon} text="requisitions" />
				</Link>
				<Link to="/onboarding">
					<SidebarItem Icon={PersonAddAltIcon} text="onboarding" />
				</Link>
				<Link to="/offboarding">
					<SidebarItem
						Icon={PersonRemoveAlt1Icon}
						text="offboarding"
					/>
				</Link>
				{/* <Link to="/employees">
          <SidebarItem Icon={GroupsIcon} text="employees" />
        </Link> */}

				<Link to="/dragdropfileuploader">
					<SidebarItem Icon={HistoryEduIcon} text="resignation" />
				</Link>

				<Link to="/announcements">
					<SidebarItem
						Icon={CampaignOutlinedIcon}
						text="announcements"
					/>
				</Link>

				<div className="p-2 rounded-md space-x-4 flex items-center justify-center absolute bottom-2 bg-green-700 w-56">
					<LogoutIcon className="text-white  dark:text-content" />
					<h1 className=" dark:text-content text-white ">Logout</h1>
				</div>
			</div>

			<div className="w-[78%] fixed top-0 right-0 ">
				<div className="flex justify-between py-6 border-b-2 dark:border-b-[#202e3c] dark:bg-[#202e3c]">
					<div className="flex items-center space-x-8 px-2 mr-4">
						<div className=" rounded-xl dark:bg-bkg text-gray-500 border border-green-500 dark:border-green-500">
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

					<div className="flex items-center  bg-white text-gray-900 dark:bg-[#202E3C]">
						<ThemeSwitcher />
						<div className="flex space-x-2 ml-4 items-center mr-4">
							<BackgroundLetterAvatars
								name="Taonga Nambela"
								size={56}
							/>

							<div className="flex flex-col dark:border-b-gray bg-white text-gray-900 dark:bg-[#202E3C]">
								<button
									id="basic-button"
									aria-controls={
										open ? "basic-menu" : undefined
									}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									onClick={handleClick}
								>
									<h2 className=" font-semibold  dark:text-gray-400 text-gray-700">
										Nahshon Kampamba
									</h2>
								</button>
								<h3 className="text-gray-600 dark:text-gray-400">
									Software Developer
								</h3>

								<div className="dark:bg-slate-900">
									<Menu
										id="basic-menu"
										anchorEl={anchorEl}
										open={open}
										onClose={handleClose}
										MenuListProps={{
											"aria-labelledby": "basic-button",
										}}
										className=""
									>
										<Link to="employeeDetails">
											<MenuItem onClick={handleClose}>
												{" "}
												<AccountCircleIcon className="mr-2 text-gray-800" />
												Profile
											</MenuItem>
										</Link>
										<Link to="/resignation">
											<MenuItem onClick={handleClose}>
												{" "}
												<HistoryEduIcon className="mr-2 text-gray-800" />
												Resign
											</MenuItem>
										</Link>

										<Link to="/onboardingPlan">
											<MenuItem onClick={handleClose}>
												{" "}
												<GroupAddIcon className="mr-2 text-gray-800" />
												Onboarding Plan
											</MenuItem>
										</Link>
									</Menu>
								</div>
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
