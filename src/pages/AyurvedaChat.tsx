
import { useState, useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearch } from "@/context/SearchContext";
import { Link } from "react-router-dom";
import { getPlantInfo } from "@/data/plantsData";

interface Message {
  type: "user" | "assistant";
  content: string;
}

const AyurvedaChat = () => {
  const { searchQuery, setSearchQuery } = useSearch();
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "assistant",
      content: "Hello! I'm your Ayurvedic assistant. How can I help you learn about medicinal plants today?",
    },
  ]);
  const [input, setInput] = useState("");
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Handle incoming search queries
  useEffect(() => {
    if (searchQuery && searchQuery.trim() !== "") {
      // Add user message showing the search
      const userMessage = `Tell me about ${searchQuery}`;
      setMessages(prev => [...prev, { type: "user", content: userMessage }]);
      
      // Add assistant response with plant info
      setTimeout(() => {
        const plantInfo = getPlantInfo(searchQuery);
        setMessages(prev => [...prev, { type: "assistant", content: plantInfo }]);
      }, 500);
      
      // Reset the search query after handling it
      setInput("");
    }
  }, [searchQuery]);
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: "user", content: input }]);
    
    // Check if input is a search query
    if (input.toLowerCase().includes("about") || 
        input.toLowerCase().includes("tell me") ||
        input.toLowerCase().includes("what is")) {
      
      // Find potential plant name in the query
      const plants = ["tulsi", "ashwagandha", "turmeric"];
      const matchedPlant = plants.find(plant => input.toLowerCase().includes(plant));
      
      if (matchedPlant) {
        // Set as search query to trigger the useEffect
        setSearchQuery(matchedPlant);
      } else {
        // Generic response for unknown plants
        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            {
              type: "assistant",
              content: "I'm not sure about that plant. Would you like to explore our database of Ayurvedic plants? You can search for plants like Tulsi, Ashwagandha, or Turmeric.",
            },
          ]);
        }, 500);
      }
    } else {
      // Generic response for non-search queries
      setTimeout(() => {
        setMessages(prev => [
          ...prev,
          {
            type: "assistant",
            content: "I specialize in information about Ayurvedic plants. Try asking me about specific plants like Tulsi, Ashwagandha, or Turmeric!",
          },
        ]);
      }, 500);
    }

    setInput("");
  };

  const handleSearchClick = () => {
    if (!input.trim()) return;
    setSearchQuery(input);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full p-4">
        <ScrollArea ref={scrollAreaRef} className="flex-1 rounded-lg border bg-[url('/model-container-background.jpg')] bg-cover bg-center p-4 mb-4">
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

        <div className="flex gap-2 flex-col sm:flex-row">
          <form onSubmit={handleSubmit} className="flex gap-2 flex-1">
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
          
          <Button 
            type="button" 
            onClick={handleSearchClick}
            className="bg-green-700 hover:bg-green-800 flex items-center gap-2"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search Plants</span>
          </Button>
          
          <Link to="/explore-plants">
            <Button type="button" className="w-full sm:w-auto bg-green-800 hover:bg-green-900">
              Explore All Plants
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AyurvedaChat;
