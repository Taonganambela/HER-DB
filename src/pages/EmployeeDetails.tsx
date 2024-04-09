import {
  Box,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

function EmployeeDetails() {
  return (
    <div className="dark:bg-bkgSecondary dark:text-content h-content p-8 w-full ">
      <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
        Onboarding
      </h1>

      <div className="bg-white rounded-md dark:bg-slate-900 pb-1  ">
        <div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
          <h2 className="text-left w-full p-2 text-xl">Employee Details</h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900 border-l border-l-gray-300">
          <h2 className="block font-semibold flex-[0.25] text-center py-3 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            First Name:<span className="font-normal ml-9">Nashon</span>
          </h2>
          <h2 className="block font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Other Name: <span className="font-normal ml-9">-</span>
          </h2>
          <h2 className="block font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Last Name: <span className="font-normal ml-9">Kampamba</span>
          </h2>
          <h2 className="block font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            DOB: <span className="font-normal ml-9">10/07/1996</span>
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900 border-t border-t-gray-300 border-l border-l-gray-300">
          <h2 className="block font-semibold flex-[0.25] text-center py-3 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Gender:<span className="font-normal ml-9">Male</span>
          </h2>
          <h2 className="block font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            NRC Numnber: <span className="font-normal ml-9">9234/12/1</span>
          </h2>
          <h2 className="block font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Email: <span className="font-normal ml-9">n.k@zamtel.co.zm</span>
          </h2>
          <h2 className="block font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Qualification:{" "}
            <span className="font-normal ml-9">Bachelors Degree</span>
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900 border-t border-t-gray-300 border-l border-l-gray-300">
          <h2 className=" font-semibold flex-[0.25] text-center py-3 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Job Title:
            <span className="font-normal ml-9">Software Developer</span>
          </h2>
          <h2 className="font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Department: <span className="font-normal ml-9">IT</span>
          </h2>
          <h2 className="font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Station:{" "}
            <span className="font-normal ml-9">Development & Intergration</span>
          </h2>
          <h2 className="font-semibold flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            GN: <span className="font-normal ml-9">gn1617</span>
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900 border-t border-t-gray-300 border-l border-l-gray-300 mb-7">
          <h2 className="border-b border-b-gray-300 w-full font-semibold  text-center py-3 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Date of first Appointment:
            <span className="font-normal ml-9"> 01/02/2024 </span>
          </h2>

          <h2 className=" border-b border-b-gray-300 w-full font-semibold  text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Salary Grade : <span className="font-normal ml-9"> 06 </span>
          </h2>
        </div>

        <Box
          sx={{
            mt: 1,
            padding: 2,
            borderRadius: 15, // Adjust the value to change the roundness
            overflow: "hidden", // Ensure overflow content doesn't disrupt the rounded corners
          }}
          className="mb-6"
        >
          <TableContainer component={Paper} elevation={2}>
            <Table aria-label="education table">
              <TableHead className="bg-gray-200">
                <TableRow>
                  <TableCell>Document type</TableCell>
                  <TableCell>File Name</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell className="w-[150px]">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>NRC</TableCell>
                  <TableCell>File_name</TableCell>
                  <TableCell>Uploaded</TableCell>

                  <TableCell>
                    <IconButton className="">
                      <DeleteIcon className="text-red-600" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>NRC</TableCell>
                  <TableCell>File_name</TableCell>
                  <TableCell>Uploaded</TableCell>

                  <TableCell>
                    <IconButton className="">
                      <DeleteIcon className="text-red-600" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
              <TableBody>
                <TableRow>
                  <TableCell>NRC</TableCell>
                  <TableCell>File_name</TableCell>
                  <TableCell>Empty</TableCell>

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
              Done
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
