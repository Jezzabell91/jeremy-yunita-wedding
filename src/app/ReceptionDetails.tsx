import React from "react";
import { Home as House } from "lucide-react";

export const ReceptionDetails = () => {
  return (
    <div className="bg-pink-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-6">
            <House className="w-8 h-8 text-pink-400 mr-4" />
            <h2 className="text-3xl font-serif text-gray-800">Reception</h2>
          </div>
          <p className="text-center text-gray-600 mb-4">
            Immediately following the ceremony at
          </p>
          <p className="text-center text-gray-700 text-lg font-medium">
            89 MacIntyre St, Leyburn
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceptionDetails;
