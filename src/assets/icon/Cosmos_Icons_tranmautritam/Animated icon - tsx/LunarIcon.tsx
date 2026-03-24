export default function LunarIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes lunFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.4px); } }
        @keyframes lunGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        @keyframes lunS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes lunS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes lunS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .lun-body { animation: lunFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .lun-glow { animation: lunGlow 2.5s ease-in-out infinite; }
        .lun-s1 { animation: lunS1 3.2s ease-in-out infinite 0.3s; }
        .lun-s2 { animation: lunS2 2.8s ease-in-out infinite 1s; }
        .lun-s3 { animation: lunS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="lun-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="lun-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="lun-s3" cx="3" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="lun-body">
        {/* Moon body */}
        <circle cx="10" cy="10" r="7.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="7.5" fill="#c7d2fe" opacity="0.2" />
        {/* Terminator line - day/night boundary */}
        <path d="M10 2.5C12 4.5 13 7 13 10C13 13 12 15.5 10 17.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35" />
        {/* Dark side shading */}
        <path d="M10 2.5C8 4.5 7 7 7 10C7 13 8 15.5 10 17.5" fill="#6366f1" opacity="0.05" />
        {/* Craters */}
        <circle cx="7" cy="7.5" r="1.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" />
        <circle cx="12" cy="8" r="1" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.35" />
        <circle cx="8.5" cy="12" r="1.2" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.35" />
        <circle cx="13" cy="13" r="0.7" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="11" cy="5.5" r="0.6" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* Highlight */}
        <path d="M6 5C7 3.5 8.5 2.8 10 2.6" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Warm accents on lit side */}
        <path className="lun-glow" d="M14 5C15.5 6.5 16.5 8.5 17 10.5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
        <circle className="lun-glow" cx="15" cy="10" r="0.35" fill="#f97316" opacity="0.5" />
        <circle className="lun-glow" cx="13.5" cy="6" r="0.3" fill="#facc15" opacity="0.4" />
      </g>
    </svg>
  );
}
