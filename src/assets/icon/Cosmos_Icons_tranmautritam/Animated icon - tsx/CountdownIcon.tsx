export default function CountdownIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes cdnTick { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes cdnPulse { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.6; transform: scale(1.03); } }
        @keyframes cdnGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes cdnS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes cdnS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes cdnS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cdn-hand { animation: cdnTick 6s linear infinite; transform-origin: 10px 10px; }
        .cdn-ring { animation: cdnPulse 2s ease-in-out infinite; transform-origin: 10px 10px; }
        .cdn-glow { animation: cdnGlow 1.5s ease-in-out infinite; }
        .cdn-s1 { animation: cdnS1 3.2s ease-in-out infinite 0.3s; }
        .cdn-s2 { animation: cdnS2 2.8s ease-in-out infinite 1s; }
        .cdn-s3 { animation: cdnS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cdn-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cdn-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cdn-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Progress arc */}
      <circle className="cdn-ring" cx="10" cy="10" r="8.5" stroke="#f97316" strokeWidth="0.6" fill="none" opacity="0.2" strokeDasharray="13 40" />
      {/* Outer ring */}
      <circle cx="10" cy="10" r="7.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="10" r="7.5" fill="#c7d2fe" opacity="0.08" />
      {/* Tick marks */}
      <line x1="10" y1="3" x2="10" y2="4.2" stroke="#6366f1" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="10" y1="15.8" x2="10" y2="17" stroke="#6366f1" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="3" y1="10" x2="4.2" y2="10" stroke="#6366f1" strokeWidth="0.8" strokeLinecap="round" />
      <line x1="15.8" y1="10" x2="17" y2="10" stroke="#6366f1" strokeWidth="0.8" strokeLinecap="round" />
      {/* Minor ticks */}
      <line x1="5" y1="4.5" x2="5.6" y2="5.3" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
      <line x1="15" y1="4.5" x2="14.4" y2="5.3" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
      <line x1="5" y1="15.5" x2="5.6" y2="14.7" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
      <line x1="15" y1="15.5" x2="14.4" y2="14.7" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.4" />
      {/* Rotating hand */}
      <g className="cdn-hand">
        <line x1="10" y1="10" x2="10" y2="4.5" stroke="#f97316" strokeWidth="0.9" strokeLinecap="round" />
      </g>
      {/* Center dot */}
      <circle className="cdn-glow" cx="10" cy="10" r="0.7" fill="#f97316" opacity="0.7" />
      <circle cx="10" cy="10" r="0.3" fill="#facc15" opacity="0.6" />
      {/* Inner ring */}
      <circle cx="10" cy="10" r="5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.25" />
      {/* Highlight */}
      <path d="M7 4.5C8 3.5 9 3 10 2.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
