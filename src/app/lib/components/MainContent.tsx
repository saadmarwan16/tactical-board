"use client";

import { type FunctionComponent, useEffect } from "react";
import { useTeamStore } from "@/app/store/useTeamStore";
import ClubInfo from "./ClubInfo";
import Pitch from "./Pitch";
import Squad from "./Squad";

interface MainContentProps {
  id?: string;
}

const MainContent: FunctionComponent<MainContentProps> = ({ id }) => {
  const { fetchTeam } = useTeamStore();

  useEffect(() => {
    if (id) fetchTeam(id);
  }, [fetchTeam, id]);

  return (
    <div className="h-[calc(100vh-80px)] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm flex overflow-hidden relative z-1">
      <ClubInfo />
      <Pitch />
      <Squad />
    </div>
  );
};

export default MainContent;
