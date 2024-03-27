import { createElement, lazy } from "react";
import { type RouteObject } from "react-router-dom";

const lazyElement = (fn: () => any) => {
  return createElement(lazy(fn));
};

export const routes: RouteObject[] = [
  {
    path: "/",
    element: lazyElement(() => import("@/views/main/index")),
  },
];
