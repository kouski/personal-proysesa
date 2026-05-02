import SideNav from "@/app/components/layout/SideNav";
import TopBar from "@/app/components/layout/TopBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { employees } from "@/app/data/employees";

// Optional type for status config
const statusConfig = {
    activo: { label: "ACTIVO", bg: "bg-blue-50", text: "text-blue-700", dot: "bg-green-500" },
    remoto: { label: "EN REMOTO", bg: "bg-indigo-50", text: "text-indigo-700", dot: "bg-blue-500" },
    vacaciones: { label: "VACACIONES", bg: "bg-amber-50", text: "text-amber-700", dot: "bg-amber-400" },
    inactivo: { label: "INACTIVO", bg: "bg-slate-100", text: "text-slate-500", dot: "bg-slate-400" },
};

export default async function PerfilDinamicoPage({ params }: { params: Promise<{ id: string }> }) {
    // Await params per Next.js 15 update
    const resolvedParams = await params;

    // Find the specific employee from our data
    const employee = employees.find(e => e.id === resolvedParams.id);

    if (!employee) {
        notFound(); // Renders Next.js 404 page if ID is invalid
    }

    const st = statusConfig[employee.status] || statusConfig.activo;

    return (
        <div className="min-h-screen bg-[#f7f9fb]">
            <SideNav />
            <TopBar />

            <main className="ml-[260px] pt-16 min-h-screen flex flex-col">
                <div className="max-w-[1600px] mx-auto w-full px-8 py-10 flex-1 flex flex-col">

                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-[12px] font-semibold tracking-wider text-slate-400 mb-6 uppercase">
                        <Link href="/directorio" className="hover:text-blue-600 transition-colors">Directory</Link>
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                        <span className="text-blue-600">Ficha del Empleado</span>
                    </nav>

                    {/* Employee Hero Header (Bento Style) */}
                    <div className="grid grid-cols-12 gap-5 mb-8">
                        <div className="col-span-12 lg:col-span-8 bg-white border border-slate-200 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="relative">
                                {employee.photo ? (
                                    /* eslint-disable-next-line @next/next/no-img-element */
                                    <img
                                        src={employee.photo}
                                        alt={employee.name}
                                        className="w-32 h-32 rounded-full object-cover border-4 border-slate-100"
                                    />
                                ) : (
                                    <div className={`w-32 h-32 rounded-full border-4 border-slate-100 flex items-center justify-center font-bold text-4xl ${employee.avatarBg || "bg-slate-100 text-slate-500"}`}>
                                        {employee.initials}
                                    </div>
                                )}
                                <div className={`absolute bottom-1 right-1 w-6 h-6 ${st.dot} border-4 border-white rounded-full`}></div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <h1 className="text-[30px] font-bold leading-[38px] tracking-tight text-slate-900 mb-1">{employee.name}</h1>
                                        <div className="flex items-center gap-2">
                                            <span className={`${st.bg} ${st.text} px-3 py-1 rounded-full text-[12px] font-semibold tracking-wider uppercase`}>{st.label}</span>
                                            <span className="text-slate-400 text-[13px] leading-5">• ID: EMP-440{employee.id}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-[14px] font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                            Editar Perfil
                                        </button>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-[14px] font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm active:scale-95 duration-150">
                                            <span className="material-symbols-outlined text-[18px]">file_download</span>
                                            Exportar PDF
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-12 lg:col-span-4 bg-blue-600 p-8 rounded-xl text-white flex flex-col justify-between overflow-hidden relative shadow-sm">
                            <div className="relative z-10">
                                <p className="text-[12px] font-semibold tracking-wider opacity-80 uppercase mb-1">Antigüedad</p>
                                <h2 className="text-[24px] font-semibold leading-8 tracking-tight">{employee.seniority || "N/A"}</h2>
                                <p className="text-[13px] leading-5 opacity-90 mt-4">Próxima revisión salarial en:</p>
                                <p className="font-semibold text-[20px] leading-7 mt-1">15 días</p>
                            </div>
                            <div className="absolute -right-8 -bottom-8 opacity-20 pointer-events-none text-white selection:bg-transparent">
                                <span className="material-symbols-outlined text-[160px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Sections */}
                    <div className="grid grid-cols-12 gap-5">

                        {/* Datos Personales */}
                        <section className="col-span-12 md:col-span-6 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
                                <span className="material-symbols-outlined text-blue-600">person</span>
                                <h3 className="text-[20px] font-semibold leading-7 text-slate-900">Datos Personales</h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-5">
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">DNI / NIE</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.dni || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">NSS (Seguridad Social)</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.nss || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Fecha de Nacimiento</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.birthDate || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Nacionalidad</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.nationality || "—"}</p>
                                </div>
                                <div className="col-span-full">
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Correo Electrónico</p>
                                    <p className="text-[14px] leading-5 text-blue-600 font-medium">{employee.email}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Teléfono Móvil</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.phone}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Estado Civil</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.civilStatus || "—"}</p>
                                </div>
                            </div>
                        </section>

                        {/* Información Profesional */}
                        <section className="col-span-12 md:col-span-6 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
                                <span className="material-symbols-outlined text-blue-600">work</span>
                                <h3 className="text-[20px] font-semibold leading-7 text-slate-900">Información Profesional</h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-5">
                                <div className="col-span-full">
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Puesto / Rol</p>
                                    <p className="text-[20px] font-semibold leading-7 text-slate-900">{employee.role}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Departamento</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.department}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Oficina / Sede</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.office || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Tipo de Contrato</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.contractType || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Jornada</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.workSchedule || "—"}</p>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Responsable Directo</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        {employee.managerPhoto ? (
                                            /* eslint-disable-next-line @next/next/no-img-element */
                                            <img
                                                src={employee.managerPhoto}
                                                alt="Manager"
                                                className="w-6 h-6 rounded-full"
                                            />
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[8px] font-bold">
                                                {employee.manager ? employee.manager.substring(0, 2).toUpperCase() : "-"}
                                            </div>
                                        )}
                                        <span className="text-[13px] leading-5 font-medium text-blue-600">{employee.manager || "—"}</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Fecha de Incorporación</p>
                                    <p className="text-[14px] leading-5 text-slate-900 font-medium">{employee.joinDate || "—"}</p>
                                </div>
                            </div>
                        </section>

                        {/* Documentación y Otros (Asymmetric Layout element) */}
                        <section className="col-span-12 bg-white border border-slate-200 rounded-xl overflow-hidden mb-8 shadow-sm">
                            <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-blue-600">folder_open</span>
                                    <h3 className="text-[20px] font-semibold leading-7 text-slate-900">Documentos Recientes</h3>
                                </div>
                                <button className="text-blue-600 text-[14px] font-medium hover:underline transition-all">Ver todo</button>
                            </div>

                            <div className="p-0 overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="px-6 py-3 text-[12px] font-semibold tracking-wider text-slate-500 uppercase">Nombre del Documento</th>
                                            <th className="px-6 py-3 text-[12px] font-semibold tracking-wider text-slate-500 uppercase">Categoría</th>
                                            <th className="px-6 py-3 text-[12px] font-semibold tracking-wider text-slate-500 uppercase">Fecha</th>
                                            <th className="px-6 py-3 text-[12px] font-semibold tracking-wider text-slate-500 uppercase">Estado</th>
                                            <th className="px-6 py-3"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">

                                        <tr className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-red-600 opacity-70">picture_as_pdf</span>
                                                    <span className="text-[14px] leading-5 font-medium text-slate-900">Contrato_Indefinido_Firmado.pdf</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-[13px] text-slate-600">Contractual</td>
                                            <td className="px-6 py-4 text-[13px] text-slate-600">01 Feb 2020</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-50 text-green-700 px-2.5 py-0.5 rounded-md text-[11px] font-bold border border-green-200">VERIFICADO</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 group-hover:text-blue-600 transition-colors"><span className="material-symbols-outlined">download</span></button>
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-red-600 opacity-70">picture_as_pdf</span>
                                                    <span className="text-[14px] leading-5 font-medium text-slate-900">Nomina_Mayo_2024.pdf</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-[13px] text-slate-600">Nómina</td>
                                            <td className="px-6 py-4 text-[13px] text-slate-600">30 May 2024</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-50 text-green-700 px-2.5 py-0.5 rounded-md text-[11px] font-bold border border-green-200">VERIFICADO</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 group-hover:text-blue-600 transition-colors"><span className="material-symbols-outlined">download</span></button>
                                            </td>
                                        </tr>

                                        <tr className="hover:bg-slate-50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-blue-500 opacity-70">description</span>
                                                    <span className="text-[14px] leading-5 font-medium text-slate-900">Certificado_Formacion_Liderazgo.pdf</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-[13px] text-slate-600">Formación</td>
                                            <td className="px-6 py-4 text-[13px] text-slate-600">15 Mar 2023</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-slate-50 text-slate-500 px-2.5 py-0.5 rounded-md text-[11px] font-bold border border-slate-200">PENDIENTE</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-slate-400 group-hover:text-blue-600 transition-colors"><span className="material-symbols-outlined">download</span></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </section>

                    </div>
                </div>
            </main>
        </div>
    );
}
