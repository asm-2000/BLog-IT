import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Homepage from "./Pages/Homepage/Homepage";
import Blog from "./Pages/Blog/Blog";
import CUblog from "./Pages/CUblogs/CUblog";
import YourBlogs from "./Pages/YourBlogs/YourBlogs";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ErrorElement from "./Pages/ErrorElement";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      { index: true, element: <Homepage></Homepage> },
      { path: "blogCategories/:blogCategory", element: <Blog></Blog> },
      {path:"blogs/:blogID", element: <BlogDetail></BlogDetail>},
      {
        path: "resetPAssword",
        element: <ResetPassword></ResetPassword>,
      },
      { path: "login", element: <Login></Login> },
      { path: "signup", element: <Signup></Signup> },
      {path:"createBlog",element:<CUblog></CUblog>},
      {path:"yourBlogs", element:<YourBlogs></YourBlogs>}
    ],
  },
  ,
]);
