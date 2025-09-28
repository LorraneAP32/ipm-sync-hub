import { Header } from "@/components/dashboard/Header";
import { ProblemCard } from "@/components/dashboard/ProblemCard";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { Users, FileText, Database, BarChart3 } from "lucide-react";

const problemsData = [
  {
    title: "Cadastros Fragmentados",
    impact: "Dados de segurados e beneficiários espalhados em planilhas e formulários, dificultando atualização e consulta.",
    solution: "Criar Cadastro Unificado com base de dados única, validação de informações, histórico de alterações e recadastramento online.",
    status: "in-progress" as const,
    priority: "high" as const
  },
  {
    title: "Demora na Concessão de Benefícios",
    impact: "Processos de aposentadoria e pensão manuais, demorados e sujeitos a erros, causando atrasos nos pagamentos.",
    solution: "Implementar Módulo de Concessão Automatizada, com cálculos automáticos, simulação, checklist digital de exigências e workflow eletrônico.",
    status: "pending" as const,
    priority: "high" as const
  },
  {
    title: "Falta de Integração",
    impact: "Contribuições e folha do IPM não consolidadas, dificultando auditorias, controles e envio ao eSocial.",
    solution: "Desenvolver Integração de Sistemas (ETL/API) para consolidar dados de contribuições, folha de pagamento e benefícios, com geração automática de arquivos compatíveis com o eSocial.",
    status: "pending" as const,
    priority: "medium" as const
  },
  {
    title: "Relatórios Manuais e Pouco Confiáveis",
    impact: "Processos manuais e lentos de geração de relatórios, comprometendo a governança e a transparência.",
    solution: "Criar Módulo de Relatórios e Transparência com Data Mart, geração automática de relatórios de governança, publicações de atas e relatórios de investimento/atuariais.",
    status: "completed" as const,
    priority: "medium" as const
  }
];

const metricsData = [
  {
    title: "Segurados Ativos",
    value: "2.847",
    change: 5.2,
    icon: <Users className="w-4 h-4" />,
    trend: "up" as const
  },
  {
    title: "Benefícios Processados",
    value: "186",
    change: -2.1,
    icon: <FileText className="w-4 h-4" />,
    trend: "down" as const
  },
  {
    title: "Integração eSocial",
    value: "98.7%",
    change: 1.3,
    icon: <Database className="w-4 h-4" />,
    trend: "up" as const
  },
  {
    title: "Relatórios Automatizados",
    value: "24",
    change: 0,
    icon: <BarChart3 className="w-4 h-4" />,
    trend: "neutral" as const
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="p-6 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-hero p-8 text-center shadow-large">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-3">
              Modernização do Sistema Previdenciário
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
              Solução completa para automatizar e integrar os processos do Instituto de Previdência Municipal, 
              oferecendo maior eficiência, transparência e controle.
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl"></div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsData.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>

        {/* Problems Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Problemas Identificados
              </h3>
              <p className="text-muted-foreground">
                Principais desafios e suas respectivas soluções tecnológicas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {problemsData.map((problem, index) => (
              <ProblemCard key={index} {...problem} />
            ))}
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-gradient-card rounded-2xl p-6 shadow-medium border-0">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Próximos Passos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div>
                <p className="font-medium text-foreground">Cadastro Unificado</p>
                <p className="text-sm text-muted-foreground">Consolidação de dados</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-accent/5 rounded-lg border border-accent/20">
              <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div>
                <p className="font-medium text-foreground">Automação de Benefícios</p>
                <p className="text-sm text-muted-foreground">Processamento automático</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-warning/5 rounded-lg border border-warning/20">
              <div className="w-8 h-8 bg-warning text-warning-foreground rounded-full flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div>
                <p className="font-medium text-foreground">Integração eSocial</p>
                <p className="text-sm text-muted-foreground">Compliance total</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;