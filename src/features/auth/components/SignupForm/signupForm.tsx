import { useForm } from "@tanstack/react-form";
import { FC } from "react";
import { Button, Input } from "../../../../components";
import FormInputLayout from "../FormLayout/formInputLayout";
import FormSubmitLayout from "../FormLayout/formSubmitLayout";
import FormFooterLayout from "../FormLayout/formFooterLayout";
import { Link } from "@tanstack/react-router";

interface ISignupFormData {
  email: string
  password: string
}

interface ISignupForm {
  handleSignup: (value: ISignupFormData) => void
  redirectTo: string
}
const SignupForm: FC<ISignupForm> = ({ handleSignup, redirectTo = "/" }) => {
  const form = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: ''
    },
    onSubmit: async ({ value }: { value: ISignupFormData }) => {
      handleSignup(value)
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
          name="username"
          children={(field) => (
            <Input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              placeholder="Username"
              onChange={(e) => field.handleChange(e.target.value)}
            />
          )}
        />
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
        <Button type="submit">Login</Button>
      </FormSubmitLayout>
      <FormFooterLayout>
        <p>Dont have an account? <Link search={{ redirectTo }} to="/auth/signup">Signup here!</Link></p>
      </FormFooterLayout>
    </form>
  </div>
}

export default SignupForm