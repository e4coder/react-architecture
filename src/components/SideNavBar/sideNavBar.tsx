import { FC } from 'react'
import { Card } from '../ui/Card'
import clsx from 'clsx'
import { Button } from '../ui/Button'
import { useNavigate } from '@tanstack/react-router'

interface ISideNavBarRoutes {
  name: string
  link: string
}

interface ISideNavBar {
  routes: ISideNavBarRoutes[]
}
const SideNavBar: FC<ISideNavBar> = ({ routes }) => {
  const nav = useNavigate()
  return <Card
    raised='xl'
    className={clsx(
      'rounded-none',
      'h-lvh',
      'max-w-80',
      'bg-orange-400'
    )}
  >
    <h1 className='text-3xl mb-8 p-2'>PrimeTrader</h1>
    <div className={clsx(
      'flex',
      'flex-col',
    )}>
      {routes.map((route) => (
        <Button
          key={route.link}
          clear
          className='flex w-full'
          onClick={() => {
            nav({ to: route.link })
          }}
        >
          {route.name}
        </Button>
      ))}
    </div>
  </Card>
}

export default SideNavBar