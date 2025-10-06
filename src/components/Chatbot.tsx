import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, ThumbsUp, ThumbsDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import profileImage from "@/assets/profile-fatma.jpg";

interface Message { 
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  liked?: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Bonjour! Je suis l'assistant virtuel de Fatma. Comment puis-je vous aider à en savoir plus sur son parcours, ses compétences ou ses projets?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage, timestamp: new Date() }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat", {
        body: { message: userMessage }
      });

      if (error) throw error;

      if (data?.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply, timestamp: new Date() }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        timestamp: new Date()
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLike = (index: number, isLike: boolean) => {
    setMessages(prev => prev.map((msg, i) => {
      if (i === index) {
        return { ...msg, liked: msg.liked === isLike ? undefined : isLike };
      }
      return msg;
    }));
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
      toast({
        title: "Copié!",
        description: "Le message a été copié dans le presse-papiers."
      });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Impossible de copier le message.",
        variant: "destructive"
      });
    }
  };

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg transition-all hover:scale-110 z-50 ${
          isOpen ? "hidden" : "flex"
        }`}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-background border rounded-lg shadow-xl flex flex-col z-50 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">Assistant Fatma</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 text-primary-foreground hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <Avatar className="h-8 w-8 mt-1 flex-shrink-0">
                      <AvatarImage src={profileImage} alt="Fatma" />
                      <AvatarFallback>FA</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex flex-col gap-1 max-w-[80%]">
                    <div
                      className={`rounded-lg px-4 py-2 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <div className="flex items-center gap-2 px-2">
                      <span className="text-xs text-muted-foreground">
                        {formatTime(message.timestamp)}
                      </span>
                      <div className="flex gap-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleLike(index, true)}
                        >
                          <ThumbsUp className={`h-3 w-3 ${message.liked === true ? "fill-primary text-primary" : ""}`} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleLike(index, false)}
                        >
                          <ThumbsDown className={`h-3 w-3 ${message.liked === false ? "fill-destructive text-destructive" : ""}`} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => copyToClipboard(message.content, index)}
                        >
                          {copiedIndex === index ? (
                            <Check className="h-3 w-3 text-primary" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-2">
                    <div className="flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce animation-delay-200">.</span>
                      <span className="animate-bounce animation-delay-400">.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
