"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function InstagramPreview({ username = "_cali_cleanerz_" }) {
  useEffect(() => {
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        window.instgrm?.Embeds?.process();
      };
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds?.process();
    }
  }, []);

  return (
    <div style={{ textAlign: "center", margin: "2rem auto", maxWidth: "600px" }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={`https://www.instagram.com/${username}/`}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: "0",
          borderRadius: "12px",
          padding: 0,
          margin: "0 auto",
          overflow: "hidden",
          width: "100%",
          maxWidth: "540px",
        }}
      ></blockquote>

      {/* <a
        href={`https://www.instagram.com/${username}/`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#E1306C",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        Visit Instagram
      </a> */}
    </div>
  );
}
