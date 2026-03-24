export default function NebulaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes nebPulse { 0%, 100% { transform: scale(1); opacity: 0.25; } 50% { transform: scale(1.04); opacity: 0.4; } }
        @keyframes nebGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes nebDrift { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0.3px, -0.3px); } }
        @keyframes nebS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes nebS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes nebS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .neb-cloud1 { animation: nebPulse 4s ease-in-out infinite; transform-origin: 8px 9px; }
        .neb-cloud2 { animation: nebPulse 5s ease-in-out infinite 1s; transform-origin: 13px 11px; }
        .neb-body { animation: nebDrift 6s ease-in-out infinite; transform-origin: 10px 10px; }
        .neb-glow { animation: nebGlow 2.5s ease-in-out infinite; }
        .neb-s1 { animation: nebS1 3.2s ease-in-out infinite 0.3s; }
        .neb-s2 { animation: nebS2 2.8s ease-in-out infinite 1s; }
        .neb-s3 { animation: nebS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="neb-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="neb-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="neb-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="neb-body">
        {/* Outer cloud */}
        <ellipse className="neb-cloud1" cx="8" cy="9" rx="6" ry="4.5" fill="#a5b4fc" opacity="0.12" />
        <ellipse className="neb-cloud2" cx="13" cy="11" rx="5" ry="4" fill="#6366f1" opacity="0.1" />
        {/* Main nebula outline */}
        <path d="M4 10C4 6.5 6.5 4 10 4C13 4 14.5 5.5 15.5 7C16.5 8.5 17 10 16 12C15 14 13.5 15.5 10.5 16C7.5 16.5 5 14 4 10Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M4 10C4 6.5 6.5 4 10 4C13 4 14.5 5.5 15.5 7C16.5 8.5 17 10 16 12C15 14 13.5 15.5 10.5 16C7.5 16.5 5 14 4 10Z" fill="#c7d2fe" opacity="0.1" />
        {/* Inner structure */}
        <path d="M7 9C7.5 7 9 6 11 6.5C12.5 7 13.5 8.5 13 10.5C12.5 12.5 10.5 13.5 8.5 12.5C7 11.5 6.5 10.5 7 9Z" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.5" />
        {/* Embedded stars */}
        <circle className="neb-glow" cx="10" cy="8.5" r="0.7" fill="#f97316" opacity="0.6" />
        <circle className="neb-glow" cx="7.5" cy="10.5" r="0.45" fill="#facc15" opacity="0.5" />
        <circle className="neb-glow" cx="13" cy="10" r="0.5" fill="#f97316" opacity="0.5" />
        <circle cx="5.5" cy="7" r="0.3" fill="#a5b4fc" opacity="0.4" />
        <circle cx="14.5" cy="13" r="0.3" fill="#a5b4fc" opacity="0.3" />
        {/* Warm rim */}
        <path d="M14 6C15 7 15.5 8 15.8 9" stroke="#f97316" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" />
        {/* Highlight */}
        <path d="M6 7C7 5.5 8.5 4.8 10 4.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
