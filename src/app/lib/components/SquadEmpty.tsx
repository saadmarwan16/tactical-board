import type { FunctionComponent } from "react";

const SquadEmpty: FunctionComponent = () => {
  return (
    <div className="space-y-4 h-full flex flex-col">
      <div className="text-center">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Squad
        </h2>
        <div className="badge badge-outline bg-slate-700/50 border-slate-500 text-white shadow-lg backdrop-blur-sm">
          No Data
        </div>
      </div>

      <div className="flex flex-col items-center grow justify-center py-12 space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-full flex items-center justify-center">
          <svg
            className="w-10 h-10 text-slate-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <title>No Data Icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-lg font-semibold text-slate-300">
            No Squad Data
          </h3>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            There are currently no players in the squad. Search and select a
            club to show their squad
          </p>
          <button
            type="button"
            className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            onClick={() => {
              // Add action to add players or refresh data
            }}
          >
            Search Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default SquadEmpty;
