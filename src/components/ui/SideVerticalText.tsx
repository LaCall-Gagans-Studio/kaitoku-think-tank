import React from "react";

export function SideVerticalText() {
  return (
    <>
      {/* Left side text */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 -z-10 hidden xl:block pointer-events-none">
        <p className="[writing-mode:vertical-rl] rotate-180 text-sm tracking-[0.5em] font-normal text-text-primary/40">
          NEXT GEN AUTONOMY
        </p>
      </div>
      
      {/* Right side text */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 -z-10 hidden xl:block pointer-events-none">
        <p className="[writing-mode:vertical-rl] text-sm tracking-[0.5em] font-normal text-text-primary/40">
          KAITOKU THINK TANK
        </p>
      </div>
    </>
  );
}
