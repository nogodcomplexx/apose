"use client";

import { useEffect } from "react";
import { pageContent } from "@/content/pageContent";

export default function Home() {
  useEffect(() => {
    // If client-side navigation lands on Home, ensure preloader dissolves immediately
    const dismiss = () => {
      const p = document.getElementById("preloader");
      if (p) {
        p.classList.add("loaded", "preloader-hidden");
        p.style.display = "none";
      }
    };
    dismiss();
    const t1 = setTimeout(dismiss, 100);
    const t2 = setTimeout(dismiss, 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div
      className="my-app"
      dangerouslySetInnerHTML={{ __html: pageContent }}
    />
  );
}
