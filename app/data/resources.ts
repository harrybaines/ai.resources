export type Resource = {
  id: string;
  title: string;
  description: string;
  url: string;
  category: ResourceCategory;
  section?: ResourceSection;
  subsection?: string;
  featured?: boolean;
  createdAt?: string; // ISO date string
  code?: string; // For component snippets
  author?: string;
  avatarUrl?: string;
  imageUrl?: string; // For featured cards with images
  repoData?: {
    stars: number;
    owner: string;
    language?: string;
  }; // For OS repositories
};

export type ResourceSection =
  | "newly-added"
  | "featured"
  | "all"
  | "components"
  | "os-repositories";

export type ResourceCategory =
  | "starter-kits"
  | "ui-kits"
  | "prompts"
  | "cursor-rules"
  | "new";

export const CATEGORIES: { id: ResourceCategory; label: string }[] = [
  { id: "starter-kits", label: "Starter Kits" },
  { id: "ui-kits", label: "UI Kits" },
  { id: "prompts", label: "Prompts" },
  { id: "cursor-rules", label: "Cursor Rules" },
];

export const RESOURCES: Resource[] = [
  // OS Repositories section
  {
    id: "new-langchain",
    title: "LangChain",
    description: "Building applications with LLMs through composability",
    url: "https://github.com/langchain-ai/langchain",
    category: "new",
    section: "os-repositories",
    repoData: {
      stars: 68500,
      owner: "langchain-ai",
      language: "Python",
    },
  },
  {
    id: "new-llamaindex",
    title: "LlamaIndex",
    description: "Connect your LLM to external data sources and applications",
    url: "https://github.com/run-llama/llama_index",
    category: "new",
    section: "os-repositories",
    repoData: {
      stars: 27300,
      owner: "run-llama",
      language: "Python",
    },
  },
  {
    id: "new-llm-chain",
    title: "LLMChain",
    description: "A TypeScript framework for building and orchestrating LLMs",
    url: "https://github.com/example/llm-chain",
    category: "new",
    section: "os-repositories",
    repoData: {
      stars: 12400,
      owner: "example",
      language: "TypeScript",
    },
  },
  // New section with different subsections
  {
    id: "new-tailwind-gradient",
    title: "Tailwind Gradient Button",
    description: "A beautiful gradient button component with hover effects",
    url: "https://github.com/example/ui-components",
    category: "new",
    section: "components",
    code: `<button className="px-4 py-2 rounded-md text-white font-medium text-sm
  bg-gradient-to-r from-purple-500 to-indigo-600
  hover:from-purple-600 hover:to-indigo-700
  focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50
  transition-all duration-200 ease-in-out">
  Gradient Button
</button>`,
  },
  {
    id: "new-image-skeleton",
    title: "Image Skeleton Loader",
    description: "An elegant skeleton loader for images while they load",
    url: "https://github.com/example/ui-components",
    category: "new",
    section: "components",
    code: `<div className="relative bg-gray-200 rounded-md overflow-hidden animate-pulse aspect-video">
  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M6 12h12m-6-6v12" />
    </svg>
  </div>
</div>`,
  },
  {
    id: "new-ai-model-api",
    title: "AI Model API Template",
    description: "A starter template for creating AI model APIs with FastAPI",
    url: "https://github.com/example/ai-model-api",
    category: "new",
    section: "newly-added",
    createdAt: "2023-04-05T10:00:00Z",
  },
  {
    id: "new-llm-prompting",
    title: "Advanced LLM Prompting",
    description: "New techniques for effective LLM prompting and control",
    url: "https://github.com/example/advanced-llm-prompting",
    category: "new",
    section: "newly-added",
    createdAt: "2023-04-02T14:30:00Z",
  },
  {
    id: "new-multi-modal",
    title: "Multi-Modal AI Framework",
    description:
      "A framework for building applications with text, image and audio AI capabilities",
    url: "https://github.com/example/multi-modal-ai",
    category: "new",
    section: "featured",
    featured: true,
  },
  {
    id: "new-semantic-search",
    title: "Semantic Search Engine",
    description:
      "A vector-based semantic search implementation for your applications",
    url: "https://github.com/example/semantic-search",
    category: "new",
    section: "featured",
    featured: true,
  },
  // Original resources
  {
    id: "agent-template",
    title: "AI Agent Template",
    description:
      "A production-ready template for building AI agents with React and LangChain",
    url: "https://github.com/example/ai-agent-template",
    category: "starter-kits",
  },
  {
    id: "llm-app-starter",
    title: "LLM App Starter",
    description:
      "Launch your LLM-powered application with this comprehensive starter kit",
    url: "https://github.com/example/llm-app-starter",
    category: "starter-kits",
  },
  // Prompts and cursor-rules categories
  {
    id: "chatbot-system-prompt",
    title: "Chatbot System Prompt",
    description:
      "A carefully crafted system prompt for creating helpful, harmless chatbots",
    url: "https://github.com/example/system-prompts",
    category: "prompts",
    code: `You are an AI assistant that helps users with coding tasks.
Be thorough, helpful, and concise in your responses.
When providing code examples, add explanations.
Always prioritize best practices and up-to-date methods.`,
  },
  {
    id: "code-generation-prompt",
    title: "Code Generation Prompt",
    description:
      "Optimize your prompts for generating clean, maintainable code",
    url: "https://github.com/example/code-prompts",
    category: "prompts",
    code: `Please generate a [language] function that [does something].
Follow these constraints:
- Use descriptive variable names
- Include error handling
- Add comments for complex logic
- Follow [language] best practices
- Make it efficient for [specific use case]`,
  },
  {
    id: "cursor-code-completion",
    title: "Code Completion Rules",
    description: "Custom rules for better code completions in Cursor",
    url: "https://github.com/example/cursor-rules",
    category: "cursor-rules",
    code: `// Configuration for Cursor AI assistant
{
  "name": "Code Completion Rules",
  "description": "Custom rules for better code completions",
  "rules": [
    "Focus on coding standards",
    "Explain architectural decisions",
    "Consider performance implications"
  ],
  "version": "1.0.0"
}`,
  },
  {
    id: "cursor-refactoring",
    title: "Code Refactoring Rules",
    description: "Refactoring rules for Cursor to improve code quality",
    url: "https://github.com/example/refactoring-rules",
    category: "cursor-rules",
    code: `// Cursor refactoring configuration
{
  "refactorRules": [
    "Extract repeated logic into reusable functions",
    "Simplify complex conditional statements",
    "Use modern language features when appropriate",
    "Optimize for readability first, then performance"
  ],
  "autoApply": false,
  "suggestRefactors": true
}`,
  },
  {
    id: "animated-gradient-card",
    title: "Animated Gradient Card",
    description: "Beautiful animated gradient card component for AI interfaces",
    url: "https://github.com/example/gradient-components",
    category: "ui-kits",
  },
  {
    id: "chat-ui-kit",
    title: "AI Chat UI Kit",
    description: "Complete UI kit for building conversational AI interfaces",
    url: "https://github.com/example/chat-ui-kit",
    category: "ui-kits",
  },
  {
    id: "ui-kit-dashboard",
    title: "AI Dashboard Components",
    description: "Modern dashboard components for AI analytics and monitoring",
    url: "https://github.com/example/ai-dashboard-components",
    category: "ui-kits",
  },
];
