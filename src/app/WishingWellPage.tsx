"use client";
import React, { useState } from "react";
import { Gift, CreditCard, Building, Copy, Check } from "lucide-react";

const CopyButton: React.FC<{ text: string; label: string }> = ({ text, label }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copyToClipboard}
      className="inline-flex items-center justify-center p-2 rounded-full hover:bg-pink-100 transition-colors"
      title={`Copy ${label}`}
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-500" />
      ) : (
        <Copy className="w-4 h-4 text-pink-400" />
      )}
    </button>
  );
};


const WishingWellPage = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      
      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-center mb-6">
            <Gift className="w-8 h-8 text-pink-400 mr-4" />
            <h2 className="text-3xl font-serif text-gray-800">Our Wishing Well</h2>
          </div>
          
          <div className="space-y-4 text-center">
            <p className="text-gray-600">
              Hi friends and family!
            </p>

            <p className="text-gray-600">
            Thank you for sharing in our special day! Your presence means the world to us.
            </p>

            <p className="text-gray-600">
            If you wish to contribute to our future together, we would be very grateful, though celebrating with you is truly the greatest gift.
            </p>
            
            <p className="text-gray-600">
            With love and appreciation,
            </p>
            
            <p className="text-gray-600">
              Jeremy and Yunita
            </p>
          </div>
        </div>

        {/* Bank Transfer Option */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-center mb-6">
            <Building className="w-8 h-8 text-pink-400 mr-4" />
            <h3 className="text-2xl font-serif text-gray-800">Bank Transfer</h3>
          </div>
          
          <div className="space-y-4 text-center">
            <p className="text-gray-600">
              The best non-cash way to give us money is via bank transfer as there are no fees.
            </p>
            
            <div className="bg-pink-50 p-6 rounded-lg max-w-md mx-auto">
              <p className="font-medium text-gray-700 mb-2">PayID Option:</p>
              <p className="text-gray-600 mb-6">PayID: 0428 408 367 <CopyButton text="0428408367" label="PayID" /></p>
              
              
              <p className="font-medium text-gray-700 mb-2">Account Details:</p>
              <p className="text-gray-600">BSB: 923 100<CopyButton text="923100" label="BSB" /></p>
              <p className="text-gray-600">Account number: 6692 2305<CopyButton text="66922305" label="Account Number" /></p>
              <p className="text-gray-600">Account name: Jeremy Bell<CopyButton text="Jeremy Bell" label="Account Name" /></p>
            </div>
          </div>
        </div>

        {/* Credit Card Option */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex items-center justify-center mb-6">
            <CreditCard className="w-8 h-8 text-pink-400 mr-4" />
            <h3 className="text-2xl font-serif text-gray-800">Credit/Debit Card</h3>
          </div>
          
          <div className="space-y-4 text-center">
            <p className="text-gray-600">
              If you want to give us some money and using a credit card or debit card is easier for you, 
              we have set up an account at My Wishing Well where you can contribute to our wishing well.
            </p>
            
            <div className="my-6 pt-2">
              <a 
                href="https://app.mywishingwell.com.au/event/102620/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Go to MyWishingWell.com.au
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WishingWellPage;