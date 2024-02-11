"use client";
import Image from "next/image";
import { getShapeInfo } from "@/lib/utils";

const LeftSidebar = () => {
  return (
    <section className="text-5xl text-black #20272Fbg-black border min-w-[227px] ">
      <h3 className="border text-white border-white0 px-5 py-4 text-xs uppercase">
        Layers
      </h3>
      <div className="flex flex-col"></div>
    </section>
  );
};

export default LeftSidebar;
