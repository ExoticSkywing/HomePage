export default function LogicIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes lgcPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.02); } }
        @keyframes lgcFlow { 0% { stroke-dashoffset: 8; } 100% { stroke-dashoffset: 0; } }
        @keyframes lgcGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes lgcS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes lgcS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes lgcS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .lgc-body { animation: lgcPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .lgc-flow { animation: lgcFlow 2s linear infinite; stroke-dasharray: 2 6; }
        .lgc-glow { animation: lgcGlow 2.5s ease-in-out infinite; }
        .lgc-s1 { animation: lgcS1 3.2s ease-in-out infinite 0.3s; }
        .lgc-s2 { animation: lgcS2 2.8s ease-in-out infinite 1s; }
        .lgc-s3 { animation: lgcS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="lgc-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="lgc-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="lgc-s3" cx="3" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="lgc-body">
        {/* Input lines - top */}
        <line className="lgc-flow" x1="1.5" y1="5.5" x2="5" y2="5.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        <line className="lgc-flow" x1="1.5" y1="8.5" x2="5" y2="8.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        {/* Gate 1 - top (AND gate shape) */}
        <path d="M5 3.5L5 10.5L9 10.5C11.5 10.5 13 9 13 7C13 5 11.5 3.5 9 3.5Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M5 3.5L5 10.5L9 10.5C11.5 10.5 13 9 13 7C13 5 11.5 3.5 9 3.5Z" fill="#c7d2fe" opacity="0.2" />
        {/* Gate 1 core */}
        <circle className="lgc-glow" cx="8.5" cy="7" r="0.5" fill="#f97316" opacity="0.6" />
        {/* Output line from gate 1 */}
        <line className="lgc-flow" x1="13" y1="7" x2="15.5" y2="7" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        {/* Connector down to gate 2 input */}
        <path className="lgc-flow" d="M15.5 7L15.5 11L5 11" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
        {/* Input line - bottom */}
        <line className="lgc-flow" x1="1.5" y1="14.5" x2="5" y2="14.5" stroke="#a5b4fc" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        {/* Gate 2 - bottom (OR gate shape) */}
        <path d="M5 11L5 17.5L9 17.5C11.5 17.5 13 16 13 14.25C13 12.5 11.5 11 9 11Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M5 11L5 17.5L9 17.5C11.5 17.5 13 16 13 14.25C13 12.5 11.5 11 9 11Z" fill="#c7d2fe" opacity="0.15" />
        {/* Curved indent for OR */}
        <path d="M5 11.5C6 13 6 15.5 5 17" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
        {/* Gate 2 core */}
        <circle className="lgc-glow" cx="8.5" cy="14.25" r="0.5" fill="#f97316" opacity="0.5" />
        {/* Final output */}
        <line className="lgc-flow" x1="13" y1="14.25" x2="18.5" y2="14.25" stroke="#f97316" strokeWidth="0.9" strokeLinecap="round" opacity="0.5" />
        {/* Output tip */}
        <circle className="lgc-glow" cx="18.5" cy="14.25" r="0.45" fill="#f97316" opacity="0.6" />
        {/* Input dots */}
        <circle cx="1.5" cy="5.5" r="0.4" fill="#a5b4fc" opacity="0.5" />
        <circle cx="1.5" cy="8.5" r="0.4" fill="#a5b4fc" opacity="0.5" />
        <circle cx="1.5" cy="14.5" r="0.4" fill="#a5b4fc" opacity="0.5" />
        {/* Output dot gate 1 */}
        <circle className="lgc-glow" cx="15.5" cy="7" r="0.35" fill="#facc15" opacity="0.5" />
        {/* Highlight */}
        <path d="M6 4.5C7 4 8 3.8 9 3.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
