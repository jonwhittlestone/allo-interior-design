import Image from "next/image";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function HomeStagingPage() {
  // Read the markdown file
  const markdownPath = path.join(process.cwd(), "src/app/home-staging/page.md");
  const markdownContent = fs.readFileSync(markdownPath, "utf8");

  return (
    <main className="main-content">
      <div className="staging-content">
        <div className="container">
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

              <div className="markdown-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    // Map markdown elements to appropriate HTML elements with classes
                    h2: ({...props}) => <h2 className="staging-title" {...props} />,
                    h3: ({...props}) => <h3 className="staging-subtitle" {...props} />,
                    ul: ({...props}) => <ul className="staging-list" {...props} />,
                    p: ({...props}) => <p className="staging-text" {...props} />,
                  }}
                >
                  {markdownContent}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
