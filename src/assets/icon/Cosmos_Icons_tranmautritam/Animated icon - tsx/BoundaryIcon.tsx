export default function BoundaryIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes bndPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes bndDash { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -16; } }
        @keyframes bndGlow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
        @keyframes bndS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes bndS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes bndS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .bnd-body { animation: bndPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .bnd-dash { animation: bndDash 4s linear infinite; }
        .bnd-glow { animation: bndGlow 2.5s ease-in-out infinite; }
        .bnd-s1 { animation: bndS1 3.2s ease-in-out infinite 0.3s; }
        .bnd-s2 { animation: bndS2 2.8s ease-in-out infinite 1s; }
        .bnd-s3 { animation: bndS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="bnd-s1" cx="1.5" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="bnd-s2" cx="18.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="bnd-s3" cx="2.5" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="bnd-body">
        {/* Play space boundary - dashed */}
        <rect className="bnd-dash" x="3" y="3" width="14" height="14" rx="2" stroke="#6366f1" strokeWidth="1.2" strokeDasharray="3 2" fill="none" />
        <rect x="3" y="3" width="14" height="14" rx="2" fill="#c7d2fe" opacity="0.08" />
        {/* Inner safe zone */}
        <rect x="5.5" y="5.5" width="9" height="9" rx="1" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" />
        <rect className="bnd-glow" x="5.5" y="5.5" width="9" height="9" rx="1" fill="#c7d2fe" opacity="0.12" />
        {/* Person in center */}
        <circle cx="10" cy="8.5" r="1.3" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="8.5" r="1.3" fill="#c7d2fe" opacity="0.25" />
        <line x1="10" y1="9.8" x2="10" y2="12.5" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        <line x1="8" y1="11" x2="12" y2="11" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line x1="9" y1="12.5" x2="8" y2="14" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line x1="11" y1="12.5" x2="12" y2="14" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        {/* Corner markers */}
        <circle className="bnd-glow" cx="3" cy="3" r="0.5" fill="#f97316" opacity="0.5" />
        <circle className="bnd-glow" cx="17" cy="3" r="0.5" fill="#f97316" opacity="0.5" />
        <circle className="bnd-glow" cx="3" cy="17" r="0.5" fill="#facc15" opacity="0.4" />
        <circle className="bnd-glow" cx="17" cy="17" r="0.5" fill="#facc15" opacity="0.4" />
        {/* Warning glow at edges */}
        <path className="bnd-glow" d="M3 8L3 12" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
        <path className="bnd-glow" d="M17 8L17 12" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      </g>
    </svg>
  );
}
