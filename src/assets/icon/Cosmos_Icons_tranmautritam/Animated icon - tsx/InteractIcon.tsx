export default function InteractIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes intFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0.3px, -0.4px); } }
        @keyframes intRing { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.08); } }
        @keyframes intGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes intS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes intS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes intS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .int-body { animation: intFloat 2.5s ease-in-out infinite; transform-origin: center; }
        .int-ring1 { animation: intRing 2s ease-in-out infinite; transform-origin: 13px 5px; }
        .int-ring2 { animation: intRing 2s ease-in-out infinite 0.4s; transform-origin: 13px 5px; }
        .int-glow { animation: intGlow 2.5s ease-in-out infinite; }
        .int-s1 { animation: intS1 3.2s ease-in-out infinite 0.3s; }
        .int-s2 { animation: intS2 2.8s ease-in-out infinite 1s; }
        .int-s3 { animation: intS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="int-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="int-s2" cx="18" cy="15" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="int-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Target selection rings */}
      <circle className="int-ring1" cx="13" cy="5" r="3.5" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.2" />
      <circle className="int-ring2" cx="13" cy="5" r="2" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.2" />
      <g className="int-body">
        {/* Target object */}
        <circle cx="13" cy="5" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="13" cy="5" r="1.5" fill="#c7d2fe" opacity="0.3" />
        <circle className="int-glow" cx="13" cy="5" r="0.5" fill="#f97316" opacity="0.6" />
        {/* Ray beam from cursor to target */}
        <line x1="7" y1="9" x2="12" y2="6" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="1.5 1.5" opacity="0.35" />
        {/* Cursor pointer */}
        <path d="M3 8L7.5 17L9 12.5L13.5 14L3 8Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M3 8L7.5 17L9 12.5L13.5 14L3 8Z" fill="#c7d2fe" opacity="0.2" />
        {/* Cursor inner detail */}
        <line x1="4.5" y1="10" x2="6" y2="13.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        {/* Click indicator */}
        <circle className="int-glow" cx="3" cy="8" r="0.4" fill="#f97316" opacity="0.5" />
        {/* Warm accents */}
        <circle className="int-glow" cx="9" cy="12.5" r="0.35" fill="#facc15" opacity="0.5" />
        {/* Highlight */}
        <path d="M12 3.8C12.3 3.5 12.6 3.5 13 3.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
