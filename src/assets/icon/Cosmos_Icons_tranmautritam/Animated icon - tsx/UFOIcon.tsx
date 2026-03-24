export default function UFOIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes ufoHover { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-0.6px); } }
        @keyframes ufoBeam { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.4; } }
        @keyframes ufoGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes ufoS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes ufoS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes ufoS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .ufo-body { animation: ufoHover 2.5s ease-in-out infinite; transform-origin: 10px 8px; }
        .ufo-beam { animation: ufoBeam 2s ease-in-out infinite; }
        .ufo-glow { animation: ufoGlow 2.5s ease-in-out infinite; }
        .ufo-s1 { animation: ufoS1 3.2s ease-in-out infinite 0.3s; }
        .ufo-s2 { animation: ufoS2 2.8s ease-in-out infinite 1s; }
        .ufo-s3 { animation: ufoS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="ufo-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="ufo-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="ufo-s3" cx="3" cy="16" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Tractor beam */}
      <path className="ufo-beam" d="M7 10L5 18H15L13 10" fill="#facc15" opacity="0.15" />
      <g className="ufo-body">
        {/* Dome */}
        <path d="M7 8C7 5.5 8.3 4 10 4C11.7 4 13 5.5 13 8" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
        <path d="M7 8C7 5.5 8.3 4 10 4C11.7 4 13 5.5 13 8" fill="#c7d2fe" opacity="0.2" />
        {/* Saucer body */}
        <ellipse cx="10" cy="8.5" rx="7.5" ry="2.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <ellipse cx="10" cy="8.5" rx="7.5" ry="2.5" fill="#c7d2fe" opacity="0.15" />
        {/* Bottom rim */}
        <ellipse cx="10" cy="9.5" rx="5" ry="1.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" />
        {/* Window lights */}
        <circle className="ufo-glow" cx="6" cy="8.2" r="0.6" fill="#f97316" opacity="0.6" />
        <circle className="ufo-glow" cx="10" cy="7.5" r="0.6" fill="#f97316" opacity="0.7" />
        <circle className="ufo-glow" cx="14" cy="8.2" r="0.6" fill="#f97316" opacity="0.6" />
        {/* Dome highlight */}
        <path d="M8.5 5.5C9 5 9.5 4.8 10 4.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
