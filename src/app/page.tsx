import ClubInfo from "./lib/components/ClubInfo";
import FormationSelector from "./lib/components/FormationSelector";
import Pitch from "./lib/components/Pitch";
import SearchBar from "./lib/components/SearchBar";
import Squad from "./lib/components/Squad";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="navbar bg-gradient-to-r from-slate-800/95 to-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-white/10 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>

        <div className="navbar-start relative z-10">
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

      <div className="h-[calc(100vh-80px)] bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm flex overflow-hidden relative z-1">
        <ClubInfo />
        <Pitch />
        <Squad />
      </div>
    </div>
  );
};

export default Home;
