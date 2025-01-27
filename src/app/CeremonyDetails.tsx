import React from "react";
import { Calendar, Clock } from "lucide-react";
import LocationSection from "./LocationSection";

export const CeremonyDetails = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <h2 className="text-3xl font-serif text-gray-800 text-center mb-12">
        Details
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
          <Calendar className="w-8 h-8 text-pink-400" />
          <h3 className="text-xl font-serif text-gray-700">Date</h3>
          <p className="text-center text-gray-600">Monday, 5th May 2025</p>
          <p className="text-sm text-pink-500 font-medium">
            Labour Day Public Holiday
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-md">
          <Clock className="w-8 h-8 text-pink-400" />
          <h3 className="text-xl font-serif text-gray-700">Times</h3>
          <div className="space-y-2 text-center">
            <p className="text-gray-600">Ceremony 11:30 AM</p>
            <p className="text-gray-600">Reception 12:30 PM</p>
            <p className="text-gray-600">After Party 4:00 PM</p>
          </div>
        </div>
      </div>
      <LocationSection />
    </div>
  );
};

export default CeremonyDetails;
