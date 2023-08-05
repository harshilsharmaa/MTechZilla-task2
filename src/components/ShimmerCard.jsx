import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-9/12 bg-[#1a202c] p-6 mt-4 rounded-lg shadow-lg text-white md:w-3/12">
      <div className="w-44 h-44 rounded-full mx-auto mb-4 bg-slate-800">
        <div className="w-full h-full rounded-full animate-shimmer" />
      </div>

      <h2 className="text-2xl font-bold w-44 h-7 bg-slate-800 rounded-lg">
        <div className="w-full h-full animate-shimmer" />
      </h2>

      <div className="mt-1 text-lg mb-2 w-36 h-5 bg-slate-800 rounded-lg">
        <div className="w-full h-full animate-shimmer" />
      </div>

      <div className="text-sm mb-2  flex">
        <span className="w-1/3 h-4 bg-slate-800 rounded-lg">
          <div className="w-full h-full animate-shimmer" />
        </span>
        <span className="ml-2 w-1/3 h-4 bg-slate-800 rounded-lg">
          <div className="w-full h-full animate-shimmer" />
        </span>
      </div>
      <div className="text-sm w-28 h-7 bg-slate-800 rounded-lg">
        <div className="w-full h-full animate-shimmer" />
      </div>

      <div className="flex justify-center">
        <span className="mt-2 w-1/3 h-9 bg-slate-800 rounded-lg">
          <div className="w-full h-full animate-shimmer" />
        </span>
      </div>
    </div>
  );
};

export default ShimmerCard;
