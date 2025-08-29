"use client";

import Image from "next/image";
import type { FunctionComponent } from "react";
import SquadStatusCard from "./SquadStatusCard";

type Player = {
  id: number;
  name: string;
  position: string;
  number: number;
  age: number;
  photo: string;
  x?: number;
  y?: number;
};

const Squad: FunctionComponent = () => {
  const squad: Player[] = [
    {
      id: 1,
      name: "David de Gea",
      position: "GK",
      number: 1,
      age: 31,
      photo: "https://media.api-sports.io/football/players/882.png",
    },
    {
      id: 2,
      name: "John Smith",
      position: "CB",
      number: 4,
      age: 28,
      photo: "https://media.api-sports.io/football/players/883.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "LB",
      number: 3,
      age: 26,
      photo: "https://media.api-sports.io/football/players/884.png",
    },
    {
      id: 4,
      name: "Chris Wilson",
      position: "RB",
      number: 2,
      age: 29,
      photo: "https://media.api-sports.io/football/players/885.png",
    },
    {
      id: 5,
      name: "James Rodriguez",
      position: "CM",
      number: 8,
      age: 27,
      photo: "https://media.api-sports.io/football/players/886.png",
    },
    {
      id: 6,
      name: "Alex Thompson",
      position: "CM",
      number: 6,
      age: 25,
      photo: "https://media.api-sports.io/football/players/887.png",
    },
    {
      id: 7,
      name: "Robert Taylor",
      position: "LW",
      number: 11,
      age: 24,
      photo: "https://media.api-sports.io/football/players/888.png",
    },
    {
      id: 8,
      name: "Daniel Brown",
      position: "RW",
      number: 7,
      age: 23,
      photo: "https://media.api-sports.io/football/players/889.png",
    },
    {
      id: 9,
      name: "Kevin Martinez",
      position: "ST",
      number: 9,
      age: 26,
      photo: "https://media.api-sports.io/football/players/890.png",
    },
  ];

  return (
    <div className="w-[30%] h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden border-l border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(120,119,198,0.1)_0%,_transparent_50%)]"></div>

      <div className="relative z-10 p-4 h-full overflow-y-auto">
        <div className="space-y-4">
          <div className="text-center">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Squad
            </h2>
            <div className="badge badge-outline bg-slate-700/50 border-slate-500 text-white shadow-lg backdrop-blur-sm">
              4-3-3 Formation
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {squad
              .filter((player) => squad.find((p) => p.id === player.id))
              .map((player) => (
                <button
                  key={player.id}
                  type="button"
                  className="group card bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105 hover:border-blue-400/50 p-0 text-left"
                  style={{
                    boxShadow:
                      "0 4px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                  }}
                  aria-label={`View ${player.name} details`}
                >
                  <div className="card-body p-3">
                    <div className="flex items-center gap-2">
                      <div className="avatar relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                        <div className="w-10 rounded-full border border-white/20 shadow-lg relative z-10">
                          <Image
                            src={player.photo}
                            alt={player.name}
                            width={40}
                            height={40}
                            className="object-cover rounded-full"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://via.placeholder.com/40x40/000000/FFFFFF?text=${player.number}`;
                            }}
                          />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm truncate text-white group-hover:text-blue-300 transition-colors">
                          {player.name}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="badge badge-sm bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white shadow-lg">
                            {player.position}
                          </span>
                          <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {player.number}
                          </span>
                        </div>
                        <div className="text-xs text-slate-400">
                          Age: {player.age}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
          </div>

          <SquadStatusCard />
        </div>
      </div>
    </div>
  );
};

export default Squad;
