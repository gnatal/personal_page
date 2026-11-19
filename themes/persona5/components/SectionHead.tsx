import { Collage } from "./Collage";

/** Collage heading on the red stage, with the real text for screen readers. */
export function SectionHead({ id, text }: { id: string; text: string }) {
  return (
    <h2 className="section-head" id={id}>
      <span className="visually-hidden">{text}</span>
      <Collage text={text} outline letterCase="upper" step={0.04} />
    </h2>
  );
}
