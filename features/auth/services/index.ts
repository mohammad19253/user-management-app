import { api } from "@/lib/api";

export type LoginPayload = {
  email: string;
  password: string;
};

export const authService = {
  login: async (payload: LoginPayload) => {
    const { data } = await api.post("/auth/login", payload);
    return data;
  },

  me: async () => {
    const { data } = await api.get("/auth/me");
    return data;
  },
};