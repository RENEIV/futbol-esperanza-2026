const translations = {
  es: {
    pageTitle: "Fútbol y Esperanza 2026",
    badge: "California • 2026",
    heroTitle: "Fútbol y Esperanza",
    subtitle: "Queremos orar por ti y ayudarte a conectar con una iglesia cristiana cerca de tu ciudad.",
    formTitle: "Registro rápido",
    formNote: "Tus datos serán usados solamente para seguimiento espiritual y contacto pastoral.",
    nameLabel: "Nombre completo",
    namePlaceholder: "Tu nombre",
    phoneLabel: "Teléfono",
    phonePlaceholder: "Ej. 562-000-0000",
    emailLabel: "Correo electrónico, opcional",
    emailPlaceholder: "correo@ejemplo.com",
    cityLabel: "Ciudad donde vives",
    cityPlaceholder: "Ej. Riverside, Fresno, San José",
    zoneLabel: "Zona de California",
    selectZone: "Selecciona una zona",
    north: "Norte de California",
    central: "Centro de California",
    south: "Sur de California",
    unsure: "No estoy seguro",
    prayerLabel: "¿Deseas recibir oración?",
    christLabel: "¿Deseas conocer más de Cristo?",
    churchLabel: "¿Quieres que te conectemos con una iglesia cercana?",
    selectOption: "Selecciona una opción",
    yes: "Sí",
    no: "No",
    prayerRequestLabel: "Petición de oración, opcional",
    prayerRequestPlaceholder: "Puedes escribir brevemente tu petición",
    consent: "Acepto ser contactado para oración y seguimiento espiritual.",
    submit: "Enviar registro",
    footer: "Una iniciativa cristiana de oración, evangelismo y seguimiento pastoral.",
    thanksBadge: "Registro recibido",
    thanksTitle: "Gracias",
    thanksSubtitle: "Hemos recibido tu información. Un equipo cristiano revisará tu registro con respeto, oración y cuidado pastoral.",
    backHome: "Volver al inicio"
  },

  en: {
    pageTitle: "Soccer and Hope 2026",
    badge: "California • 2026",
    heroTitle: "Soccer and Hope",
    subtitle: "We would like to pray for you and help you connect with a Christian church near your city.",
    formTitle: "Quick registration",
    formNote: "Your information will only be used for spiritual follow-up and pastoral contact.",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    phoneLabel: "Phone number",
    phonePlaceholder: "Ex. 562-000-0000",
    emailLabel: "Email, optional",
    emailPlaceholder: "email@example.com",
    cityLabel: "City where you live",
    cityPlaceholder: "Ex. Riverside, Fresno, San Jose",
    zoneLabel: "California region",
    selectZone: "Select a region",
    north: "Northern California",
    central: "Central California",
    south: "Southern California",
    unsure: "I am not sure",
    prayerLabel: "Would you like to receive prayer?",
    christLabel: "Would you like to learn more about Christ?",
    churchLabel: "Would you like us to connect you with a nearby church?",
    selectOption: "Select an option",
    yes: "Yes",
    no: "No",
    prayerRequestLabel: "Prayer request, optional",
    prayerRequestPlaceholder: "You may briefly write your prayer request",
    consent: "I agree to be contacted for prayer and spiritual follow-up.",
    submit: "Submit registration",
    footer: "A Christian initiative for prayer, evangelism, and pastoral follow-up.",
    thanksBadge: "Registration received",
    thanksTitle: "Thank you",
    thanksSubtitle: "We have received your information. A Christian team will review your registration with respect, prayer, and pastoral care.",
    backHome: "Back to home"
  },

  pt: {
    pageTitle: "Futebol e Esperança 2026",
    badge: "Califórnia • 2026",
    heroTitle: "Futebol e Esperança",
    subtitle: "Queremos orar por você e ajudar você a se conectar com uma igreja cristã perto da sua cidade.",
    formTitle: "Registro rápido",
    formNote: "Seus dados serão usados somente para acompanhamento espiritual e contato pastoral.",
    nameLabel: "Nome completo",
    namePlaceholder: "Seu nome",
    phoneLabel: "Telefone",
    phonePlaceholder: "Ex. 562-000-0000",
    emailLabel: "E-mail, opcional",
    emailPlaceholder: "email@exemplo.com",
    cityLabel: "Cidade onde você mora",
    cityPlaceholder: "Ex. Riverside, Fresno, San José",
    zoneLabel: "Região da Califórnia",
    selectZone: "Selecione uma região",
    north: "Norte da Califórnia",
    central: "Centro da Califórnia",
    south: "Sul da Califórnia",
    unsure: "Não tenho certeza",
    prayerLabel: "Você deseja receber oração?",
    christLabel: "Você deseja conhecer mais sobre Cristo?",
    churchLabel: "Você quer que conectemos você com uma igreja próxima?",
    selectOption: "Selecione uma opção",
    yes: "Sim",
    no: "Não",
    prayerRequestLabel: "Pedido de oração, opcional",
    prayerRequestPlaceholder: "Você pode escrever brevemente seu pedido de oração",
    consent: "Aceito ser contatado para oração e acompanhamento espiritual.",
    submit: "Enviar registro",
    footer: "Uma iniciativa cristã de oração, evangelismo e acompanhamento pastoral.",
    thanksBadge: "Registro recebido",
    thanksTitle: "Obrigado",
    thanksSubtitle: "Recebemos suas informações. Uma equipe cristã revisará seu registro com respeito, oração e cuidado pastoral.",
    backHome: "Voltar ao início"
  }
};

function getInitialLanguage() {
  const savedLanguage = localStorage.getItem("selectedLanguage");

  if (savedLanguage && translations[savedLanguage]) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("en")) return "en";
  if (browserLanguage.startsWith("pt")) return "pt";
  return "es";
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setPlaceholder(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = text;
}

function setOptionText(selector, index, text) {
  const element = document.querySelector(selector);
  if (element && element.options[index]) {
    element.options[index].textContent = text;
  }
}

function translatePage(language) {
  const t = translations[language];

  document.documentElement.lang = language;
  document.title = t.pageTitle;

  setText(".badge", document.body.classList.contains("thank-you") ? t.thanksBadge : t.badge);
  setText("h1", document.body.classList.contains("thank-you") ? t.thanksTitle : t.heroTitle);

  const subtitle = document.querySelector(".subtitle");
  if (subtitle) {
    subtitle.textContent = document.body.classList.contains("thank-you")
      ? t.thanksSubtitle
      : t.subtitle;
  }

  setText(".card h2", t.formTitle);
  setText(".small-text", t.formNote);

  setText("label[for='nombre']", t.nameLabel);
  setPlaceholder("#nombre", t.namePlaceholder);

  setText("label[for='telefono']", t.phoneLabel);
  setPlaceholder("#telefono", t.phonePlaceholder);

  setText("label[for='email']", t.emailLabel);
  setPlaceholder("#email", t.emailPlaceholder);

  setText("label[for='ciudad']", t.cityLabel);
  setPlaceholder("#ciudad", t.cityPlaceholder);

  setText("label[for='zona']", t.zoneLabel);
  setOptionText("#zona", 0, t.selectZone);
  setOptionText("#zona", 1, t.north);
  setOptionText("#zona", 2, t.central);
  setOptionText("#zona", 3, t.south);
  setOptionText("#zona", 4, t.unsure);

  setText("label[for='oracion']", t.prayerLabel);
  setOptionText("#oracion", 0, t.selectOption);
  setOptionText("#oracion", 1, t.yes);
  setOptionText("#oracion", 2, t.no);

  setText("label[for='cristo']", t.christLabel);
  setOptionText("#cristo", 0, t.selectOption);
  setOptionText("#cristo", 1, t.yes);
  setOptionText("#cristo", 2, t.no);

  setText("label[for='iglesia']", t.churchLabel);
  setOptionText("#iglesia", 0, t.selectOption);
  setOptionText("#iglesia", 1, t.yes);
  setOptionText("#iglesia", 2, t.no);

  setText("label[for='peticion']", t.prayerRequestLabel);
  setPlaceholder("#peticion", t.prayerRequestPlaceholder);

  const checkboxLabel = document.querySelector(".checkbox");
  if (checkboxLabel) {
    const checkbox = checkboxLabel.querySelector("input");
    checkboxLabel.textContent = "";
    if (checkbox) checkboxLabel.appendChild(checkbox);
    checkboxLabel.append(" " + t.consent);
  }

  setText("button[type='submit']", t.submit);
  setText("footer p", t.footer);
  setText(".home-link", t.backHome);

  localStorage.setItem("selectedLanguage", language);

  document.querySelectorAll(".language-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
}

function createLanguageSwitcher() {
  const appShell = document.querySelector(".app-shell");
  if (!appShell) return;

  const switcher = document.createElement("div");
  switcher.className = "language-switcher";
  switcher.innerHTML = `
    <button type="button" class="language-btn" data-lang="es">ES</button>
    <button type="button" class="language-btn" data-lang="en">EN</button>
    <button type="button" class="language-btn" data-lang="pt">PT</button>
  `;

  appShell.prepend(switcher);

  switcher.querySelectorAll(".language-btn").forEach((button) => {
    button.addEventListener("click", () => {
      translatePage(button.dataset.lang);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createLanguageSwitcher();
  translatePage(getInitialLanguage());
});
