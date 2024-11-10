// components/HtmlRenderer.js
import React, { useRef, useEffect } from "react";

interface PageRendererProps {
  htmlContent: string | undefined;
}

export default function PageRenderer({ htmlContent }: PageRendererProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (htmlContent === undefined) {
    htmlContent = "<div>Nothing to render</div>";
  }

  useEffect(() => {
    if (iframeRef.current) {
      const iframeDocument =
        iframeRef.current.contentDocument ||
        iframeRef.current.contentWindow?.document;
      if (iframeDocument) {
        iframeDocument.open();
        iframeDocument.write(htmlContent);
        iframeDocument.close();
      }
    }
  }, [htmlContent]);

  return (
    <iframe
      ref={iframeRef}
      title="Page Renderer"
      style={{
        width: "100%",
        height: "100%", // Adjust the height as needed
        border: "none",
      }}
    />
  );
}
