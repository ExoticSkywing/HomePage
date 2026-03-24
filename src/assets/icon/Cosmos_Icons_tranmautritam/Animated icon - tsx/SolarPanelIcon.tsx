export default function SolarPanelIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes solShine { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes solPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes solS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes solS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes solS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .sol-body { animation: solPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .sol-shine { animation: solShine 2.5s ease-in-out infinite; }
        .sol-s1 { animation: solS1 3.2s ease-in-out infinite 0.3s; }
        .sol-s2 { animation: solS2 2.8s ease-in-out infinite 1s; }
        .sol-s3 { animation: solS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="sol-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="sol-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="sol-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Sun rays */}
      <circle className="sol-shine" cx="16" cy="4" r="1.5" stroke="#facc15" strokeWidth="0.6" fill="none" opacity="0.3" />
      <circle className="sol-shine" cx="16" cy="4" r="0.6" fill="#facc15" opacity="0.5" />
      <g className="sol-body">
        {/* Left panel */}
        <rect x="1.5" y="6" width="7" height="10" rx="0.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="1.5" y="6" width="7" height="10" rx="0.5" fill="#c7d2fe" opacity="0.12" />
        {/* Left panel grid */}
        <line x1="5" y1="6" x2="5" y2="16" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.3" />
        <line x1="1.5" y1="9.5" x2="8.5" y2="9.5" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.3" />
        <line x1="1.5" y1="12.5" x2="8.5" y2="12.5" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.3" />
        {/* Right panel */}
        <rect x="11.5" y="6" width="7" height="10" rx="0.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="11.5" y="6" width="7" height="10" rx="0.5" fill="#c7d2fe" opacity="0.12" />
        {/* Right panel grid */}
        <line x1="15" y1="6" x2="15" y2="16" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.3" />
        <line x1="11.5" y1="9.5" x2="18.5" y2="9.5" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.3" />
        <line x1="11.5" y1="12.5" x2="18.5" y2="12.5" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.3" />
        {/* Center hub */}
        <rect x="8.5" y="9" width="3" height="4" rx="0.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <rect x="8.5" y="9" width="3" height="4" rx="0.5" fill="#c7d2fe" opacity="0.15" />
        <circle className="sol-shine" cx="10" cy="11" r="0.5" fill="#f97316" opacity="0.5" />
        {/* Energy sparkle */}
        <path className="sol-shine" d="M13 6.5L12.5 7.5L13.5 7L13 6.5" stroke="#facc15" strokeWidth="0.4" strokeLinejoin="round" fill="none" opacity="0.4" />
        {/* Highlight */}
        <path d="M2.5 7C3 6.5 4 6.2 5 6.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
