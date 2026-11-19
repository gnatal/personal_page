"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string };

/**
 * Persona-style menu. The ▶ cursor follows the section you are reading:
 * a small IntersectionObserver marks the matching link with aria-current.
 * Without JS the links still work; only the cursor tracking is lost.
 */
export function GameMenu({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = ["top", ...items.map((i) => i.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="game-menu" aria-label={label}>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? "true" : undefined}>
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
