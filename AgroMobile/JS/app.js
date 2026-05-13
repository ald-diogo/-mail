AOS.init({ duration: 800, once: true });
  
  // ========== TRADUÇÕES ==========
  const texts = {
    pt: {
      brand: "🌿 AgroLux", navHome: "Início", navBenefits: "Benefícios", navProductsLink: "Produtos", navContact: "Contacto",
      heroTitle: "Venda mais e melhor com a <span class='text-warning'>AgroLux</span>", heroDesc: "A plataforma que conecta agricultores a compradores, aumenta o alcance do seu produto e maximiza o lucro da sua colheita.",
      signupText: "Quero vender mais", whatsText: "WhatsApp", benefitsText: "Benefícios",
      benefitsTitle: "📈 Porque os agricultores que usam a AgroLux vendem mais", benefitsSub: "Resultados reais de quem expandiu o seu mercado connosco",
      benefit1Title: "Acesso a +200 compradores ativos", benefit1Desc: "Conectamos a sua produção a supermercados, restaurantes, indústrias e exportadores que procuram produtos frescos e de qualidade.", benefit1Stat: "🏪 Rede de compradores em 12 países",
      benefit2Title: "Aumento médio de vendas de 73%", benefit2Desc: "Agricultores que usam a nossa plataforma conseguem escoar toda a produção, reduzir desperdícios e negociar melhores preços.", benefit2Stat: "💰 +73% de faturamento em 6 meses",
      benefit3Title: "Preços 22% acima da média regional", benefit3Desc: "Com inteligência de mercado e negociação assistida, os nossos produtores conseguem vender por valores mais justos e competitivos.", benefit3Stat: "📊 Dados de preços em tempo real",
      benefit4Title: "Logística integrada e pagamento garantido", benefit4Desc: "Gerimos a entrega e o recebimento, para que você só se preocupe em produzir. Sem risco de calote.", benefit4Stat: "✅ Mais de 95% de entregas no prazo",
      contactSalesText: "Solicitar plano de expansão",
      productMainTitle: "Como a AgroLux aumenta as suas vendas", productSub: "Ferramentas e serviços práticos para expandir o seu mercado",
      productNames: ["Marketplace AgroLux", "Inteligência de Preços", "Logística + Pagamento"],
      productDescs: ["Anuncie a sua colheita e receba propostas de compradores verificados de todo o país.", "Acompanhe cotações em tempo real e saiba o melhor momento para vender cada produto.", "Cuidamos do transporte e garantimos o recebimento, você só se preocupa em produzir."],
      buyBtn: "Quero usar este serviço",
      newsTitle: "Receba o Guia do Agricultor Exportador", newsText: "Cadastre-se e receba dicas de como vender para fora do país e aumentar seus lucros.",
      footerBrand: "🌿 AgroLux", footerSlogan: "Expandindo mercados, cultivando sucesso", footerCopy: "© 2025 – A plataforma que vende a sua colheita",
      chatPlaceholder: "Pergunte...", chatGreeting: "🌱 Olá, sou o seu conselheiro agrícola para Angola. Domino compostagem, produção de húmus, estrume, nutrientes das plantas (macro e micronutrientes), épocas de plantio, clima, pragas e mercado local. Pergunte o que quiser – estou aqui para fortalecer a sua produção."
    },
    en: {
      brand: "🌿 AgroLux", navHome: "Home", navBenefits: "Benefits", navProductsLink: "Products", navContact: "Contact",
      heroTitle: "Sell more and better with <span class='text-warning'>AgroLux</span>", heroDesc: "The platform that connects farmers to buyers, expands your product reach and maximizes your harvest profit.",
      signupText: "I want to sell more", whatsText: "WhatsApp", benefitsText: "Benefits",
      benefitsTitle: "📈 Why farmers who use AgroLux sell more", benefitsSub: "Real results from those who expanded their market with us",
      benefit1Title: "Access to 200+ active buyers", benefit1Desc: "We connect your production to supermarkets, restaurants, industries and exporters looking for fresh quality products.", benefit1Stat: "🏪 Buyer network in 12 countries",
      benefit2Title: "Average sales increase of 73%", benefit2Desc: "Farmers using our platform can sell all their production, reduce waste and negotiate better prices.", benefit2Stat: "💰 +73% revenue in 6 months",
      benefit3Title: "Prices 22% above regional average", benefit3Desc: "With market intelligence and assisted negotiation, our producers achieve fairer and more competitive prices.", benefit3Stat: "📊 Real-time price data",
      benefit4Title: "Integrated logistics and guaranteed payment", benefit4Desc: "We handle delivery and collection, so you just focus on producing. No risk of default.", benefit4Stat: "✅ Over 95% on-time deliveries",
      contactSalesText: "Request expansion plan",
      productMainTitle: "How AgroLux increases your sales", productSub: "Practical tools and services to expand your market",
      productNames: ["AgroLux Marketplace", "Price Intelligence", "Logistics + Payment"],
      productDescs: ["List your harvest and receive bids from verified buyers nationwide.", "Track real-time prices and know the best time to sell each product.", "We handle transport and guarantee payment, you just focus on producing."],
      buyBtn: "I want to use this service",
      newsTitle: "Get the Exporter Farmer Guide", newsText: "Sign up and receive tips on how to sell abroad and increase your profits.",
      footerBrand: "🌿 AgroLux", footerSlogan: "Expanding markets, growing success", footerCopy: "© 2025 – The platform that sells your harvest",
      chatPlaceholder: "Ask...", chatGreeting: "🌱 Hello, I am your farming advisor for Angola. I master composting, humus production, manure, plant nutrients (macro and micronutrients), planting seasons, climate, pests, and local market. Ask me anything – I am here to boost your harvest."
    }
  };
  
  let currentLang = "pt";
  let currentView = "grid";
  
  function applyLanguage(lang) {
    currentLang = lang;
    const t = texts[lang];
    document.getElementById("brandName").innerText = t.brand;
    document.querySelector("#navHome span").innerText = t.navHome;
    document.querySelector("#navBenefits span").innerText = t.navBenefits;
    document.querySelector("#navProductsLink span").innerText = t.navProductsLink;
    document.querySelector("#navContact span").innerText = t.navContact;
    document.getElementById("heroTitle").innerHTML = t.heroTitle;
    document.getElementById("heroDesc").innerText = t.heroDesc;
    document.getElementById("signupText").innerText = t.signupText;
    document.getElementById("whatsText").innerText = t.whatsText;
    document.getElementById("benefitsText").innerText = t.benefitsText;
    document.getElementById("benefitsTitle").innerHTML = t.benefitsTitle;
    document.getElementById("benefitsSub").innerText = t.benefitsSub;
    document.getElementById("benefit1Title").innerText = t.benefit1Title;
    document.getElementById("benefit1Desc").innerText = t.benefit1Desc;
    document.getElementById("benefit1Stat").innerText = t.benefit1Stat;
    document.getElementById("benefit2Title").innerText = t.benefit2Title;
    document.getElementById("benefit2Desc").innerText = t.benefit2Desc;
    document.getElementById("benefit2Stat").innerText = t.benefit2Stat;
    document.getElementById("benefit3Title").innerText = t.benefit3Title;
    document.getElementById("benefit3Desc").innerText = t.benefit3Desc;
    document.getElementById("benefit3Stat").innerText = t.benefit3Stat;
    document.getElementById("benefit4Title").innerText = t.benefit4Title;
    document.getElementById("benefit4Desc").innerText = t.benefit4Desc;
    document.getElementById("benefit4Stat").innerText = t.benefit4Stat;
    document.getElementById("contactSalesText").innerText = t.contactSalesText;
    document.getElementById("productMainTitle").innerText = t.productMainTitle;
    document.getElementById("productSub").innerText = t.productSub;
    document.getElementById("newsTitle").innerText = t.newsTitle;
    document.getElementById("newsText").innerText = t.newsText;
    document.getElementById("footerBrand").innerHTML = t.footerBrand;
    document.getElementById("footerSlogan").innerText = t.footerSlogan;
    document.getElementById("footerCopy").innerText = t.footerCopy;
    document.getElementById("chatInput").placeholder = t.chatPlaceholder;
    document.getElementById("langLabel").innerText = lang.toUpperCase();
    
    const productNames = document.querySelectorAll(".product-name");
    const productDescs = document.querySelectorAll(".product-desc");
    const buyBtns = document.querySelectorAll(".btn-buy");
    productNames.forEach((el, idx) => { if(t.productNames[idx]) el.innerText = t.productNames[idx]; });
    productDescs.forEach((el, idx) => { if(t.productDescs[idx]) el.innerText = t.productDescs[idx]; });
    buyBtns.forEach(btn => btn.innerText = t.buyBtn);
    
    localStorage.setItem("agrolang", lang);
  }
  
  // ========== TEMA ESCURO ==========
  const darkToggle = document.getElementById("darkModeToggle");
  function setTheme(isDark) {
    if(isDark) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    darkToggle.checked = isDark;
  }
  const savedTheme = localStorage.getItem("theme");
  if(savedTheme === "dark") setTheme(true);
  else if(savedTheme === "light") setTheme(false);
  else if(window.matchMedia("(prefers-color-scheme: dark)").matches) setTheme(true);
  else setTheme(false);
  darkToggle.addEventListener("change", (e) => setTheme(e.target.checked));
  
  // ========== IDIOMA ==========
  const savedLang = localStorage.getItem("agrolang");
  if(savedLang === "en") applyLanguage("en");
  else applyLanguage("pt");
  document.getElementById("langSwitch").addEventListener("click", () => {
    const newLang = currentLang === "pt" ? "en" : "pt";
    applyLanguage(newLang);
  });
  
  // ========== TOGGLE GRADE / LISTA ==========
  const container = document.getElementById("productsContainer");
  const gridBtn = document.getElementById("gridViewBtn");
  const listBtn = document.getElementById("listViewBtn");
  function setView(view) {
    currentView = view;
    if(view === "grid") {
      container.classList.remove("list-view");
      gridBtn.classList.add("active");
      listBtn.classList.remove("active");
    } else {
      container.classList.add("list-view");
      listBtn.classList.add("active");
      gridBtn.classList.remove("active");
    }
  }
  gridBtn.addEventListener("click", () => setView("grid"));
  listBtn.addEventListener("click", () => setView("list"));
  setView("grid");
  
  // ========== ÂNCORAS APENAS PARA BENEFÍCIOS (SEM INTERCEPTAR PRODUTOS/CONTACTO) ==========
  // Apenas o link "Benefícios" e o botão do herói devem fazer scroll suave
  const benefitsLink = document.getElementById("navBenefits");
  const benefitsHeroBtn = document.getElementById("benefitsBtn");
  
  function scrollToBenefits() {
    document.getElementById("benefitsSection").scrollIntoView({ behavior: "smooth" });
  }
  
  if(benefitsLink) {
    benefitsLink.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToBenefits();
    });
  }
  if(benefitsHeroBtn) {
    benefitsHeroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToBenefits();
    });
  }
  
  // NOTA: Os links "Início", "Produtos" e "Contacto" mantêm o comportamento padrão (redirecionamento para index.html, productos.html, contacto.html)
  
  // ========== BOTÕES DE AÇÃO ==========
  document.getElementById("signupBtn").addEventListener("click", () => alert(currentLang === "pt" ? "📝 Entra em contacto pelo nosso WhatsApp." : "📝 Get in touch via our WhatsApp."));
  document.getElementById("submitNews").addEventListener("click", () => { const email = document.getElementById("newsEmail").value; if(email.includes("@")) alert(currentLang === "pt" ? "✅ Guia enviado para o seu e-mail!" : "✅ Guide sent to your email!"); else alert(currentLang === "pt" ? "E-mail inválido" : "Invalid email"); });
  document.getElementById("contactSalesBtn").addEventListener("click", () => alert(currentLang === "pt" ? "📩 Um consultor comercial entrará em contacto para criar o seu plano de expansão." : "📩 A sales consultant will contact you to create your expansion plan."));
  document.querySelectorAll(".btn-buy").forEach(btn => btn.addEventListener("click", () => alert(currentLang === "pt" ? "✅ Um consultor entrará em contacto consigo em breve." : "✅ A consultant will contact you shortly.")));
  document.getElementById("expertLink").addEventListener("click", (e) => { e.preventDefault(); alert(currentLang === "pt" ? "Em breve um especialista estará disponível para atendimento personalizado." : "Soon a specialist will be available for personalized assistance."); });
  
  // ========== CARROSSEL DE FUNDO ==========
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-bg-item');
  let autoInterval;
  const intervalTime = 5000;
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if(i === index) slide.classList.add('active');
      else slide.classList.remove('active');
    });
    currentSlide = index;
  }
  function nextSlide() { showSlide((currentSlide + 1) % slides.length); }
  function startAutoSlide() { if(autoInterval) clearInterval(autoInterval); autoInterval = setInterval(nextSlide, intervalTime); }
  function stopAutoSlide() { if(autoInterval) { clearInterval(autoInterval); autoInterval = null; } }
  if(slides.length) {
    showSlide(0);
    startAutoSlide();
    const heroContainer = document.querySelector('.hero-carousel-bg');
    if(heroContainer) {
      heroContainer.addEventListener('mouseenter', stopAutoSlide);
      heroContainer.addEventListener('mouseleave', startAutoSlide);
    }
  }
  
  // ========== CHATBOT AGRÍCOLA AVANÇADO PARA ANGOLA ==========
const chatWidget = document.getElementById("chatWidget");
const chatBox = document.getElementById("chatBox");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

// --- ESTILO MÍNIMO APENAS PARA OS BALÕES (sem lixo, só o necessário) ---
if (!document.getElementById("chat-bubble-style")) {
  const style = document.createElement("style");
  style.id = "chat-bubble-style";
 style.textContent = `
  /* Tema claro (padrão) */
  .chat-msg-wrapper { display: flex; width: 100%; margin-bottom: 10px; }
  .chat-msg-user { justify-content: flex-end; }
  .chat-msg-bot { justify-content: flex-start; }
  .chat-bubble-user { background-color: #dcf8c5; border-radius: 15px 15px 5px 15px; padding: 8px 12px; max-width: 80%; text-align: right; color: #000000; }
  .chat-bubble-bot { background-color: #f1f0f0; border-radius: 15px 15px 15px 5px; padding: 8px 12px; max-width: 80%; text-align: left; color: #000000; }
  .logo-panel { width: 24px; height: 24px; vertical-align: middle; margin-right: 5px; }

  /* Tema escuro (detectado automaticamente) */
  @media (prefers-color-scheme: dark) {
    .chat-bubble-user { background-color: #2a4b2a; color: #f0f0f0; }
    .chat-bubble-bot { background-color: #3a3a3a; color: #f0f0f0; }
  }
`;
  document.head.appendChild(style);
}

// Função para adicionar mensagens com o layout correto
function addMessage(text, isUser) {
  const wrapper = document.createElement("div");
  wrapper.className = `chat-msg-wrapper ${isUser ? "chat-msg-user" : "chat-msg-bot"}`;
  const bubble = document.createElement("div");
  bubble.className = isUser ? "chat-bubble-user" : "chat-bubble-bot";
  if (isUser) {
    bubble.innerHTML = `<strong><img class="logo-panel" src="images/user.png"/> Você:</strong> ${text}`;
  } else {
    bubble.innerHTML = `<strong><img class="logo-panel" src="images/agri-bot.png"/> AgroBot:</strong> ${text}`;
  }
  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Abre/fecha o chat
chatWidget.addEventListener("click", () => { 
  chatBox.style.display = chatBox.style.display === "none" ? "block" : "none"; 
  if(chatMessages.children.length === 0) {
    const saudacao = currentLang === 'pt' 
      ? '🌱 Olá, sou o seu conselheiro agrícola para Angola. Domino compostagem, produção de húmus, estrume, nutrientes das plantas (macro e micronutrientes), épocas de plantio, clima, pragas e mercado local. Pergunte o que quiser – estou aqui para fortalecer a sua produção.'
      : '🌱 Hello, I am your farming advisor for Angola. I master composting, humus production, manure, plant nutrients (macro and micronutrients), planting seasons, climate, pests, and local market. Ask me anything – I am here to boost your harvest.';
    addMessage(saudacao, false);
  }
});

// ========== PROCESSAMENTO DE LINGUAGEM NATURAL (PLN) ==========
// Respostas para saudações e conversa fiada
const conversaPT = {
  ola: [
    "Olá! Como vai a lida? Precisa de ajuda com alguma cultura ou quer saber como aumentar a rentabilidade da sua produção?",
    "Oi! Estou aqui. Diga-me o que se passa – desde preparar a terra até vender no melhor preço.",
    "Olá, amigo! Conte comigo para melhorar as suas colheitas e os seus negócios."
  ],
  bem: [
    "Que bom saber! Então, em que posso ajudá-lo hoje? Pode perguntar sobre milho, abacaxi, compostagem, ou como tomar decisões mais acertadas.",
    "Fico contente! Estou aqui para que a sua produção seja cada vez melhor. Alguma dúvida específica?"
  ],
  obrigado: [
    "De nada! Estou sempre aqui para o que precisar, seja para o campo ou para o bolso.",
    "Disponha! A sua satisfação é o meu objetivo. Volte sempre que precisar de um conselho."
  ],
  quem_sou: [
    "Sou o AgroBot, um assistente virtual criado para agricultores angolanos. O meu objectivo é dar-lhe conhecimentos práticos sobre solos, culturas, adubos naturais, e ainda ajudá-lo a vender melhor e a tornar a sua actividade mais rentável. Tudo de forma simples e gratuita."
  ],
  rentabilidade: [
    "💸 **Rentabilidade com este assistente**:\n• Reduz custos com adubos químicos – ensino a fazer composto e húmus grátis.\n• Aumenta a produtividade – plantando na época certa e corrigindo o solo.\n• Melhora os preços de venda – sabe quando o milho ou feijão estão mais caros (época seca).\n• Evita perdas por pragas com receitas caseiras.\n• Aconselhamento gratuito 24/7 – não precisa contratar técnicos caros.\nQuer um exemplo prático de quanto pode poupar?",
    "💰 **Como este software lhe dá dinheiro**: ele substitui a necessidade de consultores pagos, evita erros de plantio (que custam caro) e mostra o calendário de preços. Um agricultor que me usa regularmente aumenta a colheita em 30% e reduz os gastos com insumos em metade. Posso simular para a sua propriedade?"
  ],
  confiabilidade: [
    "🔒 **Confiabilidade nas vendas**:\n• Aconselho sobre a melhor altura para vender cada produto (ex: milho na seca vale mais).\n• Informo sobre os preços praticados no SIMA (Sistema de Informação de Mercados Agrícolas de Angola).\n• Ajudo a evitar intermediários – com conhecimento de mercado local.\n• Posso dar dicas de como negociar e armazenar para vender quando o preço sobe.\nQuer saber qual cultura está com melhor preço agora?",
    "✅ **Garantia de decisões acertadas**: O meu conhecimento baseia-se em dados reais de Angola (clima, solos, épocas). Ao seguir os meus conselhos, o risco de quebra de safra ou venda abaixo do custo diminui drasticamente. Muitos agricultores que me usam já aumentaram a sua margem de lucro. Que área de decisão mais lhe preocupa?"
  ],
  decisao: [
    "🧠 **Tomada de decisão inteligente**: Pergunte-me coisas como:\n• 'Devo plantar milho ou feijão este mês?'\n• 'Qual adubo caseiro é melhor para o meu solo?'\n• 'Quando devo vender a minha colheita?'\n• 'Compensa investir em húmus de minhoca?'\nEu analiso a sua pergunta com base nas condições angolanas e dou-lhe uma resposta prática. Experimente!"
  ],
  default_social: [
    "Pode perguntar-me sobre qualquer tema agrícola: desde macronutrientes até à melhor altura para vender abacaxi. Ou então diga-me 'rentabilidade' ou 'confiabilidade' para entender como este assistente lhe pode trazer mais lucro."
  ]
};

// Função PLN para detectar intenções sociais e de negócio
function detectarIntencao(q) {
  if (/(^|\s)(oi|ol[aá]|boa tarde|bom dia|boa noite|olá|oie|ola)(\s|$)/i.test(q)) return "ola";
  if (/(tudo bem|como est[aá]s|como vai|como está|cumprimentos)/i.test(q)) return "bem";
  if (/(obrigado|obrigada|valeu|agradeço)/i.test(q)) return "obrigado";
  if (/(quem és|quem é você|o que é|o que você é|sabes quem és)/i.test(q)) return "quem_sou";
  if (/(rentabilidade|lucro|ganhar dinheiro|aumentar renda|quanto posso ganhar|rentável)/i.test(q)) return "rentabilidade";
  if (/(confiabilidade|confiança|segurança|vender com segurança|garantia|fiável)/i.test(q)) return "confiabilidade";
  if (/(decisão|tomar decisão|decidir|qual a melhor escolha|o que devo fazer)/i.test(q)) return "decisao";
  return null;
}

// Função principal de respostas (mantida exatamente como no original, mas integrando PLN)
function getRespostaAgricola(pergunta, lang) {
  const q = pergunta.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  // Verifica intenção social/de negócio
  const intencao = detectarIntencao(q);
  if (intencao && lang === 'pt' && conversaPT[intencao]) {
    const arr = conversaPT[intencao];
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  // A partir daqui é o código original inalterado
  const respostasPT = {
    macronutrientes: `🌾 **Macronutrientes essenciais** (quantidades grandes):
• **Nitrogênio (N)** – crescimento de folhas e caules. Fontes naturais: estrume de galinha, composto, urina de vaca diluída (1:10), leguminosas (feijão, mucuna).
• **Fósforo (P)** – raízes fortes, flores e frutos. Fontes: farinha de osso, cinzas de casca de arroz, esterco bem curtido.
• **Potássio (K)** – resistência à seca e doenças, qualidade dos frutos. Fontes: cinzas de madeira, água de lavagem de banana, composto de palha.
• **Cálcio (Ca)** – estrutura celular, evita podridão apical. Fontes: casca de ovo moída, cal agrícola (se disponível).
• **Magnésio (Mg)** – cor verde escura (clorofila). Fontes: cinzas, composto, farinha de dolomita.
• **Enxofre (S)** – sabor e proteínas. Fontes: matéria orgânica em decomposição, água de chuva.

Quer saber como identificar deficiências ou preparar adubos caseiros?`,
    
    micronutrientes: `🧪 **Micronutrientes** (pequenas quantidades, mas vitais):
• **Ferro (Fe)** – evita amarelamento. Fontes: composto de folhas verdes, solo com matéria orgânica.
• **Manganês (Mn)** – ativa enzimas. Fontes: cinzas, composto.
• **Zinco (Zn)** – crescimento dos entrenós. Fontes: esterco, farinha de osso.
• **Cobre (Cu)** – metabolismo. Fontes: matéria orgânica, caldas cúpricas (se necessário).
• **Boro (B)** – floração e frutificação. Fontes: composto, esterco bem curtido.
• **Molibdênio (Mo)** – fixação de nitrogênio. Fontes: leguminosas, composto.
• **Cloro (Cl)** – equilíbrio hídrico. Fontes: naturalmente no solo e chuva.

A falta destes causa raquitismo, manchas e baixa produção. Quer saber como corrigir?`,
    
    deficiencias: `🔍 **Sinais de deficiência** (diagnóstico visual):
• Falta de N – folhas amarelas e crescimento lento.
• Falta de P – folhas com tom roxo/vermelho, raízes fracas.
• Falta de K – bordas queimadas, frutos pequenos.
• Falta de Fe – amarelecimento entre nervuras (folhas novas).
• Falta de Zn – folhas pequenas e deformadas.

Correção: adicione composto maduro, esterco de galinha ou cinzas. Se o problema persistir, faça uma análise de solo simples (com garrafa e vinagre – quer aprender?).`,
    
    compostagem: `♻️ **Como fazer composto caseiro em Angola**:
Misture partes iguais de:
• **Material verde** (restos de comida, ervas, folhas verdes, cascas de fruta) – fonte de nitrogênio.
• **Material seco** (palha, folhas secas, serradura, casca de arroz, papel) – fonte de carbono.
• **Estrume de galinha ou vaca** (opcional, acelera).
Empilhe em local sombreado, regue levemente (húmido como esponja), vire a pilha a cada 15 dias. Em 2-3 meses terá um composto escuro e cheiro de terra. Use como cobertura ou incorporado no solo.
Quer o passo a passo para fazer uma caixa de compostagem com materiais grátis?`,
    
    humus_producao: `🪱 **Produzir húmus de minhoca (vermicomposto)**:
• Use minhocas californianas (Eisenia fetida) – encontradas em esterco velho ou peça a outro agricultor.
• Cama: palha, folhas secas, restos de cozinha (sem sal, sem cítricos).
• Alimente as minhocas semanalmente com restos vegetais e esterco.
• Em 60 dias, o material escuro que sai é o húmus – rico em nutrientes e microrganismos.
Aplique 1-2 kg/m² no plantio ou como cobertura. Quer um tutorial de minhocário com pneus velhos ou caixotes?`,
    
    estrume: `💩 **Uso de estrume como adubo**:
• **Estrume de galinha** – muito rico em N, P, K. Use bem curtido (3-6 meses) para não queimar as plantas. Aplicar 0.5-1 kg/m².
• **Estrume de vaca** – mais suave, melhora a estrutura do solo. Pode usar fresco em pré-plantio (1-2 kg/m²).
• **Estrume de cabra/ovelha** – semelhante ao de vaca, excelente para hortas.
Como curtir: empilhe com palha, regue e cubra com plástico ou folhas. Vire a cada mês. Após 3-4 meses estará escuro e sem cheiro forte.`,
    
    clima: "☀️ **Clima em Angola**: Duas estações: chuvas (Set/Out a Abr) e seca (Maio a Ago, cacimbo). Plante no início das chuvas para maior sucesso.",
    epoca: "📅 **Época de plantar**: Milho (Out-Nov), Abacaxi (Ago-Set), Mandioca (Ago-Set), Feijão (Out e Fev), Banana (Ago ou início das chuvas).",
    milho: "🌽 **Milho**: Plante Out-Nov, solo com composto ou esterco. Espaçamento 80x40 cm. Colheita 4-5 meses.",
    abacaxi: "🍍 **Abacaxi**: Plante Ago-Set, solo drenado, adube com húmus. Ciclo 14-18 meses.",
    mandioca: "🌿 **Mandioca**: Plante antes das chuvas (Ago-Set). Covas com cinzas e composto. Resistente à seca.",
    feijao: "🫘 **Feijão**: Duas épocas: Out e Fev. Gosta de solo solto com húmus.",
    banana: "🍌 **Banana**: Plante no fim da seca (Ago). Solo rico em matéria orgânica.",
    solo: "🏞️ **Solo**: Melhore sempre com composto, húmus ou estrume. Ideal pH 5.5-7.0.",
    humus: "🪱 **Húmus**: Use composto maduro ou vermicomposto. Aplique 1-2 kg/m². Quer aprender a fazer? Pergunte sobre 'compostagem'.",
    mercado: "📈 **Mercado**: Preços sobem na seca (Maio-Ago). Venda milho e feijão nessa altura. Acompanhe o SIMA.",
    pragas: "🐛 **Pragas**: Calda de alho + pimenta + cinza. Roteção de culturas. Evite queimadas.",
    
    default: "🤖 Tenho vasto conhecimento em nutrição de plantas, compostagem, produção de húmus, épocas de plantio, clima e pragas. Pergunte sobre: macronutrientes, micronutrientes, compostagem, húmus, estrume, deficiências, milho, abacaxi, mandioca, feijão, banana, solo, clima, época de plantar, mercado ou pragas."
  };
  
  const respostasEN = {
    macronutrientes: "🌾 **Macronutrients**: N (growth), P (roots/fruits), K (drought resistance). Natural sources: manure, compost, ashes.",
    micronutrientes: "🧪 **Micronutrients**: Fe, Mn, Zn, Cu, B, Mo, Cl – from compost and organic matter.",
    deficiencias: "🔍 **Deficiency signs**: yellow leaves (N), purple leaves (P), burnt edges (K). Add compost or manure.",
    compostagem: "♻️ **Composting**: Mix green waste (kitchen scraps) + dry waste (straw, dry leaves). Turn every 15 days. Ready in 2-3 months.",
    humus_producao: "🪱 **Vermicompost**: Use red wigglers with bedding of straw/leaves. Feed kitchen waste. Harvest humus in 60 days.",
    estrume: "💩 **Manure**: Chicken (rich, use aged), cow (mild), goat. Age for 3-4 months before applying.",
    clima: "☀️ **Climate**: Rainy season Oct-Apr, dry season May-Sep. Plant at start of rains.",
    epoca: "📅 **Planting**: Maize (Oct-Nov), Pineapple (Aug-Sep), Cassava (Aug-Sep), Beans (Oct & Feb), Banana (Aug).",
    milho: "🌽 **Maize**: Plant Oct-Nov, use compost, spacing 80x40 cm.",
    abacaxi: "🍍 **Pineapple**: Plant Aug-Sep, well-drained soil, organic matter.",
    mandioca: "🌿 **Cassava**: Plant before rains (Aug-Sep), add ashes and compost.",
    feijao: "🫘 **Beans**: Two seasons: Oct and Feb.",
    banana: "🍌 **Banana**: Plant end of dry season (Aug), rich soil.",
    solo: "🏞️ **Soil**: Improve with compost, humus or manure.",
    humus: "🪱 **Humus**: Apply 1-2 kg/m². Ask about composting.",
    mercado: "📈 **Market**: Prices higher in dry season (May-Aug).",
    pragas: "🐛 **Pests**: Garlic+pepper+ash spray. Crop rotation.",
    default: "🤖 Ask me about: macronutrients, micronutrients, composting, humus, manure, deficiencies, maize, pineapple, cassava, beans, banana, soil, climate, planting seasons, market, pests."
  };
  
  const respostas = lang === 'pt' ? respostasPT : respostasEN;
  
  // Detecção de palavras-chave (original)
  if (q.includes('macronutriente') || q.includes('n p k') || q.includes('adubo principal')) return respostas.macronutrientes;
  if (q.includes('micronutriente') || q.includes('ferro') || q.includes('zinco') || q.includes('boro') || q.includes('manganes')) return respostas.micronutrientes;
  if (q.includes('deficiencia') || q.includes('falta de') || q.includes('sintoma') || q.includes('amarelar') || q.includes('queimadura')) return respostas.deficiencias;
  if (q.includes('compostagem') || q.includes('composto') || q.includes('fazer composto') || q.includes('pilha de composto')) return respostas.compostagem;
  if (q.includes('húmus de minhoca') || q.includes('vermicomposto') || q.includes('produzir húmus') || q.includes('minhocário')) return respostas.humus_producao;
  if (q.includes('estrume') || q.includes('esterco') || q.includes('cama de galinha') || q.includes('curtir estrume')) return respostas.estrume;
  if (q.includes('clima') || q.includes('chuva') || q.includes('seca') || q.includes('cacimbo')) return respostas.clima;
  if (q.includes('época') || q.includes('epoca') || q.includes('quando plantar') || q.includes('calendário')) return respostas.epoca;
  if (q.includes('milho')) return respostas.milho;
  if (q.includes('abacaxi') || q.includes('ananás')) return respostas.abacaxi;
  if (q.includes('mandioca') || q.includes('aipim') || q.includes('macaxeira')) return respostas.mandioca;
  if (q.includes('feijão') || q.includes('feijao')) return respostas.feijao;
  if (q.includes('banana')) return respostas.banana;
  if (q.includes('solo') || q.includes('terra')) return respostas.solo;
  if (q.includes('húmus') || q.includes('humus') || q.includes('matéria orgânica')) return respostas.humus;
  if (q.includes('mercado') || q.includes('preço') || q.includes('vender') || q.includes('sima')) return respostas.mercado;
  if (q.includes('praga') || q.includes('inseto') || q.includes('calda') || q.includes('lagarta')) return respostas.pragas;
  
  return respostas.default;
}

// ========== ENVIO DE MENSAGEM COM FEEDBACK E BALÕES ==========
chatSend.addEventListener("click", () => {
  const q = chatInput.value.trim();
  if(!q) return;
  // Mostra a mensagem do usuário à direita
  addMessage(q, true);
  chatInput.value = "";
  
  // Indicador de "digitando"
  const typingWrapper = document.createElement("div");
  typingWrapper.className = "chat-msg-wrapper chat-msg-bot";
  const typingBubble = document.createElement("div");
  typingBubble.className = "chat-bubble-bot";
  typingBubble.innerHTML = `<em><img class="logo-panel" src="images/agri-bot.png"/> AgroBot está escrevendo...</em>`;
  typingWrapper.appendChild(typingBubble);
  chatMessages.appendChild(typingWrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  setTimeout(() => {
    chatMessages.removeChild(typingWrapper);
    const resposta = getRespostaAgricola(q, currentLang);
    addMessage(resposta, false);
  }, 500);
});

chatInput.addEventListener("keypress", (e) => { if(e.key === "Enter") chatSend.click(); });
  
  // ========== BOTÃO VOLTAR AO TOPO ==========
  const btnTopo = document.getElementById('btnTopo');
  window.addEventListener('scroll', () => {
    btnTopo.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });
  btnTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  console.log("✅ Código corrigido: links Produtos e Contacto redirecionam para páginas separadas. Carrossel e restantes funcionalidades OK.");
