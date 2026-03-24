export default function TransformerIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes trfPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes trfFlow { 0% { stroke-dashoffset: 6; } 100% { stroke-dashoffset: 0; } }
        @keyframes trfGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes trfS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes trfS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes trfS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .trf-body { animation: trfPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .trf-flow { animation: trfFlow 2s linear infinite; stroke-dasharray: 2 4; }
        .trf-glow { animation: trfGlow 2.5s ease-in-out infinite; }
        .trf-s1 { animation: trfS1 3.2s ease-in-out infinite 0.3s; }
        .trf-s2 { animation: trfS2 2.8s ease-in-out infinite 1s; }
        .trf-s3 { animation: trfS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="trf-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="trf-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="trf-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="trf-body">
        {/* Left block - encoder */}
        <rect x="2" y="4" width="5.5" height="12" rx="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="2" y="4" width="5.5" height="12" rx="1.2" fill="#c7d2fe" opacity="0.2" />
        {/* Left block layers */}
        <line x1="3" y1="7" x2="6.5" y2="7" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <line x1="3" y1="10" x2="6.5" y2="10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <line x1="3" y1="13" x2="6.5" y2="13" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        {/* Right block - decoder */}
        <rect x="12.5" y="4" width="5.5" height="12" rx="1.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="12.5" y="4" width="5.5" height="12" rx="1.2" fill="#c7d2fe" opacity="0.2" />
        {/* Right block layers */}
        <line x1="13.5" y1="7" x2="17" y2="7" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <line x1="13.5" y1="10" x2="17" y2="10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <line x1="13.5" y1="13" x2="17" y2="13" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        {/* Attention arrows between blocks */}
        <path className="trf-flow" d="M7.5 7C9 6 11 6 12.5 7" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
        <path className="trf-flow" d="M7.5 10C9 9 11 9 12.5 10" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
        <path className="trf-flow" d="M7.5 13C9 12 11 12 12.5 13" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
        {/* Cross attention */}
        <path className="trf-flow" d="M7.5 7C9 8 11 9 12.5 10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
        <path className="trf-flow" d="M7.5 10C9 11 11 12 12.5 13" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
        {/* Glow dots */}
        <circle className="trf-glow" cx="4.75" cy="7" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="trf-glow" cx="4.75" cy="10" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="trf-glow" cx="15.25" cy="10" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="trf-glow" cx="15.25" cy="13" r="0.4" fill="#facc15" opacity="0.4" />
        {/* Arrow heads */}
        <path d="M11.5 6.5L12.5 7L11.5 7.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
        <path d="M11.5 9.5L12.5 10L11.5 10.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
      </g>
    </svg>
  );
}
