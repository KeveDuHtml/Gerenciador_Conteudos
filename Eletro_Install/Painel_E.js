/* ============================================================
   Portão simples de acesso — só entra vindo de Admin_E.html
   depois da senha correta. Sem senha real no servidor, isso é
   apenas um filtro de navegação, não uma proteção de verdade.
   ============================================================ */
if (new URLSearchParams(window.location.search).get("acesso") !== "ok") {
  window.location.href = "Admin_E.html";
}

/* ============================================================
   Dados de exemplo — troque por dados reais quando o painel
   estiver ligado a um sistema de pagamentos/pedidos de verdade.
   ============================================================ */
const ORDERS = [
  { client: "Marcos Lima",     service: "Instalação de quadro de distribuição",     category: "Comercial",   value: 650,  status: "pago",      date: "2026-09-04" },
  { client: "Ana Beatriz",     service: "Instalação de ventilador de teto",         category: "Residencial", value: 180,  status: "pago",      date: "2026-09-04" },
  { client: "Refrio Ltda",     service: "Manutenção de motores e disjuntores",      category: "Industrial",  value: 450,  status: "pendente",  date: "2026-09-05" },
  { client: "Carla Menezes",   service: "Instalação de carregador veicular (EV)",   category: "Automação",   value: 950,  status: "pago",      date: "2026-09-05" },
  { client: "Padaria Sabor",   service: "Iluminação comercial em LED",              category: "Comercial",   value: 90,   status: "pago",      date: "2026-09-06" },
  { client: "João Pedro",      service: "Instalação de tomadas e interruptores",    category: "Residencial", value: 120,  status: "cancelado", date: "2026-09-06" },
  { client: "Metalúrgica Sul", service: "Instalação de painéis elétricos industriais", category: "Industrial", value: 1800, status: "pago",    date: "2026-09-07" },
  { client: "Studio Verso",    service: "Automação com interruptores smart",        category: "Automação",   value: 380,  status: "pendente",  date: "2026-09-08" },
  { client: "Helena Ramos",    service: "Instalação de lustres e pendentes",        category: "Residencial", value: 150,  status: "pago",      date: "2026-09-08" },
  { client: "Ar Fresco Com.",  service: "Instalação elétrica para ar-condicionado", category: "Comercial",   value: 220,  status: "pago",      date: "2026-09-09" },
  { client: "Vinícius Aguiar", service: "Instalação de tomadas e interruptores",    category: "Residencial", value: 120,  status: "pago",      date: "2026-09-09" },
  { client: "Gelacionado",     service: "Instalação de quadro de distribuição",     category: "Comercial",   value: 650,  status: "pendente",  date: "2026-09-10" },
];

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function formatDate(iso) {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

/* ---------- KPIs ---------- */
const paidOrders = ORDERS.filter((o) => o.status === "pago");
const pendingOrders = ORDERS.filter((o) => o.status === "pendente");
const totalRevenue = paidOrders.reduce((sum, o) => sum + o.value, 0);
const avgTicket = paidOrders.length ? totalRevenue / paidOrders.length : 0;

document.getElementById("kpiRevenue").textContent = formatBRL(totalRevenue);
document.getElementById("kpiPaidCount").textContent = paidOrders.length;
document.getElementById("kpiPendingCount").textContent = pendingOrders.length;
document.getElementById("kpiAvg").textContent = formatBRL(avgTicket);

/* ---------- Gráfico de receita por dia (últimos 7 dias com pedido) ---------- */
const revenueByDate = {};
paidOrders.forEach((o) => {
  revenueByDate[o.date] = (revenueByDate[o.date] || 0) + o.value;
});
const sortedDates = Object.keys(revenueByDate).sort();

new Chart(document.getElementById("revenueChart"), {
  type: "line",
  data: {
    labels: sortedDates.map(formatDate),
    datasets: [
      {
        label: "Receita (R$)",
        data: sortedDates.map((d) => revenueByDate[d]),
        borderColor: "#f5c518",
        backgroundColor: "rgba(245, 197, 24, 0.15)",
        fill: true,
        tension: 0.35,
        pointBackgroundColor: "#f5c518",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: "#c9c6bd" }, grid: { color: "rgba(255,255,255,0.06)" } },
      y: { ticks: { color: "#c9c6bd" }, grid: { color: "rgba(255,255,255,0.06)" }, beginAtZero: true },
    },
  },
});

/* ---------- Gráfico de pedidos por categoria ---------- */
const categories = ["Residencial", "Comercial", "Industrial", "Automação"];
const countByCategory = categories.map(
  (cat) => ORDERS.filter((o) => o.category === cat).length
);

new Chart(document.getElementById("categoryChart"), {
  type: "doughnut",
  data: {
    labels: categories,
    datasets: [
      {
        data: countByCategory,
        backgroundColor: ["#f5c518", "#14418f", "#7d4f9c", "#25d366"],
        borderColor: "#0c1e42",
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: "bottom", labels: { color: "#c9c6bd", boxWidth: 12, padding: 14 } },
    },
  },
});

/* ---------- Tabela de pedidos ---------- */
const statusLabels = { pago: "Pago", pendente: "Pendente", cancelado: "Cancelado" };
const ordersBody = document.getElementById("ordersBody");

ORDERS.slice()
  .sort((a, b) => (a.date < b.date ? 1 : -1))
  .forEach((order) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${order.client}</td>
      <td>${order.service}</td>
      <td>${order.category}</td>
      <td>${formatBRL(order.value)}</td>
      <td><span class="status-pill status-pill--${order.status}">${statusLabels[order.status]}</span></td>
      <td>${formatDate(order.date)}</td>
    `;
    ordersBody.appendChild(row);
  });
