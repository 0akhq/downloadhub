import { NavLink } from "react-router-dom"

const links = [
  {
    name: "Ana Sayfa",
    path: "/",
  },
  {
    name: "Programlar",
    path: "/programlar",
  },
  {
    name: "Pluginler",
    path: "/pluginler",
  },
  {
    name: "Argo Main CC",
    path: "/argomain",
  },
  {
    name: "Discord",
    path: "/discord",
  },
]

function Navbar() {
  return (
    <nav className="fixed left-1/2 top-5 z-[100] w-[calc(100%-32px)] max-w-5xl -translate-x-1/2">
      <div
        className="
          flex items-center justify-between
          rounded-2xl
          border border-white/10
          bg-black/50
          px-4 py-3
          backdrop-blur-2xl
          shadow-2xl
        "
      >
        <NavLink
          to="/"
          className="text-lg font-black tracking-tight text-white"
        >
          Download<span className="text-accent">Hub</span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }: { isActive: boolean }) =>
                `
                rounded-xl px-4 py-2 text-sm font-medium
                transition-all duration-300
                ${
                  isActive
                    ? "bg-accent/10 text-accent"
                    : "text-white/50 hover:bg-white/5 hover:text-white"
                }
                `
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
