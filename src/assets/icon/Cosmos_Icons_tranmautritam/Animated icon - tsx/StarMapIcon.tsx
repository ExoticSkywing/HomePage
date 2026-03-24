export default function StarMapIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes smpTwinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.9; } }
        @keyframes smpPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes smpS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes smpS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes smpS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .smp-body { animation: smpPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .smp-twinkle { animation: smpTwinkle 2.5s ease-in-out infinite; }
        .smp-twinkle2 { animation: smpTwinkle 2.5s ease-in-out infinite 0.8s; }
        .smp-twinkle3 { animation: smpTwinkle 2.5s ease-in-out infinite 1.6s; }
        .smp-s1 { animation: smpS1 3.2s ease-in-out infinite 0.3s; }
        .smp-s2 { animation: smpS2 2.8s ease-in-out infinite 1s; }
        .smp-s3 { animation: smpS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="smp-s1" cx="1.5" cy="2.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="smp-s2" cx="18.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="smp-s3" cx="2.5" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="smp-body">
        {/* Map border */}
        <rect x="2" y="2.5" width="16" height="15" rx="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="2" y="2.5" width="16" height="15" rx="1.5" fill="#c7d2fe" opacity="0.08" />
        {/* Grid lines */}
        <line x1="2" y1="8" x2="18" y2="8" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.15" />
        <line x1="2" y1="13" x2="18" y2="13" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.15" />
        <line x1="7" y1="2.5" x2="7" y2="17.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.15" />
        <line x1="13" y1="2.5" x2="13" y2="17.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.15" />
        {/* Constellation lines */}
        <path d="M5 5.5L8 7L11 5L14 7L16 5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.35" />
        <path d="M4 11L7 10L10 12L14 10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.3" />
        {/* Stars on map */}
        <circle className="smp-twinkle" cx="5" cy="5.5" r="0.6" fill="#f97316" opacity="0.6" />
        <circle className="smp-twinkle2" cx="8" cy="7" r="0.5" fill="#f97316" opacity="0.5" />
        <circle className="smp-twinkle3" cx="11" cy="5" r="0.7" fill="#f97316" opacity="0.6" />
        <circle className="smp-twinkle" cx="14" cy="7" r="0.5" fill="#facc15" opacity="0.5" />
        <circle className="smp-twinkle2" cx="16" cy="5" r="0.4" fill="#a5b4fc" opacity="0.4" />
        <circle className="smp-twinkle3" cx="4" cy="11" r="0.5" fill="#a5b4fc" opacity="0.4" />
        <circle className="smp-twinkle" cx="7" cy="10" r="0.5" fill="#f97316" opacity="0.5" />
        <circle className="smp-twinkle2" cx="10" cy="12" r="0.6" fill="#facc15" opacity="0.5" />
        <circle className="smp-twinkle3" cx="14" cy="10" r="0.5" fill="#a5b4fc" opacity="0.4" />
        {/* Minor stars */}
        <circle cx="6" cy="15" r="0.3" fill="#a5b4fc" opacity="0.25" />
        <circle cx="11" cy="15.5" r="0.3" fill="#a5b4fc" opacity="0.25" />
        <circle cx="15" cy="14" r="0.3" fill="#a5b4fc" opacity="0.2" />
        {/* Highlight */}
        <path d="M3.5 4C4 3.3 4.5 3 5 2.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
