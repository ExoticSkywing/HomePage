export default function RingsIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes rngSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes rngPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes rngGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes rngS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes rngS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes rngS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .rng-rings { animation: rngSpin 12s linear infinite; transform-origin: 10px 10px; }
        .rng-body { animation: rngPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .rng-glow { animation: rngGlow 2.5s ease-in-out infinite; }
        .rng-s1 { animation: rngS1 3.2s ease-in-out infinite 0.3s; }
        .rng-s2 { animation: rngS2 2.8s ease-in-out infinite 1s; }
        .rng-s3 { animation: rngS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="rng-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="rng-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="rng-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Ring system - behind planet */}
      <g className="rng-rings">
        <ellipse cx="10" cy="10" rx="9" ry="3" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.5" />
        <ellipse cx="10" cy="10" rx="7" ry="2.3" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" />
        <ellipse cx="10" cy="10" rx="9" ry="3" fill="#c7d2fe" opacity="0.06" />
        {/* Ring particle accents */}
        <circle className="rng-glow" cx="18.5" cy="10.5" r="0.35" fill="#f97316" opacity="0.5" />
        <circle className="rng-glow" cx="1.5" cy="9.5" r="0.35" fill="#facc15" opacity="0.4" />
      </g>
      {/* Planet body */}
      <g className="rng-body">
        <circle cx="10" cy="10" r="4" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="4" fill="#c7d2fe" opacity="0.25" />
        {/* Surface bands */}
        <path d="M6.5 8.5C8 8 12 8 13.5 8.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M6.2 11C8 11.5 12 11.5 13.8 11" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" />
        {/* Highlight */}
        <path d="M7.5 7.5C8 7 9 6.5 10 6.3" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Warm accent */}
        <path className="rng-glow" d="M12.5 7.5C13 8 13.5 9 13.8 10" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
