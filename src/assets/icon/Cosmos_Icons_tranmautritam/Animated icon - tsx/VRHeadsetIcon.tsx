export default function VRHeadsetIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes vrhFloat { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(0, -0.5px); } }
        @keyframes vrhLensGlow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.6; } }
        @keyframes vrhScan { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes vrhS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes vrhS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes vrhS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .vrh-body { animation: vrhFloat 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .vrh-lens { animation: vrhLensGlow 2.5s ease-in-out infinite; }
        .vrh-scan { animation: vrhScan 2s ease-in-out infinite; }
        .vrh-s1 { animation: vrhS1 3.2s ease-in-out infinite 0.3s; }
        .vrh-s2 { animation: vrhS2 2.8s ease-in-out infinite 1s; }
        .vrh-s3 { animation: vrhS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="vrh-s1" cx="2" cy="3.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="vrh-s2" cx="18" cy="4" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="vrh-s3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />
      <g className="vrh-body">
        {/* Headset body */}
        <path d="M2.5 7C2.5 5.9 3.4 5 4.5 5H15.5C16.6 5 17.5 5.9 17.5 7V12C17.5 13.1 16.6 14 15.5 14H13L10 16L7 14H4.5C3.4 14 2.5 13.1 2.5 12V7Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M2.5 7C2.5 5.9 3.4 5 4.5 5H15.5C16.6 5 17.5 5.9 17.5 7V12C17.5 13.1 16.6 14 15.5 14H13L10 16L7 14H4.5C3.4 14 2.5 13.1 2.5 12V7Z" fill="#c7d2fe" opacity="0.15" />
        {/* Strap */}
        <path d="M2.5 8.5C1.5 8 1 7.5 1 7" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        <path d="M17.5 8.5C18.5 8 19 7.5 19 7" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
        {/* Left lens */}
        <circle cx="7" cy="9.5" r="2.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle className="vrh-lens" cx="7" cy="9.5" r="2.5" fill="#c7d2fe" opacity="0.3" />
        <circle className="vrh-lens" cx="7" cy="9.5" r="1.2" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path className="vrh-scan" d="M5.5 8.5C6 8 6.8 7.8 7.5 8" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Right lens */}
        <circle cx="13" cy="9.5" r="2.5" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle className="vrh-lens" cx="13" cy="9.5" r="2.5" fill="#c7d2fe" opacity="0.3" />
        <circle className="vrh-lens" cx="13" cy="9.5" r="1.2" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.4" />
        <path className="vrh-scan" d="M11.5 8.5C12 8 12.8 7.8 13.5 8" stroke="#facc15" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
        {/* Bridge */}
        <path d="M9.5 9.5C9.8 8.5 10.2 8.5 10.5 9.5" stroke="#a5b4fc" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.5" />
      </g>
    </svg>
  );
}
