import { configureAuth } from 'react-query-auth';
import { z } from 'zod';

// import { AuthResponse, User } from '../types/api';
import { AuthResponse } from '../types/api';

import { api } from './api-client';

// api call definitions for auth (types, schemas, requests):
// these are not part of features as this is a module shared across features

const getUser = async (): Promise<string> => {
  const access_token = localStorage.getItem("access_token")
  if (access_token == null) {
    console.log("No Token")
    return ""
  }
  try {
    await api.get('/profile', {
      headers: {
        'Authorization': `bearer ${access_token}`
      }
    });
  } catch (err) {
    console.log(err)
  }

  return access_token ?? ""
};

const logout = (): Promise<void> => {
  localStorage.removeItem("access_token")
  return api.post('/auth/logout')
};

export const loginInputSchema = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(5, 'Required'),
});

export type LoginInput = z.infer<typeof loginInputSchema>;
const loginWithEmailAndPassword = (data: LoginInput): Promise<AuthResponse> => {
  return api.post('/login/email', data);
};

export const registerInputSchema = z
  .object({
    email: z.string().min(1),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    password: z.string().min(1),
  })
  .and(
    z
      .object({
        teamId: z.string().min(1),
        teamName: z.null().default(null),
      })
      .or(
        z.object({
          teamName: z.string().min(1),
          teamId: z.null().default(null),
        }),
      ),
  );

export type RegisterInput = z.infer<typeof registerInputSchema>;

const registerWithEmailAndPassword = (
  data: RegisterInput,
): Promise<AuthResponse> => {
  return api.post('/auth/register', data);
};

const authConfig = {
  userFn: getUser,
  loginFn: async (data: LoginInput) => {
    const response = await loginWithEmailAndPassword(data);
    localStorage.setItem("access_token", response.data.access_token)
    return response.data.access_token;
  },
  registerFn: async (data: RegisterInput) => {
    const response = await registerWithEmailAndPassword(data);
    localStorage.setItem("access_token", response.data.access_token)
    return response.data.access_token;
  },
  logoutFn: logout,
  userKey: ['access_token']
};

export const { useUser, useLogin, useLogout, useRegister, AuthLoader } =
  configureAuth(authConfig);
// configureAuth({
//   logoutFn:
// });
