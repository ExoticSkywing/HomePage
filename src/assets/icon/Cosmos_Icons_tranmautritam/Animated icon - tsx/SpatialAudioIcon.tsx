export default function SpatialAudioIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes saWaveL1 { 0%, 100% { opacity: 0.6; transform: translateX(0); } 50% { opacity: 0.2; transform: translateX(-0.5px); } }
        @keyframes saWaveL2 { 0%, 100% { opacity: 0.3; transform: translateX(0); } 50% { opacity: 0.7; transform: translateX(-0.8px); } }
        @keyframes saWaveR1 { 0%, 100% { opacity: 0.6; transform: translateX(0); } 50% { opacity: 0.2; transform: translateX(0.5px); } }
        @keyframes saWaveR2 { 0%, 100% { opacity: 0.3; transform: translateX(0); } 50% { opacity: 0.7; transform: translateX(0.8px); } }
        @keyframes saPulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }
        @keyframes saS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes saS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes saS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .sa-wl1 { animation: saWaveL1 2s ease-in-out infinite; transform-origin: 5px 10px; }
        .sa-wl2 { animation: saWaveL2 2s ease-in-out infinite 0.3s; transform-origin: 3px 10px; }
        .sa-wr1 { animation: saWaveR1 2s ease-in-out infinite; transform-origin: 15px 10px; }
        .sa-wr2 { animation: saWaveR2 2s ease-in-out infinite 0.3s; transform-origin: 17px 10px; }
        .sa-pulse { animation: saPulse 2.5s ease-in-out infinite; }
        .sa-s1 { animation: saS1 3s ease-in-out infinite 0.2s; }
        .sa-s2 { animation: saS2 2.6s ease-in-out infinite 0.9s; }
        .sa-s3 { animation: saS3 2.1s ease-in-out infinite 1.6s; }
      `}</style>
      <circle className="sa-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="sa-s2" cx="18" cy="3.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="sa-s3" cx="10" cy="18.5" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Head */}
      <circle cx="10" cy="8.5" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
      <circle cx="10" cy="8.5" r="3" fill="#c7d2fe" opacity="0.2" />
      {/* Face hints */}
      <circle cx="9" cy="8" r="0.4" fill="#a5b4fc" opacity="0.5" />
      <circle cx="11" cy="8" r="0.4" fill="#a5b4fc" opacity="0.5" />
      {/* Neck/body hint */}
      <path d="M8 11.5C8 11.5 8 13 7 14.5H13C12 13 12 11.5 12 11.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Left sound waves */}
      <path className="sa-wl1" d="M5.5 6.5C4.5 7.5 4.5 9.5 5.5 10.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path className="sa-wl2" d="M3.5 5C2 7 2 10 3.5 12" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      <path className="sa-wl2" d="M1.5 4C-0.5 7 -0.5 10 1.5 13" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.3" />
      {/* Right sound waves */}
      <path className="sa-wr1" d="M14.5 6.5C15.5 7.5 15.5 9.5 14.5 10.5" stroke="#6366f1" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path className="sa-wr2" d="M16.5 5C18 7 18 10 16.5 12" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      <path className="sa-wr2" d="M18.5 4C20.5 7 20.5 10 18.5 13" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.3" />
      {/* Warm accent */}
      <path className="sa-pulse" d="M4 8.5C4.5 8 5 7.5 5.5 7.5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
      <path className="sa-pulse" d="M16 8.5C15.5 8 15 7.5 14.5 7.5" stroke="#facc15" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.5" />
      {/* Headphone band hint */}
      <path d="M7.2 5.8C8 4 12 4 12.8 5.8" stroke="#a5b4fc" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.4" />
    </svg>
  );
}
