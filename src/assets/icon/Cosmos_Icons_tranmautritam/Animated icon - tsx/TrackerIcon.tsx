export default function TrackerIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes trkSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes trkPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes trkGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes trkS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes trkS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes trkS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .trk-body { animation: trkPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .trk-ring { animation: trkSpin 8s linear infinite; transform-origin: 10px 10px; }
        .trk-glow { animation: trkGlow 2s ease-in-out infinite; }
        .trk-s1 { animation: trkS1 3.2s ease-in-out infinite 0.3s; }
        .trk-s2 { animation: trkS2 2.8s ease-in-out infinite 1s; }
        .trk-s3 { animation: trkS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="trk-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="trk-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="trk-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="trk-body">
        {/* Outer circle */}
        <circle cx="10" cy="10" r="7.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="7.5" fill="#c7d2fe" opacity="0.1" />

        {/* Inner circle */}
        <circle cx="10" cy="10" r="4.5" stroke="#a5b4fc" strokeWidth="0.9" fill="none" opacity="0.5" />

        {/* Crosshair lines */}
        <line x1="10" y1="2.5" x2="10" y2="5.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="10" y1="14.5" x2="10" y2="17.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="2.5" y1="10" x2="5.5" y2="10" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14.5" y1="10" x2="17.5" y2="10" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />

        {/* Center target */}
        <circle cx="10" cy="10" r="1.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="1.5" fill="#c7d2fe" opacity="0.3" />
        <circle className="trk-glow" cx="10" cy="10" r="0.5" fill="#f97316" opacity="0.7" />
      </g>

      {/* Rotating tracking indicator */}
      <g className="trk-ring">
        <circle cx="10" cy="3.5" r="0.6" stroke="#f97316" strokeWidth="0.7" fill="none" opacity="0.6" />
        <circle className="trk-glow" cx="10" cy="3.5" r="0.3" fill="#facc15" opacity="0.6" />
      </g>
    </svg>
  );
}
