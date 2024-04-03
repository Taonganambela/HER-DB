import {
    createBrowserRouter,
} from "react-router-dom";
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
        path: "/onboarding",
        element: <DashboardLayout Component={Onboarding} />,
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
        path: "/test",
        element: <Test />,
    },
   
])