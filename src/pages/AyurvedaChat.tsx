
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  type: "user" | "assistant";
  content: string;
}

const AyurvedaChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content: "Hello! I'm your Ayurvedic assistant. How can I help you learn about medicinal plants today?",
    },
  ]);
  const [input, setInput] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: input }]);
    
    // Simulate assistant response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "assistant",
          content: "I'm a demo chatbot. This is a placeholder response to demonstrate the UI. The real implementation would connect to a backend service.",
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full p-4">
        <ScrollArea className="flex-1 rounded-lg border bg-[url('/model-container-background.jpg')] bg-cover bg-center p-4 mb-4">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.type === "user"
                      ? "bg-green-600 text-white"
                      : "bg-white/90 text-gray-800"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Ayurvedic plants..."
            className="flex-1"
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AyurvedaChat;
