
"use client";
import React from "react";

const TechnologyDescription = ({ technology }) => {
  if (!technology) {
    return (
      <div className="text-center text-gray-400">
        Click on a technology to see its description.
      </div>
    );
  }

  return (
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-4 text-white" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.5)' }}>{technology.name}</h3>
      <p className="text-gray-300" style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.3)' }}>{technology.description}</p>
    </div>
  );
};

export default TechnologyDescription;
