import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import type { Resource } from '../data/resources';

interface FeaturedCardProps {
  resource: Resource;
}

export default function FeaturedCard({ resource }: FeaturedCardProps) {
  // Generate initials for the avatar fallback from author name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  // Generate a pseudo-random pastel color based on the author name
  const getBackgroundColor = (name: string) => {
    const colors = [
      'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100',
      'bg-indigo-100', 'bg-purple-100', 'bg-pink-100', 'bg-orange-100'
    ];

    const textColors = [
      'text-blue-800', 'text-green-800', 'text-yellow-800', 'text-red-800',
      'text-indigo-800', 'text-purple-800', 'text-pink-800', 'text-orange-800'
    ];

    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;

    return { bg: colors[index], text: textColors[index] };
  };

  const author = resource.author || "Anonymous";
  const { bg, text } = getBackgroundColor(author);

  return (
    <Link
      href={resource.url}
      target="_blank"
      className="block rounded-lg border border-gray-200 hover:border-gray-300 p-4 transition-all hover:shadow-sm group"
    >
      <div className="flex flex-col h-full">
        <h3 className="font-mono text-sm font-medium mb-3 line-clamp-2 group-hover:text-gray-900">
          {resource.title}
        </h3>

        <div className="mt-auto flex items-center gap-2">
          <Avatar className="h-5 w-5">
            <AvatarImage src={resource.avatarUrl} alt={author} />
            <AvatarFallback className={`text-xs ${bg} ${text}`}>{getInitials(author)}</AvatarFallback>
          </Avatar>
          <p className="text-xs text-gray-500 truncate flex-1 font-mono">
            {author}
          </p>
          <ExternalLink size={12} className="text-gray-400 group-hover:text-gray-600" />
        </div>
      </div>
    </Link>
  );
}