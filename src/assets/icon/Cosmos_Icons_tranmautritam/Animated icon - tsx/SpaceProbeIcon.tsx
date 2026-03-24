export default function SpaceProbeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes spbFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0.4px, -0.4px); } }
        @keyframes spbPing { 0%, 100% { opacity: 0.2; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.1); } }
        @keyframes spbGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes spbS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes spbS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes spbS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .spb-body { animation: spbFloat 3s ease-in-out infinite; transform-origin: center; }
        .spb-ping { animation: spbPing 2s ease-in-out infinite; transform-origin: 6px 5px; }
        .spb-glow { animation: spbGlow 2.5s ease-in-out infinite; }
        .spb-s1 { animation: spbS1 3.2s ease-in-out infinite 0.3s; }
        .spb-s2 { animation: spbS2 2.8s ease-in-out infinite 1s; }
        .spb-s3 { animation: spbS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="spb-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="spb-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="spb-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="spb-body">
        {/* Antenna dish */}
        <path d="M3 3C3 3 6 2 8 5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M3 3C3 3 2 6 5 8" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M3.5 4.5C4.5 3.5 6 3 7 4" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Signal waves */}
        <g className="spb-ping">
          <path d="M2.5 2C1.5 1.5 1 1 0.5 0" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.3" />
          <path d="M1.5 3C0.8 2.5 0.3 1.5 0 0.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.2" />
        </g>
        {/* Signal dot */}
        <circle className="spb-glow" cx="3" cy="3" r="0.5" fill="#f97316" opacity="0.6" />
        {/* Antenna mast */}
        <line x1="6" y1="6.5" x2="9" y2="9.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        {/* Probe body */}
        <rect x="8" y="9" width="6" height="5" rx="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" transform="rotate(-10 11 11.5)" />
        <rect x="8" y="9" width="6" height="5" rx="1.2" fill="#c7d2fe" opacity="0.25" transform="rotate(-10 11 11.5)" />
        {/* Solar panel left */}
        <rect x="4" y="12" width="3.5" height="1.5" rx="0.4" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.6" transform="rotate(-10 5.75 12.75)" />
        <rect x="4" y="12" width="3.5" height="1.5" rx="0.4" fill="#c7d2fe" opacity="0.15" transform="rotate(-10 5.75 12.75)" />
        {/* Solar panel right */}
        <rect x="14.5" y="10" width="3.5" height="1.5" rx="0.4" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.6" transform="rotate(-10 16.25 10.75)" />
        <rect x="14.5" y="10" width="3.5" height="1.5" rx="0.4" fill="#c7d2fe" opacity="0.15" transform="rotate(-10 16.25 10.75)" />
        {/* Body detail */}
        <circle cx="11" cy="11" r="0.8" stroke="#6366f1" strokeWidth="0.7" fill="none" />
        <circle className="spb-glow" cx="11" cy="11" r="0.35" fill="#f97316" opacity="0.6" />
        {/* Panel connector lines */}
        <line x1="7.5" y1="12.5" x2="8.5" y2="12" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
        <line x1="14" y1="11" x2="14.5" y2="10.8" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
        {/* Warm panel tips */}
        <circle className="spb-glow" cx="4.5" cy="12.5" r="0.3" fill="#facc15" opacity="0.4" />
        <circle className="spb-glow" cx="17.5" cy="10.5" r="0.3" fill="#facc15" opacity="0.4" />
      </g>
    </svg>
  );
}
