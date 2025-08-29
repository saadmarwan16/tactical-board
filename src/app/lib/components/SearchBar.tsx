import { useState, type FunctionComponent } from "react";
import Image from "next/image";

const SearchBar: FunctionComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Sample club suggestions
  const clubSuggestions = [
    {
      id: 1,
      name: "Chelsea FC",
      country: "England",
      logo: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      id: 2,
      name: "Manchester United",
      country: "England",
      logo: "https://media.api-sports.io/football/teams/33.png",
    },
    {
      id: 3,
      name: "Arsenal FC",
      country: "England",
      logo: "https://media.api-sports.io/football/teams/42.png",
    },
    {
      id: 4,
      name: "Liverpool FC",
      country: "England",
      logo: "https://media.api-sports.io/football/teams/40.png",
    },
    {
      id: 5,
      name: "Manchester City",
      country: "England",
      logo: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      id: 6,
      name: "Real Madrid",
      country: "Spain",
      logo: "https://media.api-sports.io/football/teams/541.png",
    },
    {
      id: 7,
      name: "Barcelona",
      country: "Spain",
      logo: "https://media.api-sports.io/football/teams/529.png",
    },
    {
      id: 8,
      name: "Bayern Munich",
      country: "Germany",
      logo: "https://media.api-sports.io/football/teams/157.png",
    },
    {
      id: 9,
      name: "Paris Saint-Germain",
      country: "France",
      logo: "https://media.api-sports.io/football/teams/85.png",
    },
    {
      id: 10,
      name: "Juventus",
      country: "Italy",
      logo: "https://media.api-sports.io/football/teams/496.png",
    },
  ];

  // Filter suggestions based on search query
  const filteredSuggestions = clubSuggestions.filter(
    (club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.country.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    // Always show dropdown when there's any input
    setIsDropdownOpen(value.length > 0);
  };

  const handleSuggestionClick = (club: (typeof clubSuggestions)[0]) => {
    setSearchQuery(club.name);
    setIsDropdownOpen(false);
    // TODO: Implement club selection logic
  };

  const handleInputFocus = () => {
    // Show dropdown if there's any text
    if (searchQuery.length > 0) {
      setIsDropdownOpen(true);
    }
  };

  const handleInputBlur = () => {
    // Delay closing to allow for click on suggestions
    setTimeout(() => setIsDropdownOpen(false), 150);
  };

  return (
    <div className="relative z-10">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        <input
          type="text"
          placeholder="Search for a club..."
          className="input input-bordered w-80 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder-white/60 focus:border-blue-400/50 focus:bg-white/20 transition-all duration-300"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </div>

      {/* Search Suggestions Dropdown */}
      {isDropdownOpen && searchQuery.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 z-50">
          <div className="card bg-slate-800/95 backdrop-blur-xl shadow-2xl border border-white/10 max-h-64 overflow-y-auto">
            <div className="card-body p-2">
              {filteredSuggestions.length > 0 ? (
                filteredSuggestions.slice(0, 8).map((club) => (
                  <button
                    key={club.id}
                    type="button"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 text-left w-full"
                    onClick={() => handleSuggestionClick(club)}
                  >
                    <div className="avatar">
                      <div className="w-8 rounded-full bg-slate-700 flex items-center justify-center">
                        <Image
                          src={club.logo}
                          alt={`${club.name} logo`}
                          width={24}
                          height={24}
                          className="object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = "none";
                            const parent = target.parentElement;
                            if (parent) {
                              parent.innerHTML = `<span class="text-xs font-bold text-white">${club.name.charAt(0)}</span>`;
                            }
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white text-sm">
                        {club.name}
                      </div>
                      <div className="text-xs text-slate-400">
                        {club.country}
                      </div>
                    </div>
                  </button>
                ))
              ) : (
                <div className="text-center text-white/60 text-sm py-4">
                  No clubs found for "{searchQuery}"
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
