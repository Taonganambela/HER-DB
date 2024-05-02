import { Box, Grid, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react'
type SidebarProps = {
    Component: React.ComponentType;
  };
function Drawer({ Component }: SidebarProps) {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const updateSidebarState = () => {
      setIsMobile(window.innerWidth <= 600);
    };
  
    useEffect(() => {
      window.addEventListener('resize', updateSidebarState);
      updateSidebarState();
  
      return () => {
        window.removeEventListener('resize', updateSidebarState);
      };
    }, []);
  
  return (
    <div className='h-screen'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        {isMobile ? (
          <Drawer anchor="left" open={isSidebarOpen} onClose={toggleSidebar}>
            				<div className=" mb-14 center-items justify-center flex h-14 w-[200px] md:flex md:items-center ">
					<img
						src="/ZamtelLogo.png"
						alt="Zamtel Logo"
						className="left-1 mt-4  ml-1 -40 absolute h-14 md:left-3 md:mt-12 md:ml-1 md:absolute md:h-14 md:mb-10   "
					/>
					<h1 className="hidden mb-8 md:uppercase md:ml-2">HR Database MNGT System</h1>
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

				<Link to="/resignation">
					<SidebarItem Icon={HistoryEduIcon} text="resignation" />
				</Link>

				<Link to="/announcements">
					<SidebarItem
						Icon={CampaignOutlinedIcon}
						text="announcements"
					/>
				</Link>

				<div className="md:p-2 md:rounded-md md:space-x-4 md:flex md:items-center md:justify-center md:absolute md:bottom-2 md:bg-green-700 md:w-56">
					<LogoutIcon className="md:text-white  md:dark:text-content" />
					<h1 className=" md:dark:text-content md:text-white ">Logout</h1>
				</div>

          </Drawer>
        ) : (
          <Grid item xs={3}>
           				<div className=" mb-14 center-items justify-center flex h-14 w-[200px] md:flex md:items-center ">
					<img
						src="/ZamtelLogo.png"
						alt="Zamtel Logo"
						className="left-1 mt-4  ml-1 -40 absolute h-14 md:left-3 md:mt-12 md:ml-1 md:absolute md:h-14 md:mb-10   "
					/>
					<h1 className="hidden mb-8 md:uppercase md:ml-2">HR Database MNGT System</h1>
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

				<Link to="/resignation">
					<SidebarItem Icon={HistoryEduIcon} text="resignation" />
				</Link>

				<Link to="/announcements">
					<SidebarItem
						Icon={CampaignOutlinedIcon}
						text="announcements"
					/>
				</Link>

				<div className="md:p-2 md:rounded-md md:space-x-4 md:flex md:items-center md:justify-center md:absolute md:bottom-2 md:bg-green-700 md:w-56">
					<LogoutIcon className="md:text-white  md:dark:text-content" />
					<h1 className=" md:dark:text-content md:text-white ">Logout</h1>
				</div>

          </Grid>
        )}
        <Grid item xs={isMobile ? 12 : 9} id="container" className="overflow-y-auto h-full"> {/ Apply overflow-y-auto class /}
          {isMobile && (
            <div id="1" className="fixed h-16 z-1 bg-white w-full"> {/ Apply the fixed class /}
              <IconButton onClick={toggleSidebar}>
                <MenuIcon fontSize='large' />
              </IconButton>
            </div>
          )}
          <div className={`${isMobile ? 'mt-24': ''}`}>
          
          </div>
        </Grid>
      </Grid>
    </Box>
  </div>
  )
}

export default Drawer