export default function GalaxyIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes galSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes galCore { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes galPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes galS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes galS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes galS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .gal-arms { animation: galSpin 12s linear infinite; transform-origin: 10px 10px; }
        .gal-core { animation: galPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .gal-glow { animation: galCore 2.5s ease-in-out infinite; }
        .gal-s1 { animation: galS1 3.2s ease-in-out infinite 0.3s; }
        .gal-s2 { animation: galS2 2.8s ease-in-out infinite 1s; }
        .gal-s3 { animation: galS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="gal-s1" cx="1.5" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="gal-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="gal-s3" cx="3" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Spiral arms */}
      <g className="gal-arms">
        <path d="M10 10C10 10 13 8.5 14.5 6.5C16 4.5 17 3 16 2.5C15 2 13 3 12 5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M10 10C10 10 7 11.5 5.5 13.5C4 15.5 3 17 4 17.5C5 18 7 17 8 15" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M10 10C10 10 8 7.5 6 6.5C4 5.5 2.5 5.5 2.5 6.5C2.5 7.5 4 8.5 6 9" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M10 10C10 10 12 12.5 14 13.5C16 14.5 17.5 14.5 17.5 13.5C17.5 12.5 16 11.5 14 11" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Warm accents on arm tips */}
        <circle className="gal-glow" cx="15.5" cy="4" r="0.5" fill="#f97316" opacity="0.5" />
        <circle className="gal-glow" cx="4.5" cy="16" r="0.5" fill="#f97316" opacity="0.4" />
        <circle className="gal-glow" cx="3.5" cy="6.5" r="0.4" fill="#facc15" opacity="0.4" />
        <circle className="gal-glow" cx="16.5" cy="13.5" r="0.4" fill="#facc15" opacity="0.3" />
      </g>
      {/* Core */}
      <g className="gal-core">
        <circle cx="10" cy="10" r="2.8" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="2.8" fill="#c7d2fe" opacity="0.25" />
        <circle cx="10" cy="10" r="1.3" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="1.3" fill="#6366f1" opacity="0.2" />
        <circle className="gal-glow" cx="10" cy="10" r="0.5" fill="#f97316" opacity="0.6" />
        {/* Highlight */}
        <path d="M8.5 8C9 7.6 9.6 7.4 10.3 7.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
    </svg>
  );
}
