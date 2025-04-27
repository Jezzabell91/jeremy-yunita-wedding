import React from "react";
import { Tent } from "lucide-react";

const AccommodationSection = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center justify-center mb-6">
          <Tent className="w-8 h-8 text-pink-400 mr-4" />
          <h2 className="text-3xl font-serif text-gray-800">Accommodation</h2>
        </div>
        <div className="space-y-6 text-center">
          <div>
            <h3 className="text-xl font-serif text-gray-700 mb-3">
              Camping on Property
            </h3>
            <p className="text-gray-600">
              We would love for our guests to camp with us on the wedding night
              in tents or caravans.
            </p>
            <p className="text-gray-600 mt-2">
              A paddock will be set aside for camping with toilet and shower
              facilities provided.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationSection;
