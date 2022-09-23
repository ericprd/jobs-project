import { Outlet, useLocation } from "react-router-dom";
import DashboardComponent from "../components/dashboard-components/dashboard-component";
import Sidebar from "../components/dashboard-components/sidebar-component";
import DashboardLayout from "../layout/dashboard-layout";

export default function Dashboard(props) {
  const { pathname } = useLocation();
  return (
    <DashboardLayout>
      {pathname === "/dashboard" ? (
        <DashboardComponent />
      ) : (
        <>
          <Sidebar /> <Outlet />
        </>
      )}
    </DashboardLayout>
  );
}
