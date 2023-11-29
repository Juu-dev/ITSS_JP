import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const RenterPopup = Loadable(lazy(() => import("./RenterPopup")));

const roomHistoryRoutes = [
  {
    path: "/renter-popup",
    element: <RenterPopup />,
    auth: authRoles.admin,
  },
];

export default roomHistoryRoutes;
