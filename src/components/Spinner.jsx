function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle cx={80} cy={50} r={5} fill="#9fb943">
        <animate
          attributeName="cx"
          values="80;50"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="50;80"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill"
          values="#9fb943;#607e37"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={50} cy={80} r={5} fill="#607e37">
        <animate
          attributeName="cx"
          values="50;20"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="80;50.00000000000001"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill"
          values="#607e37;#b6c89f"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx={20} cy="50.00000000000001" r={5} fill="#b6c89f">
        <animate
          attributeName="cx"
          values="20;49.99999999999999"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="50.00000000000001;20"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill"
          values="#b6c89f;#262d1e"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="49.99999999999999" cy={20} r={5} fill="#262d1e">
        <animate
          attributeName="cx"
          values="49.99999999999999;80"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="cy"
          values="20;49.99999999999999"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill"
          values="#262d1e;#9fb943"
          keyTimes="0;1"
          dur="1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default Spinner;
