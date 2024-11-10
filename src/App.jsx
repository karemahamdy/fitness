import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import PageNotFound from "./ui/PageNotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home/>,
  },

  {
    path: "*",
    element: <PageNotFound/>,
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