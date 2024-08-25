import React, { useEffect, useState } from "react";

interface CoinProps {
  triggerFlip: boolean;
  result: "heads" | "tails" | "";
}

const Coin: React.FC<CoinProps> = ({ triggerFlip, result }) => {
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (result) {
      setIsFlipping(true);
      setTimeout(() => {
        setIsFlipping(false);
      }, 2000);
    }
  }, [triggerFlip, result]);

  return (
    <div className="coin-container">
      <div
        className={`coin ${isFlipping ? "flipping" : ""} ${
          result === "heads" ? "heads" : result === "tails" ? "tails" : ""
        }`}
      >
        <div className="coin-heads">Heads</div>
        <div className="coin-tails">Tails</div>
      </div>
    </div>
  );
};

export default Coin;
