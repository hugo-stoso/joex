export type RequestStatus = "Em andamento" | "Atrasado" | "Concluído";

export type RequestItem = {
  id: string;
  title: string;
  type: string;
  requester: string;
  department: string;
  stage: string;
  owner: string;
  waiting: string;
  due: string;
  status: RequestStatus;
  priority: "Alta" | "Média" | "Baixa";
  value?: string;
  eta?: string;
  description: string;
};

export type DocumentItem = {
  id: string;
  title: string;
  type: string;
  author: string;
  updated: string;
  situation: string;
  process: string;
};

export const requests: RequestItem[] = [
  {
    id: "JOEX-2026-00482",
    title: "Compra de 15 notebooks",
    type: "Compra",
    requester: "Carlos Mendes",
    department: "TI",
    stage: "Financeiro",
    owner: "Mariana Costa",
    waiting: "4h12",
    due: "Hoje 17:00",
    status: "Em andamento",
    priority: "Alta",
    value: "R$ 48.500",
    eta: "7 de outubro às 16h",
    description: "Aquisição de notebooks para a renovação do parque de máquinas da equipe de tecnologia.",
  },
  {
    id: "JOEX-2026-00476",
    title: "Contrato fornecedor Alpha",
    type: "Contrato",
    requester: "Marina Souza",
    department: "Compras",
    stage: "Jurídico",
    owner: "Paulo Lima",
    waiting: "1d 3h",
    due: "Amanhã",
    status: "Em andamento",
    priority: "Média",
    eta: "8 de outubro às 11h",
    description: "Revisão contratual para renovação do fornecedor Alpha.",
  },
  {
    id: "JOEX-2026-00469",
    title: "Manutenção do ar-condicionado",
    type: "Manutenção",
    requester: "Ana Ribeiro",
    department: "Facilities",
    stage: "Compras",
    owner: "João Santos",
    waiting: "2d 7h",
    due: "Ontem",
    status: "Atrasado",
    priority: "Alta",
    eta: "Amanhã às 10h",
    description: "Manutenção preventiva do sistema de ar-condicionado do escritório central.",
  },
  {
    id: "JOEX-2026-00458",
    title: "Acesso ao CRM para novo colaborador",
    type: "Acesso",
    requester: "Fernanda Lima",
    department: "Comercial",
    stage: "TI",
    owner: "Rafael Nunes",
    waiting: "2h08",
    due: "Hoje 15:00",
    status: "Em andamento",
    priority: "Média",
    eta: "Hoje às 18h",
    description: "Criação de acessos e permissões para o novo gerente de contas.",
  },
  {
    id: "JOEX-2026-00444",
    title: "Relatório mensal de operações",
    type: "Documento",
    requester: "Roberto Almeida",
    department: "Operações",
    stage: "Concluído",
    owner: "Roberto Almeida",
    waiting: "—",
    due: "02 out",
    status: "Concluído",
    priority: "Baixa",
    eta: "Concluído",
    description: "Relatório consolidado das operações do mês de setembro.",
  },
];

export const documents: DocumentItem[] = [
  { id: "DOC-018", title: "Memorando interno nº 018/2026", type: "Memorando", author: "Lucas Martins", updated: "Hoje, 10:42", situation: "Em edição", process: "—" },
  { id: "DOC-024", title: "Parecer financeiro nº 024/2026", type: "Parecer", author: "Mariana Costa", updated: "Hoje, 09:18", situation: "Aguardando assinatura", process: "Compra de 15 notebooks" },
  { id: "DOC-011", title: "Solicitação de aquisição de equipamentos", type: "Solicitação", author: "Carlos Mendes", updated: "03 out, 16:30", situation: "Aprovado", process: "Compra de 15 notebooks" },
  { id: "DOC-009", title: "Contrato fornecedor Alpha", type: "Contrato", author: "Marina Souza", updated: "03 out, 14:20", situation: "Em revisão", process: "Contrato fornecedor Alpha" },
  { id: "DOC-007", title: "Relatório mensal de operações", type: "Relatório", author: "Roberto Almeida", updated: "02 out, 18:05", situation: "Concluído", process: "Relatório mensal" },
];

export const team = [
  { name: "Lucas Martins", role: "Diretor Administrativo", department: "Administração", access: "Administrador", status: "Ativo", initials: "LM", tone: "teal" },
  { name: "Mariana Costa", role: "Gerente Financeira", department: "Financeiro", access: "Gestor", status: "Ativo", initials: "MC", tone: "violet" },
  { name: "Carlos Mendes", role: "Analista de Infraestrutura", department: "TI", access: "Colaborador", status: "Ativo", initials: "CM", tone: "amber" },
  { name: "Marina Souza", role: "Coordenadora de Compras", department: "Compras", access: "Gestor", status: "Ativo", initials: "MS", tone: "rose" },
  { name: "Paulo Lima", role: "Advogado Sênior", department: "Jurídico", access: "Colaborador", status: "Ausente", initials: "PL", tone: "sky" },
  { name: "Fernanda Lima", role: "Analista de RH", department: "Pessoas", access: "Colaborador", status: "Ativo", initials: "FL", tone: "orange" },
];

export const processTemplates = [
  { title: "Aquisição de equipamentos", count: 12, avg: "2,4 dias", sla: "92%", bottleneck: "Aprovação financeira", icon: "package" },
  { title: "Contratação de funcionário", count: 5, avg: "4,1 dias", sla: "78%", bottleneck: "Documentação", icon: "user" },
  { title: "Pagamento de fornecedor", count: 18, avg: "1,2 dia", sla: "95%", bottleneck: "Contas a pagar", icon: "wallet" },
  { title: "Análise de contrato", count: 7, avg: "3,8 dias", sla: "81%", bottleneck: "Revisão Jurídica", icon: "file" },
  { title: "Solicitação de férias", count: 3, avg: "18h", sla: "99%", bottleneck: "Gestor direto", icon: "calendar" },
  { title: "Manutenção predial", count: 9, avg: "2,7 dias", sla: "86%", bottleneck: "Cotação", icon: "wrench" },
];

export const attentionItems = [
  { title: "Compra de 15 notebooks", type: "Compra", requester: "Carlos Mendes", department: "TI", detail: "R$ 48.500", waiting: "3h42", due: "Hoje às 17:00", action: "Aguardando sua aprovação", tone: "teal" },
  { title: "Contrato fornecedor Alpha", type: "Contrato", requester: "Marina Souza", department: "Compras", detail: "Revisão jurídica", waiting: "1 dia", due: "Amanhã", action: "Revisão necessária", tone: "amber" },
  { title: "Solicitação de contratação", type: "RH", requester: "Fernanda Lima", department: "Pessoas", detail: "Analista de Dados", waiting: "5h18", due: "—", action: "Informação pendente", tone: "coral" },
];
