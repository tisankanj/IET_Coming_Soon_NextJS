import { Fragment } from "react";

// Large headings otherwise break "Three-Wheeler" after the hyphen. Hyphenated words stay on one line.
export function KeepHyphenWords({ text }: { text: string }) {
  const words = text.split(" ");

  return words.map((word, index) => (
    <Fragment key={`${word}-${index}`}>
      {index > 0 && " "}
      {word.includes("-") ? <span className="whitespace-nowrap">{word}</span> : word}
    </Fragment>
  ));
}
