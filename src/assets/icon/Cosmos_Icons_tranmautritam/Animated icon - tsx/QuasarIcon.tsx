export default function QuasarIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes qsrSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes qsrJet { 0%, 100% { opacity: 0.3; transform: scaleY(1); } 50% { opacity: 0.7; transform: scaleY(1.1); } }
        @keyframes qsrGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
        @keyframes qsrS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes qsrS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes qsrS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .qsr-disk { animation: qsrSpin 8s linear infinite; transform-origin: 10px 10px; }
        .qsr-jet { animation: qsrJet 2s ease-in-out infinite; transform-origin: 10px 10px; }
        .qsr-glow { animation: qsrGlow 2s ease-in-out infinite; }
        .qsr-s1 { animation: qsrS1 3.2s ease-in-out infinite 0.3s; }
        .qsr-s2 { animation: qsrS2 2.8s ease-in-out infinite 1s; }
        .qsr-s3 { animation: qsrS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="qsr-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="qsr-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="qsr-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Jets */}
      <g className="qsr-jet">
        <path d="M10 4L9 1.5L10 2.5L11 1.5Z" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
        <path d="M10 16L9 18.5L10 17.5L11 18.5Z" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
        <line x1="10" y1="2" x2="10" y2="4.5" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        <line x1="10" y1="15.5" x2="10" y2="18" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      </g>
      {/* Accretion disk */}
      <g className="qsr-disk">
        <ellipse cx="10" cy="10" rx="8" ry="2.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.4" />
        <ellipse cx="10" cy="10" rx="6" ry="1.8" stroke="#6366f1" strokeWidth="0.8" fill="none" opacity="0.5" />
      </g>
      {/* Core */}
      <circle cx="10" cy="10" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="10" r="3" fill="#c7d2fe" opacity="0.2" />
      <circle cx="10" cy="10" r="1.5" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.4" />
      <circle className="qsr-glow" cx="10" cy="10" r="0.8" fill="#f97316" opacity="0.7" />
      <circle cx="10" cy="10" r="0.35" fill="#facc15" opacity="0.6" />
      {/* Highlight */}
      <path d="M8 8C8.5 7.5 9 7.2 10 7.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
