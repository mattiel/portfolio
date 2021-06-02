function Colored() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="16"
        height="10"
        x="2"
        y="10"
        fill="url(#paint0_linear)"
        rx="2"
      ></rect>
      <rect
        width="18"
        height="11"
        x="4"
        y="4"
        fill="url(#paint1_linear)"
        rx="2"
      ></rect>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="10.434"
          x2="10.958"
          y1="20.032"
          y2="10.033"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD067D" stopOpacity="0.8"></stop>
          <stop offset="1" stopColor="#FD0650"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="13"
          x2="13"
          y1="4"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F1E702"></stop>
          <stop offset="1" stopColor="#FFBB0D" stopOpacity="0.6"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Colored;
