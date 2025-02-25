import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-4">
          Welcome to <span className="font-semibold text-blue-500">URL shortENER</span>, the fastest and most reliable URL shortener on the market. 
          Our mission is to make sharing links easier, faster, and more efficient for everyone.
        </p>
        <p className="text-gray-600 mb-4">
          Whether you are a business tracking clicks or an individual sharing links, our tool helps you 
          create short, memorable URLs with real-time analytics.
        </p>
        <p className="text-gray-600 font-medium">
          Shorten in one place!
        </p>
      </div>
    </div>
  );
}
