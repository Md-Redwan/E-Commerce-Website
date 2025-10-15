import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Pages/Home.jsx';
import Shop from './Pages/Shop.jsx';
import ProductDetails from './ProductDetailsPage/ProductDetails.jsx';
import Cart from './Pages/Cart.jsx';
import Error from './Pages/Error.jsx';
import Contact from './Pages/Contact.jsx';
import SignUp from './Pages/SignUp.jsx';
import LogIn from './Pages/LogIn.jsx';
import { Provider } from 'react-redux'
import { store } from './store.js';

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
    path: "/ProductDetails",
    element: <ProductDetails/>,
  },
  {
    path: "/Cart",
    element: <Cart/>,
  },
  {
    path: "/Error",
    element: <Error/>,
  },
  {
    path: "/Contact",
    element: <Contact/>,
  },
  {
    path: "/SignUp",
    element: <SignUp/>,
  },
  {
    path: "/LogIn",
    element: <LogIn/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
