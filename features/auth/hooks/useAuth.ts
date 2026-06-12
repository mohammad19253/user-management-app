"use client";

import { useQuery } from "@tanstack/react-query";
import { authService } from "../services";

export function useAuth() {
  const {
    data,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["me"],
    queryFn: authService.me,
    retry: false,
  });

  return {
    user: data?.user,
    isLoading,
    isAuthenticated: !!data?.user,
    isError,
  };
}