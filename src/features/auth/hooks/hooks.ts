import { useNavigate, useSearch } from "@tanstack/react-router"
import { useLogin, useUser, useRegister } from "./index"

export const useAuthRedirection = () => {
  const nav = useNavigate()
  const { redirectTo } = useSearch({ from: '/auth/_auth' })

  const login = useLogin({
    onSuccess: () => {
      nav({ to: `${redirectTo}` })
    },
  })

  const register = useRegister({
    onSuccess: () => {
      nav({ to: `${redirectTo}` })
    }
  })

  const user = useUser()

  return {
    login,
    user,
    register,
    redirectTo
  }
}