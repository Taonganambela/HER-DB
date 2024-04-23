import { IconButton, Modal, Box } from "@mui/material";
import { useState } from "react";
import BackgroundLetterAvatars from "../components/Avatar";
import SendIcon from "@mui/icons-material/Send";


interface Task {
  name: string;
  category: string;
}

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
  const [tasks, setTasks] = useState<Task[]>([
    { name: 'Brief history of the company', category: 'INTRODUCTION' },
    { name: ' Vision', category: 'INTRODUCTION' },
    { name: 'Mission', category: 'INTRODUCTION' },
    { name: 'Values', category: 'INTRODUCTION' },
	{ name: 'Organization overview', category: 'INTRODUCTION' },

    { name: 'Hours of work', category: 'CONDITIONS OF SERVICE' },
    { name: 'Medical scheme', category: 'CONDITIONS OF SERVICE' },
    { name: 'Arrangements for requesting leave(annual Laeve, Unpaid Leave, Compassionate leave)', category: 'CONDITIONS OF SERVICE' },
	{ name: 'Probation periods of employment', category: 'CONDITIONS OF SERVICE' },
    { name: 'notice of termination of employment', category: 'CONDITIONS OF SERVICE' },
    { name: 'Grievance procedure', category: 'CONDITIONS OF SERVICE' },
    { name: 'Disciplinary procedure', category: 'CONDITIONS OF SERVICE' },
	{ name: 'Confidentiality', category: 'CONDITIONS OF SERVICE' },
    { name: 'Policies, Processes and Procedure', category: 'CONDITIONS OF SERVICE' },

    { name: 'Management of Company Assets', category: 'SECURITY' },
    { name: 'Importance of I.D cards', category: 'SECURITY' },
	{ name: 'Lost property procedure', category: 'SECURITY' },


    { name: 'Means of advancement, promotion opportunities', category: 'TRAINING' },
    { name: 'Employee appraisal, review systems', category: 'TRAINING' },
    { name: 'Study leave', category: 'TRAINING' },
	{ name: 'Performance Management System', category: 'TRAINING' },


    { name: 'Give details of any meeting he/she is expected to attend.', category: 'MISCELLANIOUS' },

  ]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  const moveTaskToCompleted = (taskIndex: number) => {
    const updatedTasks = [...tasks];
    const completedTask = updatedTasks.splice(taskIndex, 1);
    setTasks(updatedTasks);
    setCompletedTasks([...completedTasks, completedTask[0]]);
  };

  const moveTaskToTasks = (taskIndex: number) => {
    const updatedCompletedTasks = [...completedTasks];
    const taskToMove = updatedCompletedTasks.splice(taskIndex, 1);
    setCompletedTasks(updatedCompletedTasks);
    setTasks([...tasks, taskToMove[0]]);
  };

  return (

	<div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full">
			<div className="flex ml-auto items-center justify-between w-full">
				<div className="flex">
					<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
						Personal Orientation CheckList
					</h1>
				</div>
				<br />
			</div>
    <div className="flex justify-center mt-8 mb-8">


		
      <div className="grid grid-cols-2 ">
		{/* div for tasks */}
        <div className="border-2 rounded-l-md">
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-b-gray-300 h-10 text-center">Activity</h2>
          {tasks.map((task, index) => (
            <div key={index} className="text-sm pl-3">
              {index === 0 || tasks[index - 1].category !== task.category ? (
                <h3 className="text-md font-semibold mb-2">{task.category}</h3>
              ) : null}
              <div
                className="cursor-pointer hover:text-green-600 rounded p-2"
                onClick={() => moveTaskToCompleted(index)}
              >
                {task.name}
              </div>
            </div>
          ))}
        </div>
		{/* div for completed tasks */}
        <div className="border-2 rounded-r-md">
          <h2 className="text-lg font-semibold mb-4 border-b-2 border-b-gray-300 h-10 text-center">Completed Activity</h2>
          {completedTasks.map((task, index) => (
            <div key={index}  className="text-sm pl-3">
              {index === 0 || completedTasks[index - 1].category !== task.category ? (
                <h3 className="text-md font-semibold mb-2">{task.category}</h3>
              ) : null}
              <div
                className="cursor-pointer hover:text-green-200 rounded p-2"
                onClick={() => moveTaskToTasks(index)}
              >
                {task.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
	
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
			<div>
          
		  <button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md ">
			Back
		  </button>
	   
	  </div>
	</div>
  );
}
