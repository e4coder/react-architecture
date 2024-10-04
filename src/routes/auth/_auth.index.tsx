import { createFileRoute } from '@tanstack/react-router'
import Login from '../../app/auth/login'

export const Route = createFileRoute('/auth/_auth/')({
  component: Login,
})
