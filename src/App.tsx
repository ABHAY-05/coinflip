import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  clusterApiUrl,
  Connection,
  LAMPORTS_PER_SOL,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";
import React, { useState } from "react";
import "./App.css";
import Coin from "./Coin";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const App: React.FC = () => {
  const { publicKey, sendTransaction } = useWallet();
  const [betAmount, setBetAmount] = useState<number>(0);
  const [selectedSide, setSelectedSide] = useState<"heads" | "tails" | "">("");
  const [message, setMessage] = useState<string>("");
  const [result, setResult] = useState<"heads" | "tails" | "">("");
  const [flipTrigger, setFlipTrigger] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleBet = async () => {
    if (!publicKey) {
      setMessage("Please connect your wallet!");
      return;
    }

    if (!betAmount || !selectedSide) {
      setMessage("Please select a side and enter a bet amount!");
      return;
    }

    setLoading(true);
    setResult("");

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: publicKey,
        lamports: betAmount * LAMPORTS_PER_SOL,
      })
    );

    try {
      const signature = await sendTransaction(transaction, connection);
      const latestBlockHash = await connection.getLatestBlockhash();
      await connection.confirmTransaction({
        blockhash: latestBlockHash.blockhash,
        lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
        signature: signature,
      });

      setLoading(false);

      const flipResult = Math.random() < 0.5 ? "heads" : "tails";
      setResult(flipResult);

      setFlipTrigger((prev) => !prev);

      if (flipResult === selectedSide) {
        setMessage(`You won! The coin landed on ${flipResult}.`);
      } else {
        setMessage(`You lost! The coin landed on ${flipResult}.`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setMessage(`Transaction failed! ${error.message}`);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4 text-white">Coinflip</h1>
      <WalletMultiButton className="mt-4" />

      {publicKey && (
        <div className="mt-8 flex flex-col items-center justify-center">
          <input
            type="number"
            placeholder="Enter bet amount (SOL)"
            value={betAmount}
            onChange={(e) => setBetAmount(parseFloat(e.target.value))}
            className="border p-2 rounded mb-4"
          />
          <div className="flex justify-around gap-10">
            <button
              onClick={() => setSelectedSide("heads")}
              className={`p-2 rounded ${
                selectedSide === "heads"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Heads
            </button>
            <button
              onClick={() => setSelectedSide("tails")}
              className={`p-2 rounded ${
                selectedSide === "tails"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              Tails
            </button>
          </div>
          <Coin triggerFlip={flipTrigger} result={result} />
          <button
            onClick={handleBet}
            disabled={loading || !publicKey || !betAmount || !selectedSide}
            className={`text-white p-2 rounded ${
              loading || !publicKey || !betAmount || !selectedSide
                ? "bg-gray-400"
                : "bg-green-500"
            }`}
          >
            Flip Coin
          </button>
        </div>
      )}
      {message && <p className="mt-4 text-white">{message}</p>}
    </div>
  );
};

export default App;
