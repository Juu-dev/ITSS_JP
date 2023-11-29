import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const RoomHistory = Loadable(lazy(() => import("./RoomHistory")));
// const Room = Loadable(lazy(() => import("./Room")));

const roomHistoryRoutes = [
  {
    path: "/room-history",
    element: <RoomHistory />,
    auth: authRoles.admin,
  },
];

export default roomHistoryRoutes;
