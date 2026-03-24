export default function StarshipIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes stpFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-0.3px, -0.6px); } }
        @keyframes stpFlame { 0%, 100% { opacity: 0.7; transform: scaleX(1); } 25% { opacity: 1; transform: scaleX(1.1); } 50% { opacity: 0.6; transform: scaleX(0.9); } 75% { opacity: 0.9; transform: scaleX(1.05); } }
        @keyframes stpGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes stpS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes stpS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes stpS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .stp-body { animation: stpFloat 2.5s ease-in-out infinite; transform-origin: center; }
        .stp-flame { animation: stpFlame 0.4s ease-in-out infinite; transform-origin: 4px 10px; }
        .stp-glow { animation: stpGlow 2.5s ease-in-out infinite; }
        .stp-s1 { animation: stpS1 3.2s ease-in-out infinite 0.3s; }
        .stp-s2 { animation: stpS2 2.8s ease-in-out infinite 1s; }
        .stp-s3 { animation: stpS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="stp-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="stp-s2" cx="17.5" cy="5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="stp-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Engine flame */}
      <g className="stp-flame">
        <path d="M4.5 8.5C4.5 8.5 1.5 9.5 1 10C1.5 10.5 4.5 11.5 4.5 11.5" stroke="#f97316" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M4 9.2C4 9.2 2.5 9.8 2.2 10C2.5 10.2 4 10.8 4 10.8" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7" />
      </g>
      <g className="stp-body">
        {/* Ship body */}
        <path d="M5 7.5C5 7.5 8 6 12 5C15 4.3 18 4 18 10C18 16 15 15.7 12 15C8 14 5 12.5 5 12.5Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M5 7.5C5 7.5 8 6 12 5C15 4.3 18 4 18 10C18 16 15 15.7 12 15C8 14 5 12.5 5 12.5Z" fill="#c7d2fe" opacity="0.2" />
        {/* Wing top */}
        <path d="M8 6.5L6 3.5L10 5.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Wing bottom */}
        <path d="M8 13.5L6 16.5L10 14.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Cockpit window */}
        <ellipse cx="15" cy="10" rx="1.5" ry="1.8" stroke="#6366f1" strokeWidth="1" fill="none" />
        <ellipse cx="15" cy="10" rx="1.5" ry="1.8" fill="#c7d2fe" opacity="0.3" />
        <ellipse className="stp-glow" cx="15" cy="10" rx="0.5" ry="0.7" fill="#f97316" opacity="0.3" />
        {/* Body stripe */}
        <line x1="7" y1="10" x2="12" y2="10" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        {/* Highlight */}
        <path d="M7 7C9 6 12 5.3 15 5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Nose tip */}
        <circle className="stp-glow" cx="18" cy="10" r="0.4" fill="#f97316" opacity="0.5" />
      </g>
    </svg>
  );
}
