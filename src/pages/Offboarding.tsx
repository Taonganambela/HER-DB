import DataTable, { createTheme } from "react-data-table-component";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectThemeMode } from "../redux/slices/ThemeSwitcherSlice";

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
    selector: (row: any) =>(
      <Link to={"offBoardingcheckList"} className="hover:text-green-700">
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
        <VisibilityIcon />
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
  image: <VisibilityIcon className="text-purple-700" />,
};

const data: any = [];
for (let i = 0; i < 50; i++) {
  let t = { ...sample, no: i + 1 };
  data.push(t);
}

function Offboarding() {
  const themeMode = useAppSelector(selectThemeMode);
  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full ">
      <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300">
        Offboarding
      </h1>

      <DataTable
        theme={themeMode == "light" ? 'light' : 'solarized'}        
        pagination
        columns={columns}
        data={data}
        selectableRows
        fixedHeader
      />
    </div>
  );
}

export default Offboarding;
