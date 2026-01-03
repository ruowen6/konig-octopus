import React from "react";

export function DialogueBox({
  speaker,
  text,
  onNext,
  children,
}: {
  speaker?: string;
  text?: string;
  onNext?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="dialogue">
      {speaker && <div className="speaker">{speaker}</div>}
      <div className="text">{text ?? ""}</div>
      {onNext && (
        <button className="next" onClick={onNext}>
          Next
        </button>
      )}

      {/* Render any children (e.g. ChoiceList) inside the dialogue panel */}
      {children}
    </div>
  );
}
