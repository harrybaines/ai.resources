import { useMemo } from 'react';
import { RESOURCES, ResourceCategory } from '../data/resources';
import CodeBlockCard from './CodeBlockCard';
import ResourceCard from './ResourceCard';

interface ResourcesListProps {
  selectedCategory: ResourceCategory | null;
  selectedFilter?: string | null;
  onFilterSelect?: (filter: string | null) => void;
}

// Define subtags for each category
const CATEGORY_SUBTAGS: Record<ResourceCategory, string[]> = {
  'new': ['All', 'Frameworks', 'Tools', 'Libraries', 'Articles'],
  'starter-kits': ['All', 'React', 'Next.js', 'Python', 'Node.js', 'Full-stack'],
  'ui-kits': ['All', 'Components', 'Templates', 'Dashboards', 'Cards', 'Inputs'],
  'prompts': ['All', 'Chatbots', 'Code Generation', 'Creative', 'Structured Data'],
  'cursor-rules': ['All', 'Code Completion', 'Refactoring', 'Documentation']
};

export default function ResourcesList({ selectedCategory, selectedFilter = 'All', onFilterSelect }: ResourcesListProps) {
  // First filter by category
  const categoryResources = selectedCategory
    ? RESOURCES.filter(resource => resource.category === selectedCategory)
    : RESOURCES;

  // Get subtags for the selected category
  const subtags = selectedCategory ? CATEGORY_SUBTAGS[selectedCategory] : [];

  // Filter subtags to only include those that match at least one resource
  const filteredSubtags = subtags.filter(subtag => {
    if (subtag === 'All') return true; // Always keep the "All" option

    return categoryResources.some(resource => {
      const resourceText = `${resource.title} ${resource.description}`.toLowerCase();
      return resourceText.includes(subtag.toLowerCase());
    });
  });

  const filteredResources = useMemo(() => {
    if (!selectedCategory) return RESOURCES;

    // Then filter by subtag if one is selected and it's not 'All'
    if (selectedFilter && selectedFilter !== 'All') {
      // This is a simple filter, in a real app you'd have a more sophisticated tagging system
      return categoryResources.filter(resource => {
        // Example filtering logic - in a real app, resources would have tags
        const resourceText = `${resource.title} ${resource.description}`.toLowerCase();
        return resourceText.includes(selectedFilter.toLowerCase());
      });
    }

    return categoryResources;
  }, [selectedCategory, selectedFilter, categoryResources]);

  const renderResourceCard = (resource: typeof RESOURCES[0]) => {
    if (resource.category === 'prompts' || resource.category === 'cursor-rules') {
      return <CodeBlockCard key={resource.id} resource={resource} />;
    }
    return <ResourceCard key={resource.id} resource={resource} />;
  };

  const handleFilterClick = (subtag: string) => {
    if (onFilterSelect) {
      onFilterSelect(subtag === 'All' ? null : subtag);
    }
  };

  return (
    <div className="py-6 h-full flex flex-col w-full px-6 sm:px-12">
      {filteredResources.length > 0 ? (
        <div className="flex gap-8 flex-1 min-h-[700px]">
          {/* Sidebar */}
          <div className="hidden md:block w-48 shrink-0">
            <h3 className="font-mono text-sm text-gray-500 uppercase mb-3">Filter by</h3>
            <ul className="space-y-2 border-l border-dashed border-gray-200 pl-4 min-h-[80px]">
              {filteredSubtags.map((subtag) => (
                <li key={subtag}>
                  <button
                    onClick={() => handleFilterClick(subtag)}
                    className={`block text-xs py-1.5 px-2 rounded transition-colors ${(subtag === 'All' && !selectedFilter) || selectedFilter === subtag
                      ? 'bg-gray-100 text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    {subtag}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Main content */}
          <div className="flex-1 pt-4">
            {/* Special layout for prompts and cursor-rules */}
            {selectedCategory === 'prompts' || selectedCategory === 'cursor-rules' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-8 flex-1 content-start">
                {filteredResources.map(renderResourceCard)}
              </div>
            ) : selectedCategory === 'starter-kits' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 flex-1 content-start">
                {filteredResources.map(renderResourceCard)}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 flex-1 content-start">
                {filteredResources.map(renderResourceCard)}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 flex-1 min-h-[700px]">
          <div className="rounded-lg border border-dashed border-gray-300 w-full max-w-lg p-10 text-center">
            <h3 className="font-mono text-lg text-gray-700 mb-2">No resources yet</h3>
            <p className="text-gray-500 text-sm mb-6">
              We&apos;re working on adding resources to this category.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => handleFilterClick('All')}
                className="text-xs py-2 px-4 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                Clear filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}