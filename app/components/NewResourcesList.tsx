import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { CATEGORIES, Resource, ResourceCategory, ResourceSection } from '../data/resources';
import FeaturedCard from './FeaturedCard';

// Sample authors for featured cards
const FEATURED_AUTHORS = [
  { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { name: 'Alex Chen', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { name: 'Maria Garcia', avatar: 'https://i.pravatar.cc/150?u=maria' },
  { name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?u=james' },
  { name: 'Layla Ahmed', avatar: 'https://i.pravatar.cc/150?u=layla' },
  { name: 'David Kim', avatar: 'https://i.pravatar.cc/150?u=david' },
  { name: 'Priya Patel', avatar: 'https://i.pravatar.cc/150?u=priya' },
  { name: 'Michael Brown', avatar: 'https://i.pravatar.cc/150?u=michael' },
  { name: 'OpenAI Team', avatar: 'https://i.pravatar.cc/150?u=openai' },
  { name: 'AI Research Group', avatar: '' },
  { name: 'Anthropic', avatar: 'https://i.pravatar.cc/150?u=anthropic' },
  { name: 'Hugging Face', avatar: 'https://i.pravatar.cc/150?u=huggingface' },
];

// Sample featured resources
const ALL_RESOURCES: Resource[] = [
  {
    id: 'featured-1',
    title: 'Prompt Engineering Guide',
    description: 'A comprehensive guide to crafting effective prompts for LLMs',
    url: 'https://github.com/example/prompt-engineering',
    category: 'new' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[0].name,
    avatarUrl: FEATURED_AUTHORS[0].avatar,
    imageUrl: 'https://images.unsplash.com/photo-1655720031554-a929595ffad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subsection: 'prompt-engineering',
  },
  {
    id: 'featured-2',
    title: 'Vector Database Comparison',
    description: 'An analysis of popular vector databases for AI applications',
    url: 'https://github.com/example/vector-db-comparison',
    category: 'starter-kits' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[1].name,
    avatarUrl: FEATURED_AUTHORS[1].avatar,
    imageUrl: 'https://images.unsplash.com/photo-1655635949212-1d8f4f103ea3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subsection: 'vector-databases',
  },
  {
    id: 'featured-3',
    title: 'RAG Implementation Guide',
    description: 'Step-by-step guide to implementing Retrieval Augmented Generation',
    url: 'https://github.com/example/rag-guide',
    category: 'ui-kits' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[2].name,
    avatarUrl: FEATURED_AUTHORS[2].avatar,
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    subsection: 'rag-implementations',
  },
  {
    id: 'featured-4',
    title: 'LLM Fine-tuning Best Practices',
    description: 'Best practices for fine-tuning large language models',
    url: 'https://github.com/example/llm-finetuning',
    category: 'cursor-rules' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[3].name,
    avatarUrl: FEATURED_AUTHORS[3].avatar,
    subsection: 'llm-finetuning',
  },
  {
    id: 'featured-5',
    title: 'AI Agent Architecture',
    description: 'Design patterns for building advanced AI agents',
    url: 'https://github.com/example/ai-agent-architecture',
    category: 'prompts' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[4].name,
    avatarUrl: FEATURED_AUTHORS[4].avatar,
    subsection: 'prompt-engineering',
  },
  {
    id: 'featured-6',
    title: 'Multimodal AI Development',
    description: 'Guide to developing applications with text, image, and audio AI',
    url: 'https://github.com/example/multimodal-ai',
    category: 'new' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[5].name,
    avatarUrl: FEATURED_AUTHORS[5].avatar,
    subsection: 'prompt-engineering',
  },
  {
    id: 'featured-7',
    title: 'LLM Evaluation Framework',
    description: 'A framework for evaluating large language model performance',
    url: 'https://github.com/example/llm-evaluation',
    category: 'starter-kits' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[6].name,
    avatarUrl: FEATURED_AUTHORS[6].avatar,
    subsection: 'llm-finetuning',
  },
  {
    id: 'featured-8',
    title: 'Semantic Kernel Guide',
    description: 'Guide to using Semantic Kernel for AI orchestration',
    url: 'https://github.com/example/semantic-kernel',
    category: 'ui-kits' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[7].name,
    avatarUrl: FEATURED_AUTHORS[7].avatar,
    subsection: 'rag-implementations',
  },
  {
    id: 'featured-9',
    title: 'GPT-4 Best Practices',
    description: 'Best practices for working with GPT-4 API',
    url: 'https://github.com/example/gpt4-best-practices',
    category: 'prompts' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[8].name,
    avatarUrl: FEATURED_AUTHORS[8].avatar,
    subsection: 'prompt-engineering',
  },
  {
    id: 'featured-10',
    title: 'AI Safety Patterns',
    description: 'Design patterns for building safe AI systems',
    url: 'https://github.com/example/ai-safety-patterns',
    category: 'cursor-rules' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[9].name,
    avatarUrl: FEATURED_AUTHORS[9].avatar,
    subsection: 'vector-databases',
  },
  {
    id: 'featured-11',
    title: 'Claude Prompt Templates',
    description: 'Collection of effective prompt templates for Claude models',
    url: 'https://github.com/example/claude-templates',
    category: 'new' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[10].name,
    avatarUrl: FEATURED_AUTHORS[10].avatar,
    subsection: 'prompt-engineering',
  },
  {
    id: 'featured-12',
    title: 'Diffusion Models Handbook',
    description: 'Comprehensive guide to working with diffusion models',
    url: 'https://github.com/example/diffusion-handbook',
    category: 'starter-kits' as ResourceCategory,
    section: 'all' as ResourceSection,
    author: FEATURED_AUTHORS[11].name,
    avatarUrl: FEATURED_AUTHORS[11].avatar,
    subsection: 'vector-databases',
  },
];

// Sample OS repositories with descriptions
const OS_REPOSITORIES: Resource[] = [
  {
    id: 'os-repo-1',
    title: 'LangChain',
    description: 'Build context-aware reasoning applications with LLMs',
    url: 'https://github.com/langchain-ai/langchain',
    category: 'new' as ResourceCategory,
    section: 'os-repositories' as ResourceSection,
    author: 'LangChain Team',
    avatarUrl: '',
  },
  {
    id: 'os-repo-2',
    title: 'LlamaIndex',
    description: 'Connect custom data sources to large language models',
    url: 'https://github.com/jerryjliu/llama_index',
    category: 'new' as ResourceCategory,
    section: 'os-repositories' as ResourceSection,
    author: 'Jerry Liu',
    avatarUrl: '',
  },
  {
    id: 'os-repo-3',
    title: 'Semantic Kernel',
    description: 'Integrate AI with conventional programming languages',
    url: 'https://github.com/microsoft/semantic-kernel',
    category: 'new' as ResourceCategory,
    section: 'os-repositories' as ResourceSection,
    author: 'Microsoft',
    avatarUrl: '',
  },
  {
    id: 'os-repo-4',
    title: 'Guidance',
    description: 'Control LLMs more precisely with structure & constrained generation',
    url: 'https://github.com/guidance-ai/guidance',
    category: 'new' as ResourceCategory,
    section: 'os-repositories' as ResourceSection,
    author: 'Guidance AI',
    avatarUrl: '',
  },
  {
    id: 'os-repo-5',
    title: 'LiteLLM',
    description: 'Universal API for multiple LLM providers with observability',
    url: 'https://github.com/BerriAI/litellm',
    category: 'new' as ResourceCategory,
    section: 'os-repositories' as ResourceSection,
    author: 'BerriAI',
    avatarUrl: '',
  },
  {
    id: 'os-repo-6',
    title: 'Transformers',
    description: 'State-of-the-art ML for JAX, PyTorch and TensorFlow',
    url: 'https://github.com/huggingface/transformers',
    category: 'new' as ResourceCategory,
    section: 'os-repositories' as ResourceSection,
    author: 'Hugging Face',
    avatarUrl: '',
  },
];

export default function NewResourcesList() {
  const [categoryFilters, setCategoryFilters] = useState<Record<string, string>>({});

  // Filter OS repositories
  const filteredOsRepos = OS_REPOSITORIES;

  // Group resources by category
  const resourcesByCategory = CATEGORIES.reduce((acc, category) => {
    // Skip the 'new' category which was previously used as "All"
    if (category.id !== 'new') {
      acc[category.id] = ALL_RESOURCES.filter(resource => resource.category === category.id);
    }
    return acc;
  }, {} as Record<string, Resource[]>);

  // Add OS repositories as a category
  resourcesByCategory['os-repositories'] = filteredOsRepos;

  // Get filtered resources by category
  const getFilteredResourcesForCategory = (categoryId: string) => {
    const resources = resourcesByCategory[categoryId] || [];
    const activeFilter = categoryFilters[categoryId] || 'All';

    if (activeFilter === 'All') {
      return resources;
    }

    return resources.filter(resource => {
      const resourceText = `${resource.title} ${resource.description}`.toLowerCase();
      return resourceText.includes(activeFilter.toLowerCase());
    });
  };

  // Generate filters for a category
  const getCategoryFilters = (categoryId: string) => {
    const resources = resourcesByCategory[categoryId] || [];
    const filters = new Set<string>();

    // Add words from titles and descriptions as potential filters
    resources.forEach(resource => {
      const words = `${resource.title} ${resource.description}`.toLowerCase().split(/\s+/);
      words.forEach(word => {
        if (word.length > 3) { // Only add words longer than 3 chars as filters
          filters.add(word);
        }
      });
    });

    // Only include filters that actually match at least one resource
    const validFilters = ['All'];
    Array.from(filters).forEach(filter => {
      const matchingResources = resources.some(resource => {
        const resourceText = `${resource.title} ${resource.description}`.toLowerCase();
        return resourceText.includes(filter.toLowerCase());
      });

      if (matchingResources) {
        validFilters.push(filter);
      }
    });

    return validFilters.slice(0, 6); // Limit to 5 filters plus "All"
  };

  const handleCategoryFilterClick = (categoryId: string, filter: string) => {
    setCategoryFilters(prev => ({
      ...prev,
      [categoryId]: filter
    }));
  };

  // Create an ordered array of categories, starting with "starter-kits"
  const orderedCategories = [
    ...CATEGORIES.filter(cat => cat.id === 'starter-kits'),
    ...CATEGORIES.filter(cat => cat.id !== 'starter-kits' && cat.id !== 'new'),
    { id: 'os-repositories', label: 'OS Repositories' }
  ];

  return (
    <div className="py-6 h-full flex flex-col w-full space-y-32 pb-24">
      {/* Resources Section */}
      <section className="px-6 sm:px-12">
        <div className="space-y-16">
          {/* Render each category with horizontal filter bar */}
          {orderedCategories.map(category => {
            const filteredResources = getFilteredResourcesForCategory(category.id);

            // Skip rendering if no resources for this category
            if (!filteredResources || filteredResources.length === 0) return null;

            const filters = getCategoryFilters(category.id);
            const activeFilter = categoryFilters[category.id] || 'All';

            return (
              <div key={category.id} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">{category.label}</h3>

                  {/* Horizontal filter bar */}
                  <div className="flex flex-wrap gap-2">
                    {filters.map(filter => (
                      <button
                        key={filter}
                        onClick={() => handleCategoryFilterClick(category.id, filter)}
                        className={`text-sm py-1 px-2 rounded transition-colors ${filter === activeFilter
                          ? 'bg-gray-100 text-gray-900 font-medium'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resources grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredResources.map(resource => (
                    category.id === 'os-repositories'
                      ? <FeaturedCard key={resource.id} resource={resource} />
                      : <FeaturedCardCompact key={resource.id} resource={resource} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contribute Section */}
      <section className="border-t border-dashed border-gray-300 mt-16">
        <div className="px-6 sm:px-12 py-20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-medium mb-3">Contribute a Resource</h3>
            <p className="text-gray-600 mb-6">
              Know of a great AI resource that should be included? Share it with the community.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2 bg-transparent text-gray-900 border border-gray-900 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Submit a Resource
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Compact Featured Card with smaller image
function FeaturedCardCompact({ resource }: { resource: Resource }) {
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
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-gray-200 hover:border-gray-300 overflow-hidden transition-all hover:shadow-sm group"
    >
      <div className="aspect-[3/1] w-full overflow-hidden">
        <img
          src={resource.imageUrl || 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'}
          alt={resource.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-3">
        <h3 className="font-mono text-xs font-medium mb-1 line-clamp-1 group-hover:text-gray-900">
          {resource.title}
        </h3>
        <p className="text-xs text-gray-600 mb-2 line-clamp-1">
          {resource.description}
        </p>
        <div className="flex items-center gap-1.5">
          <div className="h-4 w-4 rounded-full overflow-hidden flex-shrink-0">
            {resource.avatarUrl ? (
              <img
                src={resource.avatarUrl}
                alt={author}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className={`flex items-center justify-center h-full w-full ${bg} ${text} text-[10px] font-medium`}>
                {getInitials(author)}
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 truncate flex-1 font-mono">
            {author}
          </p>
          <ExternalLink size={10} className="text-gray-400 group-hover:text-gray-600" />
        </div>
      </div>
    </a>
  );
}