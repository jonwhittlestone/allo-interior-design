import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="main-content">
      <div className="services-content">
        <div className="container">
          <h2 className="services-title">Our services ...</h2>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-item">
              <Image
                src="/images/services-consultation.png"
                alt="Consultation"
                className="service-image"
                width={300}
                height={200}
              />
              <h3 className="service-title">Consultation</h3>
            </div>

            {/* Service 2 */}
            <div className="service-item">
              <Image
                src="/images/services-moodboard.png"
                alt="Moodboard"
                className="service-image"
                width={300}
                height={200}
              />
              <h3 className="service-title">Moodboard</h3>
            </div>

            {/* Service 3 */}
            <div className="service-item">
              <Image
                src="/images/services-sourcing.png"
                alt="Sourcing"
                className="service-image"
                width={300}
                height={200}
              />
              <h3 className="service-title">Sourcing</h3>
            </div>

            {/* Service 4 */}
            <div className="service-item">
              <Image
                src="/images/services-project-management.png"
                alt="Project Management"
                className="service-image"
                width={300}
                height={200}
              />
              <h3 className="service-title">Project Management</h3>
            </div>

            {/* Service 5 */}
            <div className="service-item">
              <Image
                src="/images/services-accessorising-staging.png"
                alt="Accessorising / Staging"
                className="service-image"
                width={300}
                height={200}
              />
              <h3 className="service-title">Accessorising / Staging</h3>
            </div>

            {/* Service 6 */}
            <div className="service-item">
              <Image
                src="/images/services-help.png"
                alt="Help"
                className="service-image"
                width={300}
                height={200}
              />
              <h3 className="service-title">Help?</h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
