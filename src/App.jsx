import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Signup from "./components/pages/signup/Signup.jsx";
import Login from "./components/pages/login/Login.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { 
          path: "/", 
          element : <Home/>
        },
        { 
          path: "/about",
          element : <About />
        },
        // { 
        //   path: "/mlsa-events", 
        //   element: <MlsaEventsPage /> 
        // },
        // { 
        //   path: "/club-events", 
        //   element: <ClubEventsPage /> 
        // },
        { 
          path: "/login", 
          element: <Login /> 
        },
        { 
          path: "/signup", 
          element: <Signup /> 
        },
      ],
    },
  ]);
 return(
  <div className="main">
      <RouterProvider router={router} />
   </div>
 )
}

export default App;
