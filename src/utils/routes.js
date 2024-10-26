import AboutCompanyPage from "../pages/AboutCompanyPage/AboutCompanyPage";
import CompanyServicesPage from "../pages/CompanyServicesPage/CompanyServicesPage";
import HomePage from "../pages/HomePage/HomePage";
import { ABOUT_COMPANY_ROUTE, HOME_ROUTE, SERVICES_ROUTE } from "./consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <HomePage />,
    }, {
        path: ABOUT_COMPANY_ROUTE,
        element: <AboutCompanyPage />,
    }, {
        path: SERVICES_ROUTE,
        element: <CompanyServicesPage />,
    },
];
