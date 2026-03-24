export default function HologramIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes holoFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.8px); } }
        @keyframes holoFlicker { 0%, 100% { opacity: 0.6; } 30% { opacity: 0.9; } 50% { opacity: 0.4; } 70% { opacity: 0.8; } }
        @keyframes holoSpin { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(3deg); } }
        @keyframes holoS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes holoS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes holoS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .holo-shape { animation: holoFloat 2.5s ease-in-out infinite; transform-origin: 10px 8px; }
        .holo-flicker { animation: holoFlicker 2s ease-in-out infinite; }
        .holo-spin { animation: holoSpin 4s ease-in-out infinite; transform-origin: 10px 8px; }
        .holo-s1 { animation: holoS1 3s ease-in-out infinite 0.2s; }
        .holo-s2 { animation: holoS2 2.6s ease-in-out infinite 0.9s; }
        .holo-s3 { animation: holoS3 2.1s ease-in-out infinite 1.6s; }
      `}</style>
      <circle className="holo-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="holo-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="holo-s3" cx="3" cy="16" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Base platform */}
      <ellipse cx="10" cy="17" rx="6" ry="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <ellipse cx="10" cy="17" rx="6" ry="1.5" fill="#c7d2fe" opacity="0.15" />
      {/* Projection beams */}
      <line className="holo-flicker" x1="6" y1="16" x2="8" y2="12" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <line className="holo-flicker" x1="14" y1="16" x2="12" y2="12" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <line className="holo-flicker" x1="10" y1="15.5" x2="10" y2="12" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      {/* Holographic diamond */}
      <g className="holo-shape">
        <g className="holo-spin">
          <path className="holo-flicker" d="M10 2L14.5 8L10 14L5.5 8Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path className="holo-flicker" d="M10 2L14.5 8L10 14L5.5 8Z" fill="#c7d2fe" opacity="0.2" />
          {/* Diamond inner facets */}
          <line className="holo-flicker" x1="10" y1="2" x2="10" y2="14" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
          <line className="holo-flicker" x1="5.5" y1="8" x2="14.5" y2="8" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
          {/* Warm accents */}
          <path className="holo-flicker" d="M7.5 5L10 2L12.5 5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
          <path className="holo-flicker" d="M7.5 11L10 14L12.5 11" stroke="#facc15" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
        </g>
      </g>
    </svg>
  );
}
