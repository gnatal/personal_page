import type { CSSProperties } from "react";
import { collage, type CollageOptions } from "@/lib/collage";

type Props = CollageOptions & {
  text: string;
  className?: string;
  /** Black outline around each tile, for collages sitting on the red stage. */
  outline?: boolean;
};

/**
 * Decorative ransom-note lettering. It is aria-hidden, so always put the real
 * text next to it (usually a .visually-hidden span in the same heading).
 */
export function Collage({ text, className, outline, ...options }: Props) {
  const words = collage(text, options);
  const classes = ["collage", outline && "collage--outline", className].filter(Boolean).join(" ");
  return (
    <span className={classes} aria-hidden="true">
      {words.map((word, w) => (
        <span className="cw" key={w}>
          {word.map((tile, t) => (
            <span
              key={t}
              className={`tile t-${tile.scheme} f${tile.font}`}
              style={tile.vars as CSSProperties}
            >
              <span>{tile.glyph}</span>
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
