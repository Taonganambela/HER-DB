import {
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const documents = [
  { documents: "CV/Application Letter", value: "CV/Application Letter" },
  { documents: "Job offer Letter", value: "Job offer Letter" },
  { documents: "Job Description", value: "Job Description" },
  { documents: "Job Offer Letter/Acceptance Letter", value: "Job Offer Letter/Acceptance Letter" },
  { documents: "Vital Statistics form", value: "Vital Statistics form" },
  { documents: "Employment contract", value: "Employment contract" },
  { documents: "Copies of transcripts", value: "Copies of transcripts" },
  { documents: "NRC", value: "NRC" },
  { documents: "Passport", value: "Passport" },
  { documents: "Pre-Employment medical form", value: "Pre-Employment medical form" },
  { documents: "Police clearing Report", value: "Police clearing Report" },
  { documents: "Banking Details Form", value: "Banking Details Form" },
  { documents: "Professional Certificates", value: "Professional Certificates" },
  { documents: "Certified Copy of Driver Licence", value: "Certified Copy of Driver Licence" },
  { documents: "Banking Details Form", value: "Banking Details Form" },
  { documents: "Confirmation Assessment Form and Confirmation Letter", value: "Confirmation Assessment Form and Confirmation Letter" },
  { documents: "Oath of Secrecy Form", value: "Oath of Secrecy Form" },
  { documents: "Disclosure of Interest Form", value: "Disclosure of Interest Form" },
  { documents: "Passport Size Photos", value: "Passport Size Photos" },
  { documents: "Record of Disciplinary Action", value: "Record of Disciplinary Action" },
  { documents: "Leave Forms", value: "Leave Forms" },
  { documents: "Salary Advance Forms", value: "Salary Advance Forms" },
  { documents: "Commendations/Awards", value: "Commendations/Awards" },
  { documents: "Transfer Form", value: "Transfer Form" },
  { documents: "Exit Interview Form", value: "Exit Interview Form" },
];

function EmployeeCreation() {
  return (
    <div className="dark:bg-bkgSecondary dark:text-content h-content p-8 w-full">
      <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
        Onboarding
      </h1>
      <div className="bg-white rounded-md dark:bg-slate-900 pb-1">
        <div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
          <h2 className="text-left w-full p-2 text-xl">Employee Creation</h2>
        </div>
        <form action="" className="p-3 pl-3 mt-8">
          <div className="flex space-x-16 mb-10">
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="OtherName"
              >
                Other Name(Optional)
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="OtherName"
                type="text"
                placeholder="Other name"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="Last Name"
              >
                Last Name
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="Last Name"
                type="text"
                placeholder="last name"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="dob"
                type="Date"
                placeholder=""
              />
            </div>
          </div>
          <div className="flex space-x-16 mb-10">
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                className="border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12  w-[300px] bg-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#AAD5E1] dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="nrc"
              >
                NRC Number
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="nrc"
                type="text"
                placeholder="1234/56/78"
              />
            </div>

            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="email"
                type="text"
                placeholder="email"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="qualification"
              >
                Qualification
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="qualification"
                type="text"
                placeholder="qualification"
              />
            </div>
          </div>

          <div className="flex space-x-16 mb-10">
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="job"
              >
                Job Title
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="job"
                type="text"
                placeholder="job title"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="dept"
              >
                Department
              </label>
              <select
                id="gender"
                className="border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12  w-[300px] bg-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#AAD5E1] dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Human Resource">Human Resource</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="station"
              >
                Station
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="station"
                type="text"
                placeholder="station"
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="gn"
              >
                GN
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="gn"
                type="text"
                placeholder="gn0001"
              />
            </div>
          </div>

          <div className="flex space-x-16 mb-10">
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="date"
              >
                Date of first Appointment
              </label>
              <input
                className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
                id="date"
                type="Date"
                placeholder=""
              />
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="dept"
              >
                Salary Grade
              </label>
              <select
                id="gender"
                className=" border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12  w-[300px] bg-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#AAD5E1] dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="Human Resource">Human Resource</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="doc"
              >
                Document Type
              </label>
              <select
                
                id="doc"
                className="border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12  w-[300px] bg-gray-50  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#AAD5E1] dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                 {documents.map((item, i) => (
                <option key={i} value={item.value}>
                  {" "}
                  {item.documents}{" "}
                </option>
              ))}
              </select>
            </div>
            <div>
              <label
                className="block font-semibold mb-2 dark:text-[#AAD5E1]"
                htmlFor="upload"
              >
                Upload document
              </label>
              <input
                className="dark:bg-slate-700 p-2  text-gray-800  rounded-lg w-[300px] dark:text-[#AAD5E1]"
                id="upload"
                type="file"
                placeholder="gn0001"
              />
            </div>
          </div>
        </form>
        <Box sx={{ mt: 2, padding: 3, borderRadius: "30px" }} >
          <TableContainer component={Paper} elevation={1}>
            <Table aria-label="education table ">
              <TableHead className="bg-gray-200">
                <TableRow className="dark:bg-slate-700">
                  <TableCell className="dark:text-[#a9cfbd] ">Document type</TableCell>
                  <TableCell className="dark:text-[#a9cfbd] ">File Name</TableCell>
                  <TableCell className="dark:text-[#a9cfbd]">Status</TableCell>
                  <TableCell className="w-[100px] dark:text-[#a9cfbd]">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody className="bg-gray-200 dark:bg-slate-700 dark:text-gray-600" >
                <TableRow className="dark:text-[#a9cfbd] ">
                  <TableCell className="dark:text-[#a9cfbd] ">NRC</TableCell>
                  <TableCell className="dark:text-[#a9cfbd] ">File_name</TableCell>
                  <TableCell className="dark:text-[#a9cfbd] ">Uploaded</TableCell>

                  <TableCell>
                    <IconButton className="">
                      <DeleteIcon className="text-red-600" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </div>

      <div className="flex ml-auto items-center justify-between w-full mt-12">
        <div>
          <Link to="/onboarding">
            <button className="bg-[#549B69] text-sm text-white h-12 w-[200px] rounded-md ">
              Back
            </button>
          </Link>
        </div>
        <div>
          <Link to="/employeeDetails">
          <button className="bg-[#549B69] text-sm text-white h-12 w-[200px] rounded-md">
            Create
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCreation;
