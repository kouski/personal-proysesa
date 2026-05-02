import SideNav from "@/app/components/layout/SideNav";
import TopBar from "@/app/components/layout/TopBar";
import Link from "next/link";

export default function NuevoEmpleadoPage() {
    return (
        <div className="min-h-screen bg-[#f7f9fb]">
            <SideNav />
            <TopBar />

            {/* Main content */}
            <main className="ml-[260px] pt-16 min-h-screen flex flex-col">
                <div className="max-w-[1600px] mx-auto w-full px-8 py-10">

                    {/* Header */}
                    <div className="mb-8 flex justify-between items-end">
                        <div>
                            {/* Breadcrumbs for realistic contextual navigation */}
                            <nav className="flex items-center gap-1.5 mb-2">
                                <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest">
                                    Gente
                                </span>
                                <span className="material-symbols-outlined text-slate-400 text-[14px]">
                                    chevron_right
                                </span>
                                <Link href="/directorio" className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest hover:text-blue-600 transition-colors">
                                    Directorio
                                </Link>
                                <span className="material-symbols-outlined text-slate-400 text-[14px]">
                                    chevron_right
                                </span>
                                <span className="text-[12px] font-semibold text-blue-600 uppercase tracking-widest">
                                    Alta Empleado
                                </span>
                            </nav>

                            <h2 className="text-[24px] font-semibold leading-8 tracking-tight text-slate-900">
                                Formulario de Alta de Nuevo Empleado
                            </h2>
                            <p className="text-[14px] leading-5 text-slate-500 mt-1">
                                Complete los datos requeridos para registrar formalmente al nuevo talento en el sistema.
                            </p>
                        </div>
                        <div className="hidden md:flex gap-2">
                            <span className="px-3 py-1 bg-blue-50 text-blue-700 text-[12px] font-semibold rounded-full border border-blue-100 uppercase tracking-wide">
                                Paso 1 de 1
                            </span>
                        </div>
                    </div>

                    {/* Bento Form Layout */}
                    <form className="grid grid-cols-12 gap-6 items-start">
                        {/* LEFT COLUMN: Personal Info & Contact Info */}
                        <div className="col-span-12 lg:col-span-8 space-y-6">

                            {/* Info Personal Card */}
                            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
                                <div className="flex items-center gap-2 mb-6 text-blue-600">
                                    <span className="material-symbols-outlined text-[20px]">person</span>
                                    <h3 className="text-[20px] font-semibold leading-7 text-slate-900">
                                        Información Personal
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Nombre Completo
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ej. Javier Rodríguez Pérez"
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            DNI / NIE
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="12345678X"
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Fecha de Nacimiento
                                        </label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Número de Seguridad Social (NSS)
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="XX XXXXXXXX XX"
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Género
                                        </label>
                                        <div className="relative">
                                            <select
                                                defaultValue=""
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 appearance-none"
                                            >
                                                <option value="" disabled>Seleccionar...</option>
                                                <option value="m">Masculino</option>
                                                <option value="f">Femenino</option>
                                                <option value="nb">No binario / Otro</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
                                <div className="flex items-center gap-2 mb-6 text-blue-600">
                                    <span className="material-symbols-outlined text-[20px]">contact_mail</span>
                                    <h3 className="text-[20px] font-semibold leading-7 text-slate-900">
                                        Contacto
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Correo Electrónico
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="javier.r@empresa.es"
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Teléfono
                                        </label>
                                        <div className="flex rounded-lg overflow-hidden">
                                            <span className="inline-flex items-center px-3 border border-r-0 border-slate-200 bg-slate-50 text-slate-500 text-[14px]">
                                                +34
                                            </span>
                                            <input
                                                type="tel"
                                                placeholder="600 000 000"
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-r-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 placeholder:text-slate-400"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Puesto, Buttons, Image */}
                        <div className="col-span-12 lg:col-span-4 space-y-6">

                            {/* Puesto Card */}
                            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
                                <div className="flex items-center gap-2 mb-6 text-blue-600">
                                    <span className="material-symbols-outlined text-[20px]">work</span>
                                    <h3 className="text-[20px] font-semibold leading-7 text-slate-900">
                                        Puesto y Organización
                                    </h3>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Puesto
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Ej. Senior Software Engineer"
                                            className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Departamento
                                        </label>
                                        <div className="relative">
                                            <select
                                                defaultValue=""
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 appearance-none"
                                            >
                                                <option value="" disabled>Seleccionar departamento...</option>
                                                <option value="ing">Ingeniería</option>
                                                <option value="rrhh">Recursos Humanos</option>
                                                <option value="mkt">Marketing y Ventas</option>
                                                <option value="finanzas">Finanzas</option>
                                                <option value="ops">Operaciones</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Tipo de Contrato
                                        </label>
                                        <div className="relative">
                                            <select
                                                defaultValue="indefinido"
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 appearance-none"
                                            >
                                                <option value="indefinido">Indefinido</option>
                                                <option value="temporal">Temporal</option>
                                                <option value="practicas">Prácticas</option>
                                                <option value="autonomo">Autónomo</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4 border-t border-slate-200">
                                        <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                                            <div className="flex gap-3">
                                                <span className="material-symbols-outlined text-blue-600">info</span>
                                                <div>
                                                    <p className="text-[12px] font-bold text-blue-900 mb-1">
                                                        Nota Administrativa
                                                    </p>
                                                    <p className="text-[11px] text-blue-700 leading-relaxed">
                                                        Una vez guardado, se generará automáticamente el perfil en el directorio y se enviará un correo de bienvenida.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Buttons Card */}
                            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
                                <div className="flex flex-col gap-3">
                                    <button
                                        type="button"
                                        className="w-full bg-blue-600 text-white font-medium text-[14px] py-3 rounded-lg hover:bg-blue-700 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-sm"
                                    >
                                        <span className="material-symbols-outlined text-[18px]">save</span>
                                        Guardar Empleado
                                    </button>
                                    <button
                                        type="button"
                                        className="w-full bg-white text-slate-600 border border-slate-200 font-medium text-[14px] py-3 rounded-lg hover:bg-slate-50 active:scale-[0.98] transition-all"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>

                            {/* Decorative Graphic (hidden on small screens) */}
                            <div className="hidden lg:block relative h-40 rounded-xl overflow-hidden group">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_oA4W_M7ssJZDAXgj8ZlpFkzwGrPMJSt1Ik9rCwkFGmkwDzO4qInbz57avCcsyqRTcw7E9r2rLFtF3ahiEY6uTmIztVmY9myCmpIMXB6T_lj1BCQcCFhCMevBhaSDmrAngz5fUEeF5K-JGyN6Vr6PA5dTlB5uBzQ-nU3GtFUCQwIevKgCmCusDDAQCuhChAJ0hz_vwSYmbRMD_S4aDdJlIqKZB7iL0Gvm6plskwJYPJku8k3vTbX_4sRsiBUnbvKyvCbtJ-NMXgb1"
                                    alt="Modern office atmosphere"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-4">
                                    <p className="text-white text-[11px] font-medium italic leading-tight">
                                        "Construyendo el futuro de nuestra organización equipo a equipo."
                                    </p>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>

                {/* Footer simple (matches design) */}
                <footer className="mt-auto border-t border-slate-200 px-8 py-4 flex items-center justify-between text-[11px] text-slate-400">
                    <div>© 2024 Personnel Pro Enterprise. Reservados todos los derechos.</div>
                    <div className="flex gap-4">
                        <Link href="#" className="hover:text-blue-600 transition-colors">Política de Privacidad</Link>
                        <Link href="#" className="hover:text-blue-600 transition-colors">Términos de Servicio</Link>
                    </div>
                </footer>
            </main>
        </div>
    );
}
