export default function LaunchPadIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes lpSmoke { 0%, 100% { opacity: 0.15; transform: translateY(0) scaleX(1); } 50% { opacity: 0.35; transform: translateY(0.5px) scaleX(1.1); } }
        @keyframes lpFlame { 0%, 100% { opacity: 0.5; transform: scaleY(1); } 50% { opacity: 0.9; transform: scaleY(1.2); } }
        @keyframes lpGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes lpS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes lpS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes lpS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .lp-smoke { animation: lpSmoke 2s ease-in-out infinite; transform-origin: 10px 17px; }
        .lp-flame { animation: lpFlame 0.8s ease-in-out infinite; transform-origin: 10px 13px; }
        .lp-glow { animation: lpGlow 2.5s ease-in-out infinite; }
        .lp-s1 { animation: lpS1 3.2s ease-in-out infinite 0.3s; }
        .lp-s2 { animation: lpS2 2.8s ease-in-out infinite 1s; }
        .lp-s3 { animation: lpS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="lp-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="lp-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="lp-s3" cx="3" cy="16" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Smoke cloud */}
      <ellipse className="lp-smoke" cx="10" cy="17.5" rx="6" ry="1.5" fill="#a5b4fc" opacity="0.15" />
      {/* Platform base */}
      <rect x="3" y="16" width="14" height="1.5" rx="0.5" stroke="#6366f1" strokeWidth="1" fill="none" />
      <rect x="3" y="16" width="14" height="1.5" rx="0.5" fill="#c7d2fe" opacity="0.15" />
      {/* Support tower */}
      <path d="M4 16V9" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M4.5 10L6.5 10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M4.5 12L6 12" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      <path d="M4.5 14L5.5 14" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.4" />
      {/* Small rocket on pad */}
      <path d="M10 3C10 3 8 5.5 8 9C8 11 8.5 12 10 12C11.5 12 12 11 12 9C12 5.5 10 3 10 3Z" stroke="#6366f1" strokeWidth="1.2" strokeLinejoin="round" fill="none" />
      <path d="M10 3C10 3 8 5.5 8 9C8 11 8.5 12 10 12C11.5 12 12 11 12 9C12 5.5 10 3 10 3Z" fill="#c7d2fe" opacity="0.15" />
      {/* Fins */}
      <path d="M8 11L6.5 13.5L8 12" stroke="#6366f1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M12 11L13.5 13.5L12 12" stroke="#6366f1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Rocket window */}
      <circle cx="10" cy="7" r="0.8" stroke="#a5b4fc" strokeWidth="0.6" fill="none" />
      <circle className="lp-glow" cx="10" cy="7" r="0.35" fill="#f97316" opacity="0.5" />
      {/* Flame */}
      <g className="lp-flame">
        <path d="M9 12.5L10 15L11 12.5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.6" />
        <circle cx="10" cy="13.5" r="0.3" fill="#facc15" opacity="0.5" />
      </g>
      {/* Highlight */}
      <path d="M9 4.5C9.3 4 9.6 3.5 10 3.2" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
