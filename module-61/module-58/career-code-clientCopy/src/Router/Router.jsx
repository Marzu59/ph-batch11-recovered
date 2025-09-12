
import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Pages/home/Home";
import Register from "../Pages/register/Register";
import Signin from "../Pages/signin/Signin";
import JobDetails from "../Pages/jobdetails/JobDetails";
import PrivateRoute from "../routes/PrivateRoute";
import JobApply from "../Pages/jobapply/JobApply";
import Myapplications from "../Pages/myApplications/Myapplications";
import AddJob from "../Pages/addjob/AddJob";
import MyPostedJobs from "../Pages/Mypostedjob/MyPostedJobs";
import ViewApplications from "../Pages/ViewApplications/ViewApplications";




const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
        // loader: jobsApii
      },
      {
        path: '/jobdetails/:id',
        Component: JobDetails,
        loader: ({params})=> fetch(`https://career-code-server-copy.vercel.app/jobs/${params.id}`)
      },
      {
        path:'/jobapply/:id',
        element: <PrivateRoute> <JobApply></JobApply> </PrivateRoute>
      },
      {
         path: '/myapplications', 
         element: <PrivateRoute> <Myapplications></Myapplications> </PrivateRoute>
      },
      {
        path: '/addjob',
        element: <PrivateRoute> <AddJob></AddJob> </PrivateRoute>
      },
      {
        path: '/register',
        Component: Register
      },
      {
        path: '/signin',
        Component: Signin
      },
      {
        path:'/mypostedjobs',
        element: <PrivateRoute><MyPostedJobs></MyPostedJobs> </PrivateRoute> 
      },
      {
        path:`/viewapplications/:id`,
        element: <PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,
        loader: ({params})=> fetch(`https://career-code-server-copy.vercel.app/applications/job/${params.id}`)
      }
    ]
  },
]);



export default Router;