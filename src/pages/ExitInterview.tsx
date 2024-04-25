import { Box, IconButton, Modal } from "@mui/material"
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
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

function ExitInterview() {

    const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
        <div className="dark:bg-bkgSecondary dark:text-content h-content p-8 w-full">
    <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
     Exit interview
    </h1>
    <div className="bg-white rounded-md dark:bg-slate-900">
        <div className="bg-green-600 text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Employee Name
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Employee GN/User</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Department</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Job Title
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900  ">
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Nashon Kampamba
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
          gn1023          
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
          IT
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Software Developer
          </h2>
        </div>

        <div className="bg-green-600 text-white text-md py-2 font-semibold flex w-full justify-evenly">
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Grade
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
           Length of Service
          </h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">Exit Mode</h2>
          <h2 className="flex-[0.25] text-center  flex-wrap p-1 ">
            Termination Date
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900 ">
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            06
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            1 year 6 months
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            Resigned
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            01/02/2024
          </h2>
        </div>




        <div className="bg-green-600 text-white text-md py-2 font-semibold flex w-full justify-evenly">
          <h2 className=" text-center  p-1 ">Age</h2>
          <h2 className=" text-center   p-1 ">Eligible for Re-engagement</h2>
          <h2 className="w-[275px] text-center  p-1 ">
            Reason for leaving
          </h2>

        </div>

        <div className="flex justify-evenly dark:bg-slate-900">
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            26
          </h2>
          <h2 className="flex-[0.25] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
          Yes
          </h2>
          <h2 className="flex-[0.50] text-center py-2 text-slate-600 dark:text-slate-300 flex-wrap p-1 border-r border-r-gray-300">
            greener Pastures
          </h2>
         
        </div>



        <div className="bg-green-600 text-white text-md py-2 font-semibold flex w-full justify-evenly">
          
          <h2 className=" text-center  p-1 ">
            Questonnair Answers
          </h2>
        </div>

        <div className="flex justify-evenly dark:bg-slate-900">
         
          <h2 className="pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
            1.What is your primary reason for leaving?
            <br />
            ans: <span>I found a better job</span>
          </h2>
          <h2 className="pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
            2.What did you find most satisfying about your job?
            <br />
            ans: <span>the enviroment</span>
          </h2>
        </div>


       <div className="flex justify-evenly dark:bg-slate-900">
         
          <h2 className="pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
            3.What did you find most frustrating about your job?
            <br />
            ans: <span>I did not have enough leave days</span>
          </h2>
          <h2 className="pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
            4.Kindly high any company policies or procedures that made your work more difficult?
            <br />
            ans: <span>My leave days</span>
          </h2>
        </div>



        <div className="flex justify-evenly dark:bg-slate-900">
         
         <h2 className="pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
           5.Would you consider returning to this company in the future?
           <br />
           ans: <span>Maybe when you revise the policies</span>
         </h2>
         <h2 className="pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
           6.Would you recommend this company to collegues as a good place to work?
           <br />
           ans: <span>Yes, Definately</span>
         </h2>
       </div>



       <div className="flex justify-evenly dark:bg-slate-900">
         
         <h2 className="pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
           7.Is there anything the company could have done to prevent you from leaving?
           <br />
           ans: <span>Work from home maybe</span>
         </h2>
         <h2 className="font-semibold pl-10 block border-b border-b-gray-300 dark:border-b-white w-full text-left py-2 text-slate-600 dark:text-slate-300  p-1 border-r border-r-gray-300">
           Employee comment :
           <br />
            <span className="font-normal ">I just want to stop</span>
         </h2>
       </div>






       <div className="border-b border-b-gray-300 bg-white-600  text-md py-2 font-semibold flex w-full justify-evenly">
          
          <h2 className="font-semibold text-center text-gray-600 dark:text-white  p-1 ">
            Manager's comment: Heheheh wish i'd fired you first.
          </h2>
        </div>

        <div className="mt-10 mx-20 pb-10 space-y-3 ">
          <h4 className="text-slate-600 dark:text-slate-300">
            Comment if you intend to decline the request
          </h4>
          <div className="flex items-center space-x-3 w-full">
            <input
              type="text"
              className="p-2 border-2 border-green-600 rounded-md w-full dark:bg-slate-900"
            />
            <div className="p-2 bg-green-600 rounded-md">
              <IconButton onClick={() => setOpen(true)} className="h-6 w-6">
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
  )
}

export default ExitInterview