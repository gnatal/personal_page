import { Fragment } from "react";
import { skills } from "@/content/resume";
import { SectionHead } from "./SectionHead";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title">
      <SectionHead id="skills-title" text="Skills" />
      <div className="slab slab--shadow-white skills">
        <dl className="skills__list">
          {skills.map((group) => (
            <div className="skills__row" key={group.group}>
              <dt>
                <span>
                  <span>{group.group}</span>
                </span>
              </dt>
              <dd>
                {group.items.map((item, i) => (
                  <Fragment key={item}>
                    {i > 0 && (
                      <>
                        <span className="skills__sep" aria-hidden="true">
                          {" ▸ "}
                        </span>
                        <span className="visually-hidden">, </span>
                      </>
                    )}
                    <span className="skills__item">{item}</span>
                  </Fragment>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
