"use client";

import { useState } from "react";
import Image from "next/image";
import SearchBar from "./lib/components/SearchBar";
import FormationSelector from "./lib/components/FormationSelector";
import SquadStatusCard from "./lib/components/SquadStatusCard";
import ClubInfo from "./lib/components/ClubInfo";

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

const Home = () => {
  const [draggedPlayer, setDraggedPlayer] = useState<Player | null>(null);
  const [pitchPlayers, setPitchPlayers] = useState<Player[]>([]);

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

  const handleDragStart = (player: Player) => {
    setDraggedPlayer(player);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedPlayer) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPitchPlayers((prev) => [
        ...prev.filter((p) => p.id !== draggedPlayer.id),
        { ...draggedPlayer, x, y },
      ]);
      setDraggedPlayer(null);
    }
  };

  const removePlayerFromPitch = (playerId: number) => {
    setPitchPlayers((prev) => prev.filter((p) => p.id !== playerId));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Header with Club Search */}
      <div className="navbar bg-gradient-to-r from-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

        <div className="navbar-start relative z-10">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="avatar relative">
              <div className="w-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5 animate-pulse">
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">⚽</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 blur-lg opacity-50 animate-pulse"></div>
            </div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
              Tactical Board
            </h1>
          </div>
        </div>

        <SearchBar />

        <FormationSelector />
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-80px)] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm flex overflow-hidden relative z-1">
        {/* Club Info Section - 20% */}
        <ClubInfo />

        {/* Pitch Section - 50% */}
        <div className="w-[50%] h-full relative overflow-hidden shadow-2xl border-x border-white/10">
          {/* Football Pitch */}
          <div className="w-full h-full relative bg-gradient-to-b from-green-400 via-green-500 to-green-600">
            {/* Grass texture overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-30"></div>
            {/* Animated grass pattern */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
            {/* Pitch Markings */}
            <div className="absolute inset-4 border-4 border-white/90 rounded-xl shadow-2xl">
              {/* Center Line - Horizontal, parallel to goal posts */}
              <div className="absolute left-0 top-1/2 w-full h-1 bg-white/90 transform -translate-y-1/2"></div>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-white/90 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>

              {/* Top Penalty Area (18-yard box) */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-20 border-4 border-white/90 border-t-0">
                {/* Goal Area (6-yard box) */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-10 border-4 border-white/90 border-t-0"></div>
                {/* Penalty Spot */}
                <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
              </div>

              {/* Bottom Penalty Area (18-yard box) */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-20 border-4 border-white/90 border-b-0">
                {/* Goal Area (6-yard box) */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-10 border-4 border-white/90 border-b-0"></div>
                {/* Penalty Spot */}
                <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
              </div>

              {/* Corner Arcs */}
              <div className="absolute top-0 left-0 w-8 h-8 border-4 border-white/90 border-l-0 border-t-0 rounded-br-full"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-4 border-white/90 border-r-0 border-t-0 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-4 border-white/90 border-l-0 border-b-0 rounded-tr-full"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-4 border-white/90 border-r-0 border-b-0 rounded-tl-full"></div>

              {/* Goals */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-800 border border-white rounded shadow-xl"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-gray-800 border border-white rounded shadow-xl"></div>
            </div>{" "}
            {/* Dropped Players */}
            <button
              type="button"
              className="absolute inset-0 bg-transparent border-0 p-0"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              aria-label="Pitch drop zone"
            >
              {pitchPlayers.map((player) => (
                <button
                  key={player.id}
                  type="button"
                  className="absolute group cursor-pointer transform -translate-x-1/2 -translate-y-1/2 border-0 p-0 hover:scale-110 transition-all duration-300"
                  style={{ left: player.x, top: player.y }}
                  onClick={() => removePlayerFromPitch(player.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      removePlayerFromPitch(player.id);
                    }
                  }}
                  aria-label={`Remove ${player.name} from pitch`}
                >
                  <div className="relative">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 to-purple-600/40 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>

                    {/* Main card */}
                    <div className="relative bg-gradient-to-br from-slate-800/95 to-slate-700/95 backdrop-blur-sm border border-white/20 rounded-2xl shadow-2xl w-18 h-24 p-2 group-hover:border-blue-400/50 transition-all duration-300">
                      {/* Player avatar */}
                      <div className="relative mb-1">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-sm"></div>
                        <div className="relative w-10 h-10 mx-auto">
                          <Image
                            src={player.photo}
                            alt={player.name}
                            width={40}
                            height={40}
                            className="object-cover rounded-full border border-white/30 shadow-lg"
                          />
                        </div>
                      </div>

                      {/* Player info */}
                      <div className="text-center space-y-1">
                        <div className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          {player.number}
                        </div>
                        <div className="badge badge-xs bg-gradient-to-r from-blue-500 to-purple-500 border-0 text-white shadow-lg">
                          {player.position}
                        </div>
                      </div>

                      {/* Remove indicator on hover */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-xs">×</span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </button>
          </div>
        </div>

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
                  .filter(
                    (player) => !pitchPlayers.find((p) => p.id === player.id),
                  )
                  .map((player) => (
                    <button
                      key={player.id}
                      type="button"
                      className="group card bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/30 shadow-lg hover:shadow-xl transition-all duration-300 cursor-grab hover:scale-105 hover:border-blue-400/50 p-0 text-left"
                      style={{
                        boxShadow:
                          "0 4px 15px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
                      }}
                      draggable
                      onDragStart={() => handleDragStart(player)}
                      aria-label={`Drag ${player.name} to pitch`}
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
      </div>
    </div>
  );
};

export default Home;
