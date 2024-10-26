import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import { publicRoutes } from "./utils/routes";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import { HOME_ROUTE } from "./utils/consts"
const router = createBrowserRouter([
  {
    path: HOME_ROUTE,
    element: <>
      <Navbar />
      <main>
        <Outlet />
      </main>
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