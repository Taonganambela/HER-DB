import { useState } from "react";
import { Link } from "react-router-dom";



function RequisitionCreation() {
	const [formData, setFormData] = useState({
		department: "",
		section: "",
		jobTitle: "",
		jobPosition:"",
		budgetstrength:"",
		actualStrength:"",
		variance:"",
		numberrequired:"",
		grade:"",
		basicpay:"",
		dateRequired:"",
		contractduration:"",
		employeegn:"",
		preferedEducation:"",
		professionalQualification:"",
		preferedExperience:"",
		justification:"",
		requisitionedBy:"",

	});

	

	const handleChange = (e:any) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// Add your validation logic here
	// 	if (
	// 		formData.department === "" ||
	// 		formData.section === "" ||
	// 		formData.jobTitle === ""
	// 	) {
	// 		alert("Please fill in all required fields.");
	// 		return;
	// 	}
	// 	// If all fields are filled, submit the form
	// 	console.log("Form submitted:", formData);
	// };


	return (
		<div className="dark:bg-bkgSecondary dark:text-content max-h-fit pb-4 p-8 w-full overflow-y-auto">
			<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 pl-2">
				Requisitions
			</h1>

			<div className="bg-white rounded-md dark:bg-slate-900 pb-5">
				<div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
					<h2 className="text-left w-full p-2 pl-3 text-xl">
						Requisitions Creation
					</h2>
				</div>
				<form action="" className="space-y-10">
					<div className="flex-cols mt-4 basis-full md:center-items md:justify-center">
						<div className="text-center justify-center items-center  md:flex">
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1] text-center"
									htmlFor="department"
								>
									Department
								</label>
								<input
									className="border-2 grow p-2 border-gray-500 dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="department"
									type="text"
									name="department"
									value={formData.department}
									
									placeholder="department"
									required
									onChange={(e) => {
										const newObj = { ...formData, department: e.target.value };
										setFormData(newObj);
									  }}
								/>
							</div>




							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1] text-center"
									htmlFor="Section"
								>
									Section
								</label>
								<input
									className="dark:bg-slate-700 grow border-2 p-2 border-gray-500 text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Section"
									type="text"
									placeholder="section"
									name="section"
									value={formData.section}
									onChange={(e) => {
										const newObj = { ...formData, Section: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1] text-center"
									htmlFor="Jobtitle"
								>
									Job Title
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500 text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Jobtitle"
									type="text"
									placeholder="job title"
									name="jobTitle"
									value={formData.jobTitle}
									onChange={(e) => {
										const newObj = { ...formData, Jobtitle: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
						</div>
					</div>

					<div className="flex-cols basis-full center-items justify-center">
						<div className="text-center justify-center items-center flex">
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="jobposition"
								>
									Job Position
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="jobposition"
									type="text"
									placeholder="job position"
									name="jobPosition"
									value={formData.jobPosition}
									onChange={(e) => {
										const newObj = { ...formData, jobPosition : e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="budgetstrength"
								>
									Approved Budget Strength
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="budgetstrength"
									type="text"
									placeholder="approved budget strength"
									name="budgetstrength"
									value={formData.budgetstrength}
									onChange={(e) => {
										const newObj = { ...formData, budgetstrength: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="actualStrength"
								>
									Actual Strength
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="actualStrength"
									type="text"
									placeholder="actual strength"
									name="actualStrength"
									value={formData.actualStrength}
									onChange={(e) => {
										const newObj = { ...formData, actualStrength: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
						</div>
					</div>

					<div className="flex-cols basis-full center-items justify-center">
						<div className="text-center justify-center items-center flex">
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="variance"
								>
									Variance
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="variance"
									type="text"
									placeholder="variance"
									name="variance"
									value={formData.variance}
									onChange={(e) => {
										const newObj = { ...formData, variance: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="numberrequired"
								>
									Number Required
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="numberrequired"
									type="text"
									placeholder="Number Required"
									name="numberrequired"
									value={formData.numberrequired}
									onChange={(e) => {
										const newObj = { ...formData, numberrequired: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="grade"
								>
									Grade
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="grade"
									type="text"
									placeholder="grade"
									name="grade"
									value={formData.grade}
									onChange={(e) => {
										const newObj = { ...formData, grade: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
						</div>
					</div>

					<div className="flex-cols basis-full center-items justify-center">
						<div className="text-center justify-center items-center flex">
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="basicPay"
								>
									Basic Pay
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="basicpay"
									type="text"
									placeholder="basic pay"
									name="basicpay"
									value={formData.basicpay}
									onChange={(e) => {
										const newObj = { ...formData, basicpay: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="dateRequired"
								>
									Date Required
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="dateRequired"
									type="text"
									placeholder="date required"
									name="dateRequired"
									value={formData.dateRequired}
									onChange={(e) => {
										const newObj = { ...formData, dateRequired: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="contractDuration"
								>
									Contract Duration
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="contractduration"
									type="text"
									placeholder="contract duration "
									name="contractduration"
									value={formData.contractduration}
									onChange={(e) => {
										const newObj = { ...formData,contractduration: e.target.value };
										setFormData(newObj);
									  }}
								
									required
								/>
							</div>
						</div>
					</div>

					<div className="flex-cols basis-full center-items justify-center ">
						<div className="text-center justify-center items-center flex">
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="employeegn"
								>
									Vacating Employee GN
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="employeegn"
									type="text"
									placeholder="vacating employee gn"
									name="employeegn"
									value={formData.employeegn}
									onChange={(e) => {
										const newObj = { ...formData, employeegn: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="preferedEducation"
								>
									Prefered Education
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="preferedEducation"
									type="text"
									placeholder="prefered education"
									name="preferedEducation"
									value={formData.preferedEducation}
									onChange={(e) => {
										const newObj = { ...formData, preferedEducation: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="professionalQualification"
								>
									Professional Qualification
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="professionalQualification"
									type="text"
									placeholder="professional qualification "
									name="professionalQualification"
									value={formData.professionalQualification}
									onChange={(e) => {
										const newObj = { ...formData, professionalQualification: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
						</div>
					</div>

					<div className="flex-cols basis-full center-items justify-center ">
						<div className="text-center justify-center items-center flex">
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="preferedExperience"
								>
									Prefered Experience
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="preferedExperience"
									type="text"
									placeholder="prefered experience"
									name="preferedExperience"
									value={formData.preferedExperience}
									onChange={(e) => {
										const newObj = { ...formData, preferedExperience: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Justification"
								>
									Justification of Engagement
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="justification"
									type="text"
									placeholder="please provide justification of engagement"
									name="justification"
									value={formData.justification}
									onChange={(e) => {
										const newObj = { ...formData, justification: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
							<div className="basis-full flex-1">
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="requisitionedBy"
								>
									Requisitioned By
								</label>
								<input
									className="dark:bg-slate-700 border-2 p-2 border-gray-500  text-gray-800 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="requisitionedBy"
									type="text"
									placeholder="requisitioned by "
									name="requisitionedBy"
									value={formData.requisitionedBy}
									onChange={(e) => {
										const newObj = { ...formData, requisitionedBy: e.target.value };
										setFormData(newObj);
									  }}
									required
								/>
							</div>
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
					<button type="submit" className="bg-[#549B69] text-sm text-white h-12 w-[200px] rounded-md">
						Submit
					</button>
				</Link>
			</div>
		</div>
	);
}

export default RequisitionCreation;
