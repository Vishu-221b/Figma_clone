import LiveCursors from "./cursor/LiveCursors";
import { useMyPresence, useOthers } from "@/liveblocks.config";
import { useCallback, useEffect, useState } from "react";
import { CursorChat } from "./index";
import { CursorMode } from "@/types/type";

const Live = () => {
  const others = useOthers();
  /* useOthers returns the list of other active users */

  const [{ cursor }, updateMyPresence] = useMyPresence() as any;

  const [cursorState, setCursorState] = useState({
    mode: CursorMode.Hidden,
  });

  // Listen to mouse events to change the cursor state
  const handlePointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    // get the cursor position in the canvas
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    // broadcast the cursor position to other users
    updateMyPresence({ cursor: { x, y } });
  }, []);

  // Listen to mouse events to change the cursor state
  const handlePointerLeave = useCallback((event: React.PointerEvent) => {
    setCursorState({
      mode: CursorMode.Hidden,
    });

    // broadcast the cursor position to other users
    updateMyPresence({ cursor: null, message: null });
  }, []);

  // Listen to mouse events to change the cursor state
  const handlePointerDown = useCallback((event: React.PointerEvent) => {
    // get the cursor position in the canvas
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x;
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y;

    // broadcast the cursor position to other users
    updateMyPresence({ cursor: { x, y } });
  }, []);


  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.key === "/") {
        setCursorState({
          mode: CursorMode.Chat,
          previousMessage: null,
          message: "",
        });
      } else if (e.key === "Escape") {
        updateMyPresence({ message: "" });
        setCursorState({ mode: CursorMode.Hidden });
      } else if (e.key === "e") {
        setCursorState({ mode: CursorMode.ReactionSelector });
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
      }
    };

    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [updateMyPresence]);


  return (
    <div
      className="text-5xl text-black bg-white border h-full w-full"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
    >
      {cursor && (
      <CursorChat
      cursor={cursor}
      cursorState={cursorState}
      setCursorState={setCursorState}
      updateMyPresence={updateMyPresence}
      />
      )}

      <LiveCursors others={others} />
    </div>
  );
};

export default Live;
