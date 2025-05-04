import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full py-16 px-6 sm:px-12">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 max-w-3xl">
          Resources to build your next AI{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 transform -skew-x-12 bg-indigo-100 dark:bg-indigo-900/30"></span>
            <span className="relative text-indigo-600 dark:text-indigo-400">startup</span>
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 max-w-2xl">
          A curated collection of tools, templates, and components to accelerate AI development.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#resources"
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-black text-white rounded-md font-medium text-sm transition-colors hover:bg-gray-800"
          >
            View all resources
            <ArrowRight size={14} />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-200 rounded-md font-medium text-sm transition-colors hover:bg-gray-50"
          >
            <Github size={14} />
            View on GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}