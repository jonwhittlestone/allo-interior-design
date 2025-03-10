import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="main-content">
      <div className="about-content">
        <div className="container">
          <div
            className="about-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
          >
            <div className="about-text-container">
              <h2 className="about-title">About Us ...</h2>

              <p className="about-text">
                We live in Surrey with our other halves, kids and dogs
              </p>

              <p className="about-text">
                Family living doesn't mean compromising on style
              </p>

              <p className="about-text">
                Home Staging for clients and estate agents<br />
                Pub Décor & Styling<br />
                Wreath making<br />
                Friends mini projects
              </p>

              <p className="about-text">
                I have been reading House & Garden since I was 6 years old,
                planning renovations in home built camps and decorating since
                the age of 11.
              </p>

              <p className="about-text">
                Take part in various creative; upcycling furniture, making
                pinboards, table decorations, I am currently project managing my
                home renovation from concept to completion.
              </p>

              <p className="about-text">Have done various interior courses.</p>

              <p className="about-text">
                Steph specialises in textiles, upholstery, cushion an curtain
                making.
              </p>
            </div>

            <div className="about-image-container">
              <Image
                src="/images/about-us.png"
                alt="Allo Interiors Team"
                className="about-image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
