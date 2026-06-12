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
     staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    user: data?.user,
    isLoading,
    isAuthenticated: !!data?.user,
    isError,
  };
}