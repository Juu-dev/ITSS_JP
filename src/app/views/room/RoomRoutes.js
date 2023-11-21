import Loadable from "app/components/Loadable";
import { lazy } from "react";
import { authRoles } from "../../auth/authRoles";

const Room = Loadable(lazy(() => import("./Room")));

const roomRoutes = [
    {
        path: "/apartments/:id/rooms",
        element: <Room />,
        auth: authRoles.admin,
    },
];

export default roomRoutes;
