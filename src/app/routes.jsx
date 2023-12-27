import AuthGuard from "app/auth/AuthGuard";
import chartsRoute from "app/views/charts/ChartsRoute";
import dashboardRoutes from "app/views/dashboard/DashboardRoutes";
import materialRoutes from "app/views/material-kit/MaterialRoutes";
import NotFound from "app/views/sessions/NotFound";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import { Navigate } from "react-router-dom";
import MatxLayout from "./components/MatxLayout/MatxLayout";

import apartmentsRoutes from "app/views/apartments-management/ApartmentsRoutes";
import roomRoutes from "./views/room/RoomRoutes";
import tenantsRoutes from "./views/tenants/TenantsRoutes";
import invoicesRoutes from "app/views/invoices/InvoicesRoutes";

const routes = [
  {
    element: (
      <AuthGuard>
        <MatxLayout />
      </AuthGuard>
    ),
    children: [
      ...dashboardRoutes,
      ...chartsRoute,
      ...materialRoutes,
      ...apartmentsRoutes,
      ...tenantsRoutes,
      ...roomRoutes,
      ...invoicesRoutes,
    ],
  },
  ...sessionRoutes,
  { path: "/", element: <Navigate to="apartments" /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
