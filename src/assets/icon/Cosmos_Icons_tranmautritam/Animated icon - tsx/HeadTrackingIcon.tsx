export default function HeadTrackingIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes htPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes htScan { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -12; } }
        @keyframes htGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes htS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes htS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes htS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .ht-body { animation: htPulse 3s ease-in-out infinite; transform-origin: 10px 9px; }
        .ht-scan { animation: htScan 3s linear infinite; stroke-dasharray: 2 4; }
        .ht-glow { animation: htGlow 2.5s ease-in-out infinite; }
        .ht-s1 { animation: htS1 3.2s ease-in-out infinite 0.3s; }
        .ht-s2 { animation: htS2 2.8s ease-in-out infinite 1s; }
        .ht-s3 { animation: htS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="ht-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="ht-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="ht-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="ht-body">
        {/* Head */}
        <circle cx="10" cy="7.5" r="4.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="7.5" r="4.5" fill="#c7d2fe" opacity="0.2" />
        {/* Neck/shoulders */}
        <path d="M7 12C6 13 4 14 3 15.5C3 17 4.5 18 7 18.5C8.5 18.7 10 18.8 11.5 18.7C14 18.3 17 17.5 17 15.5C16 14 14 13 13 12" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M7 12C6 13 4 14 3 15.5C3 17 4.5 18 7 18.5C8.5 18.7 10 18.8 11.5 18.7C14 18.3 17 17.5 17 15.5C16 14 14 13 13 12" fill="#c7d2fe" opacity="0.1" />
        {/* Face features */}
        <circle cx="8.5" cy="7" r="0.5" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.5" />
        <circle cx="11.5" cy="7" r="0.5" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.5" />
        <path d="M9 9.5C9.5 10 10.5 10 11 9.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Highlight */}
        <path d="M7 5C7.8 4 8.8 3.4 10 3.2" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
      {/* Tracking arcs - outside head */}
      <path className="ht-scan" d="M2 5C3 2.5 5 1 7 0.5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
      <path className="ht-scan" d="M13 0.5C15 1 17 2.5 18 5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
      <path className="ht-scan" d="M1 8C1.5 6.5 2.5 5 4 4" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.3" />
      <path className="ht-scan" d="M16 4C17.5 5 18.5 6.5 19 8" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.3" />
      {/* Tracking dots */}
      <circle className="ht-glow" cx="5.5" cy="5.5" r="0.4" fill="#f97316" opacity="0.5" />
      <circle className="ht-glow" cx="14.5" cy="5.5" r="0.4" fill="#f97316" opacity="0.5" />
      <circle className="ht-glow" cx="10" cy="3" r="0.35" fill="#facc15" opacity="0.5" />
    </svg>
  );
}
