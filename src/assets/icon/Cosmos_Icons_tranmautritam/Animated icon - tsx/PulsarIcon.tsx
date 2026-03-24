export default function PulsarIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }}>
      <style>{`
        @keyframes plsSpin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes plsPulse { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.05); opacity: 1; } }
        @keyframes plsBeam { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.7; } }
        @keyframes plsGlow { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
        @keyframes plsS1 { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        @keyframes plsS2 { 0%, 100% { opacity: 0.8; } 50% { opacity: 0; } }
        @keyframes plsS3 { 0%, 100% { opacity: 0.3; } 40% { opacity: 1; } 80% { opacity: 0; } }
        .pls-beams { animation: plsSpin 4s linear infinite; transform-origin: 10px 10px; }
        .pls-core { animation: plsPulse 1.5s ease-in-out infinite; transform-origin: 10px 10px; }
        .pls-beam { animation: plsBeam 1.5s ease-in-out infinite; }
        .pls-glow { animation: plsGlow 2s ease-in-out infinite; }
        .pls-s1 { animation: plsS1 3.2s ease-in-out infinite 0.3s; }
        .pls-s2 { animation: plsS2 2.8s ease-in-out infinite 1s; }
        .pls-s3 { animation: plsS3 2.2s ease-in-out infinite 1.8s; }
      `}</style>
      <circle className="pls-s1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="pls-s2" cx="17.5" cy="4.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="pls-s3" cx="3" cy="17.5" r="0.35" fill="#a5b4fc" opacity="0" />
      {/* Emission beams - rotating */}
      <g className="pls-beams">
        <path className="pls-beam" d="M10 7L8.5 1.5" stroke="#f97316" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
        <path className="pls-beam" d="M10 7L11.5 1.5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35" />
        <path className="pls-beam" d="M10 13L11.5 18.5" stroke="#f97316" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
        <path className="pls-beam" d="M10 13L8.5 18.5" stroke="#f97316" strokeWidth="0.7" strokeLinecap="round" fill="none" opacity="0.35" />
        {/* Beam tips */}
        <circle className="pls-glow" cx="9" cy="1.5" r="0.4" fill="#facc15" opacity="0.5" />
        <circle className="pls-glow" cx="11" cy="18.5" r="0.4" fill="#facc15" opacity="0.5" />
      </g>
      {/* Magnetic field lines */}
      <ellipse cx="10" cy="10" rx="7" ry="4.5" stroke="#a5b4fc" strokeWidth="0.6" fill="none" opacity="0.3" />
      <ellipse cx="10" cy="10" rx="5.5" ry="3.5" stroke="#a5b4fc" strokeWidth="0.5" fill="none" opacity="0.25" />
      {/* Core star */}
      <g className="pls-core">
        <circle cx="10" cy="10" r="3" stroke="#6366f1" strokeWidth="1.2" fill="none" />
        <circle cx="10" cy="10" r="3" fill="#c7d2fe" opacity="0.25" />
        <circle cx="10" cy="10" r="1.5" stroke="#6366f1" strokeWidth="1" fill="none" />
        <circle cx="10" cy="10" r="1.5" fill="#6366f1" opacity="0.2" />
        <circle className="pls-glow" cx="10" cy="10" r="0.6" fill="#f97316" opacity="0.7" />
        {/* Highlight */}
        <path d="M8.5 8.5C9 8 9.5 7.8 10.2 7.9" stroke="#a5b4fc" strokeWidth="0.5" strokeLinecap="round" fill="none" opacity="0.4" />
      </g>
    </svg>
  );
}
