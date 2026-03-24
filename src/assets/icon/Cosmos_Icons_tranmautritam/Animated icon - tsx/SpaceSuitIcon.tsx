export default function SpaceSuitIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes ssuFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-0.4px); } }
        @keyframes ssuGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes ssuS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes ssuS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes ssuS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .ssu-body { animation: ssuFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .ssu-glow { animation: ssuGlow 2.5s ease-in-out infinite; }
        .ssu-s1 { animation: ssuS1 3.2s ease-in-out infinite 0.3s; }
        .ssu-s2 { animation: ssuS2 2.8s ease-in-out infinite 1s; }
        .ssu-s3 { animation: ssuS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="ssu-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="ssu-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="ssu-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="ssu-body">
        {/* Helmet */}
        <path d="M7 7C7 4.5 8.3 3 10 3C11.7 3 13 4.5 13 7V8.5C13 9.5 12 10.5 10 10.5C8 10.5 7 9.5 7 8.5Z" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <path d="M7 7C7 4.5 8.3 3 10 3C11.7 3 13 4.5 13 7V8.5C13 9.5 12 10.5 10 10.5C8 10.5 7 9.5 7 8.5Z" fill="#c7d2fe" opacity="0.15" />
        {/* Visor */}
        <path d="M8 6.5C8 5.5 8.8 4.5 10 4.5C11.2 4.5 12 5.5 12 6.5V7.5C12 8.2 11.2 8.8 10 8.8C8.8 8.8 8 8.2 8 7.5Z" stroke="#a5b4fc" strokeWidth="0.7" fill="none" />
        <path d="M8 6.5C8 5.5 8.8 4.5 10 4.5C11.2 4.5 12 5.5 12 6.5V7.5C12 8.2 11.2 8.8 10 8.8C8.8 8.8 8 8.2 8 7.5Z" fill="#c7d2fe" opacity="0.2" />
        <circle className="ssu-glow" cx="10" cy="6.5" r="0.4" fill="#f97316" opacity="0.5" />
        {/* Torso */}
        <path d="M7 10.5V14.5C7 15.5 8 16.5 10 16.5C12 16.5 13 15.5 13 14.5V10.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <path d="M7 10.5V14.5C7 15.5 8 16.5 10 16.5C12 16.5 13 15.5 13 14.5V10.5" fill="#c7d2fe" opacity="0.1" />
        {/* Backpack */}
        <rect x="4.5" y="10" width="2" height="5" rx="0.5" stroke="#a5b4fc" strokeWidth="0.7" fill="none" opacity="0.5" />
        <rect x="4.5" y="10" width="2" height="5" rx="0.5" fill="#c7d2fe" opacity="0.1" />
        {/* Arms */}
        <path d="M7 11.5L4.5 13" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        <path d="M13 11.5L15.5 13" stroke="#6366f1" strokeWidth="1" strokeLinecap="round" />
        {/* Glove hints */}
        <circle cx="4" cy="13.3" r="0.5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        <circle cx="16" cy="13.3" r="0.5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* Chest panel */}
        <rect x="8.5" y="11.5" width="3" height="2" rx="0.3" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.35" />
        <circle className="ssu-glow" cx="10" cy="12.5" r="0.3" fill="#f97316" opacity="0.4" />
        {/* Highlight */}
        <path d="M8.5 4C9 3.5 9.5 3.2 10 3.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
