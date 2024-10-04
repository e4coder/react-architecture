import clsx from "clsx";
import { FC, PropsWithChildren } from "react";
import { Card } from "../../ui/Card";

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {

  return <div className={clsx(
    'h-lvh w-full flex justify-center items-center',
  )}>
    <Card>
      {children}
    </Card>
  </div>
}