"use client";

import React from "react";

interface CornerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function CornerButton({ children, className = "", ...props }: CornerButtonProps) {
  return (
    <button
      className={`relative group px-10 py-5 overflow-hidden ${className}`}
      {...props}
    >
      {/* 
        IVS-Style Corner Borders (四隅の装飾UI): 1px の #7099C7 (primary)
        ホバーで少しだけ外側に開くアニメーションを追加し、インタラクティブ性を高める
      */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1 group-hover:-translate-y-1" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:-translate-y-1" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-x-1 group-hover:translate-y-1" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 group-hover:translate-y-1" />

      {/* 淡い光 (Glow) エフェクト: #F7B454 (accent) */}
      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/15 blur-xl transition-all duration-700 ease-out rounded-sm opacity-0 group-hover:opacity-100" />
      
      {/* ホバー時の背景色の変化（うっすらとした白を敷いて文字の可読性を上げる） */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-500" />

      {/* テキストコンテンツ */}
      <span className="relative z-10 font-medium tracking-[0.2em] text-text-primary text-lg transition-transform duration-500 inline-block group-hover:scale-105">
        {children}
      </span>
    </button>
  );
}
