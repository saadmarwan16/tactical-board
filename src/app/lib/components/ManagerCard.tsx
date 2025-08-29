import type { FunctionComponent } from "react";

const ManagerCard: FunctionComponent = () => {
  return (
    <div className="card bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm shadow-xl border border-white/10">
      <div className="card-body p-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-lg"></div>
        <div className="flex items-center gap-2 mb-2 relative z-10">
          <span className="text-lg">👨‍💼</span>
          <h3 className="card-title text-sm text-white font-bold">MANAGER</h3>
        </div>

        <div className="space-y-2 relative z-10">
          <div className="flex justify-between text-xs">
            <span className="text-white/70">Name:</span>
            <span className="text-white font-medium">Enzo Maresca</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-white/70">Role:</span>
            <span className="text-white font-medium">Head Coach</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-white/70">Age:</span>
            <span className="text-white font-medium">44</span>
          </div>
          <div className="flex justify-between text-xs">
            <span className="text-white/70">Nationality:</span>
            <span className="text-white font-medium">Italian</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerCard;
