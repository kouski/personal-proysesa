export default function TopBar() {
    return (
        <header className="bg-white fixed top-0 right-0 left-0 ml-[260px] h-16 border-b border-slate-200 flex justify-between items-center px-6 z-40">
            {/* Search */}
            <div className="flex items-center flex-1 max-w-xl">
                <div className="relative w-full">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                        search
                    </span>
                    <input
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none"
                        placeholder="Buscar empleados..."
                        type="text"
                    />
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors active:opacity-80">
                    <span className="material-symbols-outlined text-[22px]">notifications</span>
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors active:opacity-80">
                    <span className="material-symbols-outlined text-[22px]">help</span>
                </button>
                <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors active:opacity-80">
                    <span className="material-symbols-outlined text-[22px]">settings</span>
                </button>

                <div className="h-8 w-px bg-slate-200 mx-2" />

                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center ring-2 ring-blue-500 ring-offset-2 shrink-0">
                    <span className="text-white text-sm font-bold">A</span>
                </div>
            </div>
        </header>
    );
}
