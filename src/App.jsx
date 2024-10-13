import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
// import { ProductsPage } from "./ProductsPage";
import { ProductsIndex } from "./ProductsIndex";
import { CreateProduct } from "./CreateProduct";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { MyCart } from "./MyCart";
import { OrdersShow } from "./OrdersShow";
// import { LogoutLink } from "./LogoutLink";
import axios from "axios";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <ProductsIndex />,
        loader: () => axios.get("http://localhost:3000/products.json").then(response => response.data)
      },
      {
        path: "/products/new",
        element: <CreateProduct />,
      },

      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/my_cart",
        element: <MyCart />,
        loader: () => axios.get("http://localhost:3000/carted_products.json").then(response => response.data)
      },
      {
        path: "/orders/:id", // Updated path to accept order ID
        element: <OrdersShow />,
        loader: ({ params }) => axios.get(`http://localhost:3000/orders/${params.id}.json`)
          .then(response => response.data)
      }     
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;