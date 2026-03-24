export default function CapsuleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes capFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-0.4px); } }
        @keyframes capGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes capHeat { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
        @keyframes capS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes capS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes capS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cap-body { animation: capFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .cap-glow { animation: capGlow 2.5s ease-in-out infinite; }
        .cap-heat { animation: capHeat 2s ease-in-out infinite; }
        .cap-s1 { animation: capS1 3.2s ease-in-out infinite 0.3s; }
        .cap-s2 { animation: capS2 2.8s ease-in-out infinite 1s; }
        .cap-s3 { animation: capS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cap-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cap-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cap-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="cap-body">
        {/* Heat shield glow */}
        <path className="cap-heat" d="M5.5 14.5C7 15.5 8.5 16 10 16C11.5 16 13 15.5 14.5 14.5" stroke="#f97316" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.3" />
        {/* Main capsule body */}
        <path d="M6 14L6 8C6 5 7.5 3 10 3C12.5 3 14 5 14 8L14 14Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M6 14L6 8C6 5 7.5 3 10 3C12.5 3 14 5 14 8L14 14Z" fill="#c7d2fe" opacity="0.15" />
        {/* Heat shield base */}
        <path d="M5.5 14C5.5 15.5 7.5 16.5 10 16.5C12.5 16.5 14.5 15.5 14.5 14" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        {/* Window */}
        <circle cx="10" cy="7.5" r="2" stroke="#a5b4fc" strokeWidth="0.8" fill="none" />
        <circle cx="10" cy="7.5" r="2" fill="#c7d2fe" opacity="0.2" />
        <circle className="cap-glow" cx="10" cy="7" r="0.5" fill="#f97316" opacity="0.5" />
        {/* Side panels */}
        <line x1="6" y1="11" x2="14" y2="11" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.3" />
        <line x1="6.5" y1="13" x2="13.5" y2="13" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" opacity="0.25" />
        {/* RCS thrusters */}
        <circle cx="6.5" cy="9" r="0.35" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="13.5" cy="9" r="0.35" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* Highlight */}
        <path d="M8 4C8.5 3.5 9 3.3 10 3.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
