export default function ChipIcon({ size = 24 }: { size?: number }) {
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
        @keyframes chipPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        @keyframes corePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        @keyframes pinFlow {
          0% { stroke-dashoffset: 4; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes cStarTwinkle1 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes cStarTwinkle2 {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes cStarTwinkle3 {
          0%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
          80% { opacity: 0; }
        }
        .chip-group {
          animation: chipPulse 3s ease-in-out infinite;
          transform-origin: 10px 10px;
        }
        .core-glow {
          animation: corePulse 2s ease-in-out infinite;
        }
        .pin-anim {
          animation: pinFlow 1.5s linear infinite;
          stroke-dasharray: 2 2;
        }
        .c-star1 { animation: cStarTwinkle1 3.2s ease-in-out infinite 0.2s; }
        .c-star2 { animation: cStarTwinkle2 2.8s ease-in-out infinite 0.8s; }
        .c-star3 { animation: cStarTwinkle3 2.4s ease-in-out infinite 1.4s; }
      `}</style>

      {/* Tiny stars */}
      <circle className="c-star1" cx="2" cy="2.5" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="c-star2" cx="17.5" cy="3.5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="c-star3" cx="3" cy="17" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="chip-group">
        {/* Main chip body - primary stroke */}
        <rect
          x="5"
          y="5"
          width="10"
          height="10"
          rx="1.5"
          stroke="#6366f1"
          strokeWidth="1.2"
          fill="none"
        />
        {/* Body fill */}
        <rect
          x="5"
          y="5"
          width="10"
          height="10"
          rx="1.5"
          fill="#c7d2fe"
          opacity="0.2"
        />

        {/* Inner die / core - primary */}
        <rect
          x="7.5"
          y="7.5"
          width="5"
          height="5"
          rx="0.8"
          stroke="#6366f1"
          strokeWidth="1"
          fill="none"
        />
        {/* Core warm glow */}
        <rect
          className="core-glow"
          x="7.5"
          y="7.5"
          width="5"
          height="5"
          rx="0.8"
          fill="#f97316"
          opacity="0.15"
        />

        {/* Core circuit pattern - secondary */}
        <path
          d="M8.5 10L9.5 10L9.5 8.5"
          stroke="#a5b4fc"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M11.5 10L10.5 10L10.5 11.5"
          stroke="#a5b4fc"
          strokeWidth="0.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.6"
        />

        {/* Core center dot - warm */}
        <circle cx="10" cy="10" r="0.6" stroke="#f97316" strokeWidth="0.7" fill="none" opacity="0.7" />
        <circle className="core-glow" cx="10" cy="10" r="0.3" fill="#facc15" opacity="0.6" />

        {/* Pins - top */}
        <line className="pin-anim" x1="7.5" y1="5" x2="7.5" y2="2.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="10" y1="5" x2="10" y2="2.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="12.5" y1="5" x2="12.5" y2="2.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />

        {/* Pins - bottom */}
        <line className="pin-anim" x1="7.5" y1="15" x2="7.5" y2="17.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="10" y1="15" x2="10" y2="17.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="12.5" y1="15" x2="12.5" y2="17.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />

        {/* Pins - left */}
        <line className="pin-anim" x1="5" y1="7.5" x2="2.5" y2="7.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="5" y1="10" x2="2.5" y2="10" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="5" y1="12.5" x2="2.5" y2="12.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />

        {/* Pins - right */}
        <line className="pin-anim" x1="15" y1="7.5" x2="17.5" y2="7.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="15" y1="10" x2="17.5" y2="10" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />
        <line className="pin-anim" x1="15" y1="12.5" x2="17.5" y2="12.5" stroke="#a5b4fc" strokeWidth="1" strokeLinecap="round" />

        {/* Pin tips - warm accent on corners */}
        <circle cx="7.5" cy="2.5" r="0.4" fill="#f97316" opacity="0.5" />
        <circle cx="12.5" cy="2.5" r="0.4" fill="#f97316" opacity="0.5" />
        <circle cx="7.5" cy="17.5" r="0.4" fill="#f97316" opacity="0.5" />
        <circle cx="12.5" cy="17.5" r="0.4" fill="#f97316" opacity="0.5" />
      </g>
    </svg>
  );
}
