'use client';

import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="w-full border-b border-dashed border-gray-200">
        <div className="container mx-auto max-w-[90rem] px-6 border-x border-dashed border-gray-200">
          <Navbar />
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="container mx-auto max-w-[90rem] px-6 border-x border-dashed border-gray-200">
          <div className="py-16 px-6 sm:px-12 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-2">About the Developer</h1>
            <p className="text-center text-gray-600 mb-12">AI enthusiast & software engineer</p>

            <div className="space-y-6 text-gray-700">
              <p>
                It&apos;s incredibly hard to keep track of all the advances in AI nowadays. The field is
                moving at a breathtaking pace, with new models, frameworks, and tools being
                released almost daily. This rapid evolution makes it challenging for founders,
                developers, and enthusiasts to know what resources to use when building AI-
                powered applications.
              </p>

              <p>
                I created ai.resources as a curated collection of useful tools to make it easy to find
                exactly what you need to build your next AI startup. Instead of spending hours
                searching through endless GitHub repositories or reading outdated blog posts, you
                can quickly discover the most valuable resources across different categories all in
                one place.
              </p>

              <p>
                My journey in AI began with simple machine learning projects and grew into a passion
                for building applications with large language models and other cutting-edge
                technologies. Throughout this process, I found myself constantly searching for
                reliable resources, often bouncing between dozens of websites and scattered
                documentation.
              </p>

              <p>
                It&apos;s never been easier to build powerful applications than it is today. Large Language
                Models have transformed what&apos;s possible in software development, enabling capabilities
                that would have seemed like science fiction just a few years ago. These AI systems can
                understand natural language, generate human-quality content, write code, and reason
                through complex problems. With the right tools and resources, developers can now create
                in hours what would have taken months, leveraging LLMs as co-pilots for everything from
                ideation to deployment. The democratization of these powerful AI capabilities means that
                smaller teams and individual developers can now build sophisticated AI-powered applications
                that previously required massive engineering teams and budgets.
              </p>

              <p>
                This site is designed to be a living repository that evolves alongside the AI ecosystem.
                I&apos;m excited to invite others to get involved by suggesting new resources, sharing
                feedback, or contributing to the curation process. The AI community thrives on
                collaboration, and I believe we can build something truly valuable by working together
                to maintain this collection of carefully vetted resources.
              </p>
            </div>

            <div className="text-right mt-12 italic">
              — Thomas Chen
            </div>

            <div className="mt-16 flex justify-center">
              <Link
                href="/"
                className="px-5 py-2.5 text-sm border border-dashed border-gray-300 rounded-md bg-gray-50 hover:bg-gray-100 hover:border-gray-400 transition-all"
              >
                Return to Resources
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-auto">
        <div className="container mx-auto max-w-[90rem] px-6 border-x border-dashed border-gray-200">
          <footer className="py-10 text-center">
            <p className="text-base text-gray-500">© {new Date().getFullYear()} ai.resources — All resources are examples for demonstration purposes.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}