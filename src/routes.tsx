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
import OffBoardingcheckList from "./pages/OffBoardingcheckList";
import DragDropFile from "./components/DragAndDropInput.tsx/DragDropFile";
import RequisitionCreation from "./pages/RequisitionCreation";
import ClearanceForm from "./pages/ClearanceForm";
import DragDrop from "./pages/DragDrop";


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
		path: "/dashboard/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
	{
		path: "/notifications",
		element: <DashboardLayout Component={Notifications} />,
	},
  {
		path: "/notifications/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},

	{
		path: "/requisitions",
		element: <DashboardLayout Component={Requisitions} />,
	},
	{
		path: "/requisitions/requisition-details",
		element: <DashboardLayout Component={RequisitionDetails} />,
	},
  {
		path: "/requisitions/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},
{
		path: "/requisitions/requisitionCreation",
		element: <DashboardLayout Component={RequisitionCreation} />,
	},
	{
		path: "/onboarding",
		element: <DashboardLayout Component={Onboarding} />,
		children: [],
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
		path: "/onboarding/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
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
		path: "/offboarding",
		element: <DashboardLayout Component={Offboarding} />,
	},
	
  {
		path: "/offboarding/offBoardingcheckList",
		element: <DashboardLayout Component={OffBoardingcheckList} />,
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
		path: "/resignation",
		element: <DashboardLayout Component={Resignation} />,
	},

	

	{
		path: "/dragdropfileuploader",
		element: <DashboardLayout Component={DragDrop} />,
	},
  {
		path: "/announcements",
		element: <DashboardLayout Component={Announcement} />,
	},
	{
		path: "/announcements/announcementCreation",
		element: <DashboardLayout Component={AnnouncementCreation} />,
	},
  {
		path: "/announcements/employeeDetails",
		element: <DashboardLayout Component={EmployeeDetails} />,
	},

	{
		path: "/clearanceform",
		element: <DashboardLayout Component={ClearanceForm} />,
	},

	{
		path: "/test",
		element: <Test />,
	},
]);
