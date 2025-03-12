import Image from "next/image";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function TestimonialsPage() {
  // Read the markdown file
  const markdownPath = path.join(process.cwd(), "src/app/testimonials/page.md");
  const markdownContent = fs.readFileSync(markdownPath, "utf8");

  return (
    <main className="main-content">
      <div className="testimonials-content">
        <div className="container">
          <div className="testimonial-icons">
            <Image
              src="/images/testimonial-icons.png"
              alt="Client Icon"
              className="testimonial-icon"
              width={600}
              height={400}
            />
          </div>

          <div className="testimonial-quote">
            <div className="markdown-content">
              <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                  // Map markdown elements to appropriate HTML elements with classes
                  h2: ({...props}) => {
                    // Check if this is the author heading
                    if (props.children?.toString() === 'Author') {
                      // Don't render the "Author" heading
                      return <></>;
                    }
                    // Otherwise, render as a normal title
                    return <h2 className="testimonials-title" {...props} />;
                  },
                  p: ({...props}) => {
                    // Check if this paragraph follows the "Author" heading
                    const content = props.children?.toString() || '';
                    if (content === 'Cat Stevens') {
                      // Render as author attribution
                      return <p className="testimonial-author">- {content}</p>;
                    }
                    // Otherwise, render as a normal paragraph
                    return <p className="testimonial-text" {...props} />;
                  },
                }}
              >
                {markdownContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
