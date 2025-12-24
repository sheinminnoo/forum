import React from "react";
import LeftSideBar from "@/components/LeftSideBar";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";

async function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <div className="w-3/5"> {children}</div>
        <div className="w-1/5">
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default layout;
