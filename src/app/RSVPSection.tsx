import React from "react";
import { MailQuestion as Mail } from "lucide-react";

const RSVPSection = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex items-center justify-center mb-6">
            <Mail className="w-8 h-8 text-pink-400 mr-4" />
            <h2 className="text-3xl font-serif text-gray-800">RSVP</h2>
          </div>

          <div className="text-center space-y-6">
            <p className="text-gray-600 text-lg">
              Please RSVP by 1st April 2025
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-700">
                  Call or text Jeremy
                  <a
                    href="tel:0428408367"
                    className="text-pink-500 hover:text-pink-600 ml-2"
                  >
                    0428 408 367
                  </a>
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <p className="text-gray-700">
                  Or message on
                  <a
                    href="https://m.me/jeremy.bell1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:text-pink-600 ml-2"
                  >
                    Messenger
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVPSection;
