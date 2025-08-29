"use client";

import Image from "next/image";
import type { FunctionComponent } from "react";
import type { TTeam } from "../schemas/team";

interface BasicInfoCardProps {
  team: TTeam["team"];
}

const BasicInfoCard: FunctionComponent<BasicInfoCardProps> = ({ team }) => {
  return (
    <div className="text-center space-y-3">
      <div className="avatar relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
        <div className="w-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 shadow-2xl flex items-center justify-center border border-white/20 relative z-10">
          <Image
            src={team.logo}
            alt={`${team.name} Logo`}
            width={40}
            height={40}
            className="object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML =
                  '<span class="font-black text-xl bg-gradient-to-br from-blue-400 to-purple-600 bg-clip-text text-transparent">CLUB</span>';
              }
            }}
          />
        </div>
      </div>

      <div>
        <h1 className="text-lg font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
          {team.name.toUpperCase()}
        </h1>
        <p className="text-white/60 text-xs font-medium">
          {team.code.toUpperCase()}
        </p>
      </div>

      <div className="space-y-2">
        <div className="badge bg-gradient-to-r from-blue-600/80 to-purple-600/80 border-white/20 text-white backdrop-blur-sm gap-2">
          <div className="w-2 h-2 bg-white  rounded-full animate-pulse"></div>
          EST. {team.founded}
        </div>
      </div>
    </div>
  );
};

export default BasicInfoCard;
