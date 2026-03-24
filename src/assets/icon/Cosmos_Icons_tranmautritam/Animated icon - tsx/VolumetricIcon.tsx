export default function VolumetricIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes volSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes volPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes volGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes volS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes volS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes volS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .vol-body { animation: volPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .vol-sphere { animation: volSpin 8s linear infinite; transform-origin: 10px 10px; }
        .vol-glow { animation: volGlow 2.5s ease-in-out infinite; }
        .vol-s1 { animation: volS1 3.2s ease-in-out infinite 0.3s; }
        .vol-s2 { animation: volS2 2.8s ease-in-out infinite 1s; }
        .vol-s3 { animation: volS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="vol-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="vol-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="vol-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="vol-body">
        {/* 3D wireframe cube */}
        {/* Front face */}
        <path d="M4 7L10 4L16 7L10 10Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M4 7L10 4L16 7L10 10Z" fill="#c7d2fe" opacity="0.1" />
        {/* Left face */}
        <path d="M4 7L4 13L10 16L10 10Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M4 7L4 13L10 16L10 10Z" fill="#c7d2fe" opacity="0.15" />
        {/* Right face */}
        <path d="M16 7L16 13L10 16L10 10Z" stroke="#a5b4fc" strokeWidth="1" strokeLinejoin="round" fill="none" opacity="0.6" />
        <path d="M16 7L16 13L10 16L10 10Z" fill="#c7d2fe" opacity="0.08" />
        {/* Hidden edges */}
        <line x1="4" y1="13" x2="16" y2="13" stroke="#a5b4fc" strokeWidth="0.5" strokeDasharray="1.5 1.5" opacity="0.25" />
      </g>
      {/* Inner floating sphere */}
      <g className="vol-sphere">
        <circle cx="10" cy="10" r="2.5" stroke="#6366f1" strokeWidth="0.9" fill="none" opacity="0.6" />
        <circle cx="10" cy="10" r="2.5" fill="#c7d2fe" opacity="0.15" />
        <ellipse cx="10" cy="10" rx="2.5" ry="1" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
      </g>
      <circle className="vol-glow" cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.6" />
      {/* Warm corner accents */}
      <circle className="vol-glow" cx="10" cy="4" r="0.35" fill="#f97316" opacity="0.5" />
      <circle className="vol-glow" cx="4" cy="13" r="0.35" fill="#facc15" opacity="0.4" />
      <circle className="vol-glow" cx="16" cy="13" r="0.35" fill="#f97316" opacity="0.4" />
    </svg>
  );
}
