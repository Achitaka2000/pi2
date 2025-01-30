import React from "react";
import ville from "../assets/ville.jpg";
import market from "../assets/market.jpg";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-4xl text-center tracking-wide">
        La nouvelle initiative contre le gaspillage
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          à Rueil Malmaison
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-700 max-w-4xl">
        Stop au gaspillage alimentaire dans votre quartier, et aidez-nous à
        réduire le gaspillage dans notre ville
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-700 text-white py-3 px-4 mx-3 rounded-md hover:from-green-600 hover:to-green-800"
        >
          Commencer
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border border-green-600 text-green-700 hover:bg-green-100"
        >
          En savoir plus
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <img
          src={ville}
          alt="Ville"
          className="rounded-lg border border-green-600 shadow-green-400 w-1/2 mx-2 my-4"
        />
        <img
          src={market}
          alt="Market"
          className="rounded-lg border border-green-600 shadow-green-400 w-1/2 mx-2 my-4"
        />
      </div>
    </div>
  );
};

export default Hero;
