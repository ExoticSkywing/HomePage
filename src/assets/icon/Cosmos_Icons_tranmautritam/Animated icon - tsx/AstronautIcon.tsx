export default function AstronautIcon({ size = 24 }: { size?: number }) {
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
        @keyframes astroFloat {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(0px, -0.6px); }
        }
        @keyframes visorShine {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes visorWarmGlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes aStarTwinkle1 {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        @keyframes aStarTwinkle2 {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0; }
        }
        @keyframes aStarTwinkle3 {
          0%, 100% { opacity: 0.3; }
          40% { opacity: 1; }
          80% { opacity: 0; }
        }
        .astro-body {
          animation: astroFloat 3s ease-in-out infinite;
          transform-origin: 10px 10px;
        }
        .visor-shine {
          animation: visorShine 2.5s ease-in-out infinite;
        }
        .visor-warm {
          animation: visorWarmGlow 2.5s ease-in-out infinite 0.3s;
        }
        .a-star1 { animation: aStarTwinkle1 3.3s ease-in-out infinite 0.5s; }
        .a-star2 { animation: aStarTwinkle2 2.5s ease-in-out infinite 1.2s; }
        .a-star3 { animation: aStarTwinkle3 2s ease-in-out infinite 0.1s; }
      `}</style>

      {/* Tiny stars */}
      <circle className="a-star1" cx="2" cy="3" r="0.45" fill="#6366f1" opacity="0" />
      <circle className="a-star2" cx="17.5" cy="5" r="0.4" fill="#6366f1" opacity="0" />
      <circle className="a-star3" cx="3.5" cy="15" r="0.35" fill="#a5b4fc" opacity="0" />

      <g className="astro-body">
        {/* Helmet - primary stroke */}
        <path
          d="M5 8.5C5 5 7.2 2.5 10 2.5C12.8 2.5 15 5 15 8.5C15 10.5 14.2 12 13 12.8L13 13.5L7 13.5L7 12.8C5.8 12 5 10.5 5 8.5Z"
          stroke="#6366f1"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Helmet fill */}
        <path
          d="M5 8.5C5 5 7.2 2.5 10 2.5C12.8 2.5 15 5 15 8.5C15 10.5 14.2 12 13 12.8L13 13.5L7 13.5L7 12.8C5.8 12 5 10.5 5 8.5Z"
          fill="#c7d2fe"
          opacity="0.15"
        />

        {/* Visor - primary stroke with warm reflection */}
        <path
          d="M6.8 7C6.8 5.5 8.2 4.5 10 4.5C11.8 4.5 13.2 5.5 13.2 7C13.2 9.2 12.2 11 10 11C7.8 11 6.8 9.2 6.8 7Z"
          stroke="#6366f1"
          strokeWidth="1.2"
          strokeLinecap="round"
          fill="none"
        />
        {/* Visor duotone fill */}
        <path
          d="M6.8 7C6.8 5.5 8.2 4.5 10 4.5C11.8 4.5 13.2 5.5 13.2 7C13.2 9.2 12.2 11 10 11C7.8 11 6.8 9.2 6.8 7Z"
          fill="#c7d2fe"
          opacity="0.3"
        />
        {/* Visor warm reflection */}
        <path
          className="visor-warm"
          d="M8 5.8C8.8 5.3 9.8 5.2 10.8 5.5"
          stroke="#f97316"
          strokeWidth="0.9"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          className="visor-warm"
          d="M8.5 6.3C9 6 9.8 5.9 10.3 6.1"
          stroke="#facc15"
          strokeWidth="0.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        {/* Visor shine highlight */}
        <path
          className="visor-shine"
          d="M12 6.5C12.2 7.2 12 8 11.5 8.8"
          stroke="#a5b4fc"
          strokeWidth="0.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />

        {/* Ear pieces - secondary */}
        <circle cx="5.2" cy="8" r="0.9" stroke="#a5b4fc" strokeWidth="1" fill="none" />
        <circle cx="14.8" cy="8" r="0.9" stroke="#a5b4fc" strokeWidth="1" fill="none" />

        {/* Body/suit top - primary */}
        <path
          d="M6.5 13.5C6.5 13.5 5 14 4.5 15.5C4.2 16.5 4.5 17.5 5.5 17.5L14.5 17.5C15.5 17.5 15.8 16.5 15.5 15.5C15 14 13.5 13.5 13.5 13.5"
          stroke="#6366f1"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Suit fill */}
        <path
          d="M6.5 13.5C6.5 13.5 5 14 4.5 15.5C4.2 16.5 4.5 17.5 5.5 17.5L14.5 17.5C15.5 17.5 15.8 16.5 15.5 15.5C15 14 13.5 13.5 13.5 13.5"
          fill="#c7d2fe"
          opacity="0.15"
        />

        {/* Chest panel - secondary */}
        <rect
          x="8.5"
          y="14"
          width="3"
          height="2.5"
          rx="0.5"
          stroke="#a5b4fc"
          strokeWidth="0.8"
          fill="none"
          opacity="0.6"
        />
        {/* Panel light */}
        <circle cx="9.5" cy="15" r="0.35" fill="#f97316" opacity="0.6" />
        <circle cx="10.5" cy="15" r="0.35" fill="#a5b4fc" opacity="0.5" />

        {/* Helmet stripe - secondary */}
        <line
          x1="10"
          y1="2.5"
          x2="10"
          y2="4.5"
          stroke="#a5b4fc"
          strokeWidth="0.8"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>
    </svg>
  );
}
