"use client";

import { useState } from "react";

const celebrities = [
  "Donald Trump",
  "Kamala Harris",
  "Joe Biden",
  "Elon Musk",
  "Bill Gates",
  "Steve Jobs",
  "Brad Pitt",
  "Jennifer Lawrence",
  "Tom Hanks",
  "Meryl Streep",
  "Leonardo DiCaprio",
];
const modes = ["Date", "Debate"];

export default function Home() {
  const [player1, setPlayer1] = useState(celebrities[0]);
  const [player2, setPlayer2] = useState(celebrities[1]);
  const [mode, setMode] = useState(modes[0]);
  const [topic, setTopic] = useState("");
  const [messages, setMessages] = useState([]);

  const handleStart = () => {
    // Logic to start the date/debate and generate messages
    setMessages([
      { sender: player1, text: `Hello, I'm ${player1}!` },
      {
        sender: player2,
        text: `Hi ${player1}, I'm ${player2}. Let's ${mode.toLowerCase()}!`,
      },
    ]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold">Date or Debate</h1>

        <div className="mb-4 flex justify-between">
          <select
            className="rounded border p-2"
            value={player1}
            onChange={(e) => setPlayer1(e.target.value)}
          >
            {celebrities.map((celeb) => (
              <option key={celeb} value={celeb}>
                {celeb}
              </option>
            ))}
          </select>
          <select
            className="rounded border p-2"
            value={player2}
            onChange={(e) => setPlayer2(e.target.value)}
          >
            {celebrities.map((celeb) => (
              <option key={celeb} value={celeb}>
                {celeb}
              </option>
            ))}
          </select>
        </div>

        <select
          className="mb-4 w-full rounded border p-2"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          {modes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <div className="mb-4 flex">
          <input
            type="text"
            className="flex-grow rounded-l border p-2"
            placeholder="Enter a topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <button
            className="rounded-r bg-blue-500 px-4 py-2 text-white"
            onClick={handleStart}
          >
            Start
          </button>
        </div>

        <div className="h-64 overflow-y-auto rounded border p-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 ${message.sender === player1 ? "text-left" : "text-right"}`}
            >
              <span className="font-bold">{message.sender}: </span>
              {message.text}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
