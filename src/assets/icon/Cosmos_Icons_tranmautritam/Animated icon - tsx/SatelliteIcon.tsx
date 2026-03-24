export default function SatelliteIcon({ size = 24 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <style>{`
        @keyframes satFloat {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(0.3px, -0.5px) rotate(1deg); }
        }
        @keyframes signalPulse1 {
          0% { opacity: 0.8; r: 1.5; }
          100% { opacity: 0; r: 3.5; }
        }
        @keyframes signalPulse2 {
          0% { opacity: 0.6; r: 1.5; }
          100% { opacity: 0; r: 5; }
        }
        @keyframes panelShimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes satStarTwinkle1 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes satStarTwinkle2 {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes satStarTwinkle3 {
          0%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
          80% { opacity: 0; }
        }
        .sat-body {
          animation: satFloat 3s ease-in-out infinite;
          transform-origin: 10px 10px;
        }
        .signal-ring1 {
          animation: signalPulse1 2s ease-out infinite;
          transform-origin: 14.5px 5.5px;
        }
        .signal-ring2 {
          animation: signalPulse2 2s ease-out infinite 0.5s;
          transform-origin: 14.5px 5.5px;
        }
        .panel-shimmer {
          animation: panelShimmer 3s ease-in-out infinite;
        }
        .sat-s1 { animation: satStarTwinkle1 3.1s ease-in-out infinite 0.4s; }
        .sat-s2 { animation: satStarTwinkle2 2.7s ease-in-out infinite 1.1s; }
        .sat-s3 { animation: satStarTwinkle3 2.3s ease-in-out infinite 1.7s; }
      `}</style>

      {/* Tiny stars */}
      <circle className="sat-s1" cx="1.5" cy="4" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="sat-s2" cx="18" cy="14" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="sat-s3" cx="4" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      {/* Signal waves - warm accent */}
      <circle className="signal-ring1" cx="14.5" cy="5.5" r="1.5" stroke="#f97316" strokeWidth="0.8" fill="none" opacity="0.8" />
      <circle className="signal-ring2" cx="14.5" cy="5.5" r="1.5" stroke="#facc15" strokeWidth="0.6" fill="none" opacity="0.6" />

      <g className="sat-body">
        {/* Satellite body - primary stroke */}
        <rect
          x="8"
          y="8"
          width="4"
          height="4"
          rx="0.8"
          stroke="#6366f1"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Body duotone fill */}
        <rect
          x="8"
          y="8"
          width="4"
          height="4"
          rx="0.8"
          fill="#c7d2fe"
          opacity="0.3"
        />

        {/* Antenna */}
        <line
          x1="11.5"
          y1="8"
          x2="14.5"
          y2="5.5"
          stroke="#6366f1"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle
          cx="14.5"
          cy="5.5"
          r="0.8"
          stroke="#6366f1"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx="14.5"
          cy="5.5"
          r="0.8"
          fill="#f97316"
          opacity="0.3"
        />

        {/* Solar panel left - secondary */}
        <rect
          x="2"
          y="8.5"
          width="5"
          height="3"
          rx="0.5"
          stroke="#a5b4fc"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Panel grid lines */}
        <line x1="4.5" y1="8.5" x2="4.5" y2="11.5" stroke="#a5b4fc" strokeWidth="0.6" opacity="0.5" />
        <line x1="2" y1="10" x2="7" y2="10" stroke="#a5b4fc" strokeWidth="0.6" opacity="0.5" />
        {/* Panel shimmer */}
        <rect
          className="panel-shimmer"
          x="2.5"
          y="8.8"
          width="2"
          height="1"
          rx="0.3"
          fill="#facc15"
          opacity="0.3"
        />

        {/* Solar panel right - secondary */}
        <rect
          x="13"
          y="8.5"
          width="5"
          height="3"
          rx="0.5"
          stroke="#a5b4fc"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Panel grid lines */}
        <line x1="15.5" y1="8.5" x2="15.5" y2="11.5" stroke="#a5b4fc" strokeWidth="0.6" opacity="0.5" />
        <line x1="13" y1="10" x2="18" y2="10" stroke="#a5b4fc" strokeWidth="0.6" opacity="0.5" />
        {/* Panel shimmer */}
        <rect
          className="panel-shimmer"
          x="15.8"
          y="8.8"
          width="2"
          height="1"
          rx="0.3"
          fill="#facc15"
          opacity="0.3"
        />

        {/* Body detail line */}
        <line
          x1="8.5"
          y1="10"
          x2="11.5"
          y2="10"
          stroke="#a5b4fc"
          strokeWidth="0.7"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
