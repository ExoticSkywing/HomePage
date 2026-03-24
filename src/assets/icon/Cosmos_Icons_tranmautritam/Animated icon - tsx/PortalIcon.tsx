export default function PortalIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes portalPulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.03); opacity: 1; } }
        @keyframes portalGlow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
        @keyframes portalRing { 0%, 100% { opacity: 0.3; transform: scale(0.95); } 50% { opacity: 0.7; transform: scale(1.05); } }
        @keyframes portalSpin { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: -20; } }
        @keyframes portalS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes portalS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes portalS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .portal-group { animation: portalPulse 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .portal-glow { animation: portalGlow 2.5s ease-in-out infinite; }
        .portal-ring { animation: portalRing 2.5s ease-in-out infinite 0.5s; transform-origin: 10px 10px; }
        .portal-spin { animation: portalSpin 4s linear infinite; }
        .portal-s1 { animation: portalS1 3s ease-in-out infinite 0.2s; }
        .portal-s2 { animation: portalS2 2.6s ease-in-out infinite 0.9s; }
        .portal-s3 { animation: portalS3 2.1s ease-in-out infinite 1.6s; }
      `}</style>
      <circle className="portal-s1" cx="2" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="portal-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="portal-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Outer ring */}
      <circle className="portal-ring" cx="10" cy="10" r="7.5" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.3" />
      <g className="portal-group">
        {/* Portal arch */}
        <circle cx="10" cy="10" r="6" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="6" fill="#c7d2fe" opacity="0.1" />
        {/* Spinning energy ring */}
        <circle className="portal-spin" cx="10" cy="10" r="4.5" stroke="#a5b4fc" strokeWidth="0.8" fill="none" opacity="0.5" strokeDasharray="4 3" />
        {/* Inner portal */}
        <circle cx="10" cy="10" r="3" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle className="portal-glow" cx="10" cy="10" r="3" fill="#c7d2fe" opacity="0.3" />
        {/* Depth spiral lines */}
        <path className="portal-glow" d="M8 8C9 7 11 7 12 8" stroke="#f97316" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />
        <path className="portal-glow" d="M8.5 10C9 9.5 11 9.5 11.5 10" stroke="#facc15" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        <path className="portal-glow" d="M8.5 12C9 11.5 11 11.5 11.5 12" stroke="#f97316" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Center point */}
        <circle className="portal-glow" cx="10" cy="10" r="0.8" fill="#f97316" opacity="0.5" />
      </g>
    </svg>
  );
}
