import AboutCompanyPage from "../pages/AboutCompanyPage/AboutCompanyPage";
import CompanyServicesPage from "../pages/CompanyServicesPage/CompanyServicesPage";
import { ABOUT_COMPANY_ROUTE, SERVICES_ROUTE } from "./consts";

export const publicRoutes = [
    {
        path: ABOUT_COMPANY_ROUTE,
        element: <AboutCompanyPage />,
    }, {
        path: SERVICES_ROUTE,
        element: <CompanyServicesPage />,
    },
];
