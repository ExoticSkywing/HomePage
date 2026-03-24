export default function GravityIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes grvWarp { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.06); } }
        @keyframes grvDot { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(0.5px); } }
        @keyframes grvGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes grvS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes grvS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes grvS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .grv-warp { animation: grvWarp 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .grv-dot { animation: grvDot 2s ease-in-out infinite; }
        .grv-glow { animation: grvGlow 2.5s ease-in-out infinite; }
        .grv-s1 { animation: grvS1 3.2s ease-in-out infinite 0.3s; }
        .grv-s2 { animation: grvS2 2.8s ease-in-out infinite 1s; }
        .grv-s3 { animation: grvS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="grv-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="grv-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="grv-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="grv-warp">
        {/* Grid lines - horizontal warped */}
        <path d="M2 5H18" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
        <path d="M2 8C6 8 8 9.5 10 11C12 9.5 14 8 18 8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" />
        <path d="M2 11C5 11 7.5 13 10 15C12.5 13 15 11 18 11" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
        <path d="M2 14C5.5 14 8 15.5 10 17C12 15.5 14.5 14 18 14" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.25" />
        {/* Vertical grid lines */}
        <path d="M5 3V7C5 9 6 11 6 13V18" stroke="#a5b4fc" strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M10 3V7C10 9.5 10 12 10 15" stroke="#a5b4fc" strokeWidth="0.4" fill="none" opacity="0.2" />
        <path d="M15 3V7C15 9 14 11 14 13V18" stroke="#a5b4fc" strokeWidth="0.4" fill="none" opacity="0.2" />
        {/* Central mass */}
        <circle cx="10" cy="10" r="2.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="2.5" fill="#c7d2fe" opacity="0.2" />
        <circle className="grv-glow" cx="10" cy="10" r="1" fill="#f97316" opacity="0.6" />
        <circle cx="10" cy="10" r="0.4" fill="#facc15" opacity="0.5" />
        {/* Falling object */}
        <g className="grv-dot">
          <circle cx="14.5" cy="5.5" r="0.6" stroke="#6366f1" strokeWidth="0.8" fill="none" />
          <circle cx="14.5" cy="5.5" r="0.25" fill="#f97316" opacity="0.5" />
          {/* Motion trail */}
          <line x1="15.5" y1="4" x2="15" y2="4.8" stroke="#a5b4fc" strokeWidth="0.4" strokeLinecap="round" opacity="0.3" />
        </g>
        {/* Highlight */}
        <path d="M8.5 8.5C9 8 9.5 7.8 10 7.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
