import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Navbar, Home, Details } from "./routes";
import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/details",
        element: <Details />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
