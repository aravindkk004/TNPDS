import React from "react";

const ShopSearch = ({ onclick }) => {
  return (
    <>
      <div className="rounded-md inline-block p-5 shadow-xl">
        <div className="border-black border-b-1 mb-3">
          <h2 className="font-bold text-2xl my-2">Shops</h2>
        </div>
        <div className="flex items-center mb-5">
          <p className="mr-2">Shop Id:</p>
          <input
            type="text"
            className="border-black border-1 rounded-md px-2 py-2"
          />
        </div>
        <div className="flex items-center my-2">
          <p className="mr-2">Shop Nearby:</p>
          <input
            type="text"
            className="border-black border-1 rounded-md px-2 py-2"
          />
        </div>
        <button
          className="bg-blue-700 text-white w-full py-2 rounded-md mt-3 cursor-pointer"
          onClick={onclick}
        >
          Search
        </button>
      </div>
    </>
  );
};

export default ShopSearch;
