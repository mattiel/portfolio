import Link from 'next/link'

const Logo = (props) => {
  return (
    <Link href="/">
      <svg
        width={56}
        height={16}
        viewBox="0 0 56 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-pointer"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 8.5V4h3v.256C3.47 4.09 3.974 4 4.5 4c1.153 0 2.204.433 3 1.146A4.5 4.5 0 0115 8.5V16h-3V8.5a1.5 1.5 0 00-3 0V16H6V8.5a1.5 1.5 0 00-3 0V16H0V8.5zM25 15.197A6 6 0 1128 10v6h-3v-.803zM25 10a3 3 0 11-6 0 3 3 0 016 0zM29 12.5V2l3-1v3h1.5v3H32v5.5a.5.5 0 00.5.5h1v3h-1a3.5 3.5 0 01-3.5-3.5zM34.5 12.5V2l3-1v3H39v3h-1.5v5.5a.5.5 0 00.5.5h1v3h-1a3.5 3.5 0 01-3.5-3.5zM43 0l-3 1v3l3-1V0zm-3 5v11h3V4l-3 1zM48.333 7.506a3 3 0 00-1.23 3.27l3.673-3.674a3 3 0 00-2.443.404zm.89 5.392l6.08-6.08-1.06-1.06A6 6 0 1056 10h-3a3 3 0 01-3.776 2.898z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
};

export default Logo;