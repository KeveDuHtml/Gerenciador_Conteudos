/* ============================================================
   Configuração — troque pelo número real (DDI+DDD+número, só dígitos)
   ============================================================ */
const WHATSAPP_NUMBER = "5585999999999";

/* ============================================================
   Catálogo de serviços
   ============================================================ */
const ICONS = {
  plug: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8ZM12 18v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  fan: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" fill="currentColor"/><path d="M12 10c0-4 2-7 5-7s3 4-1 6-4 1-4 1Zm0 4c0 4-2 7-5 7s-3-4 1-6 4-1 4-1Zm-2-2c-4 0-7-2-7-5s4-3 6 1 1 4 1 4Zm4 0c4 0 7 2 7 5s-4 3-6-1-1-4-1-4Z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
  chandelier: `<svg viewBox="0 0 24 24" fill="none"><path d="M12 2v3M6 6h12l-2 3H8L6 6Zm2 3v2a4 4 0 0 0 8 0V9M12 15v2m-4 3h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  panel: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M8 7h2m4 0h2M8 12h2m4 0h2M8 17h2m4 0h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  led: `<svg viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 2a6 6 0 0 0-3 11.2c.6.4 1 1 1 1.8h4c0-.8.4-1.4 1-1.8A6 6 0 0 0 12 2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  ac: `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M6 17v2M10 17v3M14 17v2M18 17v3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  motor: `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.6"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  ev: `<svg viewBox="0 0 24 24" fill="none"><path d="M4 17V9a2 2 0 0 1 2-2h9l3 4v6M4 17h13M4 17H2m17 0h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="7.5" cy="17.5" r="1.6" fill="currentColor"/><circle cx="16.5" cy="17.5" r="1.6" fill="currentColor"/><path d="M14 9v4h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  smart: `<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
};

const PRODUCTS = [
  { id: "res-tomadas", name: "Instalação de tomadas e interruptores", desc: "Pontos novos ou substituição, com fiação revisada e testada.", price: 120, unit: "por ponto", category: "residencial", icon: "plug" },
  { id: "res-ventilador", name: "Instalação de ventilador de teto", desc: "Fixação, balanceamento e ligação elétrica completa.", price: 180, unit: "por unidade", category: "residencial", icon: "fan" },
  { id: "res-lustre", name: "Instalação de lustres e pendentes", desc: "Suporte de fixação, emenda e regulagem de altura.", price: 150, unit: "por unidade", category: "residencial", icon: "chandelier" },
  { id: "com-led", name: "Iluminação comercial em LED", desc: "Projeto de troca para LED com foco em economia de energia.", price: 90, unit: "por ponto", category: "comercial", icon: "led" },
  { id: "com-ar", name: "Instalação elétrica para ar-condicionado", desc: "Ponto dedicado, disjuntor e cabeamento dimensionado.", price: 220, unit: "por unidade", category: "comercial", icon: "ac" },
  { id: "com-quadro", name: "Instalação de quadro de distribuição", desc: "Montagem, organização de circuitos e identificação.", price: 650, unit: "por quadro", category: "comercial", icon: "panel" },
  { id: "ind-painel", name: "Instalação de painéis elétricos industriais", desc: "Montagem de painéis sob projeto, com testes de carga.", price: 1800, unit: "por painel", category: "industrial", icon: "panel" },
  { id: "ind-motor", name: "Manutenção de motores e disjuntores", desc: "Diagnóstico, ajuste e substituição de componentes.", price: 450, unit: "visita técnica", category: "industrial", icon: "motor" },
  { id: "auto-ev", name: "Instalação de carregador veicular (EV)", desc: "Ponto dedicado para carregamento residencial de veículos elétricos.", price: 950, unit: "por unidade", category: "automacao", icon: "ev" },
  { id: "auto-smart", name: "Automação com interruptores smart", desc: "Configuração de interruptores inteligentes integrados ao Wi-Fi.", price: 380, unit: "por ambiente", category: "automacao", icon: "smart" },
];

/* ============================================================
   Estado do carrinho (em memória — some ao recarregar a página)
   ============================================================ */
let cart = [];

const catalogEl = document.getElementById("catalog");
const cartItemsEl = document.getElementById("cartItems");
const cartEmptyEl = document.getElementById("cartEmpty");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
const cartCheckoutEl = document.getElementById("cartCheckout");

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* ---------- Catálogo ---------- */
function renderCatalog(filter = "todos") {
  catalogEl.innerHTML = "";
  const list = filter === "todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === filter);

  list.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product";
    card.innerHTML = `
      <span class="product__icon">${ICONS[product.icon]}</span>
      <span class="product__tag">${labelForCategory(product.category)}</span>
      <h3 class="product__name">${product.name}</h3>
      <p class="product__desc">${product.desc}</p>
      <div class="product__row">
        <span class="product__price">${formatBRL(product.price)}<span>${product.unit}</span></span>
        <button class="product__add" data-id="${product.id}">Adicionar</button>
      </div>
    `;
    catalogEl.appendChild(card);
  });

  catalogEl.querySelectorAll(".product__add").forEach((btn) => {
    btn.addEventListener("click", () => addToCart(btn.dataset.id, btn));
  });
}

function labelForCategory(cat) {
  const labels = { residencial: "Residencial", comercial: "Comercial", industrial: "Industrial", automacao: "Automação" };
  return labels[cat] ?? cat;
}

/* ---------- Filtro por categoria ---------- */
document.querySelectorAll(".cats__btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".cats__btn").forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    renderCatalog(btn.dataset.cat);
  });
});

/* ---------- Carrinho ---------- */
function addToCart(id, btn) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  if (btn) {
    btn.textContent = "Adicionado ✓";
    btn.classList.add("is-added");
    setTimeout(() => {
      btn.textContent = "Adicionar";
      btn.classList.remove("is-added");
    }, 1000);
  }

  renderCart();
}

function changeQty(id, delta) {
  const item = cart.find((p) => p.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter((p) => p.id !== id);
  }
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((p) => p.id !== id);
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  cartCountEl.textContent = totalItems;
  cartTotalEl.textContent = formatBRL(totalPrice);

  cartItemsEl.innerHTML = "";
  if (cart.length === 0) {
    cartItemsEl.appendChild(cartEmptyEl);
    cartEmptyEl.style.display = "block";
  } else {
    cartEmptyEl.style.display = "none";
    cart.forEach((item) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <div>
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__price">${formatBRL(item.price)} · ${item.unit}</div>
          <button class="cart-item__remove" data-id="${item.id}">Remover</button>
        </div>
        <div class="cart-item__qty">
          <button data-action="dec" data-id="${item.id}">−</button>
          <span>${item.qty}</span>
          <button data-action="inc" data-id="${item.id}">+</button>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });

    cartItemsEl.querySelectorAll('[data-action="inc"]').forEach((b) =>
      b.addEventListener("click", () => changeQty(b.dataset.id, 1))
    );
    cartItemsEl.querySelectorAll('[data-action="dec"]').forEach((b) =>
      b.addEventListener("click", () => changeQty(b.dataset.id, -1))
    );
    cartItemsEl.querySelectorAll(".cart-item__remove").forEach((b) =>
      b.addEventListener("click", () => removeFromCart(b.dataset.id))
    );
  }

  updateCheckoutLink(totalPrice);
}

function updateCheckoutLink(totalPrice) {
  if (cart.length === 0) {
    cartCheckoutEl.href = buildWhatsAppLink("Olá! Gostaria de saber mais sobre os serviços da Eletro_Install.");
    return;
  }
  const lines = cart.map((item) => `• ${item.name} (x${item.qty}) — ${formatBRL(item.price * item.qty)}`);
  const message =
    "Olá! Gostaria de orçar os seguintes serviços:\n" +
    lines.join("\n") +
    `\n\nTotal estimado: ${formatBRL(totalPrice)}`;
  cartCheckoutEl.href = buildWhatsAppLink(message);
}

function buildWhatsAppLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* ---------- Abrir / fechar carrinho ---------- */
const cartEl = document.getElementById("cart");
const cartOverlay = document.getElementById("cartOverlay");

document.getElementById("cartOpen").addEventListener("click", () => {
  cartEl.classList.add("is-open");
  cartOverlay.classList.add("is-open");
});

function closeCart() {
  cartEl.classList.remove("is-open");
  cartOverlay.classList.remove("is-open");
}

document.getElementById("cartClose").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

/* ---------- WhatsApp geral (botão flutuante e rodapé) ---------- */
const generalWhatsLink = buildWhatsAppLink("Olá! Gostaria de saber mais sobre os serviços da Eletro_Install.");
document.getElementById("whatsFloat").href = generalWhatsLink;
document.getElementById("footerWhats").href = generalWhatsLink;

/* ---------- Inicialização ---------- */
renderCatalog();
renderCart();
