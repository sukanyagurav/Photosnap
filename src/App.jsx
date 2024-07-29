import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import HomePage from "./Pages/HomePage"
import StoriesPage from "./Pages/StoriesPage"
import FeaturesPage from "./Pages/FeaturesPage"
import PricingPage from "./Pages/PricingPage"
const router = createBrowserRouter([
  {
    path:'/',
    element:<RootLayout/>,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'/stories',
        element:<StoriesPage/>
      },
      {
        path:'/features',
        element:<FeaturesPage/>
      },
      {
        path:'/pricing',
        element:<PricingPage/>
      }
    ]
  },

])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
