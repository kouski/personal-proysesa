"use client";

import { useState } from "react";

interface FilterBarProps {
    onViewChange?: (view: "grid" | "list") => void;
    view?: "grid" | "list";
}

export default function FilterBar({ onViewChange, view = "grid" }: FilterBarProps) {
    const [localView, setLocalView] = useState<"grid" | "list">(view);

    const handleViewChange = (v: "grid" | "list") => {
        setLocalView(v);
        onViewChange?.(v);
    };

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 flex flex-wrap items-center gap-4">
            {/* Filter label */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-slate-700 text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filtros
            </div>

            {/* Department filter */}
            <select className="border border-slate-200 rounded-lg text-sm px-3 py-1.5 text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
                <option>Departamento: Todos</option>
                <option>Construcción</option>
                <option>Administración</option>
                <option>RRHH</option>
                <option>Dirección</option>
            </select>

            {/* Status filter */}
            <select className="border border-slate-200 rounded-lg text-sm px-3 py-1.5 text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white">
                <option>Estado: Todos</option>
                <option>Activo</option>
                <option>En Remoto</option>
                <option>Vacaciones</option>
                <option>Inactivo</option>
            </select>

            {/* View toggle */}
            <div className="ml-auto flex items-center bg-slate-100 p-1 rounded-lg gap-0.5">
                <button
                    onClick={() => handleViewChange("grid")}
                    className={`p-1.5 rounded transition-all ${localView === "grid"
                            ? "bg-white shadow-sm text-blue-600"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                    aria-label="Vista en cuadrícula"
                >
                    <span className="material-symbols-outlined text-[20px]">grid_view</span>
                </button>
                <button
                    onClick={() => handleViewChange("list")}
                    className={`p-1.5 rounded transition-all ${localView === "list"
                            ? "bg-white shadow-sm text-blue-600"
                            : "text-slate-400 hover:text-slate-600"
                        }`}
                    aria-label="Vista en lista"
                >
                    <span className="material-symbols-outlined text-[20px]">
                        format_list_bulleted
                    </span>
                </button>
            </div>
        </div>
    );
}
