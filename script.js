/* =========================================
   1. DICIONÁRIO DE TRADUÇÕES
   ========================================= */
const translations = {
    pt: {
        // Navegação e Hero
        nav_about: "Jornada",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_terminal: "Terminal",
        hero_greeting: "Olá, eu sou",
        hero_desc: "Arquiteto de sistemas complexos e interfaces imersivas.",
        btn_terminal: "Abrir Terminal",
        btn_projects: "Ver Projetos",
        
        // Seções
        about_title: "Minha Jornada",
        projects_title: "Projetos 3D",
        term_intro: "Digite 'help' para ver os comandos.",
        
        // Projetos (Mantenha este padrão)
        proj_1_name: "[NEV]²OS",
        proj_1_desc: "Sistema Operacional em C/Assembly.",
        proj_2_name: "Plataforma SaaS",
        proj_2_desc: "Dashboard completo com pagamentos.",
        proj_3_name: "Automação IA",
        proj_3_desc: "Bots inteligentes para dados.",

        // SIMULADOR DE ESTRATÉGIA
        sim_title: "Simulador de Soluções Cloud",
        sim_subtitle: "Planejamento e Otimização de Sistemas de Alto Tráfego.",
        sim_controls_title: "Configuração de Carga",
        users_label: "Usuários Ativos (K):",
        query_label: "Complexidade da Query:",
        sim_results_title: "Análise de Desempenho",
        latency_label: "Latência Estimada:",
        cost_label: "Custo Cloud Estimado:",
        strategy_default: "**Estratégia Recomendada:** Utilizar Load Balancers e auto-scaling.",
        explanation_title: "O que isso demonstra?",
        demon_1: "Pensamento Estratégico (Carga vs. Custo).",
        demon_2: "Conhecimento de Infraestrutura (Cache/DB).",
        demon_3: "Otimização de Custo (Protegendo o Orçamento).",
        
        // PITCH DE VALOR
        whyme_title: "🎯 Por Que Me Escolher?",
        whyme_subtitle: "Não sou apenas um programador. Sou seu Arquiteto de Soluções e parceiro de negócios.",
        pitch_1_title: "Foco em Escalabilidade",
        pitch_1_desc: "Sistemas que suportam 100 usuários hoje e 1 milhão amanhã. Minha arquitetura prioriza a eficiência e o custo-benefício de longo prazo.",
        pitch_2_title: "Visão de Negócios",
        pitch_2_desc: "O código deve resolver problemas de negócios. Eu traduzo objetivos estratégicos em código de alto desempenho e resultados mensuráveis.",
        pitch_3_title: "Ownership & Resolução",
        pitch_3_desc: "Eu assumo a responsabilidade ponta a ponta: do design da API à otimização do banco de dados. Resolvo gargalos onde eles nascem.",
        easter_egg_hint: "Debug Console",
        
        // CONTATO FINAL
        contact_title: "Vamos Nessa?",
        contact_subtitle: "Transforme sua ideia em uma arquitetura de alto desempenho.",
        info_title: "Contatos e Redes",
        label_email: "Email:",
        label_phone: "Telefone:",
        whatsapp_title: "Inicie uma Conversa Direta",
        whatsapp_subtitle: "Preencha rapidamente para gerar uma mensagem pronta no WhatsApp.",
        w_label_name: "Seu Nome:",
        w_label_interest: "Interesse Principal:",
        w_option_default: "Selecione uma opção...",
        w_option_arch: "Arquitetura de Sistemas (Node/Python)",
        w_option_fullstack: "Desenvolvimento Full-Stack",
        
        w_option_other: "Outro (Especifique na mensagem)",
        w_btn_send: "Gerar Mensagem no WhatsApp",
        w_note: "Seus dados não são armazenados.",
    }
};

/* =========================================
   2. VARIÁVEIS GLOBAIS E SELETORES
   ========================================= */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const langBtns = document.querySelectorAll('.lang-btn');
const body = document.body;

let vantaEffect = null; 

/* =========================================
   3. LÓGICA DE TEMA E IDIOMA
   ========================================= */

const updateLanguage = (lang) => {
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const currentLang = translations[lang];
        if (currentLang && currentLang[key]) {
            el.innerHTML = currentLang[key];
        }
    });

    localStorage.setItem('lang', lang);
};

const initVanta = (mode) => {
    const colorBg = mode === 'dark' ? 0x09090b : 0xf4f4f5;
    const colorNet = mode === 'dark' ? 0x60a5fa : 0x000000;

    if (vantaEffect) {
        vantaEffect.setOptions({
            backgroundColor: colorBg,
            color: colorNet
        });
    } else {
        if (window.VANTA) {
            vantaEffect = VANTA.NET({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                points: 12.00,
                maxDistance: 22.00,
                spacing: 18.00,
                backgroundColor: colorBg,
                color: colorNet
            });
        }
    }
};

const toggleTheme = () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');

    themeIcon.className = isDark ? 'ri-sun-line' : 'ri-moon-line';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    initVanta(isDark ? 'dark' : 'light');
};

/* =========================================
   4. LÓGICA DO TERMINAL INTERATIVO
   ========================================= */
const setupTerminal = () => {
    const input = document.getElementById('cmd-input');
    const output = document.getElementById('terminal-output');

    if (!input) return;

    const commands = {
        help: "Comandos: <br>- journey (jornada profissional)<br>- sim (abrir simulador)<br>- projects (ver portfolio)<br>- contact (contato)<br>- clear (limpar)",
        journey: "Sou Arquiteto de Soluções com 1+ anos de experiência, focado em alta escalabilidade e custo-benefício.",
        sim: "Acesse a seção 'Simulador de Soluções Cloud' acima para testar meu conhecimento em infra.",
        projects: "Navegue pela seção de projetos acima. Dica: use o mouse sobre os cards!",
        contact: "Email: caselasthiago@gmail.com | Telefone: +55 (61) 9 9888-9542",
        cls: "clear",
        clear: "clear"
    };

    input.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            const text = input.value.toLowerCase().trim();
            
            output.innerHTML += `<div class="line"><span class="prompt">➜ ~</span> ${input.value}</div>`;

            if (commands[text]) {
                if (text === 'clear' || text === 'cls') {
                    output.innerHTML = "";
                } else {
                    output.innerHTML += `<div class="line">${commands[text]}</div>`;
                }
            } else if (text !== "") {
                output.innerHTML += `<div class="line" style="color:#ff5f56">Erro: comando '${text}' não reconhecido.</div>`;
            }

            output.scrollTop = output.scrollHeight;
            input.value = "";
        }
    });
};

/* =========================================
   5. LÓGICA DO SIMULADOR DE ESTRATÉGIA
   ========================================= */

const setupSimulator = () => {
    const usersInput = document.getElementById('users-input');
    const usersDisplay = document.getElementById('users-display');
    const queryComplexity = document.getElementById('query-complexity');
    const latencyResult = document.getElementById('latency-result');
    const costResult = document.getElementById('cost-result');
    const strategyMessage = document.getElementById('strategy-message');

    if (!usersInput) return;

    const calculateSimulation = () => {
        const usersK = parseInt(usersInput.value);
        const complexity = parseInt(queryComplexity.value);

        // --- 1. CÁLCULO DE LATÊNCIA (ms) ---
        let latency = 50 + (usersK * 1.5) + (complexity * 8);

        if (complexity === 1) {
            latency = latency * 0.7;
        }
        
        latency = Math.round(latency);
        latencyResult.innerText = `${latency}ms`;
        
        // --- 2. CÁLCULO DE CUSTO (R$/mês) ---
        let cost = 500 + (usersK * 80) + (complexity * 50);

        if (cost > 4000) {
            costResult.classList.remove('cost-low');
            costResult.classList.add('cost-high');
        } else {
            costResult.classList.remove('cost-high');
            costResult.classList.add('cost-low');
        }

        costResult.innerText = `R$ ${cost.toLocaleString('pt-BR')}/mês`;

        // --- 3. MENSAGEM ESTRATÉGICA ---
        if (usersK > 80 && complexity > 5) {
            strategyMessage.innerHTML = "**Atenção:** Carga Alta e Queries Complexas. Requer migração para DB Read Replicas e otimização de queries ORM.";
        } else if (usersK > 50 && complexity === 1) {
             strategyMessage.innerHTML = "**Ideal:** O cache está funcionando. Foco em monitorar o CDN e a taxa de acerto do cache (hit rate).";
        } else if (usersK < 20) {
            strategyMessage.innerHTML = "**Início:** Solução atual é econômica. Foco em testes de escalabilidade e contenção de custo.";
        } else {
            strategyMessage.innerHTML = "**Estratégia Recomendada:** Utilizar Load Balancers e auto-scaling para picos de tráfego.";
        }

        usersDisplay.innerText = `${usersK}K`;
    };

    // Event Listeners
    usersInput.addEventListener('input', calculateSimulation);
    queryComplexity.addEventListener('change', calculateSimulation);

    // Inicializa com valores padrão
    calculateSimulation();
};

/* =========================================
   6. EASTER EGG (DEBUG CONSOLE)
   ========================================= */
const setupEasterEgg = () => {
    const toggleBtn = document.getElementById('hidden-terminal-toggle');
    const terminalSection = document.getElementById('terminal');

    if (!toggleBtn || !terminalSection) return;

    toggleBtn.addEventListener('click', () => {
        terminalSection.scrollIntoView({ behavior: 'smooth' });
        
        setTimeout(() => {
            const input = document.getElementById('cmd-input');
            if (input) input.focus();
        }, 500);
    });
};

/* =========================================
   7. LÓGICA DO WHATSAPP LINK GENERATOR
   ========================================= */

const setupWhatsappLinkGenerator = () => {
    const form = document.getElementById('whatsapp-link-generator');
    
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('w-name').value.trim();
        const interest = document.getElementById('w-interest').value;
        // !!! SUBSTITUA PELO SEU NÚMERO DE TELEFONE AQUI (Ex: 5511987654321) !!!
        const phone_number = "5561998889542"; // <--- SUBSTITUA PELO SEU NÚMERO DE TELEFONE AQUI

        if (!name || !interest) {
            alert("Por favor, preencha seu nome e interesse principal.");
            return;
        }

        let message = `Olá, ${name}. Vi seu portfólio de Arquitetura de Sistemas e fiquei interessado(a) em '${interest}'. Gostaria de conversar mais sobre um projeto.`;
        
        // Codifica a mensagem para o URL
        const encodedMessage = encodeURIComponent(message);
        
        // Cria o link wa.me
        const whatsappUrl = `https://wa.me/${phone_number}?text=${encodedMessage}`;
        
        // Abre o link em uma nova aba
        window.open(whatsappUrl, '_blank');
    });
};


/* =========================================
   8. INICIALIZAÇÃO E EVENT LISTENERS GERAIS
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    // --- Carregamento de Preferências ---
    const savedLang = localStorage.getItem('lang') || 'pt';
    updateLanguage(savedLang);

    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.className = 'ri-sun-line';
    }
    
    // --- Inicialização de Efeitos e Lógica ---
    initVanta(savedTheme);
    setupTerminal();
    setupSimulator();
    setupEasterEgg(); 
    setupWhatsappLinkGenerator(); // <--- CHAMA O GERADOR DE LINK AQUI

    // Inicializa Vanilla Tilt (Efeito 3D nos Cards)
    if (window.VanillaTilt) {
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
            max: 15,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
    }

    // --- Animação de Scroll (Fade Up) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    
    // --- Listeners de Ação ---
    themeToggle.addEventListener('click', toggleTheme);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.dataset.lang);
        });
    });

});

(function() {
  const track = document.querySelector('.nev-proj-track');
  const prev = document.querySelector('.nev-proj-prev');
  const next = document.querySelector('.nev-proj-next');
  const cards = Array.from(track.children);

  let index = 0;
  const cardWidth = cards[0].getBoundingClientRect().width;
  let autoplay;

  // Move para slide
  function moveTo(newIndex) {
    // limites
    if (newIndex < 0) newIndex = cards.length - 1;
    if (newIndex >= cards.length) newIndex = 0;
    index = newIndex;
    track.style.transform = `translateX(-${cardWidth * index}px)`;
  }

  // eventos nav
  prev.addEventListener('click', () => {
    moveTo(index - 1);
    resetAutoplay();
  });
  next.addEventListener('click', () => {
    moveTo(index + 1);
    resetAutoplay();
  });

  // autoplay
  function startAutoplay() {
    autoplay = setInterval(() => {
      moveTo(index + 1);
    }, 3000);
  }
  function resetAutoplay() {
    clearInterval(autoplay);
    startAutoplay();
  }
  startAutoplay();
})();

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// detectar hover em links
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
  });
  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
});

