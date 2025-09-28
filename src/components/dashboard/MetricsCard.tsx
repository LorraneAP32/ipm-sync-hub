import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

interface MetricsCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  trend: "up" | "down" | "neutral";
}

const trendConfig = {
  up: { icon: TrendingUp, color: "text-success", bgColor: "bg-success/10" },
  down: { icon: TrendingDown, color: "text-destructive", bgColor: "bg-destructive/10" },
  neutral: { icon: Minus, color: "text-muted-foreground", bgColor: "bg-muted/50" }
};

export function MetricsCard({ title, value, change, icon, trend }: MetricsCardProps) {
  const TrendIcon = trendConfig[trend].icon;

  return (
    <Card className="group hover:shadow-medium transition-smooth bg-gradient-card border-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
          <div className="w-4 h-4 text-primary">
            {icon}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth">
              {value}
            </div>
          </div>
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${trendConfig[trend].bgColor}`}>
            <TrendIcon className={`w-3 h-3 ${trendConfig[trend].color}`} />
            <span className={`text-xs font-medium ${trendConfig[trend].color}`}>
              {Math.abs(change)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}