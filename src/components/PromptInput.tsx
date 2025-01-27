import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VscSend } from "react-icons/vsc";

interface PromptInputProps {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
  isBottomPosition: boolean;
}

export default function PromptInput({
  prompt,
  setPrompt,
  handleClick,
  isBottomPosition,
}: PromptInputProps) {
  return (
    <div
      className={`flex gap-2 bg-slate-950 ${
        isBottomPosition
          ? "fixed bottom-0 w-full md:w-3/4 left-1/2 transform -translate-x-1/2 p-4 border-t"
          : "absolute top-1/2 left-1/2 w-full px-4 sm:w-3/4 md:w-2/4 transform -translate-x-1/2 -translate-y-1/2"
      }`}
    >
      <Input
        className="flex-grow py-5 text-3lg"
        type="text"
        value={prompt}
        placeholder="Ask me anything..."
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleClick();
        }}
      />
      <Button
        variant="blue"
        size="lg"
        disabled={!prompt.trim()}
        onClick={handleClick}
      >
        <VscSend size={30} />
      </Button>
    </div>
  );
}
