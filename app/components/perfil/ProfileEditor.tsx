"use client";

import { useState } from "react";
import { Employee } from "@/app/components/directorio/EmployeeCard";
import { updateEmployee } from "@/app/actions/employee";

export default function ProfileEditor({ employee, statusConfig }: { employee: Employee, statusConfig: any }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState<Employee>(employee);
    const [isSaving, setIsSaving] = useState(false);

    const st = statusConfig[employee.status] || statusConfig.activo;

    const getInitials = (name: string) => {
        if (!name) return "";
        const parts = name.trim().split(" ");
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return parts[0].substring(0, 2).toUpperCase();
    };

    const getSeniority = (joinDateStr: string) => {
        if (!joinDateStr) return "N/A";
        const parts = joinDateStr.split("/");
        if (parts.length !== 3) return joinDateStr;

        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const joinDate = new Date(year, month, day);
        const now = new Date();

        let years = now.getFullYear() - joinDate.getFullYear();
        let months = now.getMonth() - joinDate.getMonth();

        if (now.getDate() < joinDate.getDate()) {
            months--;
        }
        if (months < 0) {
            years--;
            months += 12;
        }

        if (years < 0) return "Próxima incorporación";

        let result = "";
        if (years > 0) result += `${years} año${years !== 1 ? 's' : ''}`;
        if (months > 0) {
            if (result) result += ", ";
            result += `${months} mes${months !== 1 ? 'es' : ''}`;
        }

        return result || "Reciente";
    };

    const getBirthDateDisplay = (dateStr: string, onlyDate = false) => {
        if (!dateStr) return "";
        const cleanDateStr = String(dateStr).split(" (")[0];
        if (onlyDate) return cleanDateStr;

        const parts = cleanDateStr.split("/");
        if (parts.length !== 3) return dateStr;

        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const birthDate = new Date(year, month, day);
        const now = new Date();

        let age = now.getFullYear() - birthDate.getFullYear();
        if (now.getMonth() < birthDate.getMonth() || (now.getMonth() === birthDate.getMonth() && now.getDate() < birthDate.getDate())) {
            age--;
        }

        return `${cleanDateStr} (${age} años)`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            await updateEmployee(employee.id, formData);
            setIsEditing(false);
        } catch (error) {
            console.error("Failed to save employee data", error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleCancel = () => {
        setFormData(employee);
        setIsEditing(false);
    };

    const renderField = (name: keyof Employee, label: string, isBlue = false, type = "text") => {
        const value = formData[name] || "";

        let displayValue = employee[name] ? String(employee[name]) : "—";
        let inputValue = value as string;

        if (name === "birthDate") {
            displayValue = getBirthDateDisplay(String(employee[name] || ""));
            inputValue = getBirthDateDisplay(value as string, true);
        }

        return (
            <div className={name === "email" || name === "role" ? "col-span-full" : ""}>
                <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">{label}</p>
                {isEditing ? (
                    <input
                        type={type}
                        name={name}
                        value={inputValue}
                        onChange={handleChange}
                        className={`w-full px-3 py-1.5 bg-white border border-slate-300 rounded text-[14px] leading-5 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${isBlue ? "text-blue-600" : "text-slate-900"}`}
                    />
                ) : (
                    <p className={`text-[${name === "role" ? "20" : "14"}px] ${name === "role" ? "font-semibold leading-7" : "leading-5 font-medium"} ${isBlue ? "text-blue-600" : "text-slate-900"}`}>
                        {displayValue}
                    </p>
                )}
            </div>
        );
    };

    return (
        <>
            {/* Employee Hero Header (Bento Style) */}
            <div className="grid grid-cols-12 gap-5 mb-8">
                <div className="col-span-12 lg:col-span-8 bg-white border border-slate-200 p-8 rounded-xl flex flex-col md:flex-row gap-8 items-start md:items-center">
                    <div className="relative">
                        {formData.photo ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                                src={formData.photo}
                                alt={formData.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-slate-100"
                            />
                        ) : (
                            <div className={`w-32 h-32 rounded-full border-4 border-slate-100 flex items-center justify-center font-bold text-4xl ${formData.avatarBg || "bg-slate-100 text-slate-500"}`}>
                                {getInitials(formData.name)}
                            </div>
                        )}
                        <div className={`absolute bottom-1 right-1 w-6 h-6 ${st.dot} border-4 border-white rounded-full`}></div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Nombre completo..."
                                        className="text-[30px] font-bold leading-[38px] tracking-tight text-slate-900 mb-1 w-full min-w-[300px] bg-slate-50 border border-slate-300 rounded px-2"
                                    />
                                ) : (
                                    <h1 className="text-[30px] font-bold leading-[38px] tracking-tight text-slate-900 mb-1">{employee.name}</h1>
                                )}
                                <div className="flex items-center gap-2 mt-2">
                                    <span className={`${st.bg} ${st.text} px-3 py-1 rounded-full text-[12px] font-semibold tracking-wider uppercase`}>{st.label}</span>
                                    <span className="text-slate-400 text-[13px] leading-5">• ID: EMP-440{employee.id}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                {isEditing ? (
                                    <>
                                        <button onClick={handleCancel} disabled={isSaving} className="px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-[14px] font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm disabled:opacity-50">
                                            Cancelar
                                        </button>
                                        <button onClick={handleSave} disabled={isSaving} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-[14px] font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm active:scale-95 duration-150 disabled:opacity-50">
                                            {isSaving ? (
                                                <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                                            ) : (
                                                <span className="material-symbols-outlined text-[18px]">save</span>
                                            )}
                                            Guardar
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-lg text-[14px] font-medium hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-sm">
                                            <span className="material-symbols-outlined text-[18px]">edit</span>
                                            Editar Perfil
                                        </button>
                                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-[14px] font-medium hover:bg-blue-700 transition-all flex items-center gap-2 shadow-sm active:scale-95 duration-150">
                                            <span className="material-symbols-outlined text-[18px]">file_download</span>
                                            Exportar PDF
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-4 bg-blue-600 p-8 rounded-xl text-white flex flex-col justify-between overflow-hidden relative shadow-sm">
                    <div className="relative z-10">
                        <p className="text-[12px] font-semibold tracking-wider opacity-80 uppercase mb-1">Antigüedad</p>
                        <h2 className="text-[24px] font-semibold leading-8 tracking-tight">{getSeniority(formData.joinDate || "")}</h2>
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
                        {renderField("dni", "DNI / NIE")}
                        {renderField("nss", "NSS (Seguridad Social)")}
                        {renderField("birthDate", "Fecha de Nacimiento")}
                        {renderField("nationality", "Nacionalidad")}
                        {renderField("email", "Correo Electrónico", true, "email")}
                        {renderField("phone", "Teléfono Móvil", false, "tel")}
                        {renderField("civilStatus", "Estado Civil")}
                    </div>
                </section>

                {/* Información Profesional */}
                <section className="col-span-12 md:col-span-6 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-3">
                        <span className="material-symbols-outlined text-blue-600">work</span>
                        <h3 className="text-[20px] font-semibold leading-7 text-slate-900">Información Profesional</h3>
                    </div>
                    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-5">
                        {renderField("role", "Puesto / Rol")}
                        {renderField("department", "Departamento")}
                        {renderField("office", "Oficina / Sede")}
                        {renderField("contractType", "Tipo de Contrato")}
                        {renderField("workSchedule", "Jornada")}

                        <div>
                            <p className="text-[12px] font-semibold tracking-wider text-slate-500 uppercase mb-1">Responsable Directo</p>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="manager"
                                    value={formData.manager || ""}
                                    onChange={handleChange}
                                    className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded text-[14px] leading-5 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-900"
                                />
                            ) : (
                                <div className="flex items-center gap-2 mt-1">
                                    {employee.managerPhoto ? (
                                        /* eslint-disable-next-line @next/next/no-img-element */
                                        <img src={employee.managerPhoto} alt="Manager" className="w-6 h-6 rounded-full" />
                                    ) : (
                                        <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-[8px] font-bold">
                                            {employee.manager ? employee.manager.substring(0, 2).toUpperCase() : "-"}
                                        </div>
                                    )}
                                    <span className="text-[13px] leading-5 font-medium text-blue-600">{employee.manager || "—"}</span>
                                </div>
                            )}
                        </div>
                        {renderField("joinDate", "Fecha de Incorporación")}
                    </div>
                </section>

                {/* Documentación y Otros */}
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
        </>
    );
}
