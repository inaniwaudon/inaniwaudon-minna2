import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./globals.css";
import NotFound from "./app/404/Index.tsx";
import About from "./app/about/Index.tsx";
import Article2024 from "./app/articles/2024/Index.tsx";
import Articles from "./app/articles/Index.tsx";
import Diary from "./app/articles/diary/Index.tsx";
import Max from "./app/articles/max/Index.tsx";
import AuthCallback from "./app/auth/callback/Index.tsx";
import AuthSignout from "./app/auth/signout/Index.tsx";
import ClassImpression from "./app/class-impression/Index.tsx";
import ClassImpressionId from "./app/class-impression/id/Index.tsx";
import Index from "./app/index/Index.tsx";
import Kdb from "./app/kdb/Index.tsx";
import Locations from "./app/locations/Index.tsx";
import LocationsId from "./app/locations/id/Index.tsx";
import LocationsIdCheckin from "./app/locations/id/checkin/Index.tsx";
import LocationsNew from "./app/locations/new/Index.tsx";
import Nerene from "./app/nerene/Index.tsx";
import Photos from "./app/photos/Index.tsx";
import PhotosId from "./app/photos/id/Index.tsx";
import PhotosIdAdd from "./app/photos/id/add/Index.tsx";
import Tanka from "./app/tanka/Index.tsx";
import Tasks from "./app/tasks/Index.tsx";
import TsukubaMeshi from "./app/tsukuba-meshi/Index.tsx";
import Errata2023 from "./app/tsukuba-meshi/errata2023/Index.tsx";
import Ramen2023 from "./app/tsukuba-meshi/ramen2023/Index.tsx";
import Ramen2024 from "./app/tsukuba-meshi/ramen2024/Index.tsx";
import Restaurant2023 from "./app/tsukuba-meshi/restaurant2023/Index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/articles",
    element: <Articles />,
  },
  {
    path: "/articles/2024",
    element: <Article2024 />,
  },
  {
    path: "/articles/diary",
    element: <Diary />,
  },
  {
    path: "/articles/max",
    element: <Max />,
  },
  {
    path: "/auth/callback",
    element: <AuthCallback />,
  },
  {
    path: "/auth/signout",
    element: <AuthSignout />,
  },
  {
    path: "/class-impression",
    element: <ClassImpression />,
  },
  {
    path: "/class-impression/:id",
    element: <ClassImpressionId />,
  },
  {
    path: "/kdb",
    element: <Kdb />,
  },
  {
    path: "/locations",
    element: <Locations />,
  },
  {
    path: "/locations/:id",
    element: <LocationsId />,
  },
  {
    path: "/locations/:id/checkin",
    element: <LocationsIdCheckin />,
  },
  {
    path: "/locations/new",
    element: <LocationsNew />,
  },
  {
    path: "/nerene",
    element: <Nerene />,
  },
  {
    path: "/photos",
    element: <Photos />,
  },
  {
    path: "/photos/:id",
    element: <PhotosId />,
  },
  {
    path: "/photos/:id/add",
    element: <PhotosIdAdd />,
  },
  {
    path: "/tanka",
    element: <Tanka />,
  },
  {
    path: "/tasks",
    element: <Tasks />,
  },
  {
    path: "/tsukuba-meshi",
    element: <TsukubaMeshi />,
  },
  {
    path: "/tsukuba-meshi/errata2023",
    element: <Errata2023 />,
  },
  {
    path: "/tsukuba-meshi/ramen2023",
    element: <Ramen2023 />,
  },
  {
    path: "/tsukuba-meshi/ramen2024",
    element: <Ramen2024 />,
  },
  {
    path: "/tsukuba-meshi/restaurant2023",
    element: <Restaurant2023 />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
