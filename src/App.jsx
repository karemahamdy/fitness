import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import './App.css'



const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Applayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to="" />,
      },
      {
        path: "",
        element: </>,
      },
      {
        path: "",
        element: </>,
      },
      {
        path: "",
        element: </>,
      },
      {
        path: "",
        element: </>,
      },
      {
        path: "",
        element: </>,
      },
      {
        path: "",
        element: </>,
      },
      {
        path: "",
        element: </>,
      },
      {
        path: "",
        element: </>,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {

  return (
    <>
    
        <RouterProvider router={router} />
    
      
    </>
  )
}

export default App