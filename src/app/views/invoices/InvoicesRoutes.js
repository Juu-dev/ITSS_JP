import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const Invoices = Loadable(lazy(() => import("./Invoices")));

const invoicesRoutes = [
  {
    path: "/invoices/default",
    element: <Invoices />,
    auth: authRoles.admin,
  },
];

export default invoicesRoutes;
