import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About";
import Mission from "./Pages/Mission/Mission";
import Layout from "./Pages/Layout/Layout";
import Home from "./Pages/Home/Home";
import DonorRegistration from "./Pages/DonorRegistration/DonorRegistration";
import DonorSearch from "./Pages/DonorSearch/DonorSearch";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import AuthProvider from "./providers/AuthProvider";
import BloodRequest from "./Pages/BloodRequest/BloodRequest";
import Campaign from "./Pages/Campaign/Campaign";
import Donate from "./Pages/Donate/Donate";
import AllBloodRequest from "./Pages/AllBloodRequest/AllBloodRequest";
import Appointment from "./Pages/Appointment/Appointment";
import AdminHome from "./Pages/AdminHome/AdminHome";
import Dashboard from "./Pages/Layout/Dashboard/Dashboard";
import VolunteerManage from "./Pages/VolunteerManage/VolunteerManage";
import ManageCampaign from "./Pages/ManageCampaign/ManageCampaign";
import UserHome from "./Pages/UserHome/UserHome";
import PrivateRoute from "./Routes/PrivateRoute";
import UserAppointment from "./Pages/UserAppointment/UserAppointment";
import CampaignDetails from "./Pages/CampaignDetails/CampaignDetails";
import BioMedical from "./Pages/BioMedical/BioMedical";
import CommunityChat from "./Component/Chat/CommunityChat";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CreateCampaign from "./Pages/CreateCampaign/CreateCampaign";
import Profile from "./Pages/Profile/Profile";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ManageUsers from "./Pages/ManageUsers/ManageUsers";
import CreateBlog from "./Pages/CreateBlog/CreateBlog";
import BlogPage from "./Pages/Blog/BlogPage";
import SingleBlog from "./Pages/SingleBlog/SingleBlog";
import AllBlog from "./Pages/All Blog/AllBlog";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/mission",
        element: <Mission></Mission>,
      },
      {
        path: "/donorRegistration",
        element: (
          <PrivateRoute>
            <DonorRegistration></DonorRegistration>
          </PrivateRoute>
        ),
      },
      {
        path: "/donorSearch",
        element: (
          <PrivateRoute>
            <DonorSearch></DonorSearch>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/bloodRequest",
        element: (
          <PrivateRoute>
            <BloodRequest></BloodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/campaign",
        element: <Campaign></Campaign>,
      },
      {
        path: "/campaign/:id",
        element: <CampaignDetails></CampaignDetails>,
      },
      {
        path: "/donate",
        element: (
          <PrivateRoute>
            <Donate />
          </PrivateRoute>
        ),
      },
      {
        path: "/allrequest",
        element: <AllBloodRequest></AllBloodRequest>,
      },

      {
        path: "/communityChat",
        element: (
          <PrivateRoute>
            <CommunityChat />
          </PrivateRoute>
        ),
      },
      {
        path: "bioMedical",
        element: <BioMedical></BioMedical>,
      },
      {
        path: "/blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "/blog/:id",
        element: <SingleBlog></SingleBlog>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/home",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "/dashboard/appointment",
        element: <Appointment></Appointment>,
      },
      {
        path: "/dashboard/volunteer",
        element: <VolunteerManage></VolunteerManage>,
      },
      {
        path: "/dashboard/campaign",
        element: <ManageCampaign></ManageCampaign>,
      },
      {
        path: "/dashboard/userhome",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/userappointment",
        element: <UserAppointment></UserAppointment>,
      },
      {
        path: "/dashboard/createCampaign",
        element: <CreateCampaign></CreateCampaign>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/manageusers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "/dashboard/createBlog",
        element: <CreateBlog></CreateBlog>,
      },
      {
        path: "/dashboard/allBlog",
        element: <AllBlog></AllBlog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <div className="bg-white">
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode>
  </div>
);
