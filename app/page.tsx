"use client"
import { LeftSidebar, Live, Navbar, RightSidebar } from "@/components/index";


/* import { useMutation, useRedo, useUndo, useStorage} from "@/liveblocks.config"; */
export default function Page() {


/* const undo = useUndo();
const redo = useRedo();

const canvasObjects = useStorage((root) => root.canvasObjects); */


  return (
    <main className="h-screen overflow-hidden">
      
    {/* <Navbar /> */}

    <section className="flex flex-row border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-w-[227px] sticky left-0 h-full max-sm:hidden select-none overflow-y-auto pb-20">
  <LeftSidebar/>
     <Live />
<RightSidebar/>
    </section>
    </main>
   
  );
}