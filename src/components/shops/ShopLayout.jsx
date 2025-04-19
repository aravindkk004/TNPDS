"use client";
import React, { useState } from "react";
import TopNav from "../centralized/TopNav";
import LeftNav from "../centralized/LeftNav";
import ShopSearch from "./ShopSearch";
import ShopDetails from "./ShopDetails";

const ShopLayout = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <div className="w-full fixed">
        <TopNav />
        <div className="w-full flex">
          <div className="w-[20%] h-[100vh] shadow-[6px_0_6px_-1px_rgba(0,0,0,0.2)] pt-5">
            <LeftNav />
          </div>

          <div className="w-full p-5 relative">
            {/* Shop Search always in background */}
            {!isOpened && (
              <div className="flex items-center justify-center w-full h-[80vh]">
                <ShopSearch onclick={() => setIsOpened(true)} />
              </div>
            )}

            {/* Popup Modal */}
            {isOpened && (
              <div>
                <ShopDetails />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLayout;
