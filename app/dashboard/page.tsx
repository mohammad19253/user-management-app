import { useAuth } from "@/features/auth/providers/auth-provider";

export default function DashboardPage() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <p className="text-gray-600 mt-2">Welcome {user.name}</p>
    </div>
  );
}
