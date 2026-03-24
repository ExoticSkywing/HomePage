export default function TelescopeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes teleSway { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(1.5deg); } }
        @keyframes teleLensGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes teleStarPop { 0%, 100% { opacity: 0; transform: scale(0.5); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes teleS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes teleS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes teleS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .tele-body { animation: teleSway 3s ease-in-out infinite; transform-origin: 10px 17px; }
        .tele-lens { animation: teleLensGlow 2.5s ease-in-out infinite; }
        .tele-star-pop { animation: teleStarPop 2s ease-in-out infinite; transform-origin: 5px 3px; }
        .tele-s1 { animation: teleS1 3.2s ease-in-out infinite 0.3s; }
        .tele-s2 { animation: teleS2 2.8s ease-in-out infinite 1s; }
        .tele-s3 { animation: teleS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="tele-s1" cx="17" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="tele-s2" cx="2" cy="5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="tele-s3" cx="16" cy="15" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="tele-body">
        <line x1="7" y1="17.5" x2="10" y2="12" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="13" y1="17.5" x2="10" y2="12" stroke="#a5b4fc" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="10" y1="17.5" x2="10" y2="13" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <rect x="5.5" y="5" width="9" height="4" rx="2" transform="rotate(-30 10 7)" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <rect x="5.5" y="5" width="9" height="4" rx="2" transform="rotate(-30 10 7)" fill="#c7d2fe" opacity="0.2" />
        <circle className="tele-lens" cx="5.8" cy="4.5" r="1.8" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle className="tele-lens" cx="5.8" cy="4.5" r="1.8" fill="#c7d2fe" opacity="0.3" />
        <path className="tele-lens" d="M5 3.2C5.4 2.8 6 2.7 6.6 2.9" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
        <path className="tele-lens" d="M5.3 3.6C5.6 3.3 6 3.2 6.3 3.4" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
      <g className="tele-star-pop">
        <path d="M5 1.5L5.3 2.5L6.3 2.8L5.3 3.1L5 4.1L4.7 3.1L3.7 2.8L4.7 2.5Z" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M5 1.5L5.3 2.5L6.3 2.8L5.3 3.1L5 4.1L4.7 3.1L3.7 2.8L4.7 2.5Z" fill="#facc15" opacity="0.25" />
      </g>
    </svg>
  );
}
