import { createBrowserRouter, useRoutes, type RouteObject } from "react-router-dom";
import NotFoundPage from "./pages/errors/not-found-page";

import AppLayout from "./layouts/app-layout";
import AuthLayout from "./layouts/auth-layout";

import HomePage from "@/pages/beranda/page";
import AboutPage from "@/pages/tentang-kami/page";
import ContactPage from "@/pages/kontak/page";
import CatalogPage from "@/pages/katalog/page";
import LoginPage from "@/pages/auth/login-page";
import RegistPage from "@/pages/auth/regist/regist-page";
import RegistPengajarPage from "@/pages/auth/regist/pengajar/pengajar-page";
import RegistPelajarPage from "@/pages/auth/regist/pelajar/pelajar-page";
import RegistPaketPelajarPage from "@/pages/auth/regist/pelajar/paket";
import RegistMapelPelajarPage from "@/pages/auth/regist/pelajar/mata-pelajaran";
import PaymentPage from "@/pages/auth/regist/metode-pembayaran-page";
import DetailPaymentPage from "@/pages/auth/regist/detail-pembayaran-page";

const route = (path: string, { ...props }: RouteObject) => ({ path, ...props });

const routes: RouteObject[] = [
  route("/", {
    element: <AppLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/tentang-kami",
        element: <AboutPage />,
      },
      {
        path: "/kontak",
        element: <ContactPage />,
      },
      {
        path: "/katalog",
        element: <CatalogPage />,
      },
    ],
  }),
  route("/", {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegistPage />,
      },
      {
        path: "/register/pengajar",
        element: <RegistPengajarPage />,
      },
      {
        path: "/register/pelajar",
        element: <RegistPelajarPage />,
      },
      {
        path: "/register/pelajar/paket",
        element: <RegistPaketPelajarPage />,
      },
      {
        path: "/paket/:id",
        element: <RegistMapelPelajarPage />,
      },
      {
        path: "/pembayaran",
        element: <PaymentPage />,
      },
      {
        path: "/detail-pembayaran",
        element: <DetailPaymentPage />,
      },
    ],
  }),
  route("*", {
    element: <NotFoundPage />,
  }),
];

const browserRoutes = createBrowserRouter(routes);

const AppRoutes = (): React.ReactElement | null => useRoutes(routes);

export { routes, browserRoutes };

export default AppRoutes;
