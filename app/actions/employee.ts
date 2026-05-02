"use server";

import { employees } from "@/app/data/employees";
import { revalidatePath } from "next/cache";
import { Employee } from "@/app/components/directorio/EmployeeCard";

export async function updateEmployee(id: string, data: Partial<Employee>) {
    const idx = employees.findIndex(e => e.id === id);
    if (idx !== -1) {
        employees[idx] = { ...employees[idx], ...data };
        revalidatePath(`/perfil/${id}`);
        revalidatePath(`/directorio`);
        return { success: true };
    }
    return { success: false, error: "Employee not found" };
}
