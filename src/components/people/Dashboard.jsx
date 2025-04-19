import React from "react";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import MainBar from "./MainBar";

const Dashboard = () => {
  return (
    <>
      <div className="w-full fixed">
        <TopNav />
        <div className="w-full flex">
          <div className="w-[20%] h-[100vh] shadow-[6px_0_6px_-1px_rgba(0,0,0,0.2)] pt-5">
            <LeftNav />
          </div>
          <div className="w-full p-5">
            <MainBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
