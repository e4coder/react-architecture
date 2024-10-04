import { FC, PropsWithChildren } from "react";
import { AuthLayout } from "../../components/layout/AuthLayout/authLayout";

const Auth: FC<PropsWithChildren> = ({ children }) => {
  return <AuthLayout>
    <h1 className="text-3xl mb-4 text-gray-600">PrimeTrader</h1>
    {children}
  </AuthLayout>
}

export default Auth