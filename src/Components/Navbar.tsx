import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-full w-64 fixed left-0 top-0 bg-custom-blue text-custom-white flex flex-col px-4 py-4">
      <div className="mb-8">
        <h1 className="text-2xl">Chartbook</h1>
      </div>
      <div className="flex flex-col gap-y-3">
      <Link to="/" className="text-custom-white hover:text-custom-red hover:underline">
          Contact
        </Link>
        <Link to="/chart" className="text-custom-white hover:text-custom-red hover:underline">
          Chart And Maps
        </Link>
     
      </div>
    </div>
  );
};

export default Navbar;
