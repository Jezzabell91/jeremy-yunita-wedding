import React from "react";
import { Gift } from "lucide-react";
import Link from "next/link";

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
          <p className="text-center text-gray-600 mb-6">
            However, we also like money, so if you wish to
            celebrate our union with a financial gift, we will have a wishing well. 
          </p>
          <div className="text-center mt-6">
            <Link 
              href="/wishing-well" 
              className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Digital Wishing Well Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishingWellDetails;