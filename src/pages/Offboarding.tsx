import DataTable, { createTheme } from "react-data-table-component";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectThemeMode } from "../redux/slices/ThemeSwitcherSlice";
import { useState } from "react";
import styled from "styled-components";

interface OffboardingI {
  no: number;
  EmployeeName: string;
  Department: string;
  Section: string;
  GNNumber: string;
  Position: string;
}

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ClearButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

createTheme(
  "solarized",
  {
    text: {
      primary: "#9299a6",
      secondary: "#9299a6",
    },
    background: {
      default: "#202f3d",
    },
    context: {
      background: "#202f3d",
      text: "#FFFFFF",
    },
    divider: {
      default: "#e0ffff",
    },
    action: {
      button: "rgba(0,0,0,.54)",
      hover: "rgba(0,0,0,.08)",
      disabled: "rgba(0,0,0,.12)",
    },
  },
  "dark"
);

const columns = [
  {
    name: "#",
    selector: (row: any) => row.no,
    sortable: true,
  },
  {
    name: "Employee Name",
    selector: (row: any) => (
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

const sample: OffboardingI = {
  no: 1,
  EmployeeName: "Taonga Nambela",
  Department: "IT",
  Section: "Development & Intergration",
  GNNumber: "gn1803",
  Position: "Software developer",
};

const data: OffboardingI[] = [];
for (let i = 0; i < 50; i++) {
  let t = { ...sample, no: i + 1 };
  data.push(t);
}

function convertArrayOfObjectsToCSV(array: OffboardingI[]) {
  var result: any;

  const columnDelimiter = ",";
  const lineDelimiter = "\n";
  const keys = Object.keys(array[0]);

  result = "";
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  array.forEach((item: OffboardingI) => {
    let ctr = 0;
    keys.forEach((key) => {
      if (ctr > 0) result += columnDelimiter;
		  // @ts-ignore
      result += item[key];

      ctr++;
    });
    result += lineDelimiter;
  });

  return result;
}

function downloadCSV(array: OffboardingI[]) {
  const link = document.createElement("a");
  let csv = convertArrayOfObjectsToCSV(array);
  if (csv == null) return;

  const filename = "export.csv";

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
}

const Offboarding = () => {
  const themeMode = useAppSelector(selectThemeMode);

  const [filteredData, setFilteredData] = useState<OffboardingI[]>(data);
  const [inputValue, setInputValue] = useState("");

  const handleFilter = (text: string, record: OffboardingI) => {
    const lowerCaseText = text.toLowerCase();
    return (
      record.EmployeeName.toLowerCase().includes(lowerCaseText) ||
      record.Department.toLowerCase().includes(lowerCaseText) ||
      record.Section.toLowerCase().includes(lowerCaseText) ||
      record.Position.toLowerCase().includes(lowerCaseText) ||
      record.GNNumber.toLowerCase().includes(lowerCaseText) ||
      record.no.toString().includes(lowerCaseText)
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    const filtered = data.filter((entry: OffboardingI) =>
      handleFilter(value, entry)
    );
    setFilteredData(filtered);
  };

  const handleClearInput = () => {
    setInputValue("");
    setFilteredData(data);
  };

  return (
    <div className="dark:bg-bkgSecondary dark:text-content overflow-y-auto pb-20 p-8 w-full ">
      <div className="flex">
        <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300">
          Offboarding
        </h1>
        <div className="mb-2 ml-auto">
          <button onClick={() => downloadCSV(filteredData)} className="bg-green-500 text-white h-9 w-32 rounded-md">Export to CSV</button>
        </div>
      </div>

      <div>
        <InputContainer className="mt-6 mb-6 dark:bg-bkgSecondary">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Search..."
            className="dark:bg-bkgSecondary pl-2 text-slate-400 border-2 rounded-md focus:outline-none border-green-600 overflow-y-auto"
          />
          {inputValue && (
            <ClearButton onClick={handleClearInput}>
              <span className="text-red-700">x</span>
            </ClearButton>
          )}
        </InputContainer>
      </div>

      <DataTable
        theme={themeMode == "light" ? "light" : "solarized"}
        pagination
        columns={columns}
        data={filteredData}
        selectableRows
        fixedHeader
      />
    </div>
  );
};

export default Offboarding;
