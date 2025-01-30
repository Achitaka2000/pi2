import React from "react";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";
import patate from "../assets/patate.jpg";

const WorkFlow = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center tracking-wide">
        Localisation en temps réel,
        <span className="bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          avec de vraies personnes
        </span>
      </h1>
      <div className="flex justify-center pt-10">
        <div className="p-5 w-full w-1/2">
          <img src={patate} alt="Nourriture" className="rounded-xl h-full" />
        </div>
        <div className="pt-12 w-full">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-500 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-green-800">
                  {item.title}
                </h5>
                <p className="text-md text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
