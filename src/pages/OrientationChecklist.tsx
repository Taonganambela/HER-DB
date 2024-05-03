import {
	Box,
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableCell,
	TableBody,
	IconButton,
	Modal,
	TableRow,
} from "@mui/material";
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

function OrientationChecklist() {
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);
	const [tasks, setTasks] = useState<string[]>([
		"Departmental structure, functions and aims",
		"Department tour",
		"How the department actually works and relates to others",
		"The work-flow what are we actually here to do?",
		"Customer service standards and service flow",
		"How the job role fits into Department",
		"Terminology, jargon, glossary, definitions of local terms",
		"Use and care of issued equipment",
		"Work space or workstation",
		"Health Safety /Housekeeping/ Emergency procedures",
		"Stationery and supplies /Handling and storage",
		"Job description - KPAs, Objectives and role overview",
		"Performance daily reporting procedure",
	]);
	const [completedTasks, setCompletedTasks] = useState<string[]>([]);
	const moveTaskToTasks = (index: number) => {
		const taskToMove = completedTasks[index];
		const updatedCompletedTasks = completedTasks.filter(
			(_, i) => i !== index
		);
		setCompletedTasks(updatedCompletedTasks);
		setTasks([...tasks, taskToMove]);
	};
	const moveTaskToCompleted = (index: number) => {
		const taskToMove = tasks[index];
		const updatedTasks = tasks.filter((_, i) => i !== index);
		setTasks(updatedTasks);
		setCompletedTasks([...completedTasks, taskToMove]);
	};
	return (
		<div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-20 p-8 w-full">
			<div className="flex ml-auto items-center justify-between w-full">
				<div className="flex">
					<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
						Onboarding
					</h1>
				</div>
				<br />
			</div>
			<div className="bg-white rounded-md dark:bg-slate-900">
				<div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
					<h2 className="text-left w-full p-2 text-xl">
						Personal CheckList
					</h2>
				</div>
	<Box sx={{ mt: 0, borderRadius: "30px" }}>
					<TableContainer component={Paper} elevation={1}>
						<Table className="table-auto ">
							<TableHead className="bg-gray-200">
								<TableRow className="dark:bg-slate-700">
									<TableCell className="dark:text-[#a9cfbd] w-[300px] font-semibold">
										Documents
									</TableCell>
									<TableCell className="dark:text-[#a9cfbd] w-[300px] text-2xl font-semibold text-slate-800">
										Submited Documents
									</TableCell>
								</TableRow>
							</TableHead>
							<TableBody className="bg-gray-200 dark:bg-slate-700 dark:text-gray-600">
								<TableRow className="dark:text-[#a9cfbd]">
									<TableCell className="dark:text-[#a9cfbd]">
										<ul>
											{tasks.map((task, index) => (
												<li
													key={index}
													onClick={() =>
														moveTaskToCompleted(
															index
														)
													}
													className="cursor-pointer hover:text-green-500"
												>
													{task}
												</li>
											))}
										</ul>
									</TableCell>
									<TableCell className="dark:text-[#a9cfbd]">
										<ul>
											{completedTasks.map(
												(task, index) => (
													<li
														key={index}
														onClick={() =>
															moveTaskToTasks(
																index
															)
														}
														className="cursor-pointer hover:text-green-500"
													>
														{task}
													</li>
												)
											)}
										</ul>
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
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
			<div className="flex ml-auto items-center justify-between w-full mt-8">
				<div>
					<button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md ">
						Back
					</button>
				</div>
				{/* <div>
          <button className="bg-[#549B69] text-sm text-white h-14 w-[200px] rounded-md">
            Send
          </button>
        </div> */}
			</div>
		</div>
	);

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
			<Box sx={{ mt: 2, borderRadius: "30px" }}>
				<TableContainer component={Paper} elevation={1}>
					<Table className="table-auto ">
						<TableHead className="bg-gray-200">
							<TableRow className="dark:bg-slate-700">
								<TableCell className="dark:text-[#a9cfbd] w-[300px] font-semibold">
									Documents
								</TableCell>
								<TableCell className="dark:text-[#a9cfbd] w-[300px] text-2xl font-semibold text-slate-800">
									Submited Documents
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody className="bg-gray-200 dark:bg-slate-700 dark:text-gray-600">
							<TableRow className="dark:text-[#a9cfbd]">
								<TableCell className="dark:text-[#a9cfbd]">
									<ul>
										{tasks.map((task, index) => (
											<li
												key={index}
												onClick={() =>
													moveTaskToCompleted(index)
												}
												className="cursor-pointer hover:text-green-500"
											>
												{task}
											</li>
										))}
									</ul>
								</TableCell>
								<TableCell className="dark:text-[#a9cfbd]">
									<ul>
										{completedTasks.map((task, index) => (
											<li
												key={index}
												onClick={() =>
													moveTaskToTasks(index)
												}
												className="cursor-pointer hover:text-green-500"
											>
												{task}
											</li>
										))}
									</ul>
								</TableCell>
							</TableRow>
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
	);
}

export default OrientationChecklist;
