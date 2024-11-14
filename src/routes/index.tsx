import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { Products } from "../pages/Products/Products";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
//import { ProductCreate } from "../pages/Products/ProductCreate";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      {/*<Route
        path="/products/create"
        element={
          <PrivateRoute>
            <ProductCreate />
          </PrivateRoute>
        }
      />
      <Route
        path="/products/edit/:id"
        element={
          <PrivateRoute>
            <ProductCreate />
          </PrivateRoute>
        }
      />*/}
      <Route path="*" element={<h1>Not Founded Route</h1>} />
    </Routes>
  );
};
