# 📚 HashPapers

A decentralized platform to upload, verify, and store research papers securely using blockchain (via IPFS & Pinata) with built-in AI-based plagiarism detection.

---

## 🚀 Features

- 🔐 *Decentralized Storage:* Upload papers to IPFS via Pinata
- 🤖 *AI Plagiarism Detection:* Automatically checks paper originality
- 💼 *Web3 Wallet Integration:* Connect using MetaMask
- 🧠 *Smart Search & Filter:* Query papers by author, title, tags
- 🔎 *Research Transparency:* Publicly accessible, tamper-proof records
- ⚡ *Vite + React + TypeScript:* Blazing fast frontend stack

---

## 📦 Tech Stack

| Tech              | Purpose                          |
|------------------|----------------------------------|
| *Vite*         | Frontend bundler                 |
| *React*        | UI framework                     |
| *TypeScript*   | Type safety                      |
| *Pinata/IPFS*  | Decentralized file storage       |
| *OpenAI API*   | AI plagiarism detection          |
| *Ethers.js*    | Ethereum wallet & smart contract |
| *React Query*  | Data fetching & caching          |
| *ShadCN/UI*    | Styled component library         |

---

## 🖥 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/HashPapers.git
cd HashPapers

2. Install dependencies

npm install

3. Configure environment

Create .env file in the root:

VITE_PINATA_API_KEY=your_pinata_key
VITE_PINATA_SECRET_API_KEY=your_pinata_secret
VITE_OPENAI_API_KEY=your_openai_key

4. Run locally

npm run dev


---

🧪 How It Works

1. Upload Paper → Sent to IPFS via Pinata API


2. Run AI Plagiarism Check → Uses OpenAI or HuggingFace models


3. Store Metadata → Onchain hash + metadata stored on Ethereum


4. Explore Papers → Search, view, and verify paper originality




---

📁 Project Structure

src/
├── components/
│   └── ui/           # UI components (e.g., Toaster, Button)
│   └── layout/       # App layout
│   └── providers/    # Context providers (e.g., Web3)
├── routes/           # App routes
├── utils/            # Helper functions (upload to Pinata, etc.)
├── App.tsx           # Main app entry
├── main.tsx          # Root render file


---

🛡 Security & Trust

🗂 Papers stored via IPFS: immutable & decentralized

📜 Hash stored on blockchain: verifiable & tamper-proof

🧠 AI plagiarism check: provides trust and transparency



---

📄 License

MIT © 2025 HashPapers Team


---

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


---

📬 Contact

Made with ❤ at a hackathon.
DM [@sidrampotdar] or open an issue if you have any questions!

-
