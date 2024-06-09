import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Login from "../pages/login/login";
import Main from "../pages/main/main";
import Todos from "../pages/todos/todos";
import Products from "../pages/Products/products";
import SinglePage from "../pages/singleCardPage/SinglePage";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Login />} />
        <Route path="main" element={<Main />}>
          <Route path="products" element={<Products />} />
          <Route path=":cardId" element={<SinglePage />} />
          <Route path="todos" element={<Todos />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};
export default Index;
