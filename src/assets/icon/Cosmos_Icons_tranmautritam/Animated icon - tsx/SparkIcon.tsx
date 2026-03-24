export default function SparkIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes spkPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.04); } }
        @keyframes spkPulse2 { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        @keyframes spkGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes spkS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes spkS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes spkS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .spk-main { animation: spkPulse 2.5s ease-in-out infinite; transform-origin: 10px 9px; }
        .spk-sm1 { animation: spkPulse2 2s ease-in-out infinite 0.5s; transform-origin: 4.5px 4.5px; }
        .spk-sm2 { animation: spkPulse2 2.2s ease-in-out infinite 1s; transform-origin: 16px 15px; }
        .spk-glow { animation: spkGlow 2.5s ease-in-out infinite; }
        .spk-s1 { animation: spkS1 3.2s ease-in-out infinite 0.3s; }
        .spk-s2 { animation: spkS2 2.8s ease-in-out infinite 1s; }
        .spk-s3 { animation: spkS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="spk-s1" cx="1.5" cy="12" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="spk-s2" cx="18.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="spk-s3" cx="14" cy="18" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Main 4-point star */}
      <g className="spk-main">
        <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
        <path d="M10 2L11.5 7.5L17 9L11.5 10.5L10 16L8.5 10.5L3 9L8.5 7.5Z" fill="#c7d2fe" opacity="0.2" />
        {/* Center glow */}
        <circle className="spk-glow" cx="10" cy="9" r="1.2" fill="#f97316" opacity="0.15" />
        <circle className="spk-glow" cx="10" cy="9" r="0.5" fill="#f97316" opacity="0.6" />
        {/* Highlight */}
        <path d="M9 5C9.5 4 10 3.5 10 3" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
      {/* Small sparkle top-left */}
      <g className="spk-sm1">
        <path d="M4.5 1.5L5 3.5L7 4L5 4.5L4.5 6.5L4 4.5L2 4L4 3.5Z" stroke="#a5b4fc" strokeWidth="0.8" strokeLinejoin="round" fill="none" opacity="0.6" />
        <circle className="spk-glow" cx="4.5" cy="4" r="0.3" fill="#facc15" opacity="0.5" />
      </g>
      {/* Small sparkle bottom-right */}
      <g className="spk-sm2">
        <path d="M16 13L16.3 14.5L18 15L16.3 15.5L16 17L15.7 15.5L14 15L15.7 14.5Z" stroke="#a5b4fc" strokeWidth="0.7" strokeLinejoin="round" fill="none" opacity="0.5" />
        <circle className="spk-glow" cx="16" cy="15" r="0.25" fill="#f97316" opacity="0.5" />
      </g>
    </svg>
  );
}
