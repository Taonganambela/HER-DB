import React from "react";
import { selectCount } from "../redux/slices/counterSlice";
import { useAppSelector } from "../redux/hooks";
import Card1 from "../components/dashboard/Card1";
import Card2 from "../components/dashboard/Card2";
import Select from "../components/Select";
import AnnoucementItem from "../components/dashboard/AnnoucementItem";
import ApprovalList from "../components/dashboard/ApprovalList";

function Dashboard() {
  const count = useAppSelector(selectCount);
  console.log(count);

  return (
    <div className="dark:bg-bkgSecondary dark:text-content h-content p-8 w-full ">
      <h1 className="font-semibold text-2xl text-gray-600 mb-3 dark:text-slate-300">Dashboard</h1>
      <div className="flex w-full ">
        <div className="flex-[0.65] ">
             <div className="flex space-x-2 ">
          {/* 3 cards */}
          <Card1
            color="bg-green-200"
            topText="Available Positions"
            bottomText="4 Urgently needed"
            count={24}
            bottomTextColor="text-purple-600"
          />
          
          <Card1
            color="bg-purple-200"
            topText="Contracts"
            bottomText="Expiring this month"
            count={15}
            bottomTextColor="text-green-500"
          />

          <Card1
            color="bg-green-200"
            topText="Newly Employed"
            bottomText="8 Onboarded"
            count={10}
            bottomTextColor="text-purple-600"
          />

        </div>
          <div className="flex space-x-2">
            
              <Card2 graph_color="text-purple-600" topText="Total Employees" count={216} bottomText="120 Men 96 Women" boxColor="bg-purple-300" percentage={2}/>
              <Card2 graph_color="text-red-500" topText="Termination/Resignation" count={13} bottomText="10 Men 5 Women" boxColor="bg-red-200" drop percentage={10}/>
          </div>

          <div className="bg-white dark:bg-bkg mt-5 p-4 rounded-lg w-[97%] mb-20">
            <div className="flex items-center justify-between">
              <h2 className="font-sans font-medium text-slate-600 text-lg dark:text-gray-200">Announcements</h2>
              <select name="" id="" className="border border-slate-500 p-2 text-slate-500 rounded-md text-sm dark:bg-slate-900 dark:text-gray-300">
                <option value="" className="bg-white">Today 13 Sep 2021</option>
                <option value="">Wednesday 12 Sep 2021</option>
                <option value="">Tuesday 11 Sep 2021</option>
              </select>
            </div>

            <AnnoucementItem />
            <AnnoucementItem />
            <AnnoucementItem />
            <AnnoucementItem />
            <button className="text-center w-full text-purple-600 p-2 ">
              See All Announcements
            </button>
          </div>

        </div>
       

        <div className="flex-[0.35]  ">
          {/* Recent Activity */}
          <div className="bg-green-800 w-full rounded-lg">
          <h2 className="bg-green-700 w-full text-white font-medium p-2 font-sans rounded-t-lg">Recent Activity</h2>

            <div className="space-y-3 p-4">
            <h4 className="text-gray-200 text-xs">10:40 AM, Tuesday, March 13th 2024</h4>
            <h2 className="font-sans text-2xl text-white">You sent a requistion</h2>
            <h3 className="text-gray-200 text-sm">Kindly check the requirements and terms of work and make sure everything is right</h3>
            <button className="bg-purple-600 p-2  text-white rounded-md text-center">
              Check details
            </button>
            </div>
           
          </div>
          <ApprovalList />
          </div>
      </div>
    </div>
  );
}

export default Dashboard;
