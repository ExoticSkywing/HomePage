export default function BlackHoleIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes bhSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes bhPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        @keyframes bhGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes bhS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes bhS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes bhS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .bh-disk { animation: bhSpin 8s linear infinite; transform-origin: 10px 10px; }
        .bh-core { animation: bhPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .bh-glow { animation: bhGlow 2.5s ease-in-out infinite; }
        .bh-s1 { animation: bhS1 3.2s ease-in-out infinite 0.3s; }
        .bh-s2 { animation: bhS2 2.8s ease-in-out infinite 1s; }
        .bh-s3 { animation: bhS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="bh-s1" cx="2" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="bh-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="bh-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="bh-disk">
        <ellipse cx="10" cy="10" rx="8" ry="3" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" strokeDasharray="3 2" />
        <ellipse cx="10" cy="10" rx="6" ry="2.2" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
        <path className="bh-glow" d="M3 9C4 7.5 6 6 8 5.5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
        <path className="bh-glow" d="M17 11C16 12.5 14 14 12 14.5" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
        <path className="bh-glow" d="M4 9.5C5 8 6.5 6.5 8.5 6" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
      <g className="bh-core">
        <circle cx="10" cy="10" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="3" fill="#6366f1" opacity="0.15" />
        <circle cx="10" cy="10" r="1.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="1.5" fill="#6366f1" opacity="0.3" />
        <path d="M8.5 8.5C9 8 9.8 7.8 10.5 8" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
      <ellipse className="bh-disk" cx="10" cy="10" rx="8" ry="3" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" clipPath="url(#bhClipFront)" />
      <defs>
        <clipPath id="bhClipFront"><rect x="0" y="10" width="20" height="10" /></clipPath>
      </defs>
    </svg>
  );
}
