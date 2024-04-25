import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import Requisitions from "./pages/Requisitions";
import Onboarding from "./pages/Onboarding";
import Offboarding from "./pages/Offboarding";
import RequisitionDetails from "./pages/RequisitionDetails";
import Test from "./pages/Test";
import Announcement from "./pages/Announcement";
import AnnouncementCreation from "./pages/AnnouncementCreation";
import EmployeeCreation from "./pages/EmployeeCreation";
import EmployeeDetails from "./pages/EmployeeDetails";
import Resignation from "./pages/Resignation";
import OnboardingPlan from "./pages/OnboardingPlan";
import FileCheckList from "./pages/FileCheckList";
import { InductionList } from "./pages/InductionList";
import OrientationChecklist from "./pages/OrientationChecklist";
import OffBoardingcheckList from "./pages/OffBoardingcheckList";
import RequisitionCreation from "./pages/RequisitionCreation";
import ClearanceForm from "./pages/ClearanceForm";
import ExitInterview from "./pages/ExitInterview";

// interface Routes {
//   path: string
//   element: FC
// }

// const routes : Routes = [{
//   pa
// }]

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Login />,
	},
	{
		path: "/dashboard",
		element: <DashboardLayout Component={Dashboard} />,
	},

	{
		path: "/notifications",
		element: <DashboardLayout Component={Notifications} />,
	},
	//requisition
	{
		path: "/requisitions",
		element: <DashboardLayout Component={Requisitions} />,
	},

	{
		path: "/requisitions/requisitionCreation",
		element: <DashboardLayout Component={RequisitionCreation} />,
	},
	{
		path: "/requisitions/requisition-details",
		element: <DashboardLayout Component={RequisitionDetails} />,
	},
	// onboarding
	{
		path: "/onboarding",
		element: <DashboardLayout Component={Onboarding} />,
	},

	{
		path: "/onboardingPlan",
		element: <DashboardLayout Component={OnboardingPlan} />,
	},
	{
		path: "/onboarding/employeeCreation",
		element: <DashboardLayout Component={EmployeeCreation} />,
	},

	{
		path: "/onboarding/fileCheckList",
		element: <DashboardLayout Component={FileCheckList} />,
	},
	{
		path: "/onboarding/inductionlist",
		element: <DashboardLayout Component={InductionList} />,
	},
	{
		path: "/onboarding/orientationChecklist",
		element: <DashboardLayout Component={OrientationChecklist} />,
	},

	{
		path: "/offboarding",
		element: <DashboardLayout Component={Offboarding} />,
	},
	{
		path: "/offboarding/offBoardingcheckList",
		element: <DashboardLayout Component={OffBoardingcheckList} />,
	},

	

	//Resignation
	{
		path: "/resignation",
		element: <DashboardLayout Component={Resignation} />,
	},
	{
		path: "/resignation/offBoardingcheckList",
		element: <DashboardLayout Component={OffBoardingcheckList} />,
	},

	{
		path: "/resignation/offBoardingcheckList/clearanceform",
		element: <DashboardLayout Component={ClearanceForm} />,
	},

	{
		path: "/resignation/offBoardingcheckList/clearanceform/exitinterview",
		element: <DashboardLayout Component={ExitInterview} />,
	},

	// announcements

	{
		path: "/announcements",
		element: <DashboardLayout Component={Announcement} />,
	},
	{
		path: "/announcements/announcementCreation",
		element: <DashboardLayout Component={AnnouncementCreation} />,
	},

	//all paths to employee details
	{
		path: "/resignation/offBoardingcheckList/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},

	{
		path: "/resignation/offBoardingcheckList/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/resignation/offBoardingcheckList/clearanceform/exitinterview/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/onboarding/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/onboarding/employeeCreation/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/onboarding/fileCheckList/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/onboarding/inductionlist/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/onboarding/orientationChecklist/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/offboarding/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/resignation/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},

	{
		path: "/requisitions/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/onboarding/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/announcements/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/dashboard/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/notifications/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/requisitions/requisitionCreation/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},

	{
		path: "/requisitions/requisition-details/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,

	},
	{
		path: "/announcements/announcementCreation/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,

	},
	{
		path: "/test",
		element: <Test />,
	},
]);
