import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import G92Gamepad from './ProductDetailsPage/G92Gamepad.jsx';
import Cart from './Pages/Cart.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/Shop",
    element: <Shop/>,
  },
  {
    path: "/G92Gamepad",
    element: <G92Gamepad/>,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
