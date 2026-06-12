import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-500 to-gray-100">

      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6">
        <h1 className="text-xl font-bold text-gray-900">
          RoleSystem
        </h1>

        <nav className="flex gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-600 hover:text-black"
          >
            Login
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-24">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 max-w-2xl">
          Role-based authentication system built with Next.js
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl">
          Secure login system with Admin and User roles,
          protected routes, and cookie-based authentication.
        </p>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <Link
            href="/login"
            className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:border-black transition"
          >
            View Demo
          </Link>
        </div>

        {/* Role Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl w-full">

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">Admin</h3>
            <p className="text-sm text-gray-600 mt-2">
              Full access to create, edit, and delete products.
            </p>

            <div className="mt-4 text-xs text-gray-500">
              • CRUD access <br />
              • User management <br />
              • Full control
            </div>
          </div>

          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h3 className="font-semibold text-lg">User</h3>
            <p className="text-sm text-gray-600 mt-2">
              Read-only access to products.
            </p>

            <div className="mt-4 text-xs text-gray-500">
              • View products <br />
              • No write access <br />
              • Secure restrictions
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 py-10">
        Built with Next.js App Router + Role-Based Access Control
      </footer>

    </div>
  );
}