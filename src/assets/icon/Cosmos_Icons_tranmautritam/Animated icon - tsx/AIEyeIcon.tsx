export default function AIEyeIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes eyeScan { 0%, 100% { transform: translateX(0); } 30% { transform: translateX(0.8px); } 70% { transform: translateX(-0.8px); } }
        @keyframes eyePulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes eyeScanLine { 0% { transform: translateY(-2px); opacity: 0; } 50% { opacity: 0.7; } 100% { transform: translateY(2px); opacity: 0; } }
        @keyframes eyeS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes eyeS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes eyeS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .eye-iris { animation: eyeScan 3s ease-in-out infinite; transform-origin: 10px 10px; }
        .eye-pulse { animation: eyePulse 2.5s ease-in-out infinite; }
        .eye-scan-line { animation: eyeScanLine 2s ease-in-out infinite; transform-origin: 10px 10px; }
        .eye-s1 { animation: eyeS1 3.1s ease-in-out infinite 0.4s; }
        .eye-s2 { animation: eyeS2 2.7s ease-in-out infinite 1.1s; }
        .eye-s3 { animation: eyeS3 2.3s ease-in-out infinite 1.7s; }
      `}</style>
      <circle className="eye-s1" cx="2" cy="4" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="eye-s2" cx="18" cy="3.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="eye-s3" cx="3" cy="16.5" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Eye shape */}
      <path d="M2 10C2 10 5.5 4.5 10 4.5C14.5 4.5 18 10 18 10C18 10 14.5 15.5 10 15.5C5.5 15.5 2 10 2 10Z" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M2 10C2 10 5.5 4.5 10 4.5C14.5 4.5 18 10 18 10C18 10 14.5 15.5 10 15.5C5.5 15.5 2 10 2 10Z" fill="#c7d2fe" opacity="0.1" />
      {/* Iris + pupil with scan animation */}
      <g className="eye-iris">
        <circle cx="10" cy="10" r="3.2" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="3.2" fill="#c7d2fe" opacity="0.3" />
        <circle cx="10" cy="10" r="1.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="1.5" fill="#6366f1" opacity="0.2" />
        {/* Circuit pattern in iris */}
        <line className="eye-pulse" x1="10" y1="7" x2="10" y2="8.5" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
        <line className="eye-pulse" x1="10" y1="11.5" x2="10" y2="13" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
        <line className="eye-pulse" x1="7" y1="10" x2="8.5" y2="10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
        <line className="eye-pulse" x1="11.5" y1="10" x2="13" y2="10" stroke="#a5b4fc" strokeWidth="0.6" strokeLinecap="round" opacity="0.5" />
        {/* Warm accent */}
        <circle className="eye-pulse" cx="10" cy="10" r="0.5" fill="#f97316" opacity="0.6" />
      </g>
      {/* Scan line */}
      <line className="eye-scan-line" x1="7" y1="10" x2="13" y2="10" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" opacity="0.5" />
      {/* Eyelid highlights */}
      <path d="M4 7.5C5.5 5.5 7.5 4.8 10 4.8" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
      <path className="eye-pulse" d="M15 7C14.5 6 13 5 11 4.8" stroke="#facc15" strokeWidth="0.6" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
