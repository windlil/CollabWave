import { Suspense } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./routes";

const router = createHashRouter(routes);

export const HashRouter = () => {
  return (
    <Suspense fallback="">
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};
