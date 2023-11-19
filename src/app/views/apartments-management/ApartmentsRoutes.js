import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const Apartments = Loadable(lazy(() => import("./Apartments")));

const ApartmentList = Loadable(lazy(() => import("./ApartmentList")));

const apartmentsRoutes = [
  {
    path: "/apartments/default",
    element: <Apartments />,
    auth: authRoles.admin,
  },
  {
    path: "/apartments/list",
    element: <ApartmentList />,
    auth: authRoles.admin,
  },
];

export default apartmentsRoutes;
