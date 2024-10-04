import { createFileRoute, Outlet } from '@tanstack/react-router'
import { SideNavBar } from '../../components'
import { ProtectedRoute } from '../../features/auth/components/ProtectedRoute'

export const Route = createFileRoute('/(app)/_app')({
  component: () => (
    <>
      <ProtectedRoute>
        <div className="flex">
          <SideNavBar
            routes={[
              {
                name: 'Wallet',
                link: '/dashboard',
              },
              {
                name: 'Portfolio',
                link: '/portfolio',
              },
            ]}
          ></SideNavBar>
          <Outlet />
        </div>
      </ProtectedRoute>
    </>
  ),
})
