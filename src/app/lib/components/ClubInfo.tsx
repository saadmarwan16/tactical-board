"use client";

import type { FunctionComponent } from "react";
import { useTeamStore } from "@/app/store/useTeamStore";
import BasicInfoCard from "./BasicInfoCard";
import ClubInfoEmpty from "./ClubInfoEmpty";
import ClubInfoError from "./ClubInfoError";
import ClubInfoLoading from "./ClubInfoLoading";
import ManagerCard from "./ManagerCard";
import VenueCard from "./VenueCard";

const ClubInfo: FunctionComponent = () => {
  const { coach, loading, error, team, venue } = useTeamStore();

  return (
    <div className="w-[20%] bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 backdrop-blur-xl border-r border-white/10 p-4 flex flex-col justify-between shadow-2xl overflow-y-auto relative">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 pointer-events-none"></div>

      {loading ? (
        <ClubInfoLoading />
      ) : error ? (
        <ClubInfoError error={error} />
      ) : !team || !venue || !coach ? (
        <ClubInfoEmpty />
      ) : (
        <div className="space-y-4 relative z-10">
          <BasicInfoCard team={team} />
          <VenueCard venue={venue} />
          <ManagerCard coach={coach} />
        </div>
      )}
    </div>
  );
};

export default ClubInfo;
