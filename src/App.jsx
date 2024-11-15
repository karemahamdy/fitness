import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './App.css'
import Home from "./pages/Home";
import PageNotFound from "./ui/PageNotFound";
import ExerciseDetail from "./ui/ExersiscesDetails";
import PricingPlans from "./ui/PricingPlans";


const router = createBrowserRouter([
  {
    path: "/",
    element:
      <Home/>,
  },
  {

    path: "/exercise/:id",
    element: <ExerciseDetail/>
  },
  // {
  //   path: "/plan",
  //   element: <PricingPlans/>
  // },
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