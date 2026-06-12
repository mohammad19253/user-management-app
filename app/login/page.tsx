"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/features/auth/schemas";
import { useLogin } from "@/features/auth/hooks/useLogin";

export default function LoginPage() {
  const router = useRouter();
  const login = useLogin();
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    login.mutate(data, {
      onSuccess: () =>   router.push("/dashboard"),
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to access your dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <input
              placeholder="Email"
              {...register("email")}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition text-black"
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

        
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black transition text-black"
            />
            {errors.password && (
              <p className="text-xs text-red-500 mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {login.isError && (
            <div className="text-sm text-red-600 bg-red-50 border border-red-200 p-3 rounded-xl">
              Invalid email or password
            </div>
          )}
      
          <button
            type="submit"
            disabled={login.isPending}
            className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {login.isPending ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-6">
          Protected by HttpOnly cookie authentication
        </p>
      </div>
    </div>
  );
}