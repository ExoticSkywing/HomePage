export default function OrbitIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes orbSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes orbPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes orbGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes orbS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes orbS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes orbS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .orb-ring1 { animation: orbSpin 6s linear infinite; transform-origin: 10px 10px; }
        .orb-ring2 { animation: orbSpin 9s linear infinite reverse; transform-origin: 10px 10px; }
        .orb-core { animation: orbPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .orb-glow { animation: orbGlow 2.5s ease-in-out infinite; }
        .orb-s1 { animation: orbS1 3.2s ease-in-out infinite 0.3s; }
        .orb-s2 { animation: orbS2 2.8s ease-in-out infinite 1s; }
        .orb-s3 { animation: orbS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="orb-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="orb-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="orb-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Orbit ring 1 - tilted */}
      <g className="orb-ring1">
        <ellipse cx="10" cy="10" rx="8.5" ry="3.5" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.5" transform="rotate(-20 10 10)" />
        {/* Orbiting body */}
        <circle cx="18" cy="8.5" r="1" stroke="#6366f1" strokeWidth="1" fill="none" transform="rotate(-20 10 10)" />
        <circle cx="18" cy="8.5" r="1" fill="#c7d2fe" opacity="0.3" transform="rotate(-20 10 10)" />
        <circle className="orb-glow" cx="18" cy="8.5" r="0.4" fill="#f97316" opacity="0.6" transform="rotate(-20 10 10)" />
      </g>
      {/* Orbit ring 2 - tilted opposite */}
      <g className="orb-ring2">
        <ellipse cx="10" cy="10" rx="7" ry="3" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.35" transform="rotate(40 10 10)" />
        {/* Orbiting dot */}
        <circle cx="17" cy="10" r="0.6" fill="#a5b4fc" opacity="0.6" transform="rotate(40 10 10)" />
      </g>
      {/* Central body */}
      <g className="orb-core">
        <circle cx="10" cy="10" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="3" fill="#c7d2fe" opacity="0.25" />
        <circle cx="10" cy="10" r="1.3" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle className="orb-glow" cx="10" cy="10" r="0.5" fill="#f97316" opacity="0.6" />
        {/* Highlight */}
        <path d="M8.5 8C9 7.5 9.5 7.3 10.2 7.4" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Warm rim */}
        <path className="orb-glow" d="M12.5 8.5C13 9 13 9.8 12.8 10.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
