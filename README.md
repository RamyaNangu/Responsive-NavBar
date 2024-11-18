# Creating Responsive NavBar

1.Create a header with elements and arrange them.
2.Install 'react-router-dom' for creating routing in the application - command -> npm install react-router-dom
3.create a router configuration for this we need to import "createBrowerRouter" from react-router-dom 
   - react router configuration[list] takes a list of paths(objects) like below 

    const appRouter = createBrowerRouter([
        {
            path:'/',
            element:<Home />
        },
        {
            path:'/products',
            element:<Products />
        }
    ]);

4.Provide the created router configuration to the application - for this we use 'RouterProvider' from react-router-dom
  import {RouterProvider} from 'react-router-dom'

  root.render(<RouterProvider />)

5.Now like the created pages to the nav items in header

  import {Link} from 'react-router-dom'
  const Header = () => {
       return (
              <ul>
                  <li><Link to="/home">Home</Link></li>
              </ul>
              )
           }
  
  -> react-router-dom provides <Link> element instead of using <a href="/home">. if we use the <a> element it will refresh the whole page , So we are using the <Link> element.
  
6.How handle children routers
  -->like Header + Home or Header + Products -- for this react-router-dom provides "CHILDREN ROUTER"

   const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/products',
                element:<Products />
            }
        ],
        errorElement:<Error />
    },
  ]);
  
  like this we create children routers
  and we have errorElement for handling the errors
