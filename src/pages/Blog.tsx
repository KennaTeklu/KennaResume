import React from 'react';
import { Calendar } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      date: "March 15, 2024",
      excerpt: "Learn the best practices for building large-scale React applications that can handle growth and maintain performance.",
      tags: ["React", "Architecture", "Performance"]
    },
    {
      title: "The Future of TypeScript",
      date: "March 1, 2024",
      excerpt: "Exploring upcoming features in TypeScript and how they will change the way we write code.",
      tags: ["TypeScript", "JavaScript", "Development"]
    },
    {
      title: "Cloud Native Development",
      date: "February 15, 2024",
      excerpt: "A comprehensive guide to developing applications for the cloud using modern technologies and practices.",
      tags: ["Cloud", "DevOps", "Architecture"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Technical Blog</h1>
      
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">{post.title}</h2>
            <div className="flex items-center text-gray-400 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>
            <p className="text-gray-300 mb-4">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-700 text-sm rounded-full text-blue-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;