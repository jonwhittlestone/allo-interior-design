import Image from "next/image";

export default function TestimonialsPage() {
  return (
    <main className="main-content">
      <div className="testimonials-content">
        <div className="container">
          <h2 className="testimonials-title">What our clients say ...</h2>

          <div className="testimonial-icons">
            <Image
              src="/images/testimonial-icons.png"
              alt="Client Icon"
              className="testimonial-icon"
              width={400}
              height={200}
            />
          </div>

          <div className="testimonial-quote">
            <p>
              I really liked that the girls immediately picked up on the
              function of the room and what we used it for, even noticing the
              exercise equipment. I wouldn&apos;t have thought to raise that. Your
              questions were great and really got me thinking about the space.
              You picked up on what I liked and interms of colours that were
              repeated (the blues) which was really insightful. You guys
              enthused me with ideas and gave me a sense of what could be
              achieved. I felt like you got me and understood the challenges and
              I felt confident you could provide solutions. You explained the
              next steps and process well
            </p>
            <p className="testimonial-author">- Cat Stevens</p>
          </div>
        </div>
      </div>
    </main>
  );
}
