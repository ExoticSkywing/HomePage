export default function SpaceStationIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes sstSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes sstPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes sstGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes sstS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes sstS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes sstS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .sst-ring { animation: sstSpin 12s linear infinite; transform-origin: 10px 10px; }
        .sst-body { animation: sstPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .sst-glow { animation: sstGlow 2.5s ease-in-out infinite; }
        .sst-s1 { animation: sstS1 3.2s ease-in-out infinite 0.3s; }
        .sst-s2 { animation: sstS2 2.8s ease-in-out infinite 1s; }
        .sst-s3 { animation: sstS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="sst-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="sst-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="sst-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Rotating ring */}
      <g className="sst-ring">
        <ellipse cx="10" cy="10" rx="8.5" ry="3" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.35" transform="rotate(-15 10 10)" />
      </g>
      <g className="sst-body">
        {/* Central module */}
        <rect x="7.5" y="7.5" width="5" height="5" rx="1" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="7.5" y="7.5" width="5" height="5" rx="1" fill="#c7d2fe" opacity="0.2" />
        {/* Solar panel left */}
        <rect x="1.5" y="8.5" width="5" height="3" rx="0.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <line x1="2.8" y1="8.5" x2="2.8" y2="11.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.4" />
        <line x1="4.2" y1="8.5" x2="4.2" y2="11.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.4" />
        <line x1="5.5" y1="8.5" x2="5.5" y2="11.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.4" />
        <rect x="1.5" y="8.5" width="5" height="3" rx="0.5" fill="#c7d2fe" opacity="0.1" />
        {/* Solar panel right */}
        <rect x="13.5" y="8.5" width="5" height="3" rx="0.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <line x1="14.5" y1="8.5" x2="14.5" y2="11.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.4" />
        <line x1="15.8" y1="8.5" x2="15.8" y2="11.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.4" />
        <line x1="17.2" y1="8.5" x2="17.2" y2="11.5" stroke="#a5b4fc" strokeWidth="0.4" opacity="0.4" />
        <rect x="13.5" y="8.5" width="5" height="3" rx="0.5" fill="#c7d2fe" opacity="0.1" />
        {/* Connection arms */}
        <line x1="6.5" y1="10" x2="7.5" y2="10" stroke="#6366f1" strokeWidth="0.8" />
        <line x1="12.5" y1="10" x2="13.5" y2="10" stroke="#6366f1" strokeWidth="0.8" />
        {/* Core light */}
        <circle className="sst-glow" cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.6" />
        {/* Top antenna */}
        <line x1="10" y1="7.5" x2="10" y2="5.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <circle className="sst-glow" cx="10" cy="5.5" r="0.35" fill="#f97316" opacity="0.5" />
        {/* Highlight */}
        <path d="M8 8C8.5 7.7 9 7.6 9.5 7.6" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
