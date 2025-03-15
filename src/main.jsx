import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import { About, Contact, Home, User, GitHub } from "./component";
import { gitHubInfo } from "./component/gitHub/GitHub";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
//this is first method for routing in reat
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ],
//   },
// ]);

//This is second method for routing in jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:id" element={<User />} />
      <Route loader={gitHubInfo} path="github" element={<GitHub />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
