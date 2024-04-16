import { Box, TableContainer, Paper, Table, TableHead, TableCell, TableBody, IconButton, Modal, TableRow } from "@mui/material";
import { useState } from "react";
import BackgroundLetterAvatars from "../components/Avatar";
import SendIcon from "@mui/icons-material/Send";
                                                            

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

export function InductionList() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const taskList = [{
        section: "INTRODUCTION",
        tasks: [
            "a. Brief history of the company",
            "b. Vision",
            "c. Mission",
            "d. Values",
            "e. Organization overview",
        ],
        completedTasks: [],
    },
    {
        section: "CONDITIONS OF SERVICE",
        tasks: [
            "a. Hours of work",
            "b. Medical scheme",
            "c. Arrangements for requesting leave(annual Laeve, Unpaid Leave, Compassionate leave)",
            "d.Probation periods of employment",
            "e. notice of termination of employment",
            "f. Grievance procedure",
            "g. Disciplinary procedure",
            "h. Confidentiality",
            "i. Policies, Processes and Procedure",
            
        ],
        completedTasks: [], // Add completedTasks array for each section
    },

    {
        section: "SECURITY",
        tasks: [
            "a. Management of Company Assets",
            "b. Importance of I.D cards",
            "c. Lost property procedure",
                    
        ],
         completedTasks: [], // Add completedTasks array for each section
    },

    {
        section: "TRAINING",
        tasks: [
            "a. Means of advancement, promotion opportunities",
            "b. Employee appraisal, review systems",
            "c. Study leave",
            "c. Performance Management System",
        ],
        completedTasks: [],
    },

    {
        section: "MISCELLANIOUS",
        tasks: [
            "Give details of any meeting he/she is expected to attend.",
        ],   
        completedTasks: [],
    },];
    const [tasks, setTasks] = useState([
        {
            section: "INTRODUCTION",
            tasks: [
                "a. Brief history of the company",
                "b. Vision",
                "c. Mission",
                "d. Values",
                "e. Organization overview",
            ],
            completedTasks: [],
        },
        {
            section: "CONDITIONS OF SERVICE",
            tasks: [
                "a. Hours of work",
                "b. Medical scheme",
                "c. Arrangements for requesting leave(annual Laeve, Unpaid Leave, Compassionate leave)",
                "d.Probation periods of employment",
                "e. notice of termination of employment",
                "f. Grievance procedure",
                "g. Disciplinary procedure",
                "h. Confidentiality",
                "i. Policies, Processes and Procedure",
                
            ],
            completedTasks: [], // Add completedTasks array for each section
        },

        {
            section: "SECURITY",
            tasks: [
                "a. Management of Company Assets",
                "b. Importance of I.D cards",
                "c. Lost property procedure",
                        
            ],
             completedTasks: [], // Add completedTasks array for each section
        },

        {
            section: "TRAINING",
            tasks: [
                "a. Means of advancement, promotion opportunities",
                "b. Employee appraisal, review systems",
                "c. Study leave",
                "c. Performance Management System",
            ],
            completedTasks: [],
        },

        {
            section: "MISCELLANIOUS",
            tasks: [
                "Give details of any meeting he/she is expected to attend.",
            ],   
            completedTasks: [],
        },
    ]);
    const [completeTasks, setTaskAsCompleted] = useState<string[]>([]);
    const [completedTasks, setCompletedTasks] = useState<string[]>([]);

    const moveTaskToCompleted = (sectionIndex: number, taskIndex: number, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const taskToMove = tasks[sectionIndex].tasks[taskIndex];
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            newTasks[sectionIndex].tasks.splice(taskIndex, 1);
            return newTasks;
        });
        setCompletedTasks((prevCompletedTasks) => [...prevCompletedTasks, taskToMove]);
        event.stopPropagation(); // Stop event propagation
    };



  return (

    
    <div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full">
    <div className="flex ml-auto items-center justify-between w-full">
        <div className="flex">
            <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
                Personal File FileCheckList
            </h1>
        </div>
        <br />
    </div>
    <Box sx={{ mt: 2,borderRadius: "30px" }}>
    <TableContainer component={Paper} elevation={1}>
                <Table className="table-auto">
                    <TableHead>
                        <TableRow className="dark:bg-slate-700">
                            <TableCell className="dark:text-[#a9cfbd] w-[300px] font-semibold">Section</TableCell>
                            <TableCell className="dark:text-[#a9cfbd] w-[300px] font-semibold">Incomplete Tasks</TableCell>
                            <TableCell className="dark:text-[#a9cfbd] w-[300px] font-semibold">Completed Tasks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="bg-gray-200 dark:bg-slate-700 dark:text-gray-600">
                        {tasks.map((section, sectionIndex) => (
                            <TableRow key={sectionIndex} className="dark:text-[#a9cfbd]">
                                <TableCell className="dark:text-[#a9cfbd]">{section.section}</TableCell>
                                <TableCell>
                                    <ul>
                                        {section.tasks.map((task, taskIndex) => (
                                            <li
                                            key={taskIndex}
                                            onClick={(event) => moveTaskToCompleted(sectionIndex, taskIndex, event)}
                                            className="cursor-pointer hover:text-green-500"
                                        >
                                            {task}
                                        </li>
                                        ))}
                                    </ul>
                                </TableCell>
                                <TableCell>
                                    <ul>
                                        {completedTasks.map((task, taskIndex) => (
                                            <li key={taskIndex}>{task}</li>
                                        ))}
                                    </ul>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

    </Box>

    <div>
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
                    <IconButton
                        onClick={() => setOpen(true)}
                        className="h-6 w-6"
                    >
                        <SendIcon className="text-white text-4xl" />
                    </IconButton>
                </div>
            </div>
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
                        <BackgroundLetterAvatars
                            name="Nahshon Kampamba"
                            size={40}
                        />
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
                        <BackgroundLetterAvatars
                            name="Michael Syamalala"
                            size={40}
                        />
                        <div className="flex flex-col rounded-t-md ">
                            <h2 className="font-semibold text-slate-600 dark:text-slate-200">
                                Michael Syamalala
                            </h2>
                            <h3 className="text-gray-600 dark:text-gray-400">
                                Manager
                            </h3>
                        </div>
                        <hr />
                    </div>

                    <div className="flex space-x-2 items-center p-4 bg-white dark:bg-slate-900">
                        <BackgroundLetterAvatars
                            name="Nkandu Kashimilo"
                            size={40}
                        />
                        <div className="flex flex-col rounded-t-md ">
                            <h2 className="font-semibold text-slate-600 dark:text-slate-200">
                                Nkandu Kashimilo
                            </h2>
                            <h3 className="text-gray-600 dark:text-gray-400">
                                Team lead
                            </h3>
                        </div>
                        <hr />
                    </div>

                    <div className="bg-white rounded-b-lg h-4 dark:bg-slate-900" />
                </div>
            </Box>
        </Modal>
    </div>
    <div className="flex ml-auto items-center justify-between w-full mt-8">
<div>
  
    <button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md ">
      Back
    </button>
 
</div>
<div>
  <button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md">
    Send
  </button>
</div>
</div>
</div>
  )
}




