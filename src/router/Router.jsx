/* eslint-disable no-unused-vars */
import {
    createBrowserRouter,
  } from "react-router-dom";
import Signin from "../component/Signin";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import AddClient from "../dashboard/admin/AddClient"
import UsersTable from "../dashboard/UsersTable";
import DashboardLayout from "../latout/DashboardLayout";
import EditClient from "../dashboard/admin/EditClient";
import UpdateClient from "../dashboard/admin/UpdateClient";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivateRouter><DashboardLayout/></PrivateRouter>,
      children: [
        {
          path: "/",
          element: <UsersTable/>
        },
        {
          path:"/add_client",
          element: <AddClient/>

        },
        {
          path: "/edit_client",
          element: <EditClient/>
        },
        {
          path: "/update-clint/:id",
          element: <UpdateClient/>,
          loader: ({params}) => fetch(`https://hazem-air-server.vercel.app/users/${params.id}`)
        }
      ]       
    },
    {
        path: "/sign_in",
        element: <Signin/>
    },
    
  ]);


export default router
