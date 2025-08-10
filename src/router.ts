import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router';
import App from './App';
import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';

const rootRoute = createRootRoute({
    component: App,
});

const homeRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: Home,
});

const characterRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/character/$id',
    component: CharacterDetails,
});

const routeTree = rootRoute.addChildren([homeRoute, characterRoute]);

export const router = createRouter({ routeTree });
