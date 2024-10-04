import { useForm } from "@tanstack/react-form";
import { FC } from "react";
import { Button, Input } from "../../../../components";
import FormInputLayout from "../FormLayout/formInputLayout";
import FormSubmitLayout from "../FormLayout/formSubmitLayout";
import FormFooterLayout from "../FormLayout/formFooterLayout";
import { Link } from "@tanstack/react-router";

interface ILoginFormData {
  email: string
  password: string
}

interface ILoginForm {
  handleLogin: (value: ILoginFormData) => void
  redirectTo: string
}
const LoginForm: FC<ILoginForm> = ({ handleLogin, redirectTo = "/" }) => {
  const form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    onSubmit: async ({ value }: { value: ILoginFormData }) => {
      handleLogin(value)
    },
  })
  return <div className="p-4">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <FormInputLayout>
        <form.Field
          name="email"
          children={(field) => (
            <Input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              placeholder="Email"
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
        <form.Field
          name="password"
          children={(field) => (
            <Input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              type="password"
              placeholder="Password"
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
      </FormInputLayout>
      <FormSubmitLayout>
        <button type="submit">Login</button>
        <Button type="submit">Login</Button>
      </FormSubmitLayout>
      <FormFooterLayout>
        <p>Dont have an account? <Link search={{ redirectTo }} to="/auth/signup">Signup here!</Link></p>
      </FormFooterLayout>
    </form>
  </div>
}

export default LoginForm