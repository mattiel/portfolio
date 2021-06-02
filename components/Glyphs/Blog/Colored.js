function Colored() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="url(#paint0_linear)"
        d="M3 10a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10z"
      ></path>
      <path
        fill="url(#paint1_linear)"
        d="M7 4a2 2 0 012-2h10a2 2 0 012 2v16a2 2 0 01-2 2H9a2 2 0 01-2-2V4z"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="9.325"
          x2="10.686"
          y1="22.044"
          y2="8.142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FD067D"></stop>
          <stop offset="1" stopColor="#FD0650" stopOpacity="0.8"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="14"
          x2="14"
          y1="2"
          y2="22"
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
