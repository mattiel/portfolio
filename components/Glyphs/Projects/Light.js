function Light() {
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
        d="M6 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V7z"
      ></path>
      <path
        fill="url(#paint2_linear)"
        d="M9 4a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2h-8a2 2 0 01-2-2V4z"
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
          <stop stopColor="#F9FAFB"></stop>
          <stop offset="1" stopColor="#F3F4F6"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="12.325"
          x2="13.686"
          y1="19.044"
          y2="5.141"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3F4F6"></stop>
          <stop offset="1" stopColor="#E5E7EB" stopOpacity="0.8"></stop>
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="15"
          x2="15"
          y1="2"
          y2="16"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E5E7EB"></stop>
          <stop offset="0" stopColor="#E5E7EB"></stop>
          <stop offset="0.996" stopColor="#D1D5DB" stopOpacity="0.6"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Light;
