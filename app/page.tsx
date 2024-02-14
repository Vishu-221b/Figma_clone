"use client"
import { LeftSidebar, Live, Navbar, RightSidebar } from "@/components/index";
import { fabric } from "fabric";
import { useEffect, useRef, useState } from "react";
import {
  handleCanvaseMouseMove,
  handleCanvasMouseDown,
  handleCanvasMouseUp,
  handleCanvasObjectModified,
  handleCanvasObjectMoving,
  handleCanvasObjectScaling,
  handleCanvasSelectionCreated,
  handleCanvasZoom,
  handlePathCreated,
  handleResize,
  initializeFabric,
  renderCanvas,
} from "@/lib/canvas";

export default function Page() {

const canvasRef = useRef<HTMLCanvasElement>(null);
const fabricRef = useRef<fabric.Canvas | null>(null);
const isDrawing = useRef(false);
const shapeRef = useRef<fabric.Object | null>(null);
const selectedShapeRef = useRef<string | null>('rectangle');


useEffect(()=>{

  const canvas = initializeFabric({
    canvasRef,
    fabricRef,
  });

  canvas.on("mouse:down", (options) => {
    handleCanvasMouseDown({
      options,
      canvas,
      selectedShapeRef,
      isDrawing,
      shapeRef,
    });
  });


    
    window.addEventListener("resize", () => {
      handleResize({
        canvas: fabricRef.current,
      });
    });


},[[canvasRef]]) // run this effect only once when the component mounts and the canvasRef changes


  return (
    <main className="h-screen overflow-hidden">
      
    <Navbar />

    <section className="flex flex-row border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
   <LeftSidebar/>
     <Live canvasRef={canvasRef} />
   <RightSidebar/>
    </section>
    </main>
   
  );
}