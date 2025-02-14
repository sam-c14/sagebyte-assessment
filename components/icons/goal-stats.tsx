const GoalStats = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2381_2192"
        style={{maskType:"luminance"}}
        maskUnits="userSpaceOnUse"
        x="0"
        y="1"
        width="16"
        height="14"
      >
        <path
          d="M4.00065 11.1079H1.33398V2.44122H14.6673V11.1079H12.0007H4.00065Z"
          fill="white"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinejoin="round"
        />
        <path
          d="M5.33398 7.44122V8.77456"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.1079V13.1079"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 6.10787V8.77454M10.6667 4.77454V8.77454"
          stroke="black"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 13.7745H12"
          stroke="white"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </mask>
      <g mask="url(#mask0_2381_2192)">
        <path d="M0 0.10791H16V16.1079H0V0.10791Z" fill="white" />
      </g>
    </svg>
  );
};

export default GoalStats;
