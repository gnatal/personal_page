import { ticker } from "@/content/resume";

/** Scrolling band. Read once by assistive tech; the second copy (for a seamless loop) is hidden. */
export function Ticker() {
  if (ticker.length === 0) return null;
  return (
    <div className="ticker" role="region" aria-label="Highlights">
      <div className="ticker__band">
        <div className="ticker__track">
          <p>
            {ticker.map((item) => (
              <span key={item}>
                {item}
                <span className="ticker__star" aria-hidden="true">★</span>
              </span>
            ))}
          </p>
          <p aria-hidden="true">
            {ticker.map((item) => (
              <span key={item}>
                {item}
                <span className="ticker__star">★</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
