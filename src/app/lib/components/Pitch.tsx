import Image from "next/image";
import type { FunctionComponent } from "react";

const Pitch: FunctionComponent = () => {
  const filled = [8, 11, 15, 22, 24, 28, 36, 40, 42, 44, 48];

  return (
    <div className="w-[50%] h-full relative overflow-hidden shadow-2xl border-x border-white/10">
      {/* Football Pitch */}
      <div className="w-full h-full absolute bg-gradient-to-b from-green-400 via-green-500 to-green-600">
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
        </div>
      </div>
      <div className="w-full h-full absolute grid grid-cols-5 grid-rows-10 p-6">
        {/* Grid Items */}
        {[...Array(50).keys()].map((val, index) => {
          if (filled.includes(index + 1)) {
            return (
              <div key={val} className="avatar items-center justify-center">
                <div className="w-12 rounded-full">
                  <Image
                    src="https://media.api-sports.io/football/teams/49.png"
                    alt="Image of player"
                    width={48}
                    height={48}
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              key={val}
              className="border border-white/10 flex items-center justify-center"
            />
            // <div
            //   key={index}
            //   className="border border-white/10 flex items-center justify-center"
            // >
            //   {index + 1}
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pitch;
