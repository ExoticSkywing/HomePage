export default function GPUIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes gpuPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.01); } }
        @keyframes gpuHeat { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.4; } }
        @keyframes gpuFan { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes gpuGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes gpuS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes gpuS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes gpuS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .gpu-body { animation: gpuPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .gpu-heat { animation: gpuHeat 2s ease-in-out infinite; }
        .gpu-fan { animation: gpuFan 3s linear infinite; transform-origin: 10px 8.5px; }
        .gpu-glow { animation: gpuGlow 2.5s ease-in-out infinite; }
        .gpu-s1 { animation: gpuS1 3.2s ease-in-out infinite 0.3s; }
        .gpu-s2 { animation: gpuS2 2.8s ease-in-out infinite 1s; }
        .gpu-s3 { animation: gpuS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="gpu-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="gpu-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="gpu-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="gpu-body">
        {/* Card body */}
        <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="2" y="3" width="16" height="11" rx="1.5" fill="#c7d2fe" opacity="0.15" />
        {/* Fan circle */}
        <circle cx="10" cy="8.5" r="3.5" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="10" cy="8.5" r="3.5" fill="#c7d2fe" opacity="0.1" />
        {/* Fan blades */}
        <g className="gpu-fan">
          <path d="M10 5C10 5 11.5 7 10 8.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
          <path d="M13.5 8.5C13.5 8.5 11.5 10 10 8.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
          <path d="M10 12C10 12 8.5 10 10 8.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
          <path d="M6.5 8.5C6.5 8.5 8.5 7 10 8.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        </g>
        {/* Fan center */}
        <circle cx="10" cy="8.5" r="0.8" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle className="gpu-glow" cx="10" cy="8.5" r="0.4" fill="#f97316" opacity="0.6" />
        {/* Heat indicator */}
        <rect className="gpu-heat" x="15" y="5" width="1.5" height="3" rx="0.5" fill="#f97316" opacity="0.3" />
        <rect className="gpu-heat" x="15" y="9" width="1.5" height="2" rx="0.5" fill="#facc15" opacity="0.2" />
        {/* PCIe connector pins */}
        <line x1="5" y1="14" x2="5" y2="16.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        <line x1="7" y1="14" x2="7" y2="16.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        <line x1="9" y1="14" x2="9" y2="16.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        <line x1="11" y1="14" x2="11" y2="16.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        <line x1="13" y1="14" x2="13" y2="16.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        <line x1="15" y1="14" x2="15" y2="16.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        {/* Pin tip accents */}
        <circle className="gpu-glow" cx="5" cy="16.5" r="0.3" fill="#f97316" opacity="0.4" />
        <circle className="gpu-glow" cx="15" cy="16.5" r="0.3" fill="#f97316" opacity="0.4" />
      </g>
    </svg>
  );
}
