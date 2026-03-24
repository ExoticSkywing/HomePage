export default function AlgorithmIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes algPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes algFlow { 0% { stroke-dashoffset: 6; } 100% { stroke-dashoffset: 0; } }
        @keyframes algGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
        @keyframes algS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes algS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes algS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .alg-body { animation: algPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .alg-flow { animation: algFlow 2s linear infinite; stroke-dasharray: 2 4; }
        .alg-glow { animation: algGlow 2.5s ease-in-out infinite; }
        .alg-s1 { animation: algS1 3.2s ease-in-out infinite 0.3s; }
        .alg-s2 { animation: algS2 2.8s ease-in-out infinite 1s; }
        .alg-s3 { animation: algS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="alg-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="alg-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="alg-s3" cx="3" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="alg-body">
        {/* Top input node */}
        <circle cx="10" cy="3" r="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="3" r="1.5" fill="#c7d2fe" opacity="0.3" />

        {/* Flow line down */}
        <line className="alg-flow" x1="10" y1="4.5" x2="10" y2="7" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Center diamond - decision node */}
        <path d="M10 7L13.5 10L10 13L6.5 10Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M10 7L13.5 10L10 13L6.5 10Z" fill="#c7d2fe" opacity="0.2" />
        <path d="M10 7L13.5 10L10 13L6.5 10Z" fill="#f97316" opacity="0.08" />

        {/* Diamond inner mark */}
        <circle className="alg-glow" cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.6" />
        <line x1="8.5" y1="10" x2="11.5" y2="10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />

        {/* Branch left */}
        <line className="alg-flow" x1="6.5" y1="10" x2="3.5" y2="10" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line className="alg-flow" x1="3.5" y1="10" x2="3.5" y2="15" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Branch right */}
        <line className="alg-flow" x1="13.5" y1="10" x2="16.5" y2="10" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line className="alg-flow" x1="16.5" y1="10" x2="16.5" y2="15" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Bottom output - left */}
        <rect x="2" y="15" width="3" height="2.5" rx="0.6" stroke="#6366f1" strokeWidth="1" fill="none" />
        <rect x="2" y="15" width="3" height="2.5" rx="0.6" fill="#c7d2fe" opacity="0.25" />
        <circle className="alg-glow" cx="3.5" cy="16.25" r="0.35" fill="#f97316" opacity="0.5" />

        {/* Bottom output - right */}
        <rect x="15" y="15" width="3" height="2.5" rx="0.6" stroke="#6366f1" strokeWidth="1" fill="none" />
        <rect x="15" y="15" width="3" height="2.5" rx="0.6" fill="#c7d2fe" opacity="0.25" />
        <circle className="alg-glow" cx="16.5" cy="16.25" r="0.35" fill="#facc15" opacity="0.5" />

        {/* Highlight */}
        <path d="M8 8C8.5 7.3 9.2 7.1 10 7.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
