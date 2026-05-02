import Link from "next/link";

export type EmployeeStatus = "activo" | "remoto" | "vacaciones" | "inactivo";

export interface Employee {
    id: string;
    name: string;
    role: string;
    department: string;
    email: string;
    phone: string;
    status: EmployeeStatus;
    /** Initials shown when no photo is available */
    initials: string;
    avatarBg?: string;
    photo?: string;

    // Extended profile fields
    dni?: string;
    nss?: string;
    birthDate?: string;
    nationality?: string;
    civilStatus?: string;
    office?: string;
    contractType?: string;
    workSchedule?: string;
    manager?: string;
    managerPhoto?: string;
    joinDate?: string;
    seniority?: string;
}

const statusConfig: Record<
    EmployeeStatus,
    { label: string; className: string }
> = {
    activo: {
        label: "Activo",
        className: "bg-green-100 text-green-700",
    },
    remoto: {
        label: "En Remoto",
        className: "bg-blue-100 text-blue-700",
    },
    vacaciones: {
        label: "Vacaciones",
        className: "bg-amber-100 text-amber-700",
    },
    inactivo: {
        label: "Inactivo",
        className: "bg-slate-100 text-slate-500",
    },
};

export default function EmployeeCard({ employee }: { employee: Employee }) {
    const status = statusConfig[employee.status];

    return (
        <Link
            href={`/perfil/${employee.id}`}
            className="bg-white border border-slate-200 rounded-2xl px-8 py-8 hover:border-blue-300 hover:shadow-md transition-all duration-300 group cursor-pointer flex flex-col h-full block"
        >
            {/* Top row: avatar + status badge */}
            <div className="flex justify-between items-start mb-5">
                {employee.photo ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                        src={employee.photo}
                        alt={`Foto de ${employee.name}`}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                ) : (
                    <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl ${employee.avatarBg ?? "bg-slate-100 text-slate-500"}`}
                    >
                        {employee.initials}
                    </div>
                )}
                <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${status.className}`}
                >
                    {status.label}
                </span>
            </div>

            {/* Name & role */}
            <div className="mb-5">
                <h3 className="text-[20px] font-semibold leading-7 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {employee.name}
                </h3>
                <p className="text-[13px] leading-[18px] text-slate-500 mt-0.5">
                    {employee.role}
                </p>
            </div>

            {/* Details */}
            <div className="pt-5 mt-auto border-t border-slate-100 space-y-3.5">
                <div className="flex items-center gap-3 text-slate-600">
                    <span className="material-symbols-outlined text-[16px] text-slate-400">
                        corporate_fare
                    </span>
                    <span className="text-[13px]">{employee.department}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                    <span className="material-symbols-outlined text-[16px] text-slate-400">
                        mail
                    </span>
                    <span className="text-[13px] truncate">{employee.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                    <span className="material-symbols-outlined text-[16px] text-slate-400">
                        call
                    </span>
                    <span className="text-[13px]">{employee.phone}</span>
                </div>
            </div>
        </Link>
    );
}
