export default function EclipseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes eclPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes eclCorona { 0%, 100% { opacity: 0.3; r: 7.5; } 50% { opacity: 0.6; r: 8; } }
        @keyframes eclGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes eclS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes eclS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes eclS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .ecl-body { animation: eclPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .ecl-corona { animation: eclCorona 3s ease-in-out infinite; }
        .ecl-glow { animation: eclGlow 2.5s ease-in-out infinite; }
        .ecl-s1 { animation: eclS1 3.2s ease-in-out infinite 0.3s; }
        .ecl-s2 { animation: eclS2 2.8s ease-in-out infinite 1s; }
        .ecl-s3 { animation: eclS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="ecl-s1" cx="2" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="ecl-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="ecl-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="ecl-body">
        {/* Corona glow */}
        <circle className="ecl-corona" cx="10" cy="10" r="7.5" stroke="#f97316" strokeWidth="0.6" fill="none" opacity="0.3" />
        <circle className="ecl-corona" cx="10" cy="10" r="7" stroke="#facc15" strokeWidth="0.4" fill="none" opacity="0.2" />
        {/* Sun body behind */}
        <circle cx="10" cy="10" r="6" stroke="#f97316" strokeWidth="0.8" fill="none" opacity="0.3" />
        <circle cx="10" cy="10" r="6" fill="#f97316" opacity="0.06" />
        {/* Corona rays */}
        <path className="ecl-glow" d="M3.5 7C3 7.5 2.8 8.5 2.8 10" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        <path className="ecl-glow" d="M16.5 7C17 7.5 17.2 8.5 17.2 10" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        <path className="ecl-glow" d="M7 3.5C7.5 3 8.5 2.8 10 2.8" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        <path className="ecl-glow" d="M13 16.5C12.5 17 11.5 17.2 10 17.2" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Moon body (foreground) */}
        <circle cx="10" cy="10" r="5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="5" fill="#6366f1" opacity="0.12" />
        {/* Moon surface details */}
        <circle cx="8.5" cy="9" r="1" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.3" />
        <circle cx="11.5" cy="11" r="0.7" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.25" />
        <circle cx="10" cy="7.5" r="0.5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.2" />
        {/* Moon highlight */}
        <path d="M7 7C7.8 6 8.8 5.5 10 5.3" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Bright corona edge */}
        <path className="ecl-glow" d="M15 6C16 7.5 16 12.5 15 14" stroke="#f97316" strokeWidth="0.9" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
    </svg>
  );
}
