export type Role = "admin" | "user";

export type MockUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
};

export const mockUsers: MockUser[] = [
  {
    id: "1",
    name: "Ali",
    email: "ali@test.com",
    password: "123456",
    role: "admin",
  },
  {
    id: "2",
    name: "Amin",
    email: "amin@test.com",
    password: "123456",
    role: "user",
  },
];