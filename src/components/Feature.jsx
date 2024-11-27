import React from "react";
import { features } from "../constants";

const Feature = () => {
  return (
    <div className="relative mt-20 border-b border-green-600 min-h-[800px]">
      <div className="text-center">
        <span className="bg-green-900 text-green-300 rounded-full h-6 font-medium px-2 py-1 uppercase">
          Fonctionnalités
        </span>
        <h2 className="text-5xl tracking-wide pt-5">
          Dites non au
          <span className="text-5xl tracking-wide bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">
            {" "}
            gaspillage alimentaire
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 justify-between">
        {features.map((feature, index) => (
          <div key={index} className="py-8">
            <div className="flex py-5">
              <div className="pr-10 text-green-600">{feature.icon}</div>
              <div>
                <div className="text-lg text-green-800 font-semibold">
                  {feature.text}
                </div>
                <p className="text-md w-72 pt-5 text-neutral-700">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
