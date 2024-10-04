import { FC } from "react"
import { useAuthRedirection } from "../../features/auth/hooks/hooks"
import { Navigate } from "@tanstack/react-router"
import LoginForm from "../../features/auth/components/LoginForm/loginForm"

const Login: FC = () => {
  const { login, user, redirectTo } = useAuthRedirection()

  if (user.data != '') {
    return <Navigate to="/" />
  }

  return <>
    <LoginForm
      handleLogin={(value) => {
        login.mutate(value)
      }}
      redirectTo={redirectTo}
    >
    </LoginForm>
  </>
}

export default Login