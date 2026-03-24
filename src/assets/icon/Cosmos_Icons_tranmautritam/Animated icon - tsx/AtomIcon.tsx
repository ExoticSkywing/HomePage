export default function AtomIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes atmOrb1 { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes atmOrb2 { 0% { transform: rotate(0deg); } 100% { transform: rotate(-360deg); } }
        @keyframes atmCore { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        @keyframes atmGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes atmS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes atmS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes atmS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .atm-orb1 { animation: atmOrb1 5s linear infinite; transform-origin: 10px 10px; }
        .atm-orb2 { animation: atmOrb2 7s linear infinite; transform-origin: 10px 10px; }
        .atm-core { animation: atmCore 2s ease-in-out infinite; transform-origin: 10px 10px; }
        .atm-glow { animation: atmGlow 2.5s ease-in-out infinite; }
        .atm-s1 { animation: atmS1 3.2s ease-in-out infinite 0.3s; }
        .atm-s2 { animation: atmS2 2.8s ease-in-out infinite 1s; }
        .atm-s3 { animation: atmS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="atm-s1" cx="2" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="atm-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="atm-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      {/* Orbit 1 - tilted ellipse */}
      <g className="atm-orb1">
        <ellipse cx="10" cy="10" rx="8.5" ry="3.5" stroke="#6366f1" strokeWidth="1.2" fill="none" transform="rotate(-30 10 10)" />
        {/* Electron */}
        <circle cx="18" cy="8" r="1" stroke="#6366f1" strokeWidth="0.8" fill="none" transform="rotate(-30 10 10)" />
        <circle cx="18" cy="8" r="1" fill="#c7d2fe" opacity="0.3" transform="rotate(-30 10 10)" />
        <circle className="atm-glow" cx="18" cy="8" r="0.4" fill="#f97316" opacity="0.6" transform="rotate(-30 10 10)" />
      </g>

      {/* Orbit 2 - tilted opposite */}
      <g className="atm-orb2">
        <ellipse cx="10" cy="10" rx="8.5" ry="3.5" stroke="#a5b4fc" strokeWidth="0.9" fill="none" opacity="0.6" transform="rotate(30 10 10)" />
        {/* Electron */}
        <circle cx="2" cy="12" r="0.8" fill="#a5b4fc" opacity="0.5" transform="rotate(30 10 10)" />
      </g>

      {/* Orbit 3 - horizontal */}
      <ellipse cx="10" cy="10" rx="8.5" ry="3.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.35" transform="rotate(90 10 10)" />

      {/* Nucleus */}
      <g className="atm-core">
        <circle cx="10" cy="10" r="2.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="2.5" fill="#c7d2fe" opacity="0.3" />
        <circle cx="10" cy="10" r="1.2" fill="#f97316" opacity="0.15" />
        <circle cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.6" />
        {/* Highlight */}
        <path d="M8.5 8.5C9 8 9.5 7.8 10 7.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
