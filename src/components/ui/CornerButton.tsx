"use client";

import React from "react";

export const ENTRY_FORM_URL = "https://forms.gle/uoYvgH9VHR37gSabA";

type CornerButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export function CornerButton({
  children,
  className = "",
  href,
  disabled,
  onClick,
}: CornerButtonProps) {
  const classes = `relative group inline-flex items-center justify-center px-6 py-4 sm:px-10 sm:py-5 overflow-hidden ${className}`;

  const content = (
    <>
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1 group-hover:-translate-y-1" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1 group-hover:translate-y-1" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:translate-y-1" />

      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 blur-xl transition-all duration-700 ease-out rounded-sm opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

      <span className="relative z-10 font-medium tracking-[0.1em] sm:tracking-[0.2em] text-text-primary text-base sm:text-lg transition-transform duration-500 inline-block group-hover:scale-105">
        {children}
      </span>
    </>
  );

  if (href && !disabled) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
}
