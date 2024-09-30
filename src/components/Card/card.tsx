import clsx from "clsx";
import { FC } from "react";

interface ICard extends React.HTMLAttributes<HTMLDivElement> {
  raised?: 'none' | 'sm' | 'md' | 'lg'
}

const Card: FC<ICard> = ({children, className}) => {

  return (
    <div className={
      clsx(
        'p-4',
        'rounded-md',
        'shadow-xl',
        'shadow-gray-300',
        className
      )
    }>
      {children}
    </div>
  )
}

export default Card