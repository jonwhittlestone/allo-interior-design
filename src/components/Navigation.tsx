import Link from 'next/link';
import Logo from './Logo';

export default function Navigation() {
  return (
    <>
      {/* Header Bar */}
      <div className="header-bar"></div>

      {/* Navigation */}
      <div className="nav-container">
        <div className="container">
          <Logo />
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/about" className="nav-link">about us</Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link">services</Link>
              </li>
              <li className="nav-item">
                <Link href="/home-staging" className="nav-link">home staging</Link>
              </li>
              <li className="nav-item">
                <Link href="/testimonials" className="nav-link">testimonials</Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">contact us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
