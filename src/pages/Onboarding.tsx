import DataTable, { createTheme } from "react-data-table-component";
import FindInPageIcon from '@mui/icons-material/FindInPage';import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectThemeMode } from "../redux/slices/ThemeSwitcherSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import BusinessIcon from '@mui/icons-material/Business';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";


function Onboarding() {

  const themeMode = useAppSelector(selectThemeMode);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


createTheme('solarized', {
  text: {
    primary: '#9299a6',
    secondary: '#9299a6',
  },
  background: {
    default: '#202f3d',
  },
  context: {
    background: '#202f3d',
    text: '#FFFFFF',
  },
  divider: {
    default: '#e0ffff',
  },
  action: {
    button: 'rgba(0,0,0,.54)',
    hover: 'rgba(0,0,0,.08)',
    disabled: 'rgba(0,0,0,.12)',
  },
}, 'dark');

const columns = [
  {
    name: "#",
    selector: (row: any) => row.no,
    sortable: true,
  },
  {
    name: "Employee Name",
    cell: (row: any) => (
      <Link to={`employeeDetails`} className="hover:text-green-600">
        {row.EmployeeName}
      </Link>
    ),
    sortable: true,
  },
  {
    name: "Department",
    selector: (row: any) => row.Department,
    sortable: true,
  },
  {
    name: "Section",
    selector: (row: any) => row.Section,
    sortable: true,
  },
  {
    name: "GN Number/User",
    selector: (row: any) => row.GNNumber,
    sortable: true,
  },
  {
    name: "Position",
    selector: (row: any) => row.Position,
    sortable: true,
  },
  {
    name: " ",
    selector: (row: any) => row.i,
    cell: (row: any) => (
      <Link className=" text-purple-600" ref={row.Link} to={""}>
         <button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                 <MoreHorizOutlinedIcon />
                </button>
            </Link>
    ),
  },
];
const sample = {
  no: 1,
  EmployeeName: "Taonga Nambela",
  Department: "IT",
  Section: "Development & Intergration",
  GNNumber: "gn1803",
  Position: "Software",
  image: <FindInPageIcon className="text-purple-700" />,
};

const data: any = [];
for (let i = 0; i < 50; i++) {
  let t = { ...sample, no: i + 1 };
  data.push(t);
}
  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full">
      <div className="flex ml-auto items-center justify-between w-full">
        <div className="inline-block">
          <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
            Onboarding
          </h1>
        </div>

        <div className=" mb-2 ml-auto">
          <Link to="employeeCreation">
            <button className="bg-green-500 text-white h-9 w-32 rounded-md">
              Add New
            </button>
          </Link>
        </div>

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
                    <Link to="fileCheckList"> 
                      <MenuItem onClick={handleClose} > <FolderSharedIcon className="mr-2 text-gray-800"/>Personal check List</MenuItem>
                    </Link>

                    <Link to="inductionlist"> 
                      <MenuItem onClick={handleClose} > <BusinessIcon className="mr-2 text-gray-800"/>Personal induction List</MenuItem>
                    </Link>
                    <Link to="orientationChecklist"> 
                      <MenuItem onClick={handleClose} > <FlipCameraAndroidIcon className="mr-2 text-gray-800"/>Personal Orientation List</MenuItem>
                    </Link>
                  </Menu>
                </div>
      </div>

      <DataTable       
       theme={themeMode == "light" ? 'light' : 'solarized'}        
        pagination
        columns={columns}
        data={data}
        className="data-table" // Add class name for styling
      />
    </div>
  );
}

export default Onboarding;
