export default function SmartLensIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes slPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes slScan { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
        @keyframes slRot { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -20; } }
        @keyframes slGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes slS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes slS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes slS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .sl-body { animation: slPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .sl-scan { animation: slScan 2s ease-in-out infinite; }
        .sl-rot { animation: slRot 4s linear infinite; }
        .sl-glow { animation: slGlow 2.5s ease-in-out infinite; }
        .sl-s1 { animation: slS1 3.2s ease-in-out infinite 0.3s; }
        .sl-s2 { animation: slS2 2.8s ease-in-out infinite 1s; }
        .sl-s3 { animation: slS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="sl-s1" cx="1.5" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="sl-s2" cx="18.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="sl-s3" cx="2.5" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="sl-body">
        {/* Outer lens ring */}
        <circle cx="9" cy="9" r="7" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="9" cy="9" r="7" fill="#c7d2fe" opacity="0.12" />
        {/* Rotating dashed orbit */}
        <circle className="sl-rot" cx="9" cy="9" r="5.5" stroke="#a5b4fc" strokeWidth="0.6" strokeDasharray="3 4" fill="none" opacity="0.4" />
        {/* Inner lens */}
        <circle cx="9" cy="9" r="3.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="9" cy="9" r="3.5" fill="#c7d2fe" opacity="0.2" />
        {/* Iris pattern */}
        <circle cx="9" cy="9" r="1.8" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.6" />
        <circle className="sl-glow" cx="9" cy="9" r="0.7" fill="#f97316" opacity="0.6" />
        {/* Scan lines inside lens */}
        <line className="sl-scan" x1="6" y1="8" x2="12" y2="8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
        <line className="sl-scan" x1="6.5" y1="10" x2="11.5" y2="10" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
        {/* Highlight arc */}
        <path d="M5 5.5C5.8 4.2 7.2 3.3 8.8 3" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Handle */}
        <line x1="14.5" y1="14.5" x2="18" y2="18" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="14.5" y1="14.5" x2="18" y2="18" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
        {/* Warm accents */}
        <path className="sl-glow" d="M14 6C14.8 5 15.2 4.5 15.8 4.5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        <circle className="sl-glow" cx="4" cy="12" r="0.35" fill="#facc15" opacity="0.4" />
      </g>
    </svg>
  );
}
