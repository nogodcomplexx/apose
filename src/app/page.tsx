import { pageContent } from "@/content/pageContent";

export default function Home() {
  return (
    <div
      className="my-app"
      dangerouslySetInnerHTML={{ __html: pageContent }}
    />
  );
}

