import type { ReactNode } from "react";

/** Tiny build-time highlighter for the short C samples on the page. No client JS. */

const KEYWORDS = new Set([
  "static", "void", "int", "return", "const", "char", "struct", "if", "else", "for",
  "while", "unsigned", "long", "short", "sizeof", "typedef", "enum", "switch", "case", "break",
]);

const TOKEN =
  /(\/\*[\s\S]*?\*\/|\/\/[^\n]*)|("(?:\\.|[^"\\])*")|(#[a-z]+)|\b([A-Za-z_]\w*)\b|\b(\d+)\b/g;

export function highlightC(source: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let key = 0;
  for (const m of source.matchAll(TOKEN)) {
    const start = m.index ?? 0;
    if (start > last) out.push(source.slice(last, start));
    const [text, comment, str, pre, ident, num] = m;
    let cls: string | null = null;
    if (comment) cls = "tok-com";
    else if (str) cls = "tok-str";
    else if (pre) cls = "tok-pre";
    else if (num) cls = "tok-num";
    else if (ident && KEYWORDS.has(ident)) cls = "tok-kw";
    else if (ident && /^[A-Z]/.test(ident)) cls = "tok-type";
    out.push(cls ? <span key={key++} className={cls}>{text}</span> : text);
    last = start + text.length;
  }
  if (last < source.length) out.push(source.slice(last));
  return out;
}
