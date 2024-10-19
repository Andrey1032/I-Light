import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./utils/routes";
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

const router = createBrowserRouter([
  {
    path: "/i-light",
    element: <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>,
    errorElement: <div><h2>Страница не существует</h2><Link to={"/"}>Перейти на главную страницу</Link></div>,
    children: publicRoutes?.map(pubRoute => ({
      path: pubRoute.path,
      element: pubRoute.element,
    }))
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;