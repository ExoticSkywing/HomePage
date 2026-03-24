export default function CosmosIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes cosExpand { 0%, 100% { transform: scale(1); opacity: 0.2; } 50% { transform: scale(1.06); opacity: 0.35; } }
        @keyframes cosSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes cosGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes cosS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes cosS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes cosS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cos-outer { animation: cosExpand 4s ease-in-out infinite; transform-origin: 10px 10px; }
        .cos-spiral { animation: cosSpin 15s linear infinite; transform-origin: 10px 10px; }
        .cos-glow { animation: cosGlow 2.5s ease-in-out infinite; }
        .cos-s1 { animation: cosS1 3.2s ease-in-out infinite 0.3s; }
        .cos-s2 { animation: cosS2 2.8s ease-in-out infinite 1s; }
        .cos-s3 { animation: cosS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cos-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cos-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cos-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Expanding universe ring */}
      <circle className="cos-outer" cx="10" cy="10" r="9" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.15" strokeDasharray="3 4" />
      <g className="cos-spiral">
        {/* Spiral arm 1 */}
        <path d="M10 10C10 8 11 6.5 13 6C15 5.5 16.5 7 16 9" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* Spiral arm 2 */}
        <path d="M10 10C10 12 9 13.5 7 14C5 14.5 3.5 13 4 11" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* Spiral arm 3 */}
        <path d="M10 10C8 10 6.5 9 6 7C5.5 5 7 3.5 9 4" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Spiral arm 4 */}
        <path d="M10 10C12 10 13.5 11 14 13C14.5 15 13 16.5 11 16" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Arm tips */}
        <circle className="cos-glow" cx="16" cy="9" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="cos-glow" cx="4" cy="11" r="0.4" fill="#f97316" opacity="0.5" />
        <circle cx="9" cy="4" r="0.3" fill="#facc15" opacity="0.4" />
        <circle cx="11" cy="16" r="0.3" fill="#facc15" opacity="0.4" />
      </g>
      {/* Core */}
      <circle cx="10" cy="10" r="2" stroke="#6366f1" strokeWidth="1" fill="none" />
      <circle cx="10" cy="10" r="2" fill="#c7d2fe" opacity="0.2" />
      <circle className="cos-glow" cx="10" cy="10" r="0.7" fill="#f97316" opacity="0.6" />
      {/* Highlight */}
      <path d="M8.8 8.5C9 8.2 9.5 8.1 10 8.1" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
