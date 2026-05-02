import SideNav from "@/app/components/layout/SideNav";
import TopBar from "@/app/components/layout/TopBar";
import Link from "next/link";

export default function BajasPage() {
    return (
        <div className="min-h-screen bg-[#f7f9fb]">
            <SideNav />
            <TopBar />

            <main className="ml-[260px] pt-16 min-h-screen flex flex-col">
                <div className="max-w-[1600px] mx-auto w-full px-8 py-10 flex-1 flex flex-col">

                    {/* Header */}
                    <header className="mb-8">
                        <h2 className="text-[30px] font-bold leading-[38px] tracking-tight text-slate-900">
                            Gestión de Bajas
                        </h2>
                        <p className="text-[14px] leading-5 text-slate-500 mt-2">
                            Procesar salidas de personal y monitorizar registros históricos.
                        </p>
                    </header>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-12 gap-6 flex-1">

                        {/* LEFT COLUMN: Tramitar Baja Form (5 columns) */}
                        <section className="col-span-12 lg:col-span-5">
                            <div className="bg-white border border-slate-200 p-8 rounded-xl shadow-sm">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="bg-blue-50 p-2 rounded-lg">
                                        <span className="material-symbols-outlined text-[24px] text-blue-600">person_remove</span>
                                    </div>
                                    <h3 className="text-[20px] font-semibold leading-7 text-slate-900">
                                        Tramitar Baja
                                    </h3>
                                </div>

                                <form className="space-y-6">
                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Empleado
                                        </label>
                                        <div className="relative">
                                            <select
                                                defaultValue=""
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 appearance-none"
                                            >
                                                <option value="" disabled>Seleccionar empleado...</option>
                                                <option value="carlos">Carlos Mendoza (Ingeniería)</option>
                                                <option value="ana">Ana García (Marketing)</option>
                                                <option value="luis">Luis Rodríguez (Ventas)</option>
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                                <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                                Fecha de Salida
                                            </label>
                                            <input
                                                type="date"
                                                className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                                Tipo de Baja
                                            </label>
                                            <div className="relative">
                                                <select
                                                    defaultValue="voluntaria"
                                                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 appearance-none"
                                                >
                                                    <option value="voluntaria">Voluntaria</option>
                                                    <option value="despido">Despido</option>
                                                    <option value="fin_contrato">Fin de Contrato</option>
                                                    <option value="excedencia">Excedencia</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                                                    <span className="material-symbols-outlined text-[18px]">expand_more</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-[12px] font-semibold tracking-wider text-slate-500 mb-2">
                                            Motivo de la Baja
                                        </label>
                                        <textarea
                                            rows={4}
                                            placeholder="Describa brevemente el motivo..."
                                            className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all text-[14px] leading-5 text-slate-900 placeholder:text-slate-400 resize-none"
                                        ></textarea>
                                    </div>

                                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                                        <input
                                            id="assets"
                                            type="checkbox"
                                            className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        />
                                        <label htmlFor="assets" className="text-[13px] leading-4 text-slate-900 select-none cursor-pointer">
                                            Confirmar devolución de equipo corporativo
                                        </label>
                                    </div>

                                    <button
                                        type="button"
                                        className="w-full mt-4 bg-blue-600 text-white font-medium text-[14px] py-3 rounded-lg hover:bg-blue-700 hover:opacity-90 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
                                    >
                                        <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                        Confirmar Procesamiento
                                    </button>
                                </form>
                            </div>
                        </section>

                        {/* RIGHT COLUMN: Bajas Recientes Table (7 columns) */}
                        <section className="col-span-12 lg:col-span-7">
                            <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col h-full">

                                {/* Table Header Actions */}
                                <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-white rounded-t-xl">
                                    <h3 className="text-[20px] font-semibold leading-7 text-slate-900">
                                        Bajas Recientes
                                    </h3>
                                    <div className="flex gap-2">
                                        <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-[13px] font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                            Filtrar
                                        </button>
                                        <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-[13px] font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[18px]">download</span>
                                            Exportar
                                        </button>
                                    </div>
                                </div>

                                {/* Table Body */}
                                <div className="flex-1 overflow-x-auto">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="bg-slate-50">
                                                <th className="px-6 py-4 text-[12px] font-semibold tracking-wider text-slate-500 uppercase border-b border-slate-200">Empleado</th>
                                                <th className="px-6 py-4 text-[12px] font-semibold tracking-wider text-slate-500 uppercase border-b border-slate-200">Fecha</th>
                                                <th className="px-6 py-4 text-[12px] font-semibold tracking-wider text-slate-500 uppercase border-b border-slate-200">Motivo</th>
                                                <th className="px-6 py-4 text-[12px] font-semibold tracking-wider text-slate-500 uppercase border-b border-slate-200">Estado</th>
                                                <th className="px-6 py-4 border-b border-slate-200"></th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">

                                            {/* Row 1 */}
                                            <tr className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[12px] text-slate-600">SM</div>
                                                        <div>
                                                            <p className="text-[14px] font-semibold text-slate-900">Sofia Martínez</p>
                                                            <p className="text-[11px] text-slate-500">Diseño UI/UX</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">12 Oct 2023</td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">Voluntaria</td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-700">Completado</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Row 2 */}
                                            <tr className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center font-bold text-[12px] text-blue-600">JP</div>
                                                        <div>
                                                            <p className="text-[14px] font-semibold text-slate-900">Javier Pérez</p>
                                                            <p className="text-[11px] text-slate-500">Backend Dev</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">05 Oct 2023</td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">Fin Contrato</td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-700">Pendiente IT</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Row 3 */}
                                            <tr className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center font-bold text-[12px] text-purple-600">LV</div>
                                                        <div>
                                                            <p className="text-[14px] font-semibold text-slate-900">Lucía Valencia</p>
                                                            <p className="text-[11px] text-slate-500">Recursos Humanos</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">28 Sep 2023</td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">Voluntaria</td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-700">Completado</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Row 4 */}
                                            <tr className="hover:bg-slate-50/50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center font-bold text-[12px] text-red-600">RB</div>
                                                        <div>
                                                            <p className="text-[14px] font-semibold text-slate-900">Ricardo Blanco</p>
                                                            <p className="text-[11px] text-slate-500">Soporte Técnico</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">15 Sep 2023</td>
                                                <td className="px-6 py-4 text-[13px] text-slate-600">Despido</td>
                                                <td className="px-6 py-4">
                                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-bold bg-green-100 text-green-700">Completado</span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                                                        <span className="material-symbols-outlined text-[20px]">more_vert</span>
                                                    </button>
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                                {/* Table Pagination Footer */}
                                <div className="mt-auto p-4 border-t border-slate-200 flex justify-between items-center bg-white rounded-b-xl">
                                    <span className="text-[13px] text-slate-500">
                                        Mostrando 1-4 de 24 registros
                                    </span>
                                    <div className="flex gap-2">
                                        <button disabled className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500 disabled:opacity-50 disabled:cursor-not-allowed">
                                            <span className="material-symbols-outlined">chevron_left</span>
                                        </button>
                                        <button className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-500 transition-colors">
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>

                    {/* Secondary Information KPIs */}
                    <section className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        {/* KPI 1 */}
                        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-[22px] text-blue-600">analytics</span>
                                <h4 className="text-[12px] font-semibold tracking-wider text-slate-900 uppercase">Tasa de Rotación</h4>
                            </div>
                            <p className="text-[24px] font-semibold text-slate-900 mt-1">3.4%</p>
                            <p className="text-[13px] text-green-600 mt-1 flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">south</span>
                                0.2% vs mes anterior
                            </p>
                        </div>

                        {/* KPI 2 */}
                        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-[22px] text-blue-600">warning</span>
                                <h4 className="text-[12px] font-semibold tracking-wider text-slate-900 uppercase">Bajas Pendientes</h4>
                            </div>
                            <p className="text-[24px] font-semibold text-slate-900 mt-1">5</p>
                            <p className="text-[13px] text-slate-500 mt-1">
                                Requieren acción administrativa
                            </p>
                        </div>

                        {/* KPI 3 */}
                        <div className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="material-symbols-outlined text-[22px] text-blue-600">schedule</span>
                                <h4 className="text-[12px] font-semibold tracking-wider text-slate-900 uppercase">Media de Preaviso</h4>
                            </div>
                            <p className="text-[24px] font-semibold text-slate-900 mt-1">18 días</p>
                            <p className="text-[13px] text-slate-500 mt-1">
                                Basado en últimos 3 meses
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
