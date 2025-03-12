import Image from 'next/image';

export default function Home() {
  return (
    <main className="main-content" style={{ backgroundColor: 'var(--light-pink)', minHeight: '100vh' }}>
      <div className="home-content">
        <div className="container">
          <Image
            src="/images/allo-interiors-dorking.png"
            alt="Allo Interiors Dorking - Contemporary Interior Design Studio"
            className=""
            width={600}
            height={400}
            priority
          />
        </div>
      </div>
    </main>
  );
}
