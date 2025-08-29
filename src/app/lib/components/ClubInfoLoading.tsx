import type { FunctionComponent } from "react";

const ClubInfoLoading: FunctionComponent = () => {
  return (
    <div className="space-y-4 relative z-10">
      {/* Basic Info Card Skeleton */}
      <div className="card bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 shadow-lg animate-pulse">
        <div className="card-body p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-slate-600/50 rounded-lg"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-600/50 rounded w-3/4"></div>
              <div className="h-3 bg-slate-600/50 rounded w-1/2"></div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-3 bg-slate-600/50 rounded"></div>
            <div className="h-3 bg-slate-600/50 rounded w-2/3"></div>
            <div className="h-3 bg-slate-600/50 rounded w-1/3"></div>
          </div>
        </div>
      </div>

      {/* Venue Card Skeleton */}
      <div className="card bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 shadow-lg animate-pulse">
        <div className="card-body p-4">
          <div className="space-y-3">
            <div className="h-4 bg-slate-600/50 rounded w-24"></div>
            <div className="w-full h-32 bg-slate-600/50 rounded-lg"></div>
            <div className="space-y-2">
              <div className="h-3 bg-slate-600/50 rounded w-3/4"></div>
              <div className="h-3 bg-slate-600/50 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Manager Card Skeleton */}
      <div className="card bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 shadow-lg animate-pulse">
        <div className="card-body p-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-slate-600/50 rounded-full"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-slate-600/50 rounded w-3/4"></div>
              <div className="h-3 bg-slate-600/50 rounded w-1/2"></div>
            </div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 bg-slate-600/50 rounded"></div>
            <div className="h-3 bg-slate-600/50 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoLoading;
