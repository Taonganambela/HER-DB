import DataTable from "react-data-table-component";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const columns = [
  {
    name: "#",
    selector: (row: any) => row.no,
    sortable: true,
  },
  {
    name: "Employee Name",
    selector: (row: any) => row.EmployeeName,
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
  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full ">
      <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300">
        Offboarding
      </h1>

      <DataTable
        theme="light"
        pagination
        columns={columns}
        data={data}
        className="dark:bg-slate-900"
      />
    </div>
  );
}

export default Offboarding;
