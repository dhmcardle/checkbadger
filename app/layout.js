import "./globals.css";

export const metadata = {
  title: "CheckBadger",
  description: "Know who you're hiring before work begins",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {/* NAVBAR */}
        <header className="border-b bg-white">
          <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

            {/* LEFT: Logo + Name (FIXED SPACING) */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <img src="/logo.png" alt="CheckBadger" className="h-12 w-12" />
              <span className="text-2xl font-semibold tracking-tight">
                CheckBadger
              </span>
            </div>

            {/* RIGHT: Nav */}
            <nav className="flex gap-4 text-sm">
              <a href="/" className="hover:text-brand">Home</a>
              <a href="/homeowners" className="hover:text-brand">Homeowners</a>
              <a href="/contractors" className="hover:text-brand">Contractors</a>
            </nav>

          </div>
        </header>

        {children}

        {/* FOOTER */}
        <footer className="border-t mt-24 py-10 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} CheckBadger. All rights reserved.
        </footer>

      </body>
    </html>
  );
}