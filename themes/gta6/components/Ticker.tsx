import { ticker } from "@/content/resume";

/** News chyron. Read once by assistive tech; the second copy (for a seamless loop) is hidden. */
export function Ticker() {
  if (ticker.length === 0) return null;
  return (
    <div className="ticker" role="region" aria-label="Highlights">
      <div className="ticker__band">
        <p className="ticker__live" aria-hidden="true">
          <span className="ticker__dot" />
          Live
        </p>
        <div className="ticker__window">
          <div className="ticker__track">
            <p>
              {ticker.map((item) => (
                <span key={item}>
                  {item}
                  <span className="ticker__sep" aria-hidden="true">
                    ◆
                  </span>
                </span>
              ))}
            </p>
            <p aria-hidden="true">
              {ticker.map((item) => (
                <span key={item}>
                  {item}
                  <span className="ticker__sep">◆</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
