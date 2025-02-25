import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white text-center py-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} URL Shortener. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
