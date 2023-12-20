import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Root } from "./Layout/Root";
import { Provider } from "react-redux";
import { store } from "./Store/Store";
import Orders from "./Pages/Orders";
import Employees from "./Pages/Employees";
import Customers from "./Pages/Customers";
import Kanban from "./Pages/Kanban";
import Editors from "./Pages/Editors";
import Calendar from "./Pages/Calendar";
import ColorPicker from "./Pages/ColorPicker";
import Line from "./Pages/Charts/Line";
import Area from "./Pages/Charts/Area";
import Bar from "./Pages/Charts/Bar";
import ColorMapping from "./Pages/Charts/ColorMapping";
import Financial from "./Pages/Charts/Financial";
import Pie from "./Pages/Charts/Pie";
import Pyramid from "./Pages/Charts/Pyramid";
import Stacked from "./Pages/Charts/Stacked";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    children: [
      //  dashboard  
      {index: true, element: <Home/>},
      {
        path: '/ecommerce',
        element: <Home/>
      },

      //  pages    
      {
        path: '/orders',
        element: <Orders />
      },
      {
        path: '/employees',
        element: <Employees/>
      },
      {
        path: '/customers',
        element: <Customers/>
      },

      //  apps   
      {
        path: '/kanban',
        element: <Kanban/>
      },
      {
        path: '/editor',
        element: <Editors/>
      },
      {
        path: '/calendar',
        element: <Calendar/>
      },   
      {
        path: '/color-picker',
        element: <ColorPicker/>
      },   

      //  charts     
      {
        path: '/line',
        element: <Line />
      },
      {
        path: '/area',
        element: <Area/>
      },
      {
        path: '/bar',
        element: <Bar/>
      },   
      {
        path: '/pie',
        element: <Pie/>
      },   
      {
        path: '/financial',
        element: <Financial/>
      },   
      {
        path: '/color-mapping',
        element: <ColorMapping/>
      },   
      {
        path: '/pyramid',
        element: <Pyramid/>
      },   
      {
        path: '/stacked',
        element: <Stacked/>
      },   
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
