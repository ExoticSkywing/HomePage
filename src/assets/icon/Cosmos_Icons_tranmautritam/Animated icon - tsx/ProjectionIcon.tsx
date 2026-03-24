export default function ProjectionIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes prjFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.5px); } }
        @keyframes prjBeam { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.35; } }
        @keyframes prjGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes prjS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes prjS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes prjS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .prj-body { animation: prjFloat 3s ease-in-out infinite; transform-origin: 10px 6px; }
        .prj-beam { animation: prjBeam 2s ease-in-out infinite; }
        .prj-glow { animation: prjGlow 2.5s ease-in-out infinite; }
        .prj-s1 { animation: prjS1 3.2s ease-in-out infinite 0.3s; }
        .prj-s2 { animation: prjS2 2.8s ease-in-out infinite 1s; }
        .prj-s3 { animation: prjS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="prj-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="prj-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="prj-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Projection beam */}
      <path className="prj-beam" d="M10 14L4 18L16 18Z" fill="#a5b4fc" opacity="0.2" />
      <line x1="10" y1="14" x2="4" y2="18" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      <line x1="10" y1="14" x2="16" y2="18" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
      {/* Floating holographic image */}
      <g className="prj-body">
        <rect x="5.5" y="2" width="9" height="8" rx="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="5.5" y="2" width="9" height="8" rx="1.5" fill="#c7d2fe" opacity="0.2" />
        {/* Image content hint */}
        <circle cx="8.5" cy="5" r="1" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" />
        <circle className="prj-glow" cx="8.5" cy="5" r="0.4" fill="#f97316" opacity="0.5" />
        <path d="M6.5 8L8.5 6.5L10 7.5L12 5.5L13.5 7L13.5 9" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
        {/* Highlight */}
        <path d="M7 3C7.5 2.5 8.5 2.3 9.5 2.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
      {/* Projector base */}
      <rect x="7.5" y="14" width="5" height="2.5" rx="0.8" stroke="#6366f1" strokeWidth="1" fill="none" />
      <rect x="7.5" y="14" width="5" height="2.5" rx="0.8" fill="#c7d2fe" opacity="0.25" />
      {/* Lens */}
      <circle className="prj-glow" cx="10" cy="14.5" r="0.5" fill="#f97316" opacity="0.6" />
      {/* Warm accents */}
      <circle className="prj-glow" cx="5.5" cy="2" r="0.3" fill="#facc15" opacity="0.4" />
      <circle className="prj-glow" cx="14.5" cy="2" r="0.3" fill="#f97316" opacity="0.4" />
    </svg>
  );
}
