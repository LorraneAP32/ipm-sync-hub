import { Button } from "@/components/ui/button";
import { Bell, Settings, User } from "lucide-react";

export function Header() {
  return (
    <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-xl font-bold text-primary-foreground">I</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                IPM Digital
              </h1>
              <p className="text-xs text-muted-foreground">
                Sistema de Gestão Previdenciária
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className="hover:bg-accent/50 transition-smooth"
          >
            <Bell className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="hover:bg-accent/50 transition-smooth"
          >
            <Settings className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="hover:bg-accent/50 transition-smooth"
          >
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}