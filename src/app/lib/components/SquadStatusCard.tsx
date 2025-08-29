import type { FunctionComponent } from "react";

const SquadStatusCard: FunctionComponent = () => {
  return (
    <div className="card bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-sm border border-green-400/30 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-lg"></div>
      <div className="card-body p-4 relative z-10">
        <h3 className="card-title text-sm bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
          Squad Status
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {/* On Pitch */}
          <div className="text-center">
            <div className="stat">
              <div className="stat-value text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {/* {pitchPlayers.length} */}0
              </div>
              <div className="stat-desc text-green-300/70 font-medium text-xs">
                On Pitch
              </div>
            </div>
          </div>
          {/* Remaining in Squad */}
          <div className="text-center">
            <div className="stat">
              <div className="stat-value text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {/* {
                  squad.filter(
                    (player) => !pitchPlayers.find((p) => p.id === player.id),
                  ).length
                } */}
                11
              </div>
              <div className="stat-desc text-blue-300/70 font-medium text-xs">
                Remaining
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SquadStatusCard;
