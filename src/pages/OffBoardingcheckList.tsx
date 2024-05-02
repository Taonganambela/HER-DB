import { useState } from "react";
import { Link } from "react-router-dom";



function OffBoardingcheckList() {

	const [formData, setFormData] = useState({
		employeeName :"",
		gn :"",
		dayofservice :"",
		email :"",
		residentiolAddress :"",
		mobileNumbers :"",
		nextOfKinName :"",
		nextofKinNumber :"",
		department :"",
		LineManagersName :"",
		Check1:"",
		Check2:"",
		Check3:"",
		Check4:"",
		Check5:"",
		Check6:"",
		Check7:"",
		other1:"",
		check11:"",
		check12:"",
		check13:"",
		check14:"",
		check15:"",
		check16:"",
		check17:"",
		other2:"",
		Managersname:"",
	});

	return (
		<div className="dark:bg-bkgSecondary dark:text-content p-8 w-full overflow-y-auto">
			<div className="flex ml-auto items-center justify-between w-full">
				<div className="inline-block">
					<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 ">
						Resignation
					</h1>
				</div>
			</div>

			<div>
				<div className="bg-white rounded-md dark:bg-slate-900 ">
					<div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
						<h2 className="text-left w-full p-2 pl-3 text-xl">
							Off-Boarding Check List
						</h2>
					</div>

					<form action="" className="mb-10">
						<div className="flex space-x-6 p-3 mt-4 mb-4">
							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Employee Name"
								>
									Employee Name
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Employee Name"
									type="text"
									placeholder="Employee Name"
									name="employeeName"
									value={formData.employeeName}
									onChange={(e) => {
										const newObj = {
											...formData,
											employeeName: e.target.value,
										};
										setFormData(newObj);
									}}
									required
								/>
							</div>

							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="GN"
								>
									GN
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="GN"
									type="text"
									placeholder="GN"
									name="gn"
								value={formData.gn}
								onChange={(e) => {
									const newObj = {
										...formData,
										gn: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>

							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Last Day of Service"
								>
									Last Day of Service
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Last Day of Service"
									type="text"
									placeholder="Last Day of Service"
									name="dayofservice"
								value={formData.dayofservice}
								onChange={(e) => {
									const newObj = {
										...formData,
										dayofservice: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>
							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Email Address"
								>
									Email Address
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Email Address"
									type="Email"
									placeholder="Email Address"
									name="email"
								value={formData.email}
								onChange={(e) => {
									const newObj = {
										...formData,
										email: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>
						</div>

						<div className="flex space-x-6 p-3 mt-4 mb-4">
							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Mobile Numbers"
								>
									Mobile Numbers
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Mobile Numbers"
									type="text"
									placeholder="Mobile Numbers"
									name="mobileNumbers"
								value={formData.mobileNumbers}
								onChange={(e) => {
									const newObj = {
										...formData,
										mobileNumbers: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>

							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Residential Addresss"
								>
									Residential Addresss
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Residential Addresss"
									type="text"
									placeholder="Residential Addresss"
									name="residentiolAddress"
								value={formData.residentiolAddress}
								onChange={(e) => {
									const newObj = {
										...formData,
										residentiolAddress: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>

							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Next of Kin (Name)"
								>
									Next of Kin (Name)
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Next of Kin (Name)"
									type="text"
									placeholder="Next of Kin (Name)"
									name="nextOfKinName"
								value={formData.nextOfKinName}
								onChange={(e) => {
									const newObj = {
										...formData,
										nextOfKinName: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>
							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Mobile Number(Next of kin)"
								>
									Mobile Number(Next of kin)
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Mobile Number(Next of kin)"
									type="text"
									placeholder="Mobile Number(Next of kin)"
									name="nextofKinNumber"
								value={formData.nextofKinNumber}
								onChange={(e) => {
									const newObj = {
										...formData,
										nextofKinNumber: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>
						</div>

						<div className="flex space-x-6 p-3 mt-4 mb-4">
							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Department"
								>
									Department
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="Department"
									type="text"
									placeholder="Department"
									name="department"
								value={formData.department}
								onChange={(e) => {
									const newObj = {
										...formData,
										department: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>
							<div>
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="LineManagersNAme"
								>
									Line Managers Name
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
									id="LineManagersNAme"
									type="text"
									placeholder="line managers name"
									name="DLineManagersName"
								value={formData.LineManagersName}
								onChange={(e) => {
									const newObj = {
										...formData,
										LineManagersName: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/>
							</div>
						</div>































						<div>

						<div className=" text-center text-[18px] text-sx font-bold mt-8">
								<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
								The following items must be submitted to the department designee prior to the employee’s last working day in the Company:
								</h4>
							</div>
						<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
							
							


							<div className="flex pl-6">
								
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2 rounded-lg w-[50px]"
									id="Medical Scheme Membership card"
									type="checkbox"
									name="Check1"
								value={formData.Check1}
								onChange={(e) => {
									const newObj = {
										...formData,
										Check1: e.target.value,
									};
									setFormData(newObj);
								}}
								
								/><label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Medical Scheme Membership card"
								>
									Medical Scheme Membership card
								</label>
							</div>


							<div className="flex">
								
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
									id="Employee Identity Cards/Badges"
									type="checkbox"
									name="Check2"
									value={formData.Check2}
								onChange={(e) => {
									const newObj = {
										...formData,
										Check2: e.target.value,
									};
									setFormData(newObj);
								}}
								
								/><label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Employee Identity Cards/Badges"
								>
									Employee Identity Cards/Badges
								</label>
							</div>




							<div className="flex">
								
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
									id="Keys"
									type="checkbox"
									name="Check3"
									value={formData.Check3}
								onChange={(e) => {
									const newObj = {
										...formData,
										Check3: e.target.value,
									};
									setFormData(newObj);
								}}
								required
								/><label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Keys"
								>
									Keys (i.e. office, Equipment Room,Company car, Bank Token etc.)
								</label>
							</div>
							<div className="flex">
								
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
									id="Access / Swipe card(s)"
									type="checkbox"
									name="Check4"
									value={formData.Check4}
								onChange={(e) => {
									const newObj = {
										...formData,
										Check4: e.target.value,
									};
									setFormData(newObj);
								}}
								
								/><label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Access / Swipe card(s)"
								>
									Access / Swipe card(s)
								</label>
							</div>

							<div className="flex">
								
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
									id="Purchasing card(s)"
									type="checkbox"
									name="Check5"
									value={formData.Check5}
								onChange={(e) => {
									const newObj = {
										...formData,
										Check5: e.target.value,
									};
									setFormData(newObj);
								}}
								/><label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Purchasing card(s)"
								>
									Purchasing card(s)
								</label>
							</div>
							<div className="flex">
								
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
									id="out Standing expense reimbursements"
									type="checkbox"
									name="Check6"
									value={formData.Check6}
								onChange={(e) => {
									const newObj = {
										...formData,
										Check6: e.target.value,
									};
									setFormData(newObj);
								}}
								/><label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="out Standing expense reimbursements"
								>
									out Standing expense reimbursements
								</label>
							</div>
							<div className="flex">
								
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
									id="Company property/Equipment (eg,)"
									type="checkbox"
									placeholder="Line Managers Name"
									name="Check7"
									value={formData.Check7}
								onChange={(e) => {
									const newObj = {
										...formData,
										Check7: e.target.value,
									};
									setFormData(newObj);
								}}
								/><label
									className="block font-semibold mb-2 dark:text-[#AAD5E1]"
									htmlFor="Company property/Equipment (eg,)"
								>
									Company property/Equipment (e.g.,cell phone, Ipad, Laptop, mifi)
								</label>
							</div>

							<div className="text-left">
								<div  className="flex">

								
								<label
									className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
									htmlFor="Company"
								>
									Other:
								</label>
								<input
									className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
									id="Company"
									type="text"
									placeholder="other"
									name="other1"
									value={formData.other1}
								onChange={(e) => {
									const newObj = {
										...formData,
										other1: e.target.value,
									};
									setFormData(newObj);
								}}
								/>
								</div>
							</div>

						</div>



</div>















































<div>

<div className=" text-center text-[18px] text-sx font-bold mt-8">
		<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
		Additionally, the following actions must be completed by the employee prior to the last
     working day in the Company:		
</h4>
	</div>


<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
	
	


	<div className="flex pl-6">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
			id="Return files and/or Documents to the department designee"
			type="checkbox"
			name="check11"
			value={formData.check11}
			onChange={(e) => {
			const newObj = {
			...formData,
			check11: e.target.value,
			};
			setFormData(newObj);
		}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Return files and/or Documents to the department designee"
		>
			Return files and/or Documents to the department designee
		</label>
	</div>


	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
			id="Schedule Exit interview with a Human Resource representstive"
			type="checkbox"
			name="check12"
			value={formData.check12}
			onChange={(e) => {
			const newObj = {
			...formData,
			check12: e.target.value,
			};
			setFormData(newObj);
		}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Schedule Exit interview with a Human Resource representstive"
		>
			Schedule Exit interview with a Human Resource representstive
		</label>
	</div>




	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
			id="Consult with compensaton & Benefits Manager for the benefits inquiries"
			type="checkbox"
			name="check13"
			value={formData.check13}
			onChange={(e) => {
			const newObj = {
			...formData,
			check13: e.target.value,
			};
			setFormData(newObj);
		}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Consult with compensaton & Benefits Manager for the benefits inquiries"
		>
			Consult with compensaton & Benefits Manager for the benefits inquiries(eg., gratuity, health insurance, pension scheme, etc.)
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
			id="Submit completed employee clearnce Form for signatures, and hand in to hand "
			type="checkbox"
			name="check14"
			value={formData.check14}
			onChange={(e) => {
			const newObj = {
			...formData,
			check14: e.target.value,
			};
			setFormData(newObj);
		}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Submit completed employee clearance Form for signatures, and hand in to hand in to Human Resorces and Administrative Department "
		>
			Submit completed employee clearance Form for signatures, and hand in to hand
		</label>
	</div>

	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2  rounded-lg w-[50px]"
			id="Clear telephone Access"
			type="checkbox"
			name="check15"
			value={formData.check15}
			onChange={(e) => {
			const newObj = {
			...formData,
			check15: e.target.value,
			};
			setFormData(newObj);
		}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Clear telephone Access"
		>
			Clear telephone Access
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2 rounded-lg w-[50px]"
			id="Update and/or confirm current contact information"
			type="checkbox"
			name="check16"
			value={formData.check16}
			onChange={(e) => {
			const newObj = {
			...formData,
			check16: e.target.value,
			};
			setFormData(newObj);
		}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Update and/or confirm current contact information"
		>
			Update and/or confirm current contact information
		</label>
	</div>
	

	<div className="text-left">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="Company"
		>
			Other:
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
			id="Company"
			type="text"
			placeholder="other"
			name="other2"
			value={formData.other2}
			onChange={(e) => {
			const newObj = {
			...formData,
			other2: e.target.value,
			};
			setFormData(newObj);
		}}
		/>
		</div>
	</div>

</div>

<div className="center-left mt-20 pl-3">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="Company"
		>
			Confirmed by :
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[450px]"
			id="Company"
			type="text"
			placeholder="e.g. Micheal Symalala (IT Manager)"
			name="Managersname"
			value={formData.Managersname}
			onChange={(e) => {
			const newObj = {
			...formData,
			Managersname: e.target.value,
			};
			setFormData(newObj);
		}}
		/>
		</div>
	</div>

</div>








<div className=" text-center text-[18px] text-sx  mt-8">
		<h4 className="dark:text-red-700 text-red-600">
		*The employee, as well as the Line Manager/Head of Department, must confirm this
document to verify that all Company property has been handed over.		
</h4>
	</div>

					</form>






				</div>
			</div>
			<div className="center-items justify-center flex mt-0">
				<Link to="clearanceform">
			
				<button className="bg-green-700 text-white rounded-md w-[150px] h-14">
					Next
				</button>
					</Link>
			</div>
		</div>
	);
}

export default OffBoardingcheckList;
