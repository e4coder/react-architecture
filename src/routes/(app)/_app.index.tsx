import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(app)/_app/')({
  component: () => <div>Hello /(app)/_app/!</div>,
})
