export default function Cube3DIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes cubFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.5px); } }
        @keyframes cubGlow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.5; } }
        @keyframes cubEdge { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes cubS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes cubS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes cubS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cub-body { animation: cubFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .cub-glow { animation: cubGlow 2.5s ease-in-out infinite; }
        .cub-edge { animation: cubEdge 2s ease-in-out infinite; }
        .cub-s1 { animation: cubS1 3.2s ease-in-out infinite 0.3s; }
        .cub-s2 { animation: cubS2 2.8s ease-in-out infinite 1s; }
        .cub-s3 { animation: cubS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cub-s1" cx="1.5" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cub-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cub-s3" cx="2.5" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="cub-body">
        {/* Front face */}
        <path d="M4 7L10 4L16 7L16 14L10 17L4 14Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M4 7L10 4L16 7L16 14L10 17L4 14Z" fill="#c7d2fe" opacity="0.12" />
        {/* Center vertical */}
        <line x1="10" y1="10" x2="10" y2="17" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        {/* Center to left */}
        <line x1="10" y1="10" x2="4" y2="7" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        {/* Center to right */}
        <line x1="10" y1="10" x2="16" y2="7" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        {/* Top face fill */}
        <path d="M4 7L10 4L16 7L10 10Z" fill="#c7d2fe" opacity="0.2" />
        {/* Left face edges - secondary */}
        <path className="cub-edge" d="M4 7L4 14L10 17L10 10Z" fill="#a5b4fc" opacity="0.08" />
        {/* Right face warm accent */}
        <path className="cub-glow" d="M16 7L16 14L10 17L10 10Z" fill="#f97316" opacity="0.06" />
        {/* Edge highlights */}
        <path d="M5 7.5L9.5 5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Corner accents */}
        <circle cx="10" cy="4" r="0.5" fill="#f97316" opacity="0.5" />
        <circle className="cub-glow" cx="16" cy="7" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="cub-glow" cx="10" cy="17" r="0.4" fill="#facc15" opacity="0.4" />
      </g>
    </svg>
  );
}
