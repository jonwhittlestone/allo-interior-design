import Image from "next/image";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// This is a server component, so we can read the file at build time
export default function AboutPage() {
  // Read the markdown file
  const markdownPath = path.join(process.cwd(), "src/app/about/page.md");
  const markdownContent = fs.readFileSync(markdownPath, "utf8");

  return (
    <main className="main-content">
      <div className="about-content">
        <div className="container">
          <div
            className="about-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}
          >
            <div className="about-text-container">
              <div className="markdown-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Map markdown elements to appropriate HTML elements with classes
                    h2: ({...props}) => <h2 className="about-title" {...props} />,
                    p: ({...props}) => <p className="about-text" {...props} />,
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
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
