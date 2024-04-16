import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Notifications from "./pages/Notifications";
import Requisitions from "./pages/Requisitions";
import Onboarding from "./pages/Onboarding";
import Offboarding from "./pages/Offboarding";
import Employee from "./pages/Employee";
import Department from "./pages/Department";
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

	{
		path: "/requisitions",
		element: <DashboardLayout Component={Requisitions} />,
	},
	{
		path: "/requisition-details",
		element: <DashboardLayout Component={RequisitionDetails} />,
	},

	{
		path: "/onboardingPlan",
		element: <DashboardLayout Component={OnboardingPlan} />,
		children: [],
	},

	{
		path: "/onboarding",
		element: <DashboardLayout Component={Onboarding} />,
		children: [],
	},

	{
		path: "employeeCreation",
		element: <DashboardLayout Component={EmployeeCreation} />,
	},

	{
		path: "/EmployeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/offboarding",
		element: <DashboardLayout Component={Offboarding} />,
	},

	{
		path: "/employees",
		element: <DashboardLayout Component={Employee} />,
	},

	{
		path: "/departments",
		element: <DashboardLayout Component={Department} />,
	},
	{
		path: "/announcements",
		element: <DashboardLayout Component={Announcement} />,
	},

	{
		path: "/resignation",
		element: <DashboardLayout Component={Resignation} />,
	},
	{
		path: "/announcementCreation",
		element: <DashboardLayout Component={AnnouncementCreation} />,
	},
	{
		path: "/fileCheckList",
		element: <DashboardLayout Component={FileCheckList} />,
	},
	{
		path: "/inductionlist",
		element: <DashboardLayout Component={InductionList} />,
	},
	{
		path: "/orientationChecklist",
		element: <DashboardLayout Component={OrientationChecklist} />,
	},

	{
		path: "/test",
		element: <Test />,
	},
]);
