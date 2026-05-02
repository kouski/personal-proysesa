"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface FilterBarProps {
    onViewChange?: (view: "grid" | "list") => void;
    view?: "grid" | "list";
}

export default function FilterBar({ onViewChange, view = "grid" }: FilterBarProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [localView, setLocalView] = useState<"grid" | "list">(view);

    const handleViewChange = (v: "grid" | "list") => {
        setLocalView(v);
        onViewChange?.(v);
    };

    const handleFilterChange = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }
        router.push(`?${params.toString()}`);
    };

    return (
        <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 flex flex-wrap items-center gap-4">
            {/* Filter label */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg text-slate-700 text-sm font-medium">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                Filtros
            </div>

            {/* Department filter */}
            <select
                className="border border-slate-200 rounded-lg text-sm px-3 py-1.5 text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white min-w-[170px]"
                onChange={(e) => handleFilterChange("departamento", e.target.value)}
                defaultValue={searchParams.get("departamento") || ""}
            >
                <option value="">Departamento: Todos</option>
                <option value="Producción">Producción</option>
                <option value="Administración">Administración</option>
                <option value="Dirección">Dirección</option>
            </select>

            {/* Status filter */}
            <select
                className="border border-slate-200 rounded-lg text-sm px-3 py-1.5 text-slate-700 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white min-w-[140px]"
                onChange={(e) => handleFilterChange("estado", e.target.value)}
                defaultValue={searchParams.get("estado") || ""}
            >
                <option value="">Estado: Todos</option>
                <option value="activo">Activo</option>
                <option value="remoto">En Remoto</option>
                <option value="vacaciones">Vacaciones</option>
                <option value="inactivo">Inactivo</option>
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
