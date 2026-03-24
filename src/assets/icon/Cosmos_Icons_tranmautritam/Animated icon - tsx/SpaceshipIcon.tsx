export default function SpaceshipIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes shpFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0.3px, -0.5px); } }
        @keyframes shpThrust { 0%, 100% { opacity: 0.4; transform: scaleY(1); } 50% { opacity: 0.8; transform: scaleY(1.15); } }
        @keyframes shpGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes shpS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes shpS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes shpS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .shp-body { animation: shpFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .shp-thrust { animation: shpThrust 1.5s ease-in-out infinite; transform-origin: 10px 15px; }
        .shp-glow { animation: shpGlow 2.5s ease-in-out infinite; }
        .shp-s1 { animation: shpS1 3.2s ease-in-out infinite 0.3s; }
        .shp-s2 { animation: shpS2 2.8s ease-in-out infinite 1s; }
        .shp-s3 { animation: shpS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="shp-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="shp-s2" cx="18" cy="5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="shp-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="shp-body">
        {/* Main hull */}
        <path d="M10 2C10 2 6 6 6 11C6 13 7 14.5 10 14.5C13 14.5 14 13 14 11C14 6 10 2 10 2Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M10 2C10 2 6 6 6 11C6 13 7 14.5 10 14.5C13 14.5 14 13 14 11C14 6 10 2 10 2Z" fill="#c7d2fe" opacity="0.15" />
        {/* Wings */}
        <path d="M6 11L3 14.5L6 13.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M14 11L17 14.5L14 13.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Cockpit window */}
        <ellipse cx="10" cy="7.5" rx="1.5" ry="2" stroke="#a5b4fc" strokeWidth="0.8" fill="none" />
        <ellipse cx="10" cy="7.5" rx="1.5" ry="2" fill="#c7d2fe" opacity="0.25" />
        <circle className="shp-glow" cx="10" cy="7" r="0.4" fill="#f97316" opacity="0.5" />
        {/* Thrust */}
        <g className="shp-thrust">
          <path d="M8.5 14.5L8 17.5L10 16L12 17.5L11.5 14.5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
          <circle cx="10" cy="15.5" r="0.4" fill="#facc15" opacity="0.5" />
        </g>
        {/* Hull highlight */}
        <path d="M8.5 4C9 3.5 9.5 3.2 10 3" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
