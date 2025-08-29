import type { FunctionComponent } from "react";

interface ClubInfoErrorProps {
  error: string;
}

const ClubInfoError: FunctionComponent<ClubInfoErrorProps> = ({ error }) => {
  return (
    <div className="space-y-4 relative z-10 flex flex-col justify-center h-full">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-10 h-10 text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <title>Error Icon</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 19c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-red-400">
            Failed to Load Club Info
          </h3>
          <p className="text-slate-400 text-sm">{error}</p>
          <button
            type="button"
            className="btn btn-sm bg-gradient-to-r from-red-500 to-red-600 border-0 text-white shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300"
            onClick={() => {
              // Add retry logic here
              // setIsLoading(true);
              // setError(null);
              // fetchClubData();
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClubInfoError;
