"use client";

import { useState } from "react";
import Image from "next/image";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState("4-3-3");
  const [isFormationDropdownOpen, setIsFormationDropdownOpen] = useState(false);

  const formations = [
    "4-3-3",
    "4-4-2",
    "3-5-2",
    "4-2-3-1",
    "3-4-3",
    "5-3-2",
    "4-1-4-1",
    "4-5-1",
  ];

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
      photo: "https://media.api-sports.io/football/players/306.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      position: "CB",
      number: 3,
      age: 26,
      photo: "https://media.api-sports.io/football/players/835.png",
    },
    {
      id: 4,
      name: "Alex Brown",
      position: "LB",
      number: 26,
      age: 24,
      photo: "https://media.api-sports.io/football/players/2963.png",
    },
    {
      id: 5,
      name: "Chris Wilson",
      position: "RB",
      number: 66,
      age: 25,
      photo: "https://media.api-sports.io/football/players/2935.png",
    },
    {
      id: 6,
      name: "Tom Davis",
      position: "CDM",
      number: 6,
      age: 29,
      photo: "https://media.api-sports.io/football/players/756.png",
    },
    {
      id: 7,
      name: "Jake Miller",
      position: "CM",
      number: 7,
      age: 27,
      photo: "https://media.api-sports.io/football/players/629.png",
    },
    {
      id: 8,
      name: "Sam Taylor",
      position: "CAM",
      number: 8,
      age: 26,
      photo: "https://media.api-sports.io/football/players/882.png",
    },
    {
      id: 9,
      name: "Ryan Clark",
      position: "LW",
      number: 9,
      age: 23,
      photo: "https://media.api-sports.io/football/players/1382.png",
    },
    {
      id: 10,
      name: "Luke White",
      position: "RW",
      number: 10,
      age: 24,
      photo: "https://media.api-sports.io/football/players/306.png",
    },
    {
      id: 11,
      name: "Mark Harris",
      position: "ST",
      number: 11,
      age: 25,
      photo: "https://media.api-sports.io/football/players/1100.png",
    },
  ];

  const handleDragStart = (_e: React.DragEvent, player: Player) => {
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
    <div className="min-h-screen bg-base-200">
      {/* Header with Club Search */}
      <div className="navbar bg-base-100 shadow-lg border-b border-base-300">
        <div className="navbar-start">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-content font-bold text-lg">⚽</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-base-content">
              Tactical Board
            </h1>
          </div>
        </div>

        <div className="navbar-center">
          {/* Search Bar */}
          <div className="form-control">
            <div className="input-group">
              <input
                type="text"
                placeholder="Search for a club..."
                className="input input-bordered w-80"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="btn btn-square btn-primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <title>Search</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>

            {/* Search Results Dropdown */}
            {searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-2 z-50">
                <div className="card bg-base-100 shadow-xl border border-base-300">
                  <div className="card-body py-4">
                    <div className="text-center text-base-content/60 text-sm">
                      Search functionality coming soon...
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="navbar-end">
          {/* Formation Dropdown */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-outline gap-2"
              onClick={() => setIsFormationDropdownOpen(!isFormationDropdownOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Formation</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0a2 2 0 012 2v6a2 2 0 01-2 2m-6 0a2 2 0 002 2h2a2 2 0 002-2" />
              </svg>
              {selectedFormation}
              <svg className={`w-4 h-4 transition-transform duration-200 ${isFormationDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <title>Dropdown arrow</title>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </label>

            {isFormationDropdownOpen && (
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-32 border border-base-300">
                {formations.map((formation) => (
                  <li key={formation}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFormation(formation);
                        setIsFormationDropdownOpen(false);
                      }}
                      className={`${selectedFormation === formation ? 'active' : ''}`}
                    >
                      {formation}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="h-[calc(100vh-80px)] bg-base-300 flex overflow-hidden">
        {/* Club Info Section - 20% */}
        <div className="w-[20%] bg-base-100 border-r border-base-300 p-4 flex flex-col justify-between shadow-lg overflow-y-auto">
          <div className="space-y-4">
            {/* Club Header */}
            <div className="text-center space-y-3">
              {/* Club Logo */}
              <div className="avatar">
                <div className="w-16 rounded-full bg-base-200 shadow-lg flex items-center justify-center">
                  <Image
                    src="https://media.api-sports.io/football/teams/49.png"
                    alt="Chelsea FC Logo"
                    width={40}
                    height={40}
                    className="object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML =
                          '<span class="font-black text-xl text-primary">CHE</span>';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Club Name */}
              <div>
                <h1 className="text-lg font-bold text-base-content">
                  CHELSEA FC
                </h1>
                <p className="text-base-content/60 text-xs font-medium">The Blues</p>
              </div>

              {/* Club Details */}
              <div className="space-y-2">
                <div className="badge badge-outline gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  EST. 1905
                </div>

                <div className="badge badge-primary">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENGLAND • PREMIER LEAGUE
                </div>
              </div>
            </div>
                  <p className="text-blue-200 text-xs font-semibold">
                    EST. 1905
                  </p>
                </div>

                <div className="px-3 py-1 bg-gradient-to-r from-blue-600/80 to-blue-700/80 rounded-full text-xs font-bold backdrop-blur-sm border border-white/30 shadow-lg">
                  🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENGLAND • PREMIER LEAGUE
                </div>
              </div>
            </div>

            {/* Stadium Information */}
            <div className="card bg-base-200 shadow-md">
              <div className="card-body p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">🏟️</span>
                  <h3 className="card-title text-sm text-base-content">
                    STAMFORD BRIDGE
                  </h3>
                </div>
                
                <div className="space-y-2 text-xs text-base-content/70">
                  <div className="flex justify-between">
                    <span>Location:</span>
                    <span className="text-base-content">London, England</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Capacity:</span>
                    <span className="text-base-content">40,834</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Opened:</span>
                    <span className="text-base-content">1877</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Manager Information */}
            <div className="card bg-base-200 shadow-md">
              <div className="card-body p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">👨‍💼</span>
                  <h3 className="card-title text-sm text-base-content">
                    MANAGER
                  </h3>
                </div>
                
                <div className="space-y-2">
                  <div className="font-medium text-base-content">Enzo Maresca</div>
                  <div className="text-xs text-base-content/70">Head Coach</div>
                  <div className="flex justify-between text-xs">
                    <span className="text-base-content/70">Age:</span>
                    <span className="text-base-content">44</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-base-content/70">Nationality:</span>
                    <span className="text-base-content">Italian</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Club Stats */}
            <div className="card bg-base-200 shadow-md">
              <div className="card-body p-4">
                <h3 className="card-title text-sm text-base-content mb-3">SEASON STATS</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-base-content/70">League Position:</span>
                    <span className="badge badge-success badge-sm">4th</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Points:</span>
                    <span className="text-base-content font-medium">35</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-base-content/70">Matches Played:</span>
                    <span className="text-base-content">20</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pitch Section - 50% */}
        <div className="w-[50%] h-full bg-success relative overflow-hidden shadow-lg border-x border-base-300">

            {/* Coach Information */}
            <div className="bg-gradient-to-br from-slate-800/60 to-purple-900/60 rounded-xl p-3 backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-amber-500/10 rounded-xl"></div>
              <div className="relative">
                {/* Coach Photo */}
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
                      <Image
                        src="https://media.api-sports.io/football/coachs/12629.png"
                        alt="Enzo Maresca"
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML =
                              '<span class="text-white text-lg font-bold">EM</span>';
                            parent.className =
                              parent.className +
                              " flex items-center justify-center";
                          }
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-amber-400 blur-sm opacity-30 animate-pulse"></div>
                  </div>
                </div>

                {/* Coach Details */}
                <div className="text-center space-y-2">
                  <h2 className="text-sm font-bold bg-gradient-to-r from-amber-200 to-yellow-200 bg-clip-text text-transparent">
                    ENZO MARESCA
                  </h2>

                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-purple-200">👨‍💼 Role:</span>
                      <span className="text-white font-semibold">
                        Head Coach
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">🎂 Age:</span>
                      <span className="text-white font-semibold">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-200">🇮🇹 Nationality:</span>
                      <span className="text-white font-semibold">Italy</span>
                    </div>
                    <div className="text-center mt-2 space-y-1">
                      <div className="text-blue-300 text-xs">
                        Vincenzo Maresca
                      </div>
                      <div className="text-blue-300 text-xs">
                        Born: Feb 10, 1980
                      </div>
                      <div className="text-blue-300 text-xs">
                        Ponte Cagnano, Italy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Season Info */}
            <div className="bg-gradient-to-br from-green-800/60 to-emerald-900/60 rounded-xl p-3 backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl"></div>
              <div className="relative text-center space-y-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto flex items-center justify-center shadow-md">
                  <span className="text-white text-sm">⚽</span>
                </div>

                <h3 className="text-sm font-bold bg-gradient-to-r from-green-200 to-emerald-200 bg-clip-text text-transparent">
                  SEASON 2024/25
                </h3>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-green-200">📋 Formation:</span>
                    <span className="text-white font-semibold">4-3-3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-200">🏆 Competition:</span>
                    <span className="text-white font-semibold">
                      Premier League
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pitch Section - 50% */}
        <div className="w-[50%] h-screen relative overflow-hidden shadow-2xl border-x-2 border-white/30">
          {/* Animated grass texture background */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-400 via-green-500 to-green-600"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(34,197,94,0.3)_0%,_transparent_50%)]"></div>

          {/* Grass texture overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v-20h20v20H20zm0 0v20H0V20h20z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          <div
            className="w-full h-full relative"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            role="application"
            aria-label="Football pitch - drop area for players"
          >
            {/* Enhanced pitch markings with glow effects */}
            <div className="absolute inset-6">
              {/* Outer boundary with glow */}
              <div className="absolute inset-0 border-4 border-white rounded-xl shadow-2xl"></div>
              <div className="absolute inset-0 border-2 border-white/60 rounded-xl blur-sm"></div>

              {/* Center circle with dramatic glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-3 border-white rounded-full shadow-2xl"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white/50 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white shadow-lg"></div>
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/60 blur-sm"></div>

              {/* Enhanced penalty areas with depth */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-36 h-14 border-3 border-white border-t-0 shadow-xl"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-8 border-3 border-white border-t-0 shadow-lg"></div>
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-36 h-14 border-3 border-white border-b-0 shadow-xl"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-8 border-3 border-white border-b-0 shadow-lg"></div>
              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>

              {/* Stylized corner arcs */}
              <div className="absolute top-0 left-0 w-8 h-8 border-b-3 border-r-3 border-white rounded-br-full shadow-lg"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-b-3 border-l-3 border-white rounded-bl-full shadow-lg"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-t-3 border-r-3 border-white rounded-tr-full shadow-lg"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-t-3 border-l-3 border-white rounded-tl-full shadow-lg"></div>

              {/* Premium 3D goals */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gradient-to-b from-gray-300 to-gray-500 border border-gray-400 rounded-sm shadow-2xl"></div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-gradient-to-t from-gray-300 to-gray-500 border border-gray-400 rounded-sm shadow-2xl"></div>
            </div>

            {/* Enhanced players on pitch with premium styling */}
            {pitchPlayers.map((player) => (
              <button
                key={player.id}
                type="button"
                className="absolute group"
                style={{ left: player.x, top: player.y }}
                onClick={() => removePlayerFromPitch(player.id)}
                title={`${player.name} (${player.position}) - Click to remove`}
                aria-label={`Remove ${player.name} from pitch`}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity animate-pulse transform -translate-x-1/2 -translate-y-1/2 w-16 h-16"></div>

                {/* Main player token */}
                <div className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 rounded-full w-14 h-14 flex items-center justify-center shadow-2xl transform -translate-x-1/2 -translate-y-1/2 border-2 border-white/80 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 backdrop-blur-sm">
                  {/* Inner glow */}
                  <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>

                  {/* Player number */}
                  <div className="relative text-center z-10">
                    <div className="text-sm font-black text-white drop-shadow-lg">
                      {player.number}
                    </div>
                  </div>

                  {/* Sparkle effect */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-300 rounded-full opacity-80 animate-ping"></div>
                </div>

                {/* Player name tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black/80 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap backdrop-blur-sm border border-white/20">
                  {player.name} • {player.position}
                </div>
              </button>
            ))}

            {/* Enhanced empty state */}
            {pitchPlayers.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center relative">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 rounded-3xl blur-xl"></div>

                  {/* Main content */}
                  <div className="relative bg-gradient-to-br from-black/70 to-black/50 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-2xl border border-white/30">
                    {/* Animated icon */}
                    <div className="text-6xl mb-4 animate-bounce">⚽</div>

                    <h3 className="text-2xl font-black mb-3 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                      TACTICAL BOARD
                    </h3>

                    <p className="text-white/90 text-sm font-medium mb-4">
                      Drag & drop players to create your formation
                    </p>

                    {/* Animated arrows */}
                    <div className="flex justify-center space-x-4">
                      <div className="text-2xl animate-pulse">←</div>
                      <div className="text-yellow-400 text-xl animate-bounce">
                        ⭐
                      </div>
                      <div className="text-2xl animate-pulse">→</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Squad Section - 30% with premium styling */}
        <div className="w-[30%] h-screen bg-gradient-to-br from-slate-800/90 via-gray-900/80 to-purple-900/90 backdrop-blur-xl text-white p-6 overflow-y-auto shadow-2xl border-l border-white/20 relative">
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>

          <div className="relative z-10">
            {/* Enhanced header */}
            <div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">👥</div>
                <h3 className="text-2xl font-black bg-gradient-to-r from-blue-200 via-white to-purple-200 bg-clip-text text-transparent">
                  SQUAD
                </h3>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
            </div>

            {/* FIFA-style Player cards in grid */}
            <div className="grid grid-cols-2 gap-3 flex-1 overflow-y-auto">
              {squad.map((player) => {
                const isOnPitch = pitchPlayers.some((p) => p.id === player.id);

                // Get position color scheme
                const getPositionColors = (pos: string) => {
                  if (pos === "GK")
                    return {
                      bg: "from-yellow-500 to-orange-600",
                      accent: "yellow-400",
                    };
                  if (["CB", "LB", "RB", "CDM"].includes(pos))
                    return {
                      bg: "from-green-500 to-emerald-600",
                      accent: "green-400",
                    };
                  if (["CM", "CAM", "LW", "RW"].includes(pos))
                    return {
                      bg: "from-blue-500 to-cyan-600",
                      accent: "blue-400",
                    };
                  return { bg: "from-red-500 to-rose-600", accent: "red-400" }; // Forwards
                };

                const colors = getPositionColors(player.position);

                return (
                  <button
                    key={player.id}
                    type="button"
                    draggable={!isOnPitch}
                    onDragStart={(e) =>
                      !isOnPitch && handleDragStart(e, player)
                    }
                    className={`group relative w-full transition-all duration-300 ${
                      isOnPitch
                        ? "opacity-60 cursor-not-allowed"
                        : "cursor-grab active:cursor-grabbing hover:scale-105 hover:-translate-y-1"
                    }`}
                    disabled={isOnPitch}
                    aria-label={`${player.name} - ${player.position} - ${isOnPitch ? "On pitch" : "Drag to pitch"}`}
                  >
                    {/* FIFA Card Background */}
                    <div
                      className={`relative bg-gradient-to-br ${colors.bg} rounded-xl p-3 shadow-2xl border-2 border-white/30 overflow-hidden min-h-[140px]`}
                    >
                      {/* Card shine effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-50"></div>

                      {/* Card pattern overlay */}
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                        }}
                      ></div>

                      {/* Card content in rows */}
                      <div className="relative z-10 flex flex-col h-full">
                        {/* Row 1: Position and Number */}
                        <div className="flex justify-between items-center mb-2">
                          <div className="text-white/90 font-bold text-xs bg-black/30 px-2 py-1 rounded">
                            {player.position}
                          </div>
                          <div className="text-white font-black text-lg">
                            #{player.number}
                          </div>
                        </div>

                        {/* Row 2: Player Photo */}
                        <div className="flex justify-center mb-2">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden bg-white/20 backdrop-blur-sm">
                              <Image
                                src={player.photo}
                                alt={player.name}
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=random&size=48`;
                                }}
                              />
                            </div>
                            {/* Glow effect around photo */}
                            <div
                              className={`absolute inset-0 rounded-full bg-${colors.accent} blur-sm opacity-30 animate-pulse`}
                            ></div>
                          </div>
                        </div>

                        {/* Row 3: Player Name */}
                        <div className="text-center mb-2">
                          <h4 className="text-white font-bold text-sm leading-tight truncate">
                            {player.name}
                          </h4>
                        </div>

                        {/* Row 4: Age */}
                        <div className="text-center mb-2">
                          <div className="text-white/80 text-xs">
                            Age: {player.age}
                          </div>
                        </div>

                        {/* Row 5: Status or Drag indicator */}
                        <div className="flex-1 flex items-end justify-center">
                          {isOnPitch ? (
                            <div className="flex items-center space-x-1 bg-green-500 px-2 py-1 rounded-full">
                              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                              <span className="text-white text-xs font-bold">
                                ON FIELD
                              </span>
                            </div>
                          ) : (
                            <div className="text-white/60 text-xs">
                              🖱️ Drag to pitch
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Enhanced squad stats */}
            <div className="mt-6 p-4 bg-gradient-to-br from-slate-700/60 to-gray-800/60 rounded-2xl backdrop-blur-sm border border-white/20 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl"></div>
              <div className="relative">
                <h4 className="text-sm font-bold text-gray-200 mb-3 flex items-center space-x-2">
                  <span>📊</span>
                  <span>SQUAD ANALYTICS</span>
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-600/30 to-blue-700/30 rounded-xl border border-blue-400/30">
                    <div className="text-2xl font-black text-blue-300">
                      {squad.length}
                    </div>
                    <div className="text-xs text-blue-200 font-semibold">
                      TOTAL PLAYERS
                    </div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-600/30 to-green-700/30 rounded-xl border border-green-400/30">
                    <div className="text-2xl font-black text-green-300">
                      {pitchPlayers.length}
                    </div>
                    <div className="text-xs text-green-200 font-semibold">
                      ON PITCH
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
