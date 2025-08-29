import type { FunctionComponent } from "react";

const ClubInfoEmpty: FunctionComponent = () => {
  return (
    <div className="space-y-4 relative z-10 flex flex-col justify-center h-full">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-slate-500/20 to-slate-600/20 rounded-full flex items-center justify-center mx-auto">
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
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-300">No Club Data</h3>
          <p className="text-slate-400 text-sm">
            Club information is not available. Search and select a club to show
            details
          </p>
          <button
            type="button"
            className="btn btn-sm bg-gradient-to-r from-blue-500 to-purple-600 border-0 text-white shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
            onClick={() => {
              // Add action to select club or refresh data
            }}
          >
            Search Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoEmpty;
