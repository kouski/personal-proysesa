import SideNav from "@/app/components/layout/SideNav";
import TopBar from "@/app/components/layout/TopBar";
import Link from "next/link";
import { notFound } from "next/navigation";
import { employees } from "@/app/data/employees";
import ProfileEditor from "@/app/components/perfil/ProfileEditor";

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

                    {/* Profile layout handled via client component for edit interactivity */}
                    <ProfileEditor employee={employee} statusConfig={statusConfig} />

                </div>
            </main>
        </div>
    );
}
