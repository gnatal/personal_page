/**
 * Section title: a small game-menu kicker ("Brief", "Stats") over the real
 * heading. The kicker is decoration, so screen readers only hear the heading.
 */
export function SectionHead({ id, text, kicker }: { id: string; text: string; kicker?: string }) {
  return (
    <div className="section-head">
      {kicker && (
        <p className="section-head__kicker" aria-hidden="true">
          {kicker}
        </p>
      )}
      <h2 className="section-head__title" id={id}>
        <span className="grad-text">{text}</span>
      </h2>
    </div>
  );
}
