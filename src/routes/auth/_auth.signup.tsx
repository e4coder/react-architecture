import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/_auth/signup')({
  component: () => <div>Hello /auth/_auth/signup!</div>,
})
