export default function ARAnchorIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes ancFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.5px); } }
        @keyframes ancRing { 0%, 100% { opacity: 0.15; transform: scale(1); } 50% { opacity: 0.4; transform: scale(1.08); } }
        @keyframes ancPing { 0%, 100% { opacity: 0.2; r: 3.5; } 50% { opacity: 0.5; r: 4.5; } }
        @keyframes ancGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes ancS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes ancS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes ancS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .anc-body { animation: ancFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .anc-ring { animation: ancRing 2.5s ease-in-out infinite; transform-origin: 10px 13px; }
        .anc-ping { animation: ancPing 3s ease-in-out infinite; }
        .anc-glow { animation: ancGlow 2.5s ease-in-out infinite; }
        .anc-s1 { animation: ancS1 3.2s ease-in-out infinite 0.3s; }
        .anc-s2 { animation: ancS2 2.8s ease-in-out infinite 1s; }
        .anc-s3 { animation: ancS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="anc-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="anc-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="anc-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="anc-body">
        {/* Tracking rings */}
        <circle className="anc-ping" cx="10" cy="13" r="4" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.2" />
        <circle className="anc-ring" cx="10" cy="13" r="6" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.15" />
        {/* Ground plane ellipse */}
        <ellipse cx="10" cy="15.5" rx="6" ry="1.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" />
        <ellipse cx="10" cy="15.5" rx="6" ry="1.5" fill="#c7d2fe" opacity="0.08" />
        {/* Pin body */}
        <path d="M10 2C7.2 2 5 4 5 6.5C5 9.5 10 14 10 14C10 14 15 9.5 15 6.5C15 4 12.8 2 10 2Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M10 2C7.2 2 5 4 5 6.5C5 9.5 10 14 10 14C10 14 15 9.5 15 6.5C15 4 12.8 2 10 2Z" fill="#c7d2fe" opacity="0.2" />
        {/* Pin inner circle */}
        <circle cx="10" cy="6.5" r="2" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="6.5" r="2" fill="#c7d2fe" opacity="0.3" />
        <circle className="anc-glow" cx="10" cy="6.5" r="0.8" fill="#f97316" opacity="0.6" />
        {/* Highlight */}
        <path d="M7.5 4.5C8 3.8 9 3 10 2.8" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Warm accent on pin tip */}
        <circle className="anc-glow" cx="10" cy="14" r="0.4" fill="#facc15" opacity="0.5" />
        {/* Side warm glow */}
        <path className="anc-glow" d="M14 5C14.5 5.8 14.8 6.5 14.8 7.5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
