import React from 'react';
import Card from './Card';

const cards = [
  {
    href: "https://docs.astro.build/",
    title: "Documentation",
    body: "Learn how Astro works and explore the official API docs."
  },
  {
    href: "https://astro.build/integrations/",
    title: "Integrations",
    body: "Supercharge your project with new frameworks and libraries."
  },
  {
    href: "https://astro.build/themes/",
    title: "Themes",
    body: "Explore a galaxy of community-built starter themes."
  },
  {
    href: "https://astro.build/chat/",
    title: "Community",
    body: "Come say hi to our amazing Discord community. ❤️"
  }
];

export default function CardGrid() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(24ch,1fr))] gap-8 p-0">
      {cards.map((card) => (
        <Card key={card.href} {...card} />
      ))}
    </ul>
  );
}