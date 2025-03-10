import Image from "next/image";

export default function HomeStagingPage() {
  return (
    <main className="main-content">
      <div className="staging-content">
        <div className="container">
          <h2 className="staging-title">Home Staging ...</h2>

          <div className="staging-grid">
            <div className="staging-left">
              <Image
                src="/images/home-staging.png"
                alt="Home Staging"
                className="staging-image"
                width={400}
                height={300}
              />
            </div>

            <div className="staging-right">
              <div className="staging-quote">
                <p>&ldquo;Setting the Stage for your Next Chapter&rdquo;</p>
              </div>

              <div className="staging-why-us">
                <h3>Why Choose Us?</h3>
                <ul className="staging-list">
                  <li>
                    <strong>Local Expertise:</strong> Based in Dorking, we
                    understand the preferences of local buyers and have personal
                    experience of buying and selling homes in the local area.
                  </li>
                  <li>
                    <strong>Highly approachable:</strong> We provide a relaxed
                    and friendly approach to helping you sell your property
                  </li>
                  <li>
                    <strong>Tailored Solutions:</strong>
                    <ul>
                      <li>
                        Packages designed to meet your unique needs and budget.
                      </li>
                      <li>
                        We draw attention to the properties best features whilst
                        detracting from the worst.
                      </li>
                      <li>
                        We can help potential buyers visualise themselves living
                        in your property
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Proven Results:</strong>
                    <ul>
                      <li>
                        Staged properties secure more viewings and offers,
                        command higher asking prices and on average sell for
                        more and quicker than non staged homes.
                      </li>
                      <li>
                        100% of estate agents agreed that staged properties make
                        it easier for potential buyers to visualise themselves
                        living in the space.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="staging-services">
                <h3>Our Services and Pricing</h3>
                <p>
                  <strong>Consultation-Only</strong> (Can include virtual
                  consultation)
                </p>
                <p><strong>Price:</strong> £150 (flat fee)</p>

                <p>Our professional consultation includes:</p>
                <ul className="staging-list">
                  <li>A comprehensive walkthrough of your home.</li>
                  <li>
                    Expert advice on decluttering, furniture placement, and
                    styling.
                  </li>
                  <li>
                    A verbal, tailored action plan for you to implement,
                    provided on the day.
                  </li>
                </ul>

                <h3>Add-On Options:</h3>
                <ul className="staging-list">
                  <li><strong>Written Action Plan:</strong> £50 plus</li>
                  <li>
                    <strong>Follow-Up Visit</strong> for further advice if
                    needed: £75 per session.
                  </li>
                  <li>
                    <strong>Implementation of Staging</strong> to include
                    rearrangement of existing furniture for optimal layout: £300
                    flat day rate or £40 per hour
                  </li>
                  <li>
                    <strong>Accessories</strong> (e.g. rugs, cushions, artwork)
                    to create an inviting look: £tbc project dependant.
                  </li>
                  <li><strong>Decluttering Services:</strong> £40 per hour.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
