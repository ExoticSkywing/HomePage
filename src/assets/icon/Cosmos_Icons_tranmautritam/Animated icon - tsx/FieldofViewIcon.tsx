export default function FieldOfViewIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes fovPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes fovScan { 0% { stroke-dashoffset: 8; } 100% { stroke-dashoffset: 0; } }
        @keyframes fovGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes fovS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes fovS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes fovS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .fov-body { animation: fovPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .fov-scan { animation: fovScan 2s linear infinite; stroke-dasharray: 2 6; }
        .fov-glow { animation: fovGlow 2.5s ease-in-out infinite; }
        .fov-s1 { animation: fovS1 3.2s ease-in-out infinite 0.3s; }
        .fov-s2 { animation: fovS2 2.8s ease-in-out infinite 1s; }
        .fov-s3 { animation: fovS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="fov-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="fov-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="fov-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="fov-body">
        {/* Eye shape */}
        <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M2 10C2 10 5 4 10 4C15 4 18 10 18 10C18 10 15 16 10 16C5 16 2 10 2 10Z" fill="#c7d2fe" opacity="0.12" />

        {/* Iris */}
        <circle cx="10" cy="10" r="3.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="3.5" fill="#c7d2fe" opacity="0.2" />

        {/* Pupil */}
        <circle cx="10" cy="10" r="1.8" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle cx="10" cy="10" r="1.8" fill="#6366f1" opacity="0.15" />
        <circle className="fov-glow" cx="10" cy="10" r="0.7" fill="#f97316" opacity="0.6" />

        {/* FOV cone lines emanating */}
        <line className="fov-scan" x1="18" y1="10" x2="18.5" y2="7" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <line className="fov-scan" x1="18" y1="10" x2="18.5" y2="13" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

        {/* Highlight */}
        <path d="M8 7C8.5 6 9.2 5.5 10 5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />

        {/* Iris detail */}
        <path d="M7.5 8.5C8 8 9 7 10 7" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.3" />

        {/* Corner warm dots */}
        <circle className="fov-glow" cx="2" cy="10" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="fov-glow" cx="18" cy="10" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="fov-glow" cx="10" cy="4" r="0.35" fill="#facc15" opacity="0.4" />
      </g>
    </svg>
  );
}
