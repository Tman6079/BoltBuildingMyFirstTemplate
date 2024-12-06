import React from 'react';

interface CardProps {
  href: string;
  title: string;
  body: string;
}

export default function Card({ href, title, body }: CardProps) {
  return (
    <li className="list-none p-px bg-[#23262d] rounded-lg transition-[background-position] duration-600 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:bg-gradient-to-r hover:from-accent hover:via-accent-light hover:to-white hover:bg-[length:400%] hover:bg-right">
      <a
        href={href}
        className="block w-full no-underline leading-relaxed p-6 rounded-lg bg-[#23262d] opacity-80 text-white"
      >
        <h2 className="m-0 text-xl transition-colors duration-600 ease-[cubic-bezier(0.22,1,0.36,1)]">
          {title}
          <span>&rarr;</span>
        </h2>
        <p className="mt-2 mb-0">{body}</p>
      </a>
    </li>
  );
}