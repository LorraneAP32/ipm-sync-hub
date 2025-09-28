import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, AlertTriangle } from "lucide-react";

interface ProblemCardProps {
  title: string;
  impact: string;
  solution: string;
  status: "pending" | "in-progress" | "completed";
  priority: "high" | "medium" | "low";
}

const statusConfig = {
  pending: { icon: AlertTriangle, color: "text-warning", bgColor: "bg-warning/10" },
  "in-progress": { icon: Clock, color: "text-primary", bgColor: "bg-primary/10" },
  completed: { icon: CheckCircle, color: "text-success", bgColor: "bg-success/10" }
};

const priorityConfig = {
  high: { color: "bg-destructive", text: "Alta" },
  medium: { color: "bg-warning", text: "Média" },
  low: { color: "bg-success", text: "Baixa" }
};

export function ProblemCard({ title, impact, solution, status, priority }: ProblemCardProps) {
  const StatusIcon = statusConfig[status].icon;

  return (
    <Card className="group hover:shadow-large transition-smooth bg-gradient-card border-0 overflow-hidden">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="text-lg leading-tight group-hover:text-primary transition-smooth">
            {title}
          </CardTitle>
          <div className="flex items-center gap-2 shrink-0">
            <Badge 
              variant="secondary" 
              className={`${priorityConfig[priority].color} text-white font-medium`}
            >
              {priorityConfig[priority].text}
            </Badge>
            <div className={`p-2 rounded-full ${statusConfig[status].bgColor}`}>
              <StatusIcon className={`w-4 h-4 ${statusConfig[status].color}`} />
            </div>
          </div>
        </div>
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-medium text-foreground">Impacto:</span> {impact}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
          <h4 className="font-medium text-accent mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            Solução Proposta
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {solution}
          </p>
        </div>
        
        <div className="flex gap-2">
          <Button 
            size="sm" 
            className="flex-1 bg-gradient-primary hover:shadow-glow transition-smooth"
          >
            Implementar
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 hover:bg-accent hover:text-accent-foreground transition-smooth"
          >
            Detalhes
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}