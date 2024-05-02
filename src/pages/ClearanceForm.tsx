import { useState } from "react";
import { Link } from "react-router-dom";
import Department from "./Department";

export interface ClearanceFormI{
	employeeName:"",
		gn:"",
		section:"",
		department:"",
		check1:"",
		check2:"",
		check3:"",
		check4:"",
		check5:"",
		check6:"",
		coments1:"",
		confirmedBy:"",
		check8:"",
		check9:"",
		check10:"",
		check11:"",
		check12:"",
		check13:"",
		check14:"",
		coments2:"",
		confirmedBy2:"",
		check15:"",
		check16:"",
		check17:"",
		comments3:"",
		confirmedBy3:"",
		check18:"",
		comments4:"",
		confirmedBy4:"",
		check19:"",
		check20:"",
		check21:"",
		comments5:"",
		confirmedBy5:"",
		check22:"",
		comments6:"",
		confirmedBy6:"",
}

function ClearanceForm() {
	const [formData, setFormData] = useState({
		employeeName:"",
		gn:"",
		section:"",
		department:"",
		check1:"",
		check2:"",
		check3:"",
		check4:"",
		check5:"",
		check6:"",
		coments1:"",
		confirmedBy:"",
		check8:"",
		check9:"",
		check10:"",
		check11:"",
		check12:"",
		check13:"",
		check14:"",
		coments2:"",
		confirmedBy2:"",
		check15:"",
		check16:"",
		check17:"",
		comments3:"",
		confirmedBy3:"",
		check18:"",
		comments4:"",
		confirmedBy4:"",
		check19:"",
		check20:"",
		check21:"",
		comments5:"",
		confirmedBy5:"",
		check22:"",
		comments6:"",
		confirmedBy6:"",
	});

	return (
		<div className="dark:bg-bkgSecondary dark:text-content max-h-fit p-8 w-full overflow-y-auto">
			<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 pl-2">
				Resignation
			</h1>

			<div className="bg-white rounded-md dark:bg-slate-900 pb-5">
				<div className="bg-[#549B69] text-white py-2 text-md font-semibold rounded-t-lg flex w-full justify-evenly">
					<h2 className="text-left w-full p-2 pl-3 text-xl">
						Clearance Form
					</h2>
				</div>
				<form action="" className="mb-20">
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
								placeholder="employee name"
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
								htmlFor="Section"
							>
								Section
							</label>
							<input
								className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[250px]"
								id="Section"
								type="text"
								placeholder="section"
								name="section"
									value={formData.section}
									onChange={(e) => {
										const newObj = {
											...formData,
											section: e.target.value,
										};
										setFormData(newObj);
									}}
									required
							/>
						</div>
					</div>
					<div className="pl-4 text-left text-[18px] text-sx font-bold mt-8">
						<h2 className=" dark:text-[#AAD5E1] text-gray-900 ">Items to be Handed</h2>
					</div>













                    <div>















<div className=" text-left pl-5 text-[18px] text-sx font-bold mt-8">
		<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
	LINE MANAGER :		
</h4>
	</div>


<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
	
	


	<div className="flex pl-6">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-3 mt-2 rounded-lg w-[50px]"
			id="Work Specific Tools"
			type="checkbox"
			name="check1"
			value={formData.check1}
			onChange={(e) => {
			const newObj = {
			...formData,
			check1: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Work Specific Tools"
		>
			Work Specific Tools (Technical Tool sets)
		</label>
	</div>






	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Desktop PC"
			type="checkbox"
			name="check2"
			value={formData.check2}
			onChange={(e) => {
			const newObj = {
			...formData,
			check2: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Desktop PC"
		>
			Desktop PC
		</label>
	</div>




	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Identity Cards/ Medical Cards/ Access Card/ Company Driving authority Card"
			type="checkbox"
			name="check3"
			value={formData.check3}
			onChange={(e) => {
			const newObj = {
			...formData,
			check3: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Identity Cards/ Medical Cards/ Access Card/ Company Driving authority Card"
		>
			Identity Cards/ Medical Cards/ Access Card/ Company Driving authority Card
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id=" Documents, records, papers,Company merchandise"
			type="checkbox"
			name="check4"
			value={formData.check4}
			onChange={(e) => {
			const newObj = {
			...formData,
			check4: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Documents, records, papers,Company merchandise"
		>
			Documents, records, papers,Company merchandise
		</label>
	</div>

	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Transport Provision(Vichecles, fuel,)"
			type="checkbox"
			name="check5"
			value={formData.check5}
			onChange={(e) => {
			const newObj = {
			...formData,
			check5: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Transport Provision(Vichecles, fuel,)"
		>
			Transport Provision(Vichecles, fuel Cards, parking tickets, police reports, vechicle accesories, Vechicle damage etc.)
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="House/ Generator/furniture/premise keys, drawer-cabinate keys/ other issued property etc."
			type="checkbox"
			name="check6"
			value={formData.check6}
			onChange={(e) => {
			const newObj = {
			...formData,
			check6: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="House/ Generator/furniture/premise keys, drawer-cabinate keys/ other issued property etc."
		>
			House/ Generator/furniture/premise keys, drawer-cabinate keys/ other issued property etc.
		</label>
	</div>
	

	<div className="text-left">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="other"
		>
            Coments for line manager:
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
			id="other"
			type="text"
			placeholder="other"
			name="coments1"
			value={formData.coments1}
			onChange={(e) => {
			const newObj = {
			...formData,
			coments1: e.target.value,
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
			placeholder="Line manager/ Head of department"
			name="confirmedBy"
			value={formData.confirmedBy}
			onChange={(e) => {
			const newObj = {
			...formData,
			confirmedBy: e.target.value,
			};
			setFormData(newObj);
			}}
		/>
		</div>
	</div>

</div>


























































<div>

<div className=" text-left pl-5 text-[18px] text-sx font-bold mt-8">
		<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
	Human Resource & Administration :		
</h4>
	</div>


<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
	
	


	<div className="flex pl-6">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Phones/Services"
			type="checkbox"
			name="check8"
			value={formData.check8}
			onChange={(e) => {
			const newObj = {
			...formData,
			check8: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Phones/Services"
		>
			Phones/Services 
		</label>
	</div>






	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Other Phones"
			type="checkbox"
			name="check9"
			value={formData.check9}
			onChange={(e) => {
			const newObj = {
			...formData,
			check9: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Other Phones"
		>
			Other Phones
		</label>
	</div>




	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Staff Profile(all Numbers issued)"
			type="checkbox"
			name="check10"
			value={formData.check10}
			onChange={(e) => {
			const newObj = {
			...formData,
			check10: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Staff Profile(all Numbers issued)"
		>
			Staff Profile(all Numbers issued)
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id=" Phone Loan"
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
			htmlFor="Phone Loan"
		>
			Phone Loan
		</label>
	</div>

	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Salary Advance & Amount outstanding"
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
			htmlFor="Salary Advance & Amount outstanding"
		>
			Salary Advance & Amount outstanding
		</label>
	</div>



    <div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Bank Loans"
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
			htmlFor="Bank Loans"
		>
			Bank Loans
		</label>
	</div>
    <div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Exit interview Taken"
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
			htmlFor="Exit interview Taken"
		>
			Exit interview Taken
		</label>
	</div>

	

	<div className="text-left">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="other"
		>
            Coments for HR & ADMIN manager:
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
			id="other"
			type="text"
			placeholder="other"
			name="coments2"
			value={formData.coments2}
			onChange={(e) => {
			const newObj = {
			...formData,
			coments2: e.target.value,
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
			placeholder="Line manager/ Head of department"
			name="confirmedBy2"
			value={formData.confirmedBy2}
			onChange={(e) => {
			const newObj = {
			...formData,
			confirmedBy2: e.target.value,
			};
			setFormData(newObj);
			}}
		/>
		</div>
	</div>

</div>


























































<div>
	<div className=" text-left pl-5 text-[18px] text-sx font-bold mt-8">
		<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
			Customer Database		
		</h4>
	</div>


<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
	
	


	<div className="flex pl-6">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="modem"
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
			htmlFor="modem"
		>
			modem 
		</label>
	</div>






	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Internet/ADSL/ISDN Modem and equipment"
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
			htmlFor="Internet/ADSL/ISDN Modem and equipment"
		>
			Internet/ADSL/ISDN Modem and equipment
		</label>
	</div>




	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Other Company issued Handsets and Landlines facilities"
			type="checkbox"
			name="check17"
			value={formData.check17}
			onChange={(e) => {
			const newObj = {
			...formData,
			check17: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Other Company issued Handsets and Landlines facilities"
		>
			Other Company issued Handsets and Landlines facilities
		</label>
	</div>


	
	<div className="text-left">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="other"
		>
            Coments for Customer Database:
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
			id="other"
			type="text"
			placeholder="other"
			name="comments"
			value={formData.comments3}
			onChange={(e) => {
			const newObj = {
			...formData,
			comments: e.target.value,
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
			placeholder="Line manager/ Head of department"
			name="confirmedBy3"
			value={formData.confirmedBy3}
			onChange={(e) => {
			const newObj = {
			...formData,
			confirmedBy3: e.target.value,
			};
			setFormData(newObj);
			}}
		/>
		</div>
	</div>

</div>



































































<div>

<div className=" text-left pl-5 text-[18px] text-sx font-bold mt-8">
		<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
	IT Infrustructure / Help Desk		
</h4>
	</div>


<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
	
	


	<div className="flex pl-6">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="IT Services"
			type="checkbox"
			name="check18"
			value={formData.check18}
			onChange={(e) => {
			const newObj = {
			...formData,
			check18: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="IT Services"
		>
			IT Services 
		</label>
	</div>






	
	<div className="text-left">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="other"
		>
            Coments for IT Infrustructure/ Help Desk:
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
			id="other"
			type="text"
			placeholder="other"
			name="comments4"
			value={formData.comments4}
			onChange={(e) => {
			const newObj = {
			...formData,
			comments4: e.target.value,
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
			placeholder="Line manager/ Head of department"
			name="confirmedBy4"
			value={formData.confirmedBy4}
			onChange={(e) => {
			const newObj = {
			...formData,
			confirmedBy4: e.target.value,
			};
			setFormData(newObj);
			}}
		/>
		</div>
	</div>

</div>















































<div>

<div className=" text-left pl-5 text-[18px] text-sx font-bold mt-8">
		<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
	Finance	
</h4>
	</div>


<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
	
	


	<div className="flex pl-6">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Company outstanding IOU"
			type="checkbox"
			name="check19"
			value={formData.check19}
			onChange={(e) => {
			const newObj = {
			...formData,
			check19: e.target.value,
			};
			setFormData(newObj);
			}}
			
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Company outstanding IOU"
		>
			Company outstanding IOU 
		</label>
	</div>






	<div className="flex ">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Company outstanding Imprest"
			type="checkbox"
			name="check20"
			value={formData.check20}
			onChange={(e) => {
			const newObj = {
			...formData,
			check20: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Company outstanding Imprest"
		>
			Company outstanding Imprest 
		</label>
	</div>


	<div className="flex ">
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Company Stock"
			type="checkbox"
			name="check21"
			value={formData.check21}
			onChange={(e) => {
			const newObj = {
			...formData,
			check21: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Company Stock"
		>
			Company Stock 
		</label>
	</div>





	
	<div className="text-left">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="other"
		>
            Coments for Finance:
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
			id="other"
			type="text"
			placeholder="other"
			name="comments5"
			value={formData.comments5}
			onChange={(e) => {
			const newObj = {
			...formData,
			comments5: e.target.value,
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
			placeholder="Line manager/ Head of department"
			name="confirmedBy5"
			value={formData.confirmedBy5}
			onChange={(e) => {
			const newObj = {
			...formData,
			confirmedBy5: e.target.value,
			};
			setFormData(newObj);
			}}
		/>
		</div>
	</div>

</div>




















<div>

<div className=" text-left pl-5 text-[18px] text-sx font-bold mt-8">
		<h4 className=" dark:text-[#AAD5E1] text-gray-900 ">
	Audit and Risk
</h4>
	</div>


<div className="flex-col space-x-6 p-3 mt-4 mb-4 text-center">
	
	





	<div className="flex pl-6">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600  h-3 mt-2 rounded-lg w-[50px]"
			id="Company outstanding Imprest"
			type="checkbox"
			name="check22"
			value={formData.check22}
			onChange={(e) => {
			const newObj = {
			...formData,
			check22: e.target.value,
			};
			setFormData(newObj);
			}}
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Company outstanding Imprest"
		>
			Audit/ Rist matters
		</label>
	</div>







	
	<div className="text-left">
		<div  className="flex">

		
		<label
			className="block font-semibold mb-2 dark:text-[#AAD5E1] mt-3 mr-4"
			htmlFor="other"
		>
            Coments for Finance:
		</label>
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-12 rounded-lg w-[300px]"
			id="other"
			type="text"
			placeholder="other"
			name="comments6"
			value={formData.comments6}
			onChange={(e) => {
			const newObj = {
			...formData,
			comments6: e.target.value,
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
			placeholder="Line manager/ Head of department"
			name="confirmedBy6"
			value={formData.confirmedBy6}
			onChange={(e) => {
			const newObj = {
			...formData,
			confirmedBy6: e.target.value,
			};
			setFormData(newObj);
			}}
		/>
		</div>
	</div>

</div>



















				</form>
			</div>

			<div className="center-items justify-center flex mt-4">
				<Link to="exitinterview">
			
				<button className="bg-green-700 text-white rounded-md w-[150px] h-14">
					Next
				</button>
					</Link>
			</div>


		</div>
	);
}

export default ClearanceForm;
