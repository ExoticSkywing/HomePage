export default function PanoramaIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes panPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes panSweep { 0% { stroke-dashoffset: 12; } 100% { stroke-dashoffset: 0; } }
        @keyframes panGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes panS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes panS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes panS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .pan-body { animation: panPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .pan-sweep { animation: panSweep 3s linear infinite; stroke-dasharray: 3 9; }
        .pan-glow { animation: panGlow 2.5s ease-in-out infinite; }
        .pan-s1 { animation: panS1 3.2s ease-in-out infinite 0.3s; }
        .pan-s2 { animation: panS2 2.8s ease-in-out infinite 1s; }
        .pan-s3 { animation: panS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="pan-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="pan-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="pan-s3" cx="3" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="pan-body">
        {/* 360 sphere outline */}
        <circle cx="10" cy="10" r="7.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="7.5" fill="#c7d2fe" opacity="0.12" />

        {/* Horizontal equator */}
        <ellipse cx="10" cy="10" rx="7.5" ry="2.5" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.4" />

        {/* Vertical meridian */}
        <ellipse cx="10" cy="10" rx="3" ry="7.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.35" />

        {/* Sweeping highlight arc */}
        <path className="pan-sweep" d="M2.5 10C2.5 5.5 5.5 2.5 10 2.5C14.5 2.5 17.5 5.5 17.5 10" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Viewport window indicator */}
        <rect x="7" y="7" width="6" height="6" rx="1" stroke="#6366f1" strokeWidth="1" fill="none" />
        <rect x="7" y="7" width="6" height="6" rx="1" fill="#f97316" opacity="0.08" />

        {/* View direction arrows */}
        <path d="M5 10L7 10" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <path d="M13" y1="10" d="M13 10L15 10" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <path d="M10 5L10 7" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
        <path d="M10 13L10 15" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

        {/* Center eye dot */}
        <circle className="pan-glow" cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.6" />

        {/* Warm corner accents */}
        <circle className="pan-glow" cx="10" cy="2.5" r="0.35" fill="#facc15" opacity="0.5" />
        <circle className="pan-glow" cx="17.5" cy="10" r="0.35" fill="#f97316" opacity="0.4" />

        {/* Highlight */}
        <path d="M5 5C6.5 3.5 8 2.8 10 2.6" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
