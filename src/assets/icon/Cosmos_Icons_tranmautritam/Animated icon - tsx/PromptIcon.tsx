export default function PromptIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes prmPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes prmCursor { 0%, 49% { opacity: 0.8; } 50%, 100% { opacity: 0; } }
        @keyframes prmGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes prmS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes prmS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes prmS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .prm-body { animation: prmPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .prm-cursor { animation: prmCursor 1s step-end infinite; }
        .prm-glow { animation: prmGlow 2.5s ease-in-out infinite; }
        .prm-s1 { animation: prmS1 3.2s ease-in-out infinite 0.3s; }
        .prm-s2 { animation: prmS2 2.8s ease-in-out infinite 1s; }
        .prm-s3 { animation: prmS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="prm-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="prm-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="prm-s3" cx="3" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="prm-body">
        {/* Chat bubble */}
        <path d="M3 4C3 3.17 3.67 2.5 4.5 2.5H15.5C16.33 2.5 17 3.17 17 4V12C17 12.83 16.33 13.5 15.5 13.5H8L4.5 16.5V13.5H4.5C3.67 13.5 3 12.83 3 12V4Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M3 4C3 3.17 3.67 2.5 4.5 2.5H15.5C16.33 2.5 17 3.17 17 4V12C17 12.83 16.33 13.5 15.5 13.5H8L4.5 16.5V13.5H4.5C3.67 13.5 3 12.83 3 12V4Z" fill="#c7d2fe" opacity="0.15" />
        {/* Prompt chevron */}
        <path d="M5.5 7L7.5 8.5L5.5 10" stroke="#6366f1" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Text line */}
        <line x1="9" y1="8.5" x2="13" y2="8.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        {/* Cursor */}
        <line className="prm-cursor" x1="14" y1="7.5" x2="14" y2="9.5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" />
        {/* Sparkle dots - AI indicator */}
        <circle className="prm-glow" cx="15" cy="5" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="prm-glow" cx="13.5" cy="4" r="0.3" fill="#facc15" opacity="0.4" />
        <circle className="prm-glow" cx="15.5" cy="3.5" r="0.25" fill="#f97316" opacity="0.4" />
        {/* Highlight */}
        <path d="M4.5 3.5C5 3 6 2.8 7 2.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" />
      </g>
    </svg>
  );
}
