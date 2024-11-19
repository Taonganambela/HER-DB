import DataTable, { createTheme } from "react-data-table-component";
import { Link } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import { selectThemeMode } from "../redux/slices/ThemeSwitcherSlice";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import BusinessIcon from "@mui/icons-material/Business";
import FlipCameraAndroidIcon from "@mui/icons-material/FlipCameraAndroid";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

interface OnboardingI {
	no: number;
	EmployeeName: string;
	Department: string;
	Section: string;
	GNNumber: string;
	Position: string;
}

function downloadCSV(array: any) {
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

function convertArrayOfObjectsToCSV(array: any) {
	var result: any;

	const columnDelimiter = ",";
	const lineDelimiter = "\n";
	const keys = Object.keys(array[0]);

	result = "";
	result += keys.join(columnDelimiter);
	result += lineDelimiter;

	array.forEach((item: any) => {
		let ctr = 0;
		keys.forEach((key) => {
			if (ctr > 0) result += columnDelimiter;

			result += item[key];

			ctr++;
		});
		result += lineDelimiter;
	});

	return result;
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

const sample: OnboardingI = {
	no: 1,
	EmployeeName: "Taonga Nambela",
	Department: "IT",
	Section: "Development & Integration",
	GNNumber: "gn1803",
	Position: "Software developer",
};

const data: OnboardingI[] = [];
for (let i = 0; i < 50; i++) {
	let t = { ...sample, no: i + 1 };
	data.push(t);
}

function Onboarding() {
	const themeMode = useAppSelector(selectThemeMode);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handlesClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const [filteredData, setFilteredData] = useState<OnboardingI[]>(data);
	const [inputValue, setInputValue] = useState("");

	const handleFilter = (text: string, record: OnboardingI) => {
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
		const filtered = data.filter((entry: OnboardingI) =>
			handleFilter(value, entry)
		);
		setFilteredData(filtered);
	};

	const handleClearInput = () => {
		setInputValue("");
		setFilteredData(data);
	};

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
			filterable: true,
		},
		{
			name: "Department",
			selector: (row: any) => row.Department,
			sortable: true,
			filterable: true,
		},
		{
			name: "Section",
			selector: (row: any) => row.Section,
			sortable: true,
			filterable: true,
		},
		{
			name: "GN Number/User",
			selector: (row: any) => row.GNNumber,
			sortable: true,
			filterable: true,
		},
		{
			name: "Position",
			selector: (row: any) => row.Position,
			sortable: true,
			filterable: true,
		},
		{
			name: " ",
			cell: (row: any) => (
				<Link className=" text-purple-600" to={""}>
					<button
						id="basic-button"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handlesClick}
					>
						<MoreHorizOutlinedIcon />
					</button>
				</Link>
			),
		},
	];

	return (
		<div className="dark:bg-bkgSecondary dark:text-content overflow-y-auto pb-20 p-8 w-full">
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
							<MenuItem onClick={handleClose}>
								<FolderSharedIcon className="mr-2 text-gray-800" />
								Personal check List
							</MenuItem>
						</Link>

						<Link to="inductionlist">
							<MenuItem onClick={handleClose}>
								<BusinessIcon className="mr-2 text-gray-800" />
								Personal induction List
							</MenuItem>
						</Link>
						<Link to="orientationChecklist">
							<MenuItem onClick={handleClose}>
								<FlipCameraAndroidIcon className="mr-2 text-gray-800" />
								Personal Orientation List
							</MenuItem>
						</Link>
					</Menu>
				</div>
			</div>
			<div>
				<InputContainer className="mt-6 mb-6">
					<input
						type="text"
						value={inputValue}
						onChange={handleChange}
						placeholder="Search..."
						className="dark:bg-bkgSecondary pl-2 text-slate-400 border-2 rounded-md focus:outline-none border-green-600"
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
				className="data-table" // Add class name for styling
			/>
			<div className="center-items justify-center flex mt-6 mb-3">
				<button
					onClick={() => downloadCSV(filteredData)}
					className="bg-green-500 text-white h-9 w-32 rounded-md"
				>
					Export to CSV
				</button>
			</div>
		</div>
	);
}

export default Onboarding;
