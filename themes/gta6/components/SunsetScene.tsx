/**
 * The hero backdrop: a neon sunset over the sea, a beach-city skyline and two
 * palm trees. Everything is CSS gradients and inline SVG drawn here, computed
 * at build time, so it ships no images and no client JS. Purely decorative.
 */

type Pt = [number, number];

/** A frond: a drooping rachis with leaflets hanging off it, in local coordinates (crown at 0,0). */
function frond(length: number, droop: number): string {
  const p0: Pt = [0, 0];
  const p1: Pt = [length * 0.5, -length * 0.3];
  const p2: Pt = [length, droop];
  const at = (t: number): Pt => [
    (1 - t) ** 2 * p0[0] + 2 * (1 - t) * t * p1[0] + t * t * p2[0],
    (1 - t) ** 2 * p0[1] + 2 * (1 - t) * t * p1[1] + t * t * p2[1],
  ];
  const tangent = (t: number): Pt => [
    2 * (1 - t) * (p1[0] - p0[0]) + 2 * t * (p2[0] - p1[0]),
    2 * (1 - t) * (p1[1] - p0[1]) + 2 * t * (p2[1] - p1[1]),
  ];
  const r = (n: number) => Math.round(n * 10) / 10;
  let d = `M0 0Q${r(p1[0])} ${r(p1[1])} ${r(p2[0])} ${r(p2[1])}`;
  const count = 13;
  for (let i = 1; i <= count; i++) {
    const t = i / (count + 1);
    const [x, y] = at(t);
    const [tx, ty] = tangent(t);
    const base = Math.atan2(ty, tx);
    const size = length * 0.36 * Math.sin(Math.PI * Math.min(1, t * 1.15)) ** 0.7 + 4;
    for (const turn of [0.62, 1.32]) {
      const a = base + turn;
      d += `M${r(x)} ${r(y)}l${r(Math.cos(a) * size)} ${r(Math.sin(a) * size)}`;
    }
  }
  return d;
}

const FRONDS: { angle: number; length: number; droop: number; flip?: boolean }[] = [
  { angle: -70, length: 92, droop: 18 },
  { angle: -36, length: 122, droop: 34 },
  { angle: -4, length: 132, droop: 52 },
  { angle: 26, length: 112, droop: 46 },
  { angle: 52, length: 84, droop: 30 },
  { angle: -62, length: 100, droop: 22, flip: true },
  { angle: -28, length: 128, droop: 40, flip: true },
  { angle: 2, length: 124, droop: 54, flip: true },
  { angle: 32, length: 96, droop: 40, flip: true },
];

const CROWN: Pt = [131, 142];

function Palm() {
  return (
    <symbol id="scene-palm" viewBox="0 0 260 440">
      <path d="M102 440C106 346 118 238 126 146L137 148C131 240 122 346 122 440Z" />
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        {FRONDS.map((f, i) => (
          <path
            key={i}
            d={frond(f.length, f.droop)}
            strokeWidth={2.6}
            transform={`translate(${CROWN[0]} ${CROWN[1]})${f.flip ? " scale(-1 1)" : ""} rotate(${f.angle})`}
          />
        ))}
      </g>
      <circle cx="125" cy="152" r="6" />
      <circle cx="137" cy="154" r="6" />
      <circle cx="131" cy="160" r="6" />
    </symbol>
  );
}

/** Deterministic skyline: low blocks with a few hotel towers, so builds are stable. */
function skyline(): string {
  let seed = 7;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  let x = 0;
  let d = "M0 120";
  while (x < 1600) {
    const w = 18 + Math.floor(rand() * 46);
    const tall = rand() > 0.82;
    const h = tall ? 70 + Math.floor(rand() * 40) : 14 + Math.floor(rand() * 34);
    d += `V${120 - h}H${x + w}`;
    x += w;
  }
  return `${d}V120Z`;
}

export function SunsetScene() {
  return (
    <div className="scene" aria-hidden="true">
      <div className="scene__sky" />
      <div className="scene__sun" />
      <svg className="scene__skyline" viewBox="0 0 1600 120" preserveAspectRatio="none" focusable="false">
        <path d={skyline()} />
      </svg>
      <div className="scene__sea" />
      <svg className="scene__defs" width="0" height="0" focusable="false">
        <Palm />
      </svg>
      <svg className="scene__palm scene__palm--l" viewBox="0 0 260 440" focusable="false">
        <use href="#scene-palm" />
      </svg>
      <svg className="scene__palm scene__palm--l2" viewBox="0 0 260 440" focusable="false">
        <use href="#scene-palm" />
      </svg>
      <svg className="scene__palm scene__palm--r" viewBox="0 0 260 440" focusable="false">
        <use href="#scene-palm" />
      </svg>
      <div className="scene__scrim" />
    </div>
  );
}
