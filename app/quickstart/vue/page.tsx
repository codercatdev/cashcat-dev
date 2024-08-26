import { Button } from "@/components/ui/button";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button asChild variant="outline">
        <a href="https://fusionauth-quickstart-javascript-vue-web.cashcat.dev/" target="_blank" rel="noopener noreferrer" className="flex gap-2">
          Preview
          <FaExternalLinkAlt />
        </a>
      </Button>
    </main>
  );
}
