import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-ivory">
      <div className="text-center px-4">
        <div className="font-serif text-[8rem] font-bold text-border leading-none mb-4">404</div>
        <h1 className="text-[2rem] mb-3">Page Not Found</h1>
        <p className="text-text-mid max-w-md mx-auto mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/" className="btn btn-primary btn-lg">
            <Home size={18} /> Go to Homepage
          </Link>
          <Link href="/projects" className="btn btn-outline btn-lg">
            <ArrowLeft size={18} /> View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
