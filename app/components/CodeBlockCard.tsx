import { Check, Clipboard, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Resource } from '../data/resources';

export default function CodeBlockCard({ resource }: { resource: Resource }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (resource.code) {
      navigator.clipboard.writeText(resource.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Format the code with line numbers
  const formatCodeWithLineNumbers = (code: string) => {
    if (!code) return null;

    const lines = code.split('\n');
    return (
      <div className="grid" style={{ gridTemplateColumns: "auto 1fr" }}>
        {lines.map((line, index) => (
          <React.Fragment key={index}>
            <div className="pr-4 text-gray-400 select-none font-mono leading-relaxed py-0.5">{index + 1}</div>
            <div className="font-mono leading-relaxed py-0.5">{line}</div>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="block bg-white border border-gray-200 rounded-lg overflow-hidden h-[400px]">
      <div className="flex justify-between items-center p-3 border-b border-gray-100 bg-white">
        <h3 className="font-medium text-sm">{resource.title}</h3>
        <button
          onClick={copyToClipboard}
          className="p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Copy to clipboard"
        >
          {copied ? <Check size={16} className="text-green-600" /> : <Clipboard size={16} className="text-gray-400" />}
        </button>
      </div>

      <div className="p-4 h-[calc(100%_-_88px)] flex flex-col">
        <div className="flex-grow overflow-auto">
          {resource.code && (
            <div className="text-xs h-full">
              {formatCodeWithLineNumbers(resource.code)}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100">
          <span className="text-xs text-gray-500 font-mono">
            {resource.category}
          </span>
          <Link
            href={resource.url}
            target="_blank"
            className="text-xs text-blue-500 hover:underline flex items-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            source
            <ExternalLink size={12} className="inline" />
          </Link>
        </div>
      </div>
    </div>
  );
}