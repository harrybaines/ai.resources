import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="py-6 px-2">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-lg font-mono tracking-tight">
          ai.resources
        </Link>
        <div className="flex items-center">
          <Link
            href="/about"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-5 py-2"
          >
            About
          </Link>
          <Link
            href="/contribute"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-5 py-2"
          >
            Contribute
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors px-5 py-2 font-mono"
          >
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}