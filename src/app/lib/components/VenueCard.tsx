import type { FunctionComponent } from "react";
import type { TTeam } from "../schemas/team";

interface VenueCardProps {
  venue: TTeam["venue"];
}

const VenueCard: FunctionComponent<VenueCardProps> = ({ venue }) => {
  return (
    <div className="card bg-gradient-to-br from-slate-700/50 to-slate-800/50 backdrop-blur-sm shadow-xl border border-white/10">
      <div className="card-body p-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 rounded-lg"></div>
        <div className="flex items-center gap-2 mb-2 relative z-10">
          <span className="text-lg">🏟️</span>
          <h3 className="card-title text-sm text-white font-bold">
            {venue.name.toUpperCase()}
          </h3>
        </div>

        <div className="space-y-2 text-xs text-white/70 relative z-10">
          <div className="flex justify-between">
            <span>Location:</span>
            <span className="text-white font-medium">{venue.location}</span>
          </div>
          <div className="flex justify-between">
            <span>Capacity:</span>
            <span className="text-white font-medium">{venue.capacity}</span>
          </div>
          <div className="flex justify-between">
            <span>Surface:</span>
            <span className="text-white font-medium">{venue.surface}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
