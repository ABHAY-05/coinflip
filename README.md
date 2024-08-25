# Solana Coinflip Game

This is a simple Solana-based coin flip game built with Vite, React, and TypeScript. Users can connect their Solana wallet, place a bet, and flip a virtual coin to potentially double their tokens.

## Features

- **Connect Wallet:** Allows users to connect their Solana wallet.
- **Place Bet:** Users can enter an amount of SOL tokens they want to bet.
- **Flip Coin:** Users can select heads or tails and flip the coin. If the result matches their choice, they win double their bet amount.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and enhanced development experience.
- **Vite**: For fast and optimized development.
- **Solana Web3.js**: For interacting with the Solana blockchain.
- **@solana/wallet-adapter**: For wallet connection and interaction.
- **Tailwind CSS**: For styling the components and layout.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **Solana Wallet**: You'll need a Solana wallet (e.g., Phantom) installed as a browser extension.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ABHAY-05/coinflip.git
   cd coinflip
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or

   ```bash
   bun install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   or

   ```bash
   bun run dev
   ```

4. **Open the app in your browser:**

   Navigate to `http://localhost:5173` to see the app in action.

### How to Play

1. **Connect Wallet:**
   Click on the "Connect Wallet" button to link your Solana wallet.

2. **Place a Bet:**
   Enter the amount of SOL you want to bet and select either "Heads" or "Tails."

3. **Flip the Coin:**
   Click the "Flip Coin" button to flip the coin. If the result matches your selected side, you win double your bet amount!

### Known Issues

- The game is built for testing purposes on Solana's Devnet. Please do not use it on Mainnet without necessary adjustments.
- The coin flip result is determined using `Math.random()`, which is not suitable for production in terms of fairness and security.

### Future Improvements

- Implement a backend service to ensure fairness in coin flips.
- Add better error handling and user feedback.
- Optimize for mobile devices.

### Contact

If you have any questions or suggestions, feel free to open an issue or contact the maintainer.
