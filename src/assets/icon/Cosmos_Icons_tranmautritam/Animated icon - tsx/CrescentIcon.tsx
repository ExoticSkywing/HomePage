export default function CrescentIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes creGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes crePulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.015); } }
        @keyframes creS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes creS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes creS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cre-body { animation: crePulse 4s ease-in-out infinite; transform-origin: 10px 10px; }
        .cre-glow { animation: creGlow 3s ease-in-out infinite; }
        .cre-s1 { animation: creS1 3.2s ease-in-out infinite 0.3s; }
        .cre-s2 { animation: creS2 2.8s ease-in-out infinite 1s; }
        .cre-s3 { animation: creS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cre-s1" cx="16" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cre-s2" cx="17" cy="15" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cre-s3" cx="14" cy="5" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="cre-body">
        {/* Moon crescent */}
        <path d="M10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18C11.5 18 13 17.5 14.2 16.7C11.5 15.5 9.5 12.8 9.5 10C9.5 7.2 11.5 4.5 14.2 3.3C13 2.5 11.5 2 10 2Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M10 2C5.6 2 2 5.6 2 10C2 14.4 5.6 18 10 18C11.5 18 13 17.5 14.2 16.7C11.5 15.5 9.5 12.8 9.5 10C9.5 7.2 11.5 4.5 14.2 3.3C13 2.5 11.5 2 10 2Z" fill="#c7d2fe" opacity="0.2" />
        {/* Surface details */}
        <circle cx="5.5" cy="8" r="1" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="7" cy="13" r="0.7" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.25" />
        <circle cx="4" cy="11" r="0.5" stroke="#a5b4fc" strokeWidth="0.4" fill="none" opacity="0.2" />
        {/* Earthshine glow */}
        <path className="cre-glow" d="M9.5 5C10.5 5.5 11.5 7 11.5 10C11.5 13 10.5 14.5 9.5 15" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.3" />
        {/* Stars near crescent */}
        <circle className="cre-glow" cx="15" cy="7" r="0.4" fill="#facc15" opacity="0.5" />
        <circle className="cre-glow" cx="16.5" cy="11" r="0.35" fill="#f97316" opacity="0.4" />
        <circle cx="13.5" cy="14" r="0.3" fill="#a5b4fc" opacity="0.3" />
        {/* Highlight */}
        <path d="M5 5C6 4 7.5 3 9 2.5" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
