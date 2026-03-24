export default function WormholeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes wrmSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes wrmPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.03); } }
        @keyframes wrmGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes wrmS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes wrmS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes wrmS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .wrm-outer { animation: wrmSpin 10s linear infinite; transform-origin: 10px 10px; }
        .wrm-inner { animation: wrmSpin 6s linear infinite reverse; transform-origin: 10px 10px; }
        .wrm-core { animation: wrmPulse 2.5s ease-in-out infinite; transform-origin: 10px 10px; }
        .wrm-glow { animation: wrmGlow 2s ease-in-out infinite; }
        .wrm-s1 { animation: wrmS1 3.2s ease-in-out infinite 0.3s; }
        .wrm-s2 { animation: wrmS2 2.8s ease-in-out infinite 1s; }
        .wrm-s3 { animation: wrmS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="wrm-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="wrm-s2" cx="17.5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="wrm-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Outer ring */}
      <g className="wrm-outer">
        <circle cx="10" cy="10" r="8" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="8" fill="#c7d2fe" opacity="0.08" />
        {/* Spiral arm hints */}
        <path d="M10 2C14 2 17 4 17.5 7" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
        <path d="M10 18C6 18 3 16 2.5 13" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
      {/* Middle ring */}
      <g className="wrm-inner">
        <circle cx="10" cy="10" r="5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="5" fill="#c7d2fe" opacity="0.12" />
        {/* Spiral arm hints */}
        <path d="M10 5C12.5 5 14.5 6.5 15 8.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
        <path d="M10 15C7.5 15 5.5 13.5 5 11.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.35" />
      </g>
      {/* Core */}
      <g className="wrm-core">
        <circle cx="10" cy="10" r="2.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="2.5" fill="#c7d2fe" opacity="0.2" />
        <circle cx="10" cy="10" r="1" fill="#6366f1" opacity="0.15" />
        <circle className="wrm-glow" cx="10" cy="10" r="0.5" fill="#f97316" opacity="0.7" />
      </g>
      {/* Warm ring accents */}
      <circle className="wrm-glow" cx="10" cy="2" r="0.4" fill="#f97316" opacity="0.5" />
      <circle className="wrm-glow" cx="10" cy="18" r="0.4" fill="#facc15" opacity="0.4" />
    </svg>
  );
}
