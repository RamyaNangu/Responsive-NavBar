import './App.css'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import ContactUs from './components/ContactUs'
import NewlyAddedItems from './components/NewlyAddedItems'
import Offers from './components/Offers'
import Products from './components/Products'
import Error from './components/Error'
import {createBrowserRouter,Outlet, RouterProvider} from 'react-router-dom'

const AppLayout = () =>{

  return(
    <div>
       <Header />
       <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/products',
        element:<Products />
      },
      {
        path:'/offers',
        element:<Offers />
      },
      {
        path:'/newly-added-items',
        element:<NewlyAddedItems />
      },
      {
        path:'/about',
        element:<About />
      },
      {
        path:'/contact',
        element:<ContactUs />
      }
    ],
    errorElement:<Error />
  },
  
])

const App = ()=>{

  return(
    <RouterProvider router={appRouter} />
  );
};

export default App


