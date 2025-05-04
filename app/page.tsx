'use client';

import { PlusCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import CategoryFilter from './components/CategoryFilter';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ResourcesList from './components/ResourcesList';
import { CATEGORIES, ResourceCategory } from './data/resources';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get category and filter from URL params
  const categoryParam = searchParams.get('category');
  const filterParam = searchParams.get('filter');

  // Validate that the category is valid
  const selectedCategory = CATEGORIES.find(c => c.id === categoryParam)?.id as ResourceCategory | null;

  // Handle category selection
  const handleCategorySelect = (category: ResourceCategory | null) => {
    // Create a new URLSearchParams instance to modify
    const params = new URLSearchParams(searchParams.toString());

    if (category) {
      params.set('category', category);
      // Clear filter when changing categories
      params.delete('filter');
    } else {
      params.delete('category');
      params.delete('filter');
    }

    // Use router.push to update the URL without a full page reload
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Handle filter selection
  const handleFilterSelect = (filter: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (filter && filter !== 'All') {
      params.set('filter', filter);
    } else {
      params.delete('filter');
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Set default category to 'starter-kits' on initial load
  useEffect(() => {
    if (!categoryParam) {
      handleCategorySelect('starter-kits');
    }
  }, [categoryParam]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full border-b border-dashed border-gray-200">
        <div className="container mx-auto max-w-[100rem] px-6 border-x border-dashed border-gray-200">
          <Navbar />
        </div>
      </div>

      <div className="w-full border-b border-dashed border-gray-200">
        <div className="container mx-auto max-w-[100rem] px-6 border-x border-dashed border-gray-200">
          <Hero />
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <div id="resources" className="w-full border-b border-dashed border-gray-200">
          <div className="container mx-auto max-w-[100rem] px-6 border-x border-dashed border-gray-200">
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        </div>

        <div className="w-full border-b border-dashed border-gray-200 flex-1 flex flex-col">
          <div className="container mx-auto max-w-[100rem] px-6 border-x border-dashed border-gray-200 flex-1">
            <ResourcesList
              selectedCategory={selectedCategory}
              selectedFilter={filterParam}
              onFilterSelect={handleFilterSelect}
            />
          </div>
        </div>
      </div>

      {/* Contribute Section */}
      <div className="w-full border-b border-dashed border-gray-200">
        <div className="container mx-auto max-w-[100rem] px-6 border-x border-dashed border-gray-200">
          <div className="w-full py-16 px-6 sm:px-12">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Want to contribute?</h2>
                <p className="text-gray-600 mb-6">
                  Help grow this collection with your own resources, tools, and templates. The AI community thrives on collaboration.
                </p>
                <Link
                  href="/contribute"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-500 text-white rounded-md font-medium text-sm transition-colors hover:bg-indigo-600"
                >
                  <PlusCircle size={16} />
                  Add a resource
                </Link>
              </div>
              <div className="flex-1 flex justify-end">
                <div className="relative w-full max-w-sm aspect-square">
                  <Image
                    src="/contribute-image.svg"
                    alt="Contribute Image"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-auto">
        <div className="container mx-auto max-w-[100rem] px-6 border-x border-dashed border-gray-200">
          <footer className="py-10 text-center">
            <p className="text-base text-gray-500">© {new Date().getFullYear()} ai.resources — All resources are examples for demonstration purposes.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}



