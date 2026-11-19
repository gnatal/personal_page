/**
 * Ransom-note collage tiles, ported from the Stage Hugo theme
 * (https://github.com/basteez/hugo-theme-stage, MIT, (c) 2026 Tiziano Basile).
 *
 * Every letter is a cut-paper tile with its own colour scheme, font, tilt,
 * jitter, scale and ragged edge. The "randomness" is a linear congruential
 * generator seeded with an FNV-1a hash of the text, so the same text always
 * produces the same collage: no client JS, no layout shift, stable builds.
 */

export type Scheme = "wb" | "rw" | "bw" | "wr" | "rb";

export type Tile = {
  glyph: string;
  scheme: Scheme;
  font: 0 | 1 | 2 | 3;
  vars: Record<string, string>;
};

export type CollageOptions = {
  /** "all" (default) or "hero": no black tiles, for use on black slabs. */
  schemes?: "all" | "hero";
  /** Seconds before the first tile pops. */
  delay?: number;
  /** Seconds between tiles. */
  step?: number;
  /** "mixed" (default) lowercases some letters; "upper" never does. */
  letterCase?: "mixed" | "upper";
};

const SCHEMES_ALL: Scheme[] = ["wb", "rw", "bw", "wr"];
const SCHEMES_HERO: Scheme[] = ["wb", "rw", "wr", "rb"];

function fnv1a32(text: string): number {
  let hash = 0x811c9dc5;
  for (const byte of new TextEncoder().encode(text)) {
    hash ^= byte;
    hash = Math.imul(hash, 0x01000193) >>> 0;
  }
  return hash >>> 0;
}

export function collage(text: string, options: CollageOptions = {}): Tile[][] {
  const { schemes = "all", delay = 0, step = 0.05, letterCase = "mixed" } = options;
  const palette = schemes === "hero" ? SCHEMES_HERO : SCHEMES_ALL;
  let x = fnv1a32(text);
  let index = 0;

  const next = () => {
    x = (Math.imul(x, 1664525) + 1013904223) >>> 0;
    return Math.floor(x / 4294968); // 0..999
  };

  return text
    .split(" ")
    .filter(Boolean)
    .map((word) =>
      Array.from(word).map((ch) => {
        const r = [next(), next(), next(), next(), next(), next()];
        const scheme = palette[r[0] % palette.length];
        const font = (r[1] % 4) as Tile["font"];
        const rot = (r[2] * 20) / 1000 - 10;
        const dy = (r[3] * 0.18) / 1000 - 0.09;
        const scale = 0.86 + (r[4] * 0.26) / 1000;
        const j = r[5];
        const j1 = j % 8;
        const j2 = Math.floor(j / 8) % 8;
        const j3 = Math.floor(j / 64) % 8;
        const j4 = (j + 3) % 8;
        const clip = `polygon(${j1}% ${j2}%,${100 - j3}% ${j1}%,${100 - j2}% ${100 - j4}%,${j4}% ${100 - j3}%)`;
        const lower = letterCase === "mixed" && /[a-z]/i.test(ch) && r[2] >= 720;
        const glyph = lower ? ch.toLowerCase() : ch.toUpperCase();
        const tile: Tile = {
          glyph,
          scheme,
          font,
          vars: {
            "--r": `${rot.toFixed(1)}deg`,
            "--dy": `${dy.toFixed(2)}em`,
            "--s": scale.toFixed(2),
            "--d": `${(delay + index * step).toFixed(2)}s`,
            clipPath: clip,
          },
        };
        index += 1;
        return tile;
      }),
    );
}
