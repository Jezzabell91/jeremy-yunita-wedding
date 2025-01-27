import React from "react";
import { Gift } from "lucide-react";

export const WishingWellDetails = () => {
  return (
    <div className="bg-pink-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-6">
            <Gift className="w-8 h-8 text-pink-400 mr-4" />
            <h2 className="text-3xl font-serif text-gray-800">Wishing Well</h2>
          </div>
          <p className="text-center text-gray-600 mb-4">
            Your presence at our wedding is the greatest gift of all.
          </p>
          <p className="text-center text-gray-600">
            However, we also like money and presents, so if you wish to
            celebrate our union with a gift, we will have a wishing well and
            gift table.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WishingWellDetails;
