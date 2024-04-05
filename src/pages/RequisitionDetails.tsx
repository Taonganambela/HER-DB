import React from "react";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import BackgroundLetterAvatars from "../components/Avatar";

const style = {
  position: "absolute" as "absolute",
  bottom: "15%",
  right: "-10%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#16a349",
  boxShadow: 24,
  borderRadius: "20px",
};

function RequisitionDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 px-8 w-full ">
      <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 pt-5">
        Requisition Details
      </h1>
      <div className="bg-white rounded-md dark:bg-slate-900">
        <div className="bg-green-600 text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Department
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Section</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Job title</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Job Position
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900  ">
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Information systems
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Development and integrations
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Software Developer
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            1
          </h2>
        </div>

        <div className="bg-green-600 text-white text-md py-2 font-semibold flex w-full justify-evenly">
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Approved Budget Strength
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Actual Strength
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Variance</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Number required
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900 ">
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            medium
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            high
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            TBA
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            2
          </h2>
        </div>

        <div className="bg-green-600 text-white text-md py-2 font-semibold flex w-full justify-evenly">
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Grade</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Basic Pay</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Date Required
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Contract Duration
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900">
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            05
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            K14, 900
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            24th March, 2024
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            6 months
          </h2>
        </div>

        <div className="bg-green-600 text-white text-md py-2 font-semibold flex w-full justify-evenly">
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Vacating Employee GN
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Preferred Education
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Professional Qualification
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Preferred Experience
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900">
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            GN1095
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Bachelor's degree
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            ICTAZ
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            1-2 years
          </h2>
        </div>

        <div className="bg-green-600 text-white text-md py-2 font-semibold flex w-full justify-evenly">
          <h2 className="flex-[0.7] text-center  flex-wrap p-1 ">
            Please provide justification of engagement
          </h2>
          <h2 className="flex-[0.3] text-center  flex-wrap p-1 ">
            Requisitioned By
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900">
          <h2 className="flex-[0.7] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            We are currently understaffed when it comes to developers. There are
            over 60 zamtel software applications with only 4 developers having
            to manage them.
          </h2>
          <h2 className="flex-[0.3] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Nahshon Kampamba
          </h2>
        </div>
        <hr className="" />

        <div className="mt-20 mx-20 pb-10 space-y-3 ">
          <h1 className="text-purple-600 text-2xl">Comment</h1>
          <h4 className="text-slate-600 dark:text-slate-300">
            Comment if this requistion does not fit criteria for it to be
            approved.
          </h4>
          <div className="flex items-center space-x-3 w-full">
            <input
              type="text"
              className="p-2 border-2 border-green-600 rounded-md w-full dark:bg-slate-900"
            />
            <div className="p-2 bg-green-600 rounded-md">
              <IconButton onClick={() => setOpen(true)}>
                <SendIcon className="text-white text-4xl" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-5 ">
        <button className="bg-green-500 text-white p-2 w-28 text-center rounded-md">
          Approve
        </button>
        <button className="bg-red-500 text-white p-2 w-28 text-center rounded-md">
          Decline
        </button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-t-lg ">
          <h1 className="p-2 text-center text-white">SEND TO</h1>
          <div className="max-h-[300px] overflow-y-scroll">
            <div className="flex space-x-2 items-center p-4 bg-white dark:bg-slate-900">
              <BackgroundLetterAvatars name="Nahshon Kampamba" size={40} />
              <div className="flex flex-col rounded-t-md ">
                <h2 className="font-semibold text-slate-600 dark:text-slate-200">
                  Nahshon Kampamba
                </h2>
                <h3 className="text-gray-600 dark:text-gray-400">
                  Software Developer
                </h3>
              </div>
              <hr />
            </div>

            <div className="flex space-x-2 items-center p-4 bg-white dark:bg-slate-900">
              <BackgroundLetterAvatars name="Michael Syamalala" size={40} />
              <div className="flex flex-col rounded-t-md ">
                <h2 className="font-semibold text-slate-600 dark:text-slate-200">
                  Michael Syamalala
                </h2>
                <h3 className="text-gray-600 dark:text-gray-400">Manager</h3>
              </div>
              <hr />
            </div>

            <div className="flex space-x-2 items-center p-4 bg-white dark:bg-slate-900">
              <BackgroundLetterAvatars name="Nkandu Kashimilo" size={40} />
              <div className="flex flex-col rounded-t-md ">
                <h2 className="font-semibold text-slate-600 dark:text-slate-200">
                  Nkandu Kashimilo
                </h2>
                <h3 className="text-gray-600 dark:text-gray-400">Team lead</h3>
              </div>
              <hr />
            </div>

            <div className="bg-white rounded-b-lg h-4 dark:bg-slate-900" />
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default RequisitionDetails;
