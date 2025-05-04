import { CATEGORIES, ResourceCategory, RESOURCES } from '../data/resources';

interface CategoryFilterProps {
  selectedCategory: ResourceCategory | null;
  onSelectCategory: (category: ResourceCategory | null) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory
}: CategoryFilterProps) {
  // Calculate counts for each category
  const getCategoryCount = (categoryId: ResourceCategory) => {
    return RESOURCES.filter(resource => resource.category === categoryId).length;
  };

  // Filter categories to only include those with resources
  const categoriesWithResources = CATEGORIES.filter(category =>
    getCategoryCount(category.id) > 0
  );

  return (
    <div className="w-full py-6 px-6 sm:px-12 min-h-[80px]">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <h2 className="font-mono text-sm uppercase text-gray-500 w-28">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categoriesWithResources.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                // Only trigger navigation if it's not the already selected category
                if (category.id !== selectedCategory) {
                  onSelectCategory(category.id);
                }
              }}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full border font-mono text-xs transition-colors cursor-pointer ${selectedCategory === category.id
                ? 'bg-gray-900 text-white border-gray-900'
                : 'border-gray-200 bg-transparent hover:bg-gray-100'
                }`}
            >
              {category.label.charAt(0).toUpperCase() + category.label.slice(1)} ({getCategoryCount(category.id)})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}