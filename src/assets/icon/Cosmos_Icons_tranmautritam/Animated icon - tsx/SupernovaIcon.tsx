export default function SupernovaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes snvBurst { 0%, 100% { transform: scale(1); opacity: 0.25; } 50% { transform: scale(1.12); opacity: 0.45; } }
        @keyframes snvCore { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.05); } }
        @keyframes snvGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.9; } }
        @keyframes snvRay { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
        @keyframes snvS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes snvS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes snvS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .snv-burst { animation: snvBurst 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .snv-core { animation: snvCore 2s ease-in-out infinite; transform-origin: 10px 10px; }
        .snv-glow { animation: snvGlow 2s ease-in-out infinite; }
        .snv-ray { animation: snvRay 2.5s ease-in-out infinite; }
        .snv-s1 { animation: snvS1 3.2s ease-in-out infinite 0.3s; }
        .snv-s2 { animation: snvS2 2.8s ease-in-out infinite 1s; }
        .snv-s3 { animation: snvS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="snv-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="snv-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="snv-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Outer shockwave */}
      <circle className="snv-burst" cx="10" cy="10" r="8" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.2" />
      {/* Rays */}
      <g className="snv-ray">
        <line x1="10" y1="2" x2="10" y2="5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="10" y1="15" x2="10" y2="18" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="2" y1="10" x2="5" y2="10" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="15" y1="10" x2="18" y2="10" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <line x1="4.3" y1="4.3" x2="6.5" y2="6.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
        <line x1="13.5" y1="13.5" x2="15.7" y2="15.7" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
        <line x1="15.7" y1="4.3" x2="13.5" y2="6.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
        <line x1="6.5" y1="13.5" x2="4.3" y2="15.7" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      </g>
      <g className="snv-core">
        {/* Outer ring */}
        <circle cx="10" cy="10" r="4.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="4.5" fill="#c7d2fe" opacity="0.15" />
        {/* Inner ring */}
        <circle cx="10" cy="10" r="2.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.5" />
        {/* Core */}
        <circle className="snv-glow" cx="10" cy="10" r="1.2" fill="#f97316" opacity="0.7" />
        <circle cx="10" cy="10" r="0.5" fill="#facc15" opacity="0.6" />
        {/* Highlight */}
        <path d="M7.5 7C8 6.5 9 6 10 6" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
