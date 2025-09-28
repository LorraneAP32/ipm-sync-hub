import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto shadow-glow">
            <span className="text-3xl font-bold text-primary-foreground">404</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Página não encontrada</h1>
          <p className="text-muted-foreground leading-relaxed">
            A página que você está procurando não existe ou foi movida para outro local.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button 
            asChild
            className="bg-gradient-primary hover:shadow-glow transition-smooth"
          >
            <a href="/" className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              Voltar ao Início
            </a>
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Página Anterior
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
