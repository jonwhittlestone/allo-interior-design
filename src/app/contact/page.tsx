import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="main-content">
      <div className="contact-content">
        <div className="contact-image">
          <Image 
            src="/images/contact-image.png" 
            alt="Allo Interiors Workspace" 
            width={800}
            height={800}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="contact-info">
          <h2 className="contact-title">Contact us on ...</h2>

          <div className="contact-details">
            <div className="contact-section">
              <h3>Phone Number:</h3>
              <p>07502 301 897</p>
              <p>07738 089 853</p>
            </div>

            <div className="contact-section">
              <h3>Email:</h3>
              <p>
                <a href="mailto:Hannah@allointeriors.co.uk">
                  Hannah@allointeriors.co.uk
                </a>
              </p>
              <p>
                <a href="mailto:Stephanie@allointeriors.co.uk">
                  Stephanie@allointeriors.co.uk
                </a>
              </p>
            </div>

            <div className="contact-section">
              <h3>Socials:</h3>
              <div className="social-icons">
                <a href="https://www.facebook.com/profile.php?id=61574019571432" className="social-link">
                  <Image
                    src="/images/facebook-icon.png"
                    alt="Facebook"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="https://www.instagram.com/allointeriorsuk/" className="social-link">
                  <Image
                    src="/images/instagram-icon.png"
                    alt="Instagram"
                    className="social-icon"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
