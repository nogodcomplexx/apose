import fs from "fs";
import path from "path";

export default function Home() {
  const filePath = path.join(process.cwd(), "src", "content", "pageContent.html");
  let htmlContent = fs.readFileSync(filePath, "utf-8");

  // Strip wrapping <div class="my-app">...</div> so the React root element is .my-app
  htmlContent = htmlContent
    .replace(/^\s*<div class="my-app">\s*/, "")
    .replace(/\s*<\/div>\s*$/, "");

  return (
    <div
      className="my-app"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
