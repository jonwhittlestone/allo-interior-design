import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import GalleryItem from "@/components/GalleryItem";

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
              <iframe width="343" height="611" src="https://www.youtube.com/embed/Eo7HYoJWe9k" title="Seymours Social Media Interview Home Staging" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

            <div className="staging-right">
              <div className="staging-quote">
                <p>&ldquo;Setting the Stage for your Next Chapter&rdquo;</p>
              </div>

              <div className="markdown-content two-columns">
                {/* Split markdown content into sections based on ### headings */}
                {markdownContent.split(/(?=### )/).slice(1).map((section, index) => (
                  <div key={index} className="markdown-column">
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
                      {section}
                    </ReactMarkdown>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="gallery-section">
        <div className="container">
          <h2 className="gallery-title">Our Recent Projects</h2>
          <div className="gallery-grid">
            <GalleryItem 
              imageSrc="/images/gallery-1.png" 
              altText="Ashley Road" 
            />
            <GalleryItem 
              imageSrc="/images/gallery-2.png" 
              altText="St. John's Road" 
            />
          </div>
        </div>
      </div>
    </main>
  );
}
