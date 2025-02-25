import React from "react";

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-start  bg-gray-100 p-10">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Contact Us
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          />
          <textarea
            rows="3"
            placeholder="Message"
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
