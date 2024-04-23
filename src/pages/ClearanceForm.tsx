function ClearanceForm() {
	return (
		<div className="dark:bg-bkgSecondary dark:text-content max-h-fit p-8 w-full h-screen">
			<h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300 pl-2">
				Off Boarding
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
								placeholder="Employee Name"
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
								placeholder="Section"
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
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Work Specific Tools"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Work Specific Tools"
		>
			Work Specific Tools (Technical Tool sets)
		</label>
	</div>






	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Desktop PC"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Desktop PC"
		>
			Desktop PC
		</label>
	</div>




	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Identity Cards/ Medical Cards/ Access Card/ Company Driving authority Card"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Identity Cards/ Medical Cards/ Access Card/ Company Driving authority Card"
		>
			Identity Cards/ Medical Cards/ Access Card/ Company Driving authority Card
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id=" Documents, records, papers,Company merchandise"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Documents, records, papers,Company merchandise"
		>
			Documents, records, papers,Company merchandise
		</label>
	</div>

	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Transport Provision(Vichecles, fuel,)"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Transport Provision(Vichecles, fuel,)"
		>
			Transport Provision(Vichecles, fuel Cards, parking tickets, police reports, vechicle accesories, Vechicle damage etc.)
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="House/ Generator/furniture/premise keys, drawer-cabinate keys/ other issued property etc."
			type="checkbox"
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
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Phones/Services"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Phones/Services"
		>
			Phones/Services 
		</label>
	</div>






	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Other Phones"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Other Phones"
		>
			Other Phones
		</label>
	</div>




	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Staff Profile(all Numbers issued)"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Staff Profile(all Numbers issued)"
		>
			Staff Profile(all Numbers issued)
		</label>
	</div>
	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id=" Phone Loan"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Phone Loan"
		>
			Phone Loan
		</label>
	</div>

	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Salary Advance & Amount outstanding"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Salary Advance & Amount outstanding"
		>
			Salary Advance & Amount outstanding
		</label>
	</div>



    <div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Bank Loans"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Bank Loans"
		>
			Bank Loans
		</label>
	</div>
    <div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Exit interview Taken"
			type="checkbox"
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
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="modem"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="modem"
		>
			modem 
		</label>
	</div>






	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Internet/ADSL/ISDN Modem and equipment"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Internet/ADSL/ISDN Modem and equipment"
		>
			Internet/ADSL/ISDN Modem and equipment
		</label>
	</div>




	<div className="flex">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Other Company issued Handsets and Landlines facilities"
			type="checkbox"
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
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="IT Services"
			type="checkbox"
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
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Company outstanding IOU"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Company outstanding IOU"
		>
			Company outstanding IOU 
		</label>
	</div>






	<div className="flex ">
		
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Company outstanding Imprest"
			type="checkbox"
		/><label
			className="block font-semibold mb-2 dark:text-[#AAD5E1]"
			htmlFor="Company outstanding Imprest"
		>
			Company outstanding Imprest 
		</label>
	</div>


	<div className="flex ">
		<input
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Company Stock"
			type="checkbox"
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
			className="border-2 p-2 border-gray-500  dark:bg-slate-700 focus:outline-gray-600 h-6 rounded-lg w-[50px]"
			id="Company outstanding Imprest"
			type="checkbox"
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
		/>
		</div>
	</div>

</div>



















				</form>
			</div>
		</div>
	);
}

export default ClearanceForm;
