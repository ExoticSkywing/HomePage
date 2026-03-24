export default function MeteorIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes metFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-0.5px, 0.5px); } }
        @keyframes metTrail { 0%, 100% { opacity: 0.5; } 50% { opacity: 0.2; } }
        @keyframes metGlow { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.9; } }
        @keyframes metS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes metS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes metS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .met-body { animation: metFloat 2s ease-in-out infinite; transform-origin: center; }
        .met-trail { animation: metTrail 1.5s ease-in-out infinite; }
        .met-glow { animation: metGlow 2s ease-in-out infinite; }
        .met-s1 { animation: metS1 3.2s ease-in-out infinite 0.3s; }
        .met-s2 { animation: metS2 2.8s ease-in-out infinite 1s; }
        .met-s3 { animation: metS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="met-s1" cx="2" cy="16" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="met-s2" cx="5" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="met-s3" cx="17" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="met-body">
        {/* Trail lines */}
        <line className="met-trail" x1="11" y1="9" x2="18.5" y2="1.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <line className="met-trail" x1="9" y1="9.5" x2="17" y2="2" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" opacity="0.35" />
        <line className="met-trail" x1="10.5" y1="11" x2="18" y2="3.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.3" />
        {/* Warm inner trail */}
        <line className="met-glow" x1="10.5" y1="9.5" x2="15" y2="5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
        {/* Meteor head */}
        <circle cx="9" cy="11" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="9" cy="11" r="3" fill="#c7d2fe" opacity="0.25" />
        <circle cx="9" cy="11" r="1.5" stroke="#6366f1" strokeWidth="0.8" fill="none" />
        <circle cx="9" cy="11" r="1.5" fill="#f97316" opacity="0.15" />
        <circle className="met-glow" cx="9" cy="11" r="0.6" fill="#f97316" opacity="0.7" />
        {/* Surface detail */}
        <circle cx="7.5" cy="10" r="0.5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.3" />
        {/* Highlight */}
        <path d="M7 9C7.5 8.3 8.2 8.1 9 8.2" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
        {/* Trail tip accent */}
        <circle cx="18.5" cy="1.5" r="0.4" fill="#facc15" opacity="0.5" />
      </g>
    </svg>
  );
}
