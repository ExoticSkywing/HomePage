export default function WandIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes wandWave { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(2deg); } 75% { transform: rotate(-2deg); } }
        @keyframes wandSpark1 { 0%, 100% { opacity: 0.2; transform: scale(0.7); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes wandSpark2 { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 0.2; transform: scale(0.6); } }
        @keyframes wandGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes wandS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes wandS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes wandS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .wand-body { animation: wandWave 3s ease-in-out infinite; transform-origin: 14px 16px; }
        .wand-spark1 { animation: wandSpark1 2s ease-in-out infinite; transform-origin: 5.5px 4px; }
        .wand-spark2 { animation: wandSpark2 2.5s ease-in-out infinite 0.5s; transform-origin: 3px 8px; }
        .wand-spark3 { animation: wandSpark1 2.2s ease-in-out infinite 1s; transform-origin: 8.5px 7.5px; }
        .wand-glow { animation: wandGlow 2.5s ease-in-out infinite; }
        .wand-s1 { animation: wandS1 3s ease-in-out infinite 0.6s; }
        .wand-s2 { animation: wandS2 2.6s ease-in-out infinite 1.3s; }
        .wand-s3 { animation: wandS3 2.2s ease-in-out infinite 0.1s; }
      `}</style>
      <circle className="wand-s1" cx="17" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="wand-s2" cx="1.5" cy="14" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="wand-s3" cx="16" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="wand-body">
        {/* Wand stick */}
        <line x1="7" y1="11" x2="16" y2="18" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="7.5" y1="11.5" x2="15" y2="17" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
        {/* Wand tip accent */}
        <circle cx="7" cy="11" r="1" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle className="wand-glow" cx="7" cy="11" r="1" fill="#c7d2fe" opacity="0.4" />
        <circle className="wand-glow" cx="7" cy="11" r="0.4" fill="#f97316" opacity="0.6" />
      </g>
      {/* Sparkle burst at tip */}
      <g className="wand-spark1">
        <path d="M5.5 2L5.8 3.5L7.3 3.8L5.8 4.2L5.5 5.7L5.2 4.2L3.7 3.8L5.2 3.5Z" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M5.5 2L5.8 3.5L7.3 3.8L5.8 4.2L5.5 5.7L5.2 4.2L3.7 3.8L5.2 3.5Z" fill="#facc15" opacity="0.25" />
      </g>
      <g className="wand-spark2">
        <path d="M2.5 6.5L2.7 7.5L3.7 7.8L2.7 8.1L2.5 9.1L2.3 8.1L1.3 7.8L2.3 7.5Z" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      <g className="wand-spark3">
        <path d="M9 5.5L9.2 6.5L10.2 6.8L9.2 7L9 8L8.8 7L7.8 6.8L8.8 6.5Z" stroke="#6366f1" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M9 5.5L9.2 6.5L10.2 6.8L9.2 7L9 8L8.8 7L7.8 6.8L8.8 6.5Z" fill="#f97316" opacity="0.2" />
      </g>
    </svg>
  );
}
