import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const Apartments = Loadable(lazy(() => import("./Apartments")));

const apartmentsRoutes = [
  {
    path: "/apartments",
    element: <Apartments />,
    auth: authRoles.admin,
  },
];

export default apartmentsRoutes;
