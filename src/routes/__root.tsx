import { createRootRoute, Outlet } from '@tanstack/react-router'
// import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AppProvider } from '../features/app'

export const Route = createRootRoute({
  component: () => (
    <>
      <AppProvider>
        <Outlet />
      </AppProvider>
    </>
  ),
})