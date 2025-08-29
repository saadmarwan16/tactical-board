import type { FunctionComponent } from "react";

const SquadLoading: FunctionComponent = () => {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
          Squad
        </h2>
        <div className="badge badge-outline bg-slate-700/50 border-slate-500 text-white shadow-lg backdrop-blur-sm">
          Loading...
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[0, 1, 2, 3, 4, 5, 6].map((value) => (
          <div
            key={`skeleton-${value}`}
            className="card bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 shadow-lg p-0 animate-pulse"
            style={{
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
            }}
          >
            <div className="card-body p-3">
              <div className="flex items-center gap-2">
                <div className="avatar relative">
                  <div className="w-10 h-10 bg-slate-600/50 rounded-full"></div>
                </div>
                <div className="flex-1 min-w-0 space-y-2">
                  <div className="h-3 bg-slate-600/50 rounded w-3/4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-4 bg-slate-600/50 rounded w-12"></div>
                    <div className="h-4 bg-slate-600/50 rounded w-6"></div>
                  </div>
                  <div className="h-2 bg-slate-600/50 rounded w-16"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 shadow-lg animate-pulse">
        <div className="card-body p-4">
          <div className="h-4 bg-slate-600/50 rounded w-24 mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-600/50 rounded"></div>
            <div className="h-3 bg-slate-600/50 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadLoading;
