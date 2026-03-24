export default function PassthroughIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes pthPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes pthScan { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -12; } }
        @keyframes pthGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes pthS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes pthS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes pthS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .pth-body { animation: pthPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .pth-scan { animation: pthScan 4s linear infinite; stroke-dasharray: 3 3; }
        .pth-glow { animation: pthGlow 2.5s ease-in-out infinite; }
        .pth-s1 { animation: pthS1 3.2s ease-in-out infinite 0.3s; }
        .pth-s2 { animation: pthS2 2.8s ease-in-out infinite 1s; }
        .pth-s3 { animation: pthS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="pth-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="pth-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="pth-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="pth-body">
        {/* Outer camera frame */}
        <rect x="2" y="4" width="16" height="12" rx="2.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="2" y="4" width="16" height="12" rx="2.5" fill="#c7d2fe" opacity="0.12" />
        {/* Inner viewport - passthrough feed */}
        <rect className="pth-scan" x="4.5" y="6.5" width="11" height="7" rx="1" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.5" />
        <rect x="4.5" y="6.5" width="11" height="7" rx="1" fill="#c7d2fe" opacity="0.08" />
        {/* Scene content in passthrough - simple geometry */}
        {/* Mountain/environment hint */}
        <path d="M5.5 12L8 8.5L9.5 10L11.5 7.5L14.5 12" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.35" />
        {/* Sun/light source */}
        <circle cx="13.5" cy="8" r="0.8" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle className="pth-glow" cx="13.5" cy="8" r="0.35" fill="#facc15" opacity="0.5" />
        {/* Camera lens indicators */}
        <circle cx="5.5" cy="5" r="0.7" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle className="pth-glow" cx="5.5" cy="5" r="0.3" fill="#f97316" opacity="0.6" />
        <circle cx="14.5" cy="5" r="0.7" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle className="pth-glow" cx="14.5" cy="5" r="0.3" fill="#f97316" opacity="0.6" />
        {/* Recording indicator */}
        <circle className="pth-glow" cx="10" cy="5" r="0.4" fill="#f97316" opacity="0.5" />
        {/* AR overlay markers */}
        <path d="M4.5 6.5L6 6.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <path d="M4.5 6.5L4.5 8" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <path d="M15.5 6.5L14 6.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <path d="M15.5 6.5L15.5 8" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <path d="M4.5 13.5L6 13.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <path d="M4.5 13.5L4.5 12" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <path d="M15.5 13.5L14 13.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <path d="M15.5 13.5L15.5 12" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        {/* Highlight */}
        <path d="M4 5.5C4.5 4.8 5.5 4.3 6.5 4.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
