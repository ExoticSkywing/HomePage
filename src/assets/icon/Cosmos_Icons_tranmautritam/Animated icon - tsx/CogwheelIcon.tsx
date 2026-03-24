export default function CogwheelIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes cogSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes cogGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes cogS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes cogS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes cogS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .cog-gear { animation: cogSpin 8s linear infinite; transform-origin: 10px 10px; }
        .cog-glow { animation: cogGlow 2.5s ease-in-out infinite; }
        .cog-s1 { animation: cogS1 3.2s ease-in-out infinite 0.3s; }
        .cog-s2 { animation: cogS2 2.8s ease-in-out infinite 1s; }
        .cog-s3 { animation: cogS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="cog-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="cog-s2" cx="18" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="cog-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="cog-gear">
        {/* Gear teeth */}
        <path d="M9 1.5H11V3.5H9Z" fill="#a5b4fc" opacity="0.5" />
        <path d="M9 16.5H11V18.5H9Z" fill="#a5b4fc" opacity="0.5" />
        <path d="M1.5 9V11H3.5V9Z" fill="#a5b4fc" opacity="0.5" />
        <path d="M16.5 9V11H18.5V9Z" fill="#a5b4fc" opacity="0.5" />
        <path d="M3.7 3.7L5.1 5.1L6.2 4L4.8 2.6Z" fill="#a5b4fc" opacity="0.4" />
        <path d="M14.9 14.9L16.3 16.3L17.4 15.2L16 13.8Z" fill="#a5b4fc" opacity="0.4" />
        <path d="M3.7 16.3L5.1 14.9L4 13.8L2.6 15.2Z" fill="#a5b4fc" opacity="0.4" />
        <path d="M14.9 5.1L16.3 3.7L15.2 2.6L13.8 4Z" fill="#a5b4fc" opacity="0.4" />
        {/* Gear body */}
        <circle cx="10" cy="10" r="6" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="6" fill="#c7d2fe" opacity="0.15" />
      </g>
      {/* Inner ring - doesn't rotate */}
      <circle cx="10" cy="10" r="3.5" stroke="#6366f1" strokeWidth="1" fill="none" />
      <circle cx="10" cy="10" r="3.5" fill="#c7d2fe" opacity="0.2" />
      {/* AI core */}
      <circle cx="10" cy="10" r="1.5" stroke="#6366f1" strokeWidth="0.8" fill="none" />
      <circle cx="10" cy="10" r="1.5" fill="#f97316" opacity="0.12" />
      <circle className="cog-glow" cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.7" />
      {/* Circuit traces */}
      <path d="M8 10L7 10L7 8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
      <path d="M12 10L13 10L13 12" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.4" />
      {/* Highlight */}
      <path d="M7 6.5C7.8 5.5 8.8 5 10 4.8" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      {/* Warm accents */}
      <circle className="cog-glow" cx="10" cy="4" r="0.3" fill="#facc15" opacity="0.5" />
      <circle className="cog-glow" cx="16" cy="10" r="0.3" fill="#f97316" opacity="0.4" />
    </svg>
  );
}
