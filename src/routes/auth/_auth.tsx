import { createFileRoute, Outlet } from '@tanstack/react-router'
import Auth from '../../app/auth/auth'

interface RedirectsTo {
  redirectTo: string
}

export const Route = createFileRoute('/auth/_auth')({
  component: () => (
    <Auth>
      <Outlet />
    </Auth>
  ),
  validateSearch: (search: Record<string, unknown>): RedirectsTo => {
    return {
      redirectTo: (search.redirectTo as string) || ''
    }
  }
})
