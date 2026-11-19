"use client";

import { useEffect, useState } from "react";

const KEY = "stage-motion";

function apply(paused: boolean) {
  if (paused) document.documentElement.dataset.motion = "paused";
  else delete document.documentElement.dataset.motion;
}

/**
 * The starburst and the ticker keep moving, so they must be pausable (WCAG 2.2.2).
 * Hidden until JS runs, and hidden by CSS when the OS asks for reduced motion.
 */
export function MotionToggle() {
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let saved = false;
    try {
      saved = localStorage.getItem(KEY) === "paused";
    } catch {
      /* storage can be unavailable; motion just stays on */
    }
    setPaused(saved);
    apply(saved);
    setReady(true);
  }, []);

  function toggle() {
    const next = !paused;
    setPaused(next);
    apply(next);
    try {
      localStorage.setItem(KEY, next ? "paused" : "on");
    } catch {
      /* ignore */
    }
  }

  return (
    <button className="motion-toggle" type="button" aria-pressed={paused} hidden={!ready} onClick={toggle}>
      <span>
        <span aria-hidden="true">{paused ? "▶" : "❚❚"}</span> Pause motion
      </span>
    </button>
  );
}
