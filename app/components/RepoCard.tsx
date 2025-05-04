import { ExternalLink, Github, Star } from 'lucide-react';
import Link from 'next/link';
import type { Resource } from '../data/resources';

interface RepoCardProps {
  resource: Resource;
}

export default function RepoCard({ resource }: RepoCardProps) {
  if (!resource.repoData) return null;

  const formatStarCount = (count: number) => {
    if (count > 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  // Get a background color based on the language or default to gray
  const getLanguageColor = (language?: string) => {
    const colors: Record<string, string> = {
      Python: 'bg-blue-500',
      TypeScript: 'bg-blue-400',
      JavaScript: 'bg-yellow-400',
      Rust: 'bg-orange-600',
      Go: 'bg-cyan-500',
      Java: 'bg-red-500',
      'C++': 'bg-purple-600',
      default: 'bg-gray-400'
    };

    return colors[language || ''] || colors.default;
  };

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden hover:border-gray-300 transition-colors">
      <div className="w-full h-40 relative bg-gray-100 flex items-center justify-center">
        <div className={`absolute inset-0 opacity-10 ${getLanguageColor(resource.repoData.language)}`}></div>
        <div className="flex flex-col items-center">
          <Github size={40} className="text-gray-400 mb-2" />
          <div className="text-sm font-medium text-gray-500">{resource.repoData.owner}/{resource.title}</div>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-md font-medium">{resource.title}</h3>
            <p className="text-xs text-gray-500 font-mono mt-1">{resource.repoData.owner}</p>
          </div>

          <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-gray-700">
            <Star size={14} className="text-amber-500" />
            <span className="text-xs font-medium">{formatStarCount(resource.repoData.stars)}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {resource.description}
        </p>

        <div className="flex justify-between items-center">
          {resource.repoData.language && (
            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600 flex items-center gap-1">
              <span className={`w-2 h-2 rounded-full ${getLanguageColor(resource.repoData.language)}`}></span>
              {resource.repoData.language}
            </span>
          )}

          <Link
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-gray-900 transition-colors"
          >
            view on github
            <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}