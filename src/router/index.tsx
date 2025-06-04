import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  RouterProvider,
} from '@tanstack/react-router';
// import { Home } from '../pages/Home';
import { CharacterDetail } from '../pages/CharacterDetail';
import Home from '../pages/Home';
// import React from 'react';


const rootRoute = createRootRoute({
  component: () => (
    <div>
      <h1>Rick & Morty App</h1>
      <hr />
      <Outlet />  {/* This renders child route components */}
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const characterDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character/$characterId',
  component: CharacterDetail,
});

const routeTree = rootRoute.addChildren([homeRoute, characterDetailRoute]);

export const router = createRouter({ routeTree });

export function AppRouter() {
  return <RouterProvider router={router} />;
}
