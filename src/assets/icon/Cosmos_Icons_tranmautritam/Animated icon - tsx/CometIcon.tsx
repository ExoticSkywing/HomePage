export default function CometIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes cometMove { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-0.8px, 0.8px); } }
        @keyframes cometTailShimmer { 0%, 100% { opacity: 0.5; stroke-dashoffset: 0; } 50% { opacity: 0.9; stroke-dashoffset: -4; } }
        @keyframes cometGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
        @keyframes comS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes comS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes comS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .comet-group { animation: cometMove 2.5s ease-in-out infinite; transform-origin: 7px 7px; }
        .comet-tail { animation: cometTailShimmer 2s ease-in-out infinite; }
        .comet-glow { animation: cometGlow 2s ease-in-out infinite; }
        .com-s1 { animation: comS1 3s ease-in-out infinite 0.2s; }
        .com-s2 { animation: comS2 2.6s ease-in-out infinite 0.9s; }
        .com-s3 { animation: comS3 2.2s ease-in-out infinite 1.6s; }
      `}</style>
      <circle className="com-s1" cx="17.5" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="com-s2" cx="3" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="com-s3" cx="15" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="comet-group">
        <path className="comet-tail" d="M9 9C11 11 14 14 17.5 16" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round" fill="none" strokeDasharray="3 2" />
        <path className="comet-tail" d="M8 10.5C10.5 12 13.5 14.5 16.5 17" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" strokeDasharray="2 2" />
        <path className="comet-tail" d="M10.5 8C12.5 9 15.5 12 18 14" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.4" strokeDasharray="2 3" />
        <circle cx="7" cy="7" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="7" cy="7" r="3" fill="#c7d2fe" opacity="0.3" />
        <circle className="comet-glow" cx="7" cy="7" r="1.8" stroke="#f97316" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle className="comet-glow" cx="7" cy="7" r="1" stroke="#facc15" strokeWidth="0.6" fill="none" opacity="0.4" />
        <circle className="comet-glow" cx="7" cy="7" r="0.5" fill="#f97316" opacity="0.5" />
        <path d="M5.5 5.5C6 5 6.8 4.8 7.5 4.8" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
    </svg>
  );
}
