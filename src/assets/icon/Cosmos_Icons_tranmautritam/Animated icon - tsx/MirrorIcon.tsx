export default function MirrorIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes mirFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0.3px, -0.3px); } }
        @keyframes mirReflect { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @keyframes mirGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes mirS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes mirS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes mirS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .mir-body { animation: mirFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .mir-reflect { animation: mirReflect 2.5s ease-in-out infinite; }
        .mir-glow { animation: mirGlow 2.5s ease-in-out infinite; }
        .mir-s1 { animation: mirS1 3.2s ease-in-out infinite 0.3s; }
        .mir-s2 { animation: mirS2 2.8s ease-in-out infinite 1s; }
        .mir-s3 { animation: mirS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="mir-s1" cx="1.5" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="mir-s2" cx="18.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="mir-s3" cx="2.5" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="mir-body">
        {/* Real world frame */}
        <rect x="2" y="3" width="8" height="7" rx="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="2" y="3" width="8" height="7" rx="1.5" fill="#c7d2fe" opacity="0.2" />

        {/* Content in real frame */}
        <circle cx="5" cy="5.5" r="1" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle cx="5" cy="5.5" r="0.4" fill="#f97316" opacity="0.5" />
        <line x1="4" y1="8" x2="8.5" y2="8" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />

        {/* Mirror frame - reflected/offset */}
        <g className="mir-reflect">
          <rect x="10" y="10" width="8" height="7" rx="1.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
          <rect x="10" y="10" width="8" height="7" rx="1.5" fill="#c7d2fe" opacity="0.15" />

          {/* Mirrored content */}
          <circle cx="15" cy="12.5" r="1" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.6" />
          <circle cx="15" cy="12.5" r="0.4" fill="#f97316" opacity="0.35" />
          <line x1="11.5" y1="15" x2="16" y2="15" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
        </g>

        {/* Connection line - mirror axis */}
        <line x1="10" y1="10" x2="10" y2="10" stroke="#a5b4fc" strokeWidth="0" />
        <path d="M9 9L11 11" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />

        {/* Reflection arrows */}
        <path d="M8 7L11 11" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" strokeDasharray="1.5 1.5" fill="none" opacity="0.4" />
        <path d="M9 4L13 11" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" strokeDasharray="1.5 1.5" fill="none" opacity="0.3" />

        {/* Corner accents */}
        <circle className="mir-glow" cx="2" cy="3" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="mir-glow" cx="18" cy="17" r="0.4" fill="#f97316" opacity="0.5" />
        <circle className="mir-glow" cx="10" cy="10" r="0.5" fill="#facc15" opacity="0.5" />

        {/* Highlight */}
        <path d="M3 4.5C3.5 3.8 4 3.5 5 3.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
