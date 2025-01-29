'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

interface WorkGalleryProps {
  works: Work[];
}

const WorkGallery = ({ works }: WorkGalleryProps) => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {works.map((work) => (
          <div
            key={work.id}
            className="relative group cursor-pointer"
            onClick={() => setSelectedWork(work)}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={work.image}
                alt={work.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-lg font-semibold mb-2">{work.title}</h3>
                  <p className="text-sm">{work.category}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedWork && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative aspect-video">
              <Image
                src={selectedWork.image}
                alt={selectedWork.title}
                fill
                className="object-cover rounded-t-xl"
              />
              <button
                onClick={() => setSelectedWork(null)}
                className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-[#1E2022] mb-2">
                {selectedWork.title}
              </h2>
              <p className="text-[#677788] mb-4">{selectedWork.description}</p>
              <span className="inline-block px-3 py-1 text-sm bg-[#E7F0FF] text-[#0066FF] rounded-full">
                {selectedWork.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkGallery; 