import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const Tenants = Loadable(lazy(() => import("./Tenants")));

const tenantsRoutes = [
  {
    path: "/tenants/default",
    element: <Tenants />,
    auth: authRoles.admin,
  },
];

export default tenantsRoutes;
