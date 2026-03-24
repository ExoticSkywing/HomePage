export default function SignalIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes sigFlow { 0% { stroke-dashoffset: 12; } 100% { stroke-dashoffset: 0; } }
        @keyframes sigPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes sigGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes sigS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes sigS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes sigS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .sig-body { animation: sigPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .sig-flow { animation: sigFlow 3s linear infinite; stroke-dasharray: 3 9; }
        .sig-glow { animation: sigGlow 2.5s ease-in-out infinite; }
        .sig-s1 { animation: sigS1 3.2s ease-in-out infinite 0.3s; }
        .sig-s2 { animation: sigS2 2.8s ease-in-out infinite 1s; }
        .sig-s3 { animation: sigS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="sig-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="sig-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="sig-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="sig-body">
        {/* Frame */}
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="2" y="3" width="16" height="14" rx="2" fill="#c7d2fe" opacity="0.1" />
        {/* Baseline */}
        <line x1="3.5" y1="10" x2="16.5" y2="10" stroke="#a5b4fc" strokeWidth="0.5" opacity="0.25" />
        {/* Waveform */}
        <path d="M3.5 10L5 10L6 13L7.5 7L9 12.5L10.5 5L12 13L13.5 6.5L15 11L16.5 10" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Glow trace */}
        <path className="sig-flow" d="M3.5 10L5 10L6 13L7.5 7L9 12.5L10.5 5L12 13L13.5 6.5L15 11L16.5 10" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
        {/* Peak dots */}
        <circle className="sig-glow" cx="10.5" cy="5" r="0.5" fill="#f97316" opacity="0.6" />
        <circle className="sig-glow" cx="7.5" cy="7" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="sig-glow" cx="12" cy="13" r="0.4" fill="#facc15" opacity="0.4" />
        {/* Highlight */}
        <path d="M3.5 4.5C4 4 5 3.5 6 3.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
