import { FC, PropsWithChildren } from "react";

const FormSubmitLayout: FC<PropsWithChildren> = ({ children }) => {

  return <div
    className="flex justify-end py-4"
  >
    {children}
  </div>
}

export default FormSubmitLayout