import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const Room_1 = Loadable(lazy(() => import("./Room_1")));
const Detail = Loadable(lazy(() => import("./detail/Detail")));
// const Room = Loadable(lazy(() => import("./Room")));

const roomRoutes = [
  {
    path: "/apartments/:id/rooms",
    element: <Room_1 />,
    auth: authRoles.admin,
  },
  {
    path: "/apartments/:id/rooms/:room_id",
    element: <Detail />,
    auth: authRoles.admin,
  },
];

export default roomRoutes;
