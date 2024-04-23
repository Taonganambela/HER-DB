import React from "react";
import { Link } from "react-router-dom";

function RequisitionCreation() {
	return (
		<div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-4 p-8 w-full ">
			<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 pl-2">
				Requisitions
			</h1>

			<div className="bg-white rounded-md dark:bg-slate-900 pb-5">
				<div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
					<h2 className="text-left w-full p-2 pl-3 text-xl">
						Requisitions Creation
					</h2>
				</div>
				<form action="">
					<div className="flex space-x-32 mb-10 center-items justify-center mt-3">
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="department"
							>
								Department
							</label>
							<input
								className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="department"
								type="text"
								placeholder="department"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Section"
							>
								Section
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Section"
								type="text"
								placeholder="Section"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Jobtitle"
							>
								Job title
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Jobtitle"
								type="text"
								placeholder="Job title"
							/>
						</div>
						
					</div>































                    <div className="flex space-x-32 mb-10 center-items justify-center ">
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="job position"
							>
								job position
							</label>
							<input
								className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="job position"
								type="text"
								placeholder="job position"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="approved budget strength"
							>
								Approved budget strength
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="approved budget strength"
								type="text"
								placeholder="approved budget strength"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Actual Strength"
							>
								Actual Strength
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Actual Strength"
								type="text"
								placeholder="Actual Strength"
							/>
						</div>
						
					</div>






































                    <div className="flex space-x-32 mb-10 center-items justify-center ">
						<div>
							
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Variance"
							>
								Variance
							</label>
							<input
								className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Variance"
								type="text"
								placeholder="Variance"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Number Required"
							>
								Number Required
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Number Required"
								type="text"
								placeholder="Number Required"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Grade"
							>
								Grade
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Grade"
								type="text"
								placeholder="Grade"
							/>
						</div>
						
					</div>


































                    <div className="flex space-x-32 mb-10 center-items justify-center ">
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Basic Pay"
							>
								Basic Pay
							</label>
							<input
								className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Basic Pay"
								type="text"
								placeholder="Basic Pay"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Date Required"
							>
								Date Required
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Date Required"
								type="text"
								placeholder="Date Required"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Contract Duration"
							>
								Contract Duration
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Contract Duration"
								type="text"
								placeholder=" "
							/>
						</div>
						
					</div>




































                    <div className="flex space-x-32 mb-10 center-items justify-center ">
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Vacating Employee GN"
							>
								Vacating Employee GN
							</label>
							<input
								className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Vacating Employee GN"
								type="text"
								placeholder="Vacating Employee GN"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Prefered Education"
							>
								Prefered Education
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Prefered Education"
								type="text"
								placeholder="Prefered Education"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Professional Qualification"
							>
								Professional Qualification
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Professional Qualification"
								type="text"
								placeholder=" "
							/>
						</div>
						
					</div>

















































	                <div className="flex space-x-32 mb-10 center-items justify-center ">
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Vacating Employee GN"
							>
								Prefered Experience
							</label>
							<input
								className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Vacating Employee GN"
								type="text"
								placeholder="Vacating Employee GN"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Please provide Justification of Engagement"
							>
								Justification of Engagement
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Please provide Justification of Engagement"
								type="text"
								placeholder="Please provide Justification of Engagement"
							/>
						</div>
						<div>
							<label
								className="block font-semibold mb-2 dark:text-[#AAD5E1]"
								htmlFor="Requisitioned By"
							>
								Requisitioned By
							</label>
							<input
								className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Requisitioned By"
								type="text"
								placeholder=" "
							/>
						</div>
						
					</div>
				</form>
			</div>
            <div className="flex ml-auto items-center justify-between w-full mt-12 mb-14">
        {/* <div>
          <Link to="/onboarding">
            <button className="bg-[#549B69] text-sm text-white h-12 w-[200px] rounded-md ">
              Back
            </button>
          </Link>
        </div>*/}
      
          <Link to="/requisitions">
          <button className="bg-[#549B69] text-sm text-white h-12 w-[200px] rounded-md">
            Submit
          </button>
          </Link>
     
      </div>
		</div>
	);
}

export default RequisitionCreation;
