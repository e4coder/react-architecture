import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '../../../components'
import { useLogout } from '../../../lib/auth'
import { FC } from 'react'
import { useQueryClient } from '@tanstack/react-query'

const PortFolio: FC = () => {
  const nav = useNavigate()
  const cl = useQueryClient()
  const logout = useLogout({
    onSuccess: () => {
      cl.clear()
      nav({ to: '/auth', search: { redirectTo: "/" } })
    },
    onError: () => {
      cl.clear()
      nav({ to: '/auth', search: { redirectTo: "/" } })
    }
  })

  return <div><Button secondary onClick={() => {
    logout.mutate(nav, cl)
  }}>Logout</Button></div>
}

export const Route = createFileRoute('/(app)/_app/portfolio/')({
  component: PortFolio
})
