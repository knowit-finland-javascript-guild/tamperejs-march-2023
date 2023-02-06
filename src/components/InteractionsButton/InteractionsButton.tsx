import React, { useState } from "react";

interface InteractionsButtonProps {
  /**
   * Initial button content
   */
  initialLabel: string;
  /**
   * Button content after clicking
   */
  afterClickLabel: string;
}

export const InteractionsButton = ({ initialLabel, afterClickLabel }: InteractionsButtonProps) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <button data-testid="button-to-click" onClick={() => setIsClicked(true)}>
        {isClicked ? afterClickLabel : initialLabel}
      </button>
      {isClicked && <p>Text after clicking</p>}
    </>
  );
};
