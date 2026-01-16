// my-vn/src/ui/DialogueBox.tsx
import React from "react";
import dialogueBg from "../assets/ui/dialogue.png";

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
  // Keep the dialogue background at the image's original aspect ratio.
  // We'll read the image's natural dimensions once and set CSS aspect-ratio on the container.
  const [aspectRatio, setAspectRatio] = React.useState<string | undefined>(undefined);

  React.useEffect(() => {
    let mounted = true;
    const img = new Image();
    img.src = dialogueBg;
    img.onload = () => {
      if (!mounted) return;
      // aspect-ratio takes the form "width / height"
      setAspectRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
    };
    // if cached and complete
    if (img.complete && img.naturalWidth && img.naturalHeight) {
      setAspectRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
    }

    return () => {
      mounted = false;
    };
  }, []);

  const bgStyle: React.CSSProperties = {
    backgroundImage: `url(${dialogueBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain", // preserve image aspect ratio
    // apply aspect-ratio when available so container keeps the image's proportion
    ...(aspectRatio ? ({ aspectRatio } as React.CSSProperties) : {}),
  };

  return (
    <div className="dialogue" style={bgStyle}>
      {speaker && <div className="speaker">{speaker}</div>}
      <div className="text">{text ?? ""}</div>
      
      {onNext && (
        <button className="next btn-stamp" onClick={onNext}>
          Next
        </button>
      )}

      {/* Render any children (e.g. ChoiceList) inside the dialogue panel */}
      {children}
    </div>
  );
}
