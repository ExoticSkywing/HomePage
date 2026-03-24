export default function CloudAIIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes caiFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.5px); } }
        @keyframes caiSpark { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.15); opacity: 1; } }
        @keyframes caiGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes caiS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes caiS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes caiS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cai-body { animation: caiFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .cai-spark { animation: caiSpark 2s ease-in-out infinite; transform-origin: 12px 8px; }
        .cai-glow { animation: caiGlow 2.5s ease-in-out infinite; }
        .cai-s1 { animation: caiS1 3.2s ease-in-out infinite 0.3s; }
        .cai-s2 { animation: caiS2 2.8s ease-in-out infinite 1s; }
        .cai-s3 { animation: caiS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cai-s1" cx="2" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cai-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cai-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="cai-body">
        {/* Cloud shape */}
        <path d="M5.5 14H4.5C2.6 14 1.5 12.5 1.5 11C1.5 9.5 2.6 8 4.5 8C4.5 8 4.7 8 4.8 8C5.4 5.7 7.5 4 10 4C12.5 4 14.5 5.5 15.2 7.5C16.8 7.7 18 9 18 10.5C18 12.3 16.5 14 14.5 14H14" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M5.5 14H4.5C2.6 14 1.5 12.5 1.5 11C1.5 9.5 2.6 8 4.5 8C4.5 8 4.7 8 4.8 8C5.4 5.7 7.5 4 10 4C12.5 4 14.5 5.5 15.2 7.5C16.8 7.7 18 9 18 10.5C18 12.3 16.5 14 14.5 14H14" fill="#c7d2fe" opacity="0.2" />

        {/* Highlight */}
        <path d="M7 5.5C8 4.8 9 4.5 10 4.5" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />

        {/* AI sparkle inside cloud */}
        <g className="cai-spark">
          <path d="M12 5.5L12.5 7.5L14.5 8L12.5 8.5L12 10.5L11.5 8.5L9.5 8L11.5 7.5Z" stroke="#6366f1" strokeWidth="0.9" strokeLinejoin="round" fill="none" />
          <circle cx="12" cy="8" r="0.4" fill="#f97316" opacity="0.6" />
        </g>

        {/* Circuit traces inside cloud */}
        <path d="M5 11L7 11L7 9.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />
        <path d="M15 11L13 11L13 9.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5" />

        {/* Connection dots below */}
        <line x1="7" y1="14" x2="7" y2="16.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line x1="10" y1="14" x2="10" y2="17.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <line x1="13" y1="14" x2="13" y2="16.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
        <circle cx="7" cy="16.5" r="0.4" fill="#f97316" opacity="0.5" />
        <circle cx="10" cy="17.5" r="0.4" fill="#f97316" opacity="0.5" />
        <circle cx="13" cy="16.5" r="0.4" fill="#facc15" opacity="0.5" />
      </g>
    </svg>
  );
}
