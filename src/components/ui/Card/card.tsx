import clsx from "clsx";
import { FC } from "react";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  raised?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

const Card: FC<ICard> = ({ children, className, raised = 'xl' }) => {

  const raisedClass = `shadow-${raised || 'xl'}`

  return (
    <div className={
      clsx(
        'p-4',
        'rounded-md',
        raisedClass,
        'shadow-gray-300',
        className
      )
    }>
      {children}
    </div>
  )
}

export default Card