"use client";

import { type FunctionComponent, useState } from "react";
import { useFormationStore } from "@/app/store/useFormationStore";
import { formations } from "../data/formations";

const FormationSelector: FunctionComponent = () => {
  const [selectedFormation, setSelectedFormation] = useState("4-3-3");
  const [isFormationDropdownOpen, setIsFormationDropdownOpen] = useState(false);
  const { formation, updateFormation } = useFormationStore();

  // const formations = [
  //   "4-3-3",
  //   "4-4-2",
  //   "3-5-2",
  //   "4-2-3-1",
  //   "3-4-3",
  //   "5-3-2",
  //   "4-1-4-1",
  //   "4-5-1",
  //   "4-3-1-2",
  //   "4-2-4",
  //   "5-4-1",
  //   "4-1-3-2",
  //   "3-6-1",
  // ];

  return (
    <div className="navbar-end relative z-50">
      {/* Formation Dropdown */}
      <div className="dropdown dropdown-end relative z-50">
        <button
          type="button"
          className="btn bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm border-white/20 text-white hover:from-slate-600/80 hover:to-slate-700/80 gap-2 transition-all duration-300"
          onClick={() => setIsFormationDropdownOpen(!isFormationDropdownOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsFormationDropdownOpen(!isFormationDropdownOpen);
            }
          }}
        >
          <svg
            className="w-5 h-5 text-blue-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Formation</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0a2 2 0 012 2v6a2 2 0 01-2 2m-6 0a2 2 0 002 2h2a2 2 0 002-2"
            />
          </svg>
          <span className="font-semibold">{formation}</span>
          <svg
            className={`w-4 h-4 text-purple-400 transition-transform duration-200 ${isFormationDropdownOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <title>Dropdown arrow</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isFormationDropdownOpen && (
          <div className="dropdown-content menu p-2 shadow-2xl bg-slate-800/95 backdrop-blur-xl rounded-box w-32 border border-white/10 z-50">
            {Object.keys(formations).map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  updateFormation(f as keyof typeof formations);
                  setIsFormationDropdownOpen(false);
                }}
                className={`btn btn-ghost btn-sm justify-start text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200 ${
                  formation === f
                    ? "bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-blue-200"
                    : ""
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FormationSelector;
