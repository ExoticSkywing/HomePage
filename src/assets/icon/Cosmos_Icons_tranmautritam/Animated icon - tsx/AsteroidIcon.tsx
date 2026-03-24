export default function AsteroidIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes astSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes astGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes astS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes astS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes astS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .ast-body { animation: astSpin 20s linear infinite; transform-origin: 10px 10px; }
        .ast-glow { animation: astGlow 2.5s ease-in-out infinite; }
        .ast-s1 { animation: astS1 3.2s ease-in-out infinite 0.3s; }
        .ast-s2 { animation: astS2 2.8s ease-in-out infinite 1s; }
        .ast-s3 { animation: astS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="ast-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="ast-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="ast-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="ast-body">
        {/* Irregular asteroid shape */}
        <path d="M10 3L14 4.5L16.5 8L15.5 12L13 15.5L9 16.5L5 15L3 11L3.5 7L6 4Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M10 3L14 4.5L16.5 8L15.5 12L13 15.5L9 16.5L5 15L3 11L3.5 7L6 4Z" fill="#c7d2fe" opacity="0.15" />
        {/* Craters */}
        <circle cx="8" cy="8" r="1.5" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.35" />
        <circle cx="12" cy="11" r="1.2" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="7" cy="13" r="0.8" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.25" />
        {/* Surface texture */}
        <line x1="10" y1="6" x2="12" y2="7" stroke="#a5b4fc" strokeWidth="0.4" strokeLinecap="round" opacity="0.2" />
        <line x1="5" y1="10" x2="7" y2="10" stroke="#a5b4fc" strokeWidth="0.4" strokeLinecap="round" opacity="0.2" />
        {/* Hot spots */}
        <circle className="ast-glow" cx="11" cy="7" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="ast-glow" cx="6" cy="11" r="0.35" fill="#f97316" opacity="0.4" />
        {/* Highlight */}
        <path d="M7 4.5C8 3.8 9 3.3 10 3.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
