import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          src="/images/nav-gr-logo.png"
          alt="Allo Interiors Logo"
          width={200}
          height={200}
          priority
        />
      </Link>
    </div>
  );
}
