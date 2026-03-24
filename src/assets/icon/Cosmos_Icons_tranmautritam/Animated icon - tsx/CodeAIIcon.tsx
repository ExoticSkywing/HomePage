export default function CodeAIIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes caiPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes caiCursor { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes caiSparkle { 0%, 100% { opacity: 0.3; transform: scale(0.8) rotate(0deg); } 50% { opacity: 1; transform: scale(1.1) rotate(15deg); } }
        @keyframes caiGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes caiS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes caiS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes caiS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cai-group { animation: caiPulse 3s ease-in-out infinite; transform-origin: 10px 11px; }
        .cai-cursor { animation: caiCursor 1s step-end infinite; }
        .cai-sparkle { animation: caiSparkle 2.5s ease-in-out infinite; transform-origin: 16px 4px; }
        .cai-glow { animation: caiGlow 2.5s ease-in-out infinite; }
        .cai-s1 { animation: caiS1 3.2s ease-in-out infinite 0.3s; }
        .cai-s2 { animation: caiS2 2.8s ease-in-out infinite 1s; }
        .cai-s3 { animation: caiS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cai-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cai-s2" cx="18" cy="14" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cai-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="cai-group">
        {/* Left bracket < */}
        <polyline points="7,5 3,10.5 7,16" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Right bracket > */}
        <polyline points="13,5 17,10.5 13,16" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Slash / */}
        <line x1="11.5" y1="5" x2="8.5" y2="16" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round" />
        {/* Code lines hint */}
        <line className="cai-glow" x1="5" y1="10.5" x2="8" y2="10.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <line className="cai-glow" x1="12" y1="10.5" x2="15" y2="10.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        {/* Cursor blink */}
        <line className="cai-cursor" x1="10" y1="8" x2="10" y2="13" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.7" />
      </g>
      {/* AI sparkle */}
      <g className="cai-sparkle">
        <path d="M16 2L16.4 3.2L17.6 3.6L16.4 4L16 5.2L15.6 4L14.4 3.6L15.6 3.2Z" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M16 2L16.4 3.2L17.6 3.6L16.4 4L16 5.2L15.6 4L14.4 3.6L15.6 3.2Z" fill="#facc15" opacity="0.3" />
      </g>
    </svg>
  );
}
