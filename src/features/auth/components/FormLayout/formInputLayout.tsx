import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

const FormInputLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div
    className={
      clsx(
        'flex flex-col gap-4'
      )
    }
  >
    {children}
  </div>
}

export default FormInputLayout