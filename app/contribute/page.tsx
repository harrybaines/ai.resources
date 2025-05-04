'use client';

import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ExtractedData {
  name: string;
  description: string;
  author: string;
}

export default function ContributePage() {
  const [url, setUrl] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState<ExtractedData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleExtract = async () => {
    if (!url) return;

    setIsExtracting(true);

    // Simulate API call with timeout
    setTimeout(() => {
      // Example extracted content for demo
      const exampleData: ExtractedData = {
        name: "Prompt Engineering Best Practices Guide",
        description: "A comprehensive guide to effective prompt engineering for large language models. Covers key techniques including chain-of-thought prompting, few-shot learning, and structured outputs.",
        author: "AI Research Team"
      };

      setExtractedData(exampleData);
      setIsExtracting(false);
    }, 2000);
  };

  const handleSubmit = () => {
    // In a real implementation, this would submit to a database or API
    setIsSubmitted(true);
    setTimeout(() => {
      setUrl('');
      setExtractedData(null);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 w-full mx-auto max-w-[110rem] px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold mb-3">Contribute a Resource</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Share valuable AI resources with the community. Paste a URL and we&apos;ll extract the essential details.
          </p>
        </div>

        {/* Dashed border container */}
        <div className="border border-dashed border-gray-300 rounded-lg p-6 mb-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="url-input" className="block text-sm font-medium text-gray-700 mb-2">
                Resource URL
              </label>
              <input
                id="url-input"
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/ai-resource"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                disabled={isExtracting || isSubmitted}
              />
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleExtract}
                disabled={!url || isExtracting || isSubmitted}
                className={`px-5 py-2.5 rounded-md text-white font-medium flex items-center gap-2
                ${(!url || isExtracting || isSubmitted)
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'}`}
              >
                {isExtracting ? (
                  <>
                    <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                    <span>Extracting...</span>
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    <span>Extract Details</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {extractedData && (
          <div className="mt-8 space-y-6 animate-fadeIn pb-12">
            <h2 className="mb-10 text-sm font-medium text-gray-500 uppercase tracking-wider font-mono">
              Extracted Details
            </h2>

            <div className="border border-dashed border-gray-300 rounded-lg overflow-hidden">
              <div className="p-5 bg-white">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="resource-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Resource Name
                    </label>
                    <input
                      id="resource-name"
                      type="text"
                      value={extractedData.name}
                      onChange={(e) => setExtractedData({ ...extractedData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="resource-description" className="block text-sm font-medium text-gray-700 mb-2">
                      Description
                    </label>
                    <textarea
                      id="resource-description"
                      value={extractedData.description}
                      onChange={(e) => setExtractedData({ ...extractedData, description: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="resource-author" className="block text-sm font-medium text-gray-700 mb-2">
                      Author
                    </label>
                    <input
                      id="resource-author"
                      type="text"
                      value={extractedData.author}
                      onChange={(e) => setExtractedData({ ...extractedData, author: e.target.value })}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                  </div>
                </form>
              </div>

              <div className="flex justify-end p-4 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                  className={`px-5 py-2.5 rounded-md text-white font-medium flex items-center gap-2
                  ${isSubmitted
                      ? 'bg-green-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700'}`}
                >
                  {isSubmitted ? (
                    <>
                      <Check size={16} />
                      <span>Submitted!</span>
                    </>
                  ) : (
                    <>
                      <ArrowRight size={16} />
                      <span>Submit for Approval</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="w-full mt-auto border-t border-dashed border-gray-200">
        <div className="container mx-auto max-w-[110rem] px-6">
          <footer className="py-10 text-center">
            <p className="text-base text-gray-500">© {new Date().getFullYear()} ai.resources — All resources are examples for demonstration purposes.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}