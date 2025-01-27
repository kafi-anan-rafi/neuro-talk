"use client";
import { useState } from "react";
import Message from "@/components/Message";
import AIResponse from "@/components/AIResponse";
import PromptInput from "@/components/PromptInput";
import { generateAIResponse } from "@/services/googleGenerativeAI";

interface DataItem {
  prompt: string;
  response: string;
}

export default function Home() {
  const [data, setData] = useState<DataItem[]>([]);
  const [prompt, setPrompt] = useState<string>("");
  const [message, setMessage] = useState<boolean>(true);
  const [isBottomPosition, setIsBottomPosition] = useState<boolean>(false);

  async function handleClick() {
    if (!prompt.trim()) return;

    setMessage(false);
    setIsBottomPosition(true);
    setData((prevData) => [
      ...prevData,
      {
        prompt,
        response: "Loading...",
      },
    ]);

    const response = await generateAIResponse(prompt);

    setData((prevData) =>
      prevData.map((item) =>
        item.prompt === prompt
          ? {
              ...item,
              response,
            }
          : item
      )
    );
    setPrompt("");
  }

  return (
    <div className="container mx-auto px-2 h-screen flex flex-col pt-16">
      <main className="flex-grow">
        {/* Show text */}
        <Message isVisible={message} />

        {/* AI output */}
        <AIResponse data={data} />

        {/* Prompt Input Box */}
        <PromptInput
          prompt={prompt}
          setPrompt={setPrompt}
          handleClick={handleClick}
          isBottomPosition={isBottomPosition}
        />
      </main>
    </div>
  );
}