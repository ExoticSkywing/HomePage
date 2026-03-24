export default function RadarIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes rdrSweep { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes rdrBlip { 0%, 70% { opacity: 0; } 75% { opacity: 0.9; } 100% { opacity: 0; } }
        @keyframes rdrPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.01); } }
        @keyframes rdrS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes rdrS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes rdrS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .rdr-sweep { animation: rdrSweep 3s linear infinite; transform-origin: 10px 10px; }
        .rdr-blip { animation: rdrBlip 3s ease-in-out infinite; }
        .rdr-body { animation: rdrPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .rdr-s1 { animation: rdrS1 3.2s ease-in-out infinite 0.3s; }
        .rdr-s2 { animation: rdrS2 2.8s ease-in-out infinite 1s; }
        .rdr-s3 { animation: rdrS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="rdr-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="rdr-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="rdr-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="rdr-body">
        {/* Outer ring */}
        <circle cx="10" cy="10" r="8" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="8" fill="#c7d2fe" opacity="0.1" />

        {/* Range rings */}
        <circle cx="10" cy="10" r="5.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.35" />
        <circle cx="10" cy="10" r="3" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.3" />

        {/* Crosshair lines */}
        <line x1="10" y1="2" x2="10" y2="18" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.2" />
        <line x1="2" y1="10" x2="18" y2="10" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.2" />

        {/* Sweep beam */}
        <g className="rdr-sweep">
          <line x1="10" y1="10" x2="10" y2="2.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
          {/* Beam trail wedge */}
          <path d="M10 10L8 3L10 2.5" fill="#6366f1" opacity="0.08" />
          <path d="M10 10L9 3.5L10 2.5" fill="#f97316" opacity="0.06" />
        </g>

        {/* Blip targets */}
        <circle className="rdr-blip" cx="13" cy="5.5" r="0.7" fill="#f97316" opacity="0" />
        <circle className="rdr-blip" cx="7" cy="7" r="0.5" fill="#f97316" opacity="0" style={{ animationDelay: "1.5s" }} />

        {/* Center dot */}
        <circle cx="10" cy="10" r="0.8" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle cx="10" cy="10" r="0.4" fill="#f97316" opacity="0.6" />

        {/* Highlight */}
        <path d="M5 5C6 3.5 7.8 2.5 10 2.2" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
