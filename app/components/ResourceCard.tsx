import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Resource } from '../data/resources';

// Sample image URLs - in a real implementation, you'd get these from the resource data
const getImageUrl = (resource: Resource) => {
  if (resource.imageUrl) return resource.imageUrl;

  // Default placeholder images based on category
  if (resource.category === 'starter-kits') {
    return `/images/starter-kit-${Math.floor(Math.random() * 3) + 1}.svg`;
  }
  if (resource.category === 'ui-kits') {
    return `/images/ui-kit-${Math.floor(Math.random() * 3) + 1}.svg`;
  }
  return '';
};

export default function ResourceCard({ resource }: { resource: Resource }) {
  const shouldShowImage = resource.category === 'starter-kits' || resource.category === 'ui-kits';
  const imageUrl = shouldShowImage ? getImageUrl(resource) : '';

  return (
    <Link
      href={resource.url}
      target="_blank"
      className="group block bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 hover:shadow-md transition-all h-[280px]"
    >
      {shouldShowImage && (
        <div className="h-32 w-full relative bg-gray-100">
          <Image
            src={imageUrl}
            alt={resource.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={`p-5 flex flex-col ${shouldShowImage ? 'h-[calc(100%_-_128px)]' : 'h-full'}`}>
        <div className="flex flex-col h-full">
          <h3 className="font-medium text-base mb-2 group-hover:text-blue-600 transition-colors">
            {resource.title}
          </h3>
          <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-2">
            {resource.description}
          </p>
          <div className="flex flex-col gap-1 mt-auto pt-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-500 font-mono">
                {resource.category}
              </span>
              <ExternalLink size={14} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
            {resource.author && (
              <span className="text-xs text-gray-500 font-mono">
                by {resource.author}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}