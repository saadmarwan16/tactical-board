import type { FunctionComponent } from "react";
import BasicInfoCard from "./BasicInfoCard";
import VenueCard from "./VenueCard";
import ManagerCard from "./ManagerCard";

const ClubInfo: FunctionComponent = () => {
  return (
    <div className="w-[20%] bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl border-r border-white/10 p-4 flex flex-col justify-between shadow-2xl overflow-y-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>

      <div className="space-y-4 relative z-10">
        <BasicInfoCard />
        <VenueCard />
        <ManagerCard />
      </div>
    </div>
  );
};

export default ClubInfo;
