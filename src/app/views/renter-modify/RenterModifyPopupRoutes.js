import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const RenterModifyPopup = Loadable(lazy(() => import("./RenterModifyPopup")));

const roomHistoryRoutes = [
  {
    path: "/renter-modify-popup",
    element: <RenterModifyPopup />,
    auth: authRoles.admin,
  },
];

export default roomHistoryRoutes;
