import { Wand2 } from "lucide-react";
import Link from "next/link"; 

export function Footer() {
  return (
    <footer className="border-t py-4 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="flex items-center gap-2">
            <Wand2 className="h-5 w-5 text-primary" />
            <span className="font-semibold">Xeno-Sphere</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <Link
              href="https://github.com/mr-hemnt/XenoAssignment"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/hemant-kumar-047262258/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            Powered by Groq API (Fast AI Inference) • © {new Date().getFullYear()} Xeno-Sphere • Made with ❤️ by Hemant Kumar
          </div>
        </div>
      </div>
    </footer>
  );
} 