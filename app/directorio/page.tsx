import SideNav from "@/app/components/layout/SideNav";
import TopBar from "@/app/components/layout/TopBar";
import FilterBar from "@/app/components/directorio/FilterBar";
import EmployeeCard from "@/app/components/directorio/EmployeeCard";
import { employees } from "@/app/data/employees";
import Link from "next/link";

export default async function DirectorioPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | undefined }> }) {
    const resolvedParams = await searchParams;
    const { departamento, estado } = resolvedParams;

    let filteredEmployees = employees;

    if (departamento) {
        filteredEmployees = filteredEmployees.filter(emp => emp.department === departamento);
    }

    if (estado) {
        filteredEmployees = filteredEmployees.filter(emp => emp.status === estado);
    }

    const total = filteredEmployees.length;

    return (
        <div className="min-h-screen bg-[#f7f9fb]">
            <SideNav />
            <TopBar />

            {/* Main content */}
            <main className="ml-[260px] pt-16 min-h-screen">
                <div className="max-w-[1600px] mx-auto px-8 py-10">
                    {/* Page header */}
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            {/* Breadcrumb */}
                            <nav className="flex items-center gap-1.5 mb-2">
                                <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-widest">
                                    Gente
                                </span>
                                <span className="material-symbols-outlined text-slate-400 text-[14px]">
                                    chevron_right
                                </span>
                                <span className="text-[12px] font-semibold text-blue-600 uppercase tracking-widest">
                                    Directorio
                                </span>
                            </nav>

                            <h2 className="text-[30px] font-bold leading-[38px] tracking-tight text-slate-900">
                                Directorio del equipo
                            </h2>
                            <p className="text-[14px] leading-5 text-slate-500 mt-1">
                                Gestiona y visualiza los{" "}
                                <span className="font-semibold text-slate-700">{total}</span>{" "}
                                miembros activos de tu organización.
                            </p>
                        </div>

                        <Link
                            href="/directorio/nuevo"
                            className="bg-blue-600 text-white text-[14px] font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors shadow-sm active:scale-95 duration-150"
                        >
                            <span className="material-symbols-outlined text-[18px]">
                                person_add
                            </span>
                            Añadir empleado
                        </Link>
                    </div>

                    {/* Filter bar */}
                    <FilterBar />

                    {/* Employee grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredEmployees.map((emp) => (
                            <EmployeeCard key={emp.id} employee={emp} />
                        ))}

                        {/* "Nuevo talento" placeholder */}
                        <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-5 flex flex-col items-center justify-center text-center opacity-60 min-h-[220px]">
                            <span className="material-symbols-outlined text-slate-300 text-[40px] mb-2">
                                person_add
                            </span>
                            <p className="text-slate-400 text-sm font-medium">
                                Hueco para nuevo talento
                            </p>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-6 pb-12">
                        <p className="text-[13px] text-slate-500">
                            Mostrando 1 a {total} de {total} empleados
                        </p>
                        <div className="flex gap-2">
                            <button
                                disabled
                                className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Anterior
                            </button>
                            <button className="px-4 py-2 bg-white border border-blue-500 text-blue-600 rounded-lg text-sm font-bold">
                                1
                            </button>
                            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
