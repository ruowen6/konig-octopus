import type { Choice } from "../engine/types";

export function ChoiceList({
  choices,
  onChoose,
}: {
  choices: Choice[];
  onChoose: (to: string) => void;
}) {
  return (
    <div className="choices">
      {choices.map((c) => (
        <button key={c.id} className="choice btn-stamp" onClick={() => onChoose(c.to)}>
          {c.text}
        </button>
      ))}
    </div>
  );
}
