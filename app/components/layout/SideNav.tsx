import Link from "next/link";

const navItems = [
    { href: "/directorio", icon: "badge", label: "Directorio", active: true },
    { href: "/perfil", icon: "person", label: "Perfil", active: false },
    { href: "/nuevo", icon: "person_add", label: "Nuevo empleado", active: false },
    { href: "/bajas", icon: "person_remove", label: "Bajas", active: false },
];

const bottomItems = [
    { href: "/soporte", icon: "contact_support", label: "Soporte" },
    { href: "/salir", icon: "logout", label: "Cerrar sesión" },
];

export default function SideNav() {
    return (
        <aside className="bg-slate-900 fixed left-0 top-0 bottom-0 w-[260px] border-r border-slate-800 flex flex-col h-full py-6 z-50">
            {/* Logo */}
            <div className="px-6 mb-10">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center shrink-0">
                        <span
                            className="material-symbols-outlined text-white"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            corporate_fare
                        </span>
                    </div>
                    <div>
                        <h1 className="text-white font-black tracking-wide text-lg leading-tight">
                            Proysesa
                        </h1>
                        <p className="text-slate-500 text-[11px] uppercase font-bold tracking-widest">
                            Personal Admin
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="flex-1 space-y-0.5">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`
              px-4 py-3 flex items-center gap-3 transition-all duration-150 active:scale-95
              ${item.active
                                ? "bg-slate-800 text-white border-l-4 border-blue-500 scale-[0.98]"
                                : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                            }
            `}
                    >
                        <span
                            className={`material-symbols-outlined text-[22px] ${item.active ? "text-blue-500" : ""}`}
                        >
                            {item.icon}
                        </span>
                        <span className="text-[14px] leading-relaxed font-medium">
                            {item.label}
                        </span>
                    </Link>
                ))}
            </nav>

            {/* Bottom Navigation */}
            <div className="mt-auto border-t border-slate-800 pt-4 space-y-0.5">
                {bottomItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="text-slate-400 px-4 py-3 flex items-center gap-3 hover:bg-slate-800/50 hover:text-white transition-all"
                    >
                        <span className="material-symbols-outlined text-[22px]">
                            {item.icon}
                        </span>
                        <span className="text-[14px] leading-relaxed">{item.label}</span>
                    </Link>
                ))}
            </div>
        </aside>
    );
}
