import Link from 'next/link';

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="100" cy="100" r="90" fill="#F8DED8" stroke="none" />
          <text
            x="50%"
            y="50%"
            fontFamily="Baskerville"
            fontSize="82.5"
            fill="#800020"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            allo
          </text>
        </svg>
      </Link>
    </div>
  );
}
