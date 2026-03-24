export default function SolarFlareIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes sflPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        @keyframes sflFlare { 0%, 100% { opacity: 0.4; transform: scaleY(1); } 50% { opacity: 0.8; transform: scaleY(1.15); } }
        @keyframes sflGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes sflS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes sflS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes sflS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .sfl-body { animation: sflPulse 3s ease-in-out infinite; transform-origin: 10px 12px; }
        .sfl-flare { animation: sflFlare 2s ease-in-out infinite; transform-origin: 13px 8px; }
        .sfl-glow { animation: sflGlow 2.5s ease-in-out infinite; }
        .sfl-s1 { animation: sflS1 3.2s ease-in-out infinite 0.3s; }
        .sfl-s2 { animation: sflS2 2.8s ease-in-out infinite 1s; }
        .sfl-s3 { animation: sflS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="sfl-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="sfl-s2" cx="18" cy="5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="sfl-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Flare eruption */}
      <g className="sfl-flare">
        <path d="M12 9C13 6 15 3 16.5 2C17 3 16.5 6 15 8.5" stroke="#f97316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
        <path d="M12.5 8C13.5 5.5 14.5 4 15.5 3.5" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.5" />
        <circle className="sfl-glow" cx="16.5" cy="2" r="0.5" fill="#facc15" opacity="0.6" />
      </g>
      <g className="sfl-body">
        {/* Sun body */}
        <circle cx="10" cy="12" r="6.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="12" r="6.5" fill="#c7d2fe" opacity="0.2" />
        {/* Inner detail */}
        <circle cx="10" cy="12" r="3.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.35" />
        <circle cx="10" cy="12" r="3.5" fill="#f97316" opacity="0.08" />
        {/* Core */}
        <circle cx="10" cy="12" r="1.5" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle className="sfl-glow" cx="10" cy="12" r="0.6" fill="#f97316" opacity="0.6" />
        {/* Surface spots */}
        <circle cx="8" cy="10.5" r="0.6" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="12" cy="13" r="0.5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.25" />
        {/* Highlight */}
        <path d="M6.5 8.5C7.5 7 8.5 6 10 5.8" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Warm edge accent */}
        <path className="sfl-glow" d="M14 7.5C15 8.5 16 10 16.2 12" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
