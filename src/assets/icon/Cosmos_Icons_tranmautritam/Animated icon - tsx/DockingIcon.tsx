export default function DockingIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes dckApproach { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(0.5px); } }
        @keyframes dckPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes dckGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes dckS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes dckS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes dckS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .dck-right { animation: dckApproach 3s ease-in-out infinite; transform-origin: center; }
        .dck-pulse { animation: dckPulse 2s ease-in-out infinite; }
        .dck-glow { animation: dckGlow 2.5s ease-in-out infinite; }
        .dck-s1 { animation: dckS1 3.2s ease-in-out infinite 0.3s; }
        .dck-s2 { animation: dckS2 2.8s ease-in-out infinite 1s; }
        .dck-s3 { animation: dckS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="dck-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="dck-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="dck-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Left module (station) */}
      <rect x="1.5" y="7" width="7" height="6" rx="1" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <rect x="1.5" y="7" width="7" height="6" rx="1" fill="#c7d2fe" opacity="0.15" />
      {/* Station solar panels */}
      <rect x="2.5" y="4" width="2" height="2.5" rx="0.3" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.4" />
      <rect x="2.5" y="13.5" width="2" height="2.5" rx="0.3" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.4" />
      {/* Docking port left */}
      <rect x="8" y="8.5" width="1.5" height="3" rx="0.3" stroke="#6366f1" strokeWidth="0.8" fill="none" />
      <circle className="dck-glow" cx="5" cy="10" r="0.5" fill="#f97316" opacity="0.5" />
      {/* Right module (approaching) */}
      <g className="dck-right">
        <rect x="11.5" y="8" width="6.5" height="4" rx="1" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="11.5" y="8" width="6.5" height="4" rx="1" fill="#c7d2fe" opacity="0.15" />
        {/* Docking port right */}
        <rect x="10.5" y="8.5" width="1.5" height="3" rx="0.3" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        {/* Approaching craft details */}
        <circle cx="15" cy="10" r="0.7" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.4" />
        <circle className="dck-glow" cx="15" cy="10" r="0.3" fill="#f97316" opacity="0.5" />
        {/* Thruster nozzle */}
        <circle cx="17.5" cy="8.5" r="0.3" fill="#facc15" opacity="0.4" />
        <circle cx="17.5" cy="11.5" r="0.3" fill="#facc15" opacity="0.4" />
      </g>
      {/* Alignment guide */}
      <line className="dck-pulse" x1="9.5" y1="10" x2="10.5" y2="10" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" strokeDasharray="0.5 0.5" opacity="0.4" />
      {/* Cross-hairs on docking ports */}
      <circle className="dck-pulse" cx="9.5" cy="10" r="1.5" stroke="#a5b4fc" strokeWidth="0.4" fill="none" opacity="0.25" />
      {/* Highlight */}
      <path d="M2.5 7.8C3 7.3 3.5 7.2 4 7.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
