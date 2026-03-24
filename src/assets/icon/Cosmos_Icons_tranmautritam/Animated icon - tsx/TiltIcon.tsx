export default function TiltIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes tltRock { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
        @keyframes tltGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes tltArc { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
        @keyframes tltS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes tltS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes tltS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .tlt-device { animation: tltRock 2.5s ease-in-out infinite; transform-origin: 10px 10px; }
        .tlt-glow { animation: tltGlow 2.5s ease-in-out infinite; }
        .tlt-arc { animation: tltArc 2.5s ease-in-out infinite; }
        .tlt-s1 { animation: tltS1 3.2s ease-in-out infinite 0.3s; }
        .tlt-s2 { animation: tltS2 2.8s ease-in-out infinite 1s; }
        .tlt-s3 { animation: tltS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="tlt-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="tlt-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="tlt-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Motion arcs */}
      <path className="tlt-arc" d="M3 4C4 2 6 1 8 1" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.3" />
      <path className="tlt-arc" d="M12 1C14 1 16 2 17 4" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.3" />
      <g className="tlt-device">
        {/* Device body */}
        <rect x="5.5" y="3" width="9" height="14" rx="2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="5.5" y="3" width="9" height="14" rx="2" fill="#c7d2fe" opacity="0.2" />
        {/* Screen area */}
        <rect x="7" y="5" width="6" height="9" rx="0.8" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.5" />
        <rect x="7" y="5" width="6" height="9" rx="0.8" fill="#c7d2fe" opacity="0.1" />
        {/* Screen content - gyro indicator */}
        <circle cx="10" cy="9.5" r="2" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" />
        <line x1="10" y1="7.5" x2="10" y2="11.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
        <line x1="8" y1="9.5" x2="12" y2="9.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
        <circle className="tlt-glow" cx="10" cy="9.5" r="0.5" fill="#f97316" opacity="0.6" />
        {/* Home indicator */}
        <line x1="8.5" y1="15.5" x2="11.5" y2="15.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        {/* Warm accents */}
        <circle className="tlt-glow" cx="10" cy="3.5" r="0.3" fill="#f97316" opacity="0.4" />
      </g>
      {/* Motion direction arrows */}
      <path d="M3 10L2 10" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <path d="M2.5 9L2 10L2.5 11" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
      <path d="M17 10L18 10" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <path d="M17.5 9L18 10L17.5 11" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
    </svg>
  );
}
