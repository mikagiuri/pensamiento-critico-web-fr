"use strict";
/* ===== Mapa de la web (11-10-2026) =====
   Petición del profesor: un mapa de la web dentro de la propia web. Se abre desde el pie («Mapa de la web», #mapa).
   Se construye al cargar a partir del menú (#tabs) tal como lo deja cada build, así que cada web publicada
   (Filosofía 1.º, HF, ESO, y sus traducciones) muestra solo sus secciones, en el orden del menú, con una línea
   de qué hay en cada una y, cuando se puede contar, cuántos elementos tiene. Debajo, los temas de cada materia
   con sus exploraciones (de Itinerario.temasDe) y, dentro de Ilustres, las fichas de época.
   Los textos van en MAPA_TXT y MAPA_DESC (se traducen con el diccionario de interfaz ui/<lang>.json). */
const MAPA_TXT = {
  secciones: "Sections", temas: "Thèmes de chaque matière", tema: "Thème {n}", exploraciones: "Explorations",
  epocas: "Fiches d’époque", otras: "Autres sections", elementos: "éléments"
};
const MAPA_SUBJ = { fil: "Philosophie 1re année de Bachillerato", hf: "Histoire de la philosophie 2e année de Bachillerato", ipc: "Pensée critique 2e ESO" };
const MAPA_DESC = {
  inicio: "Page d’accueil de l’atelier, avec les trois matières et l’emploi du temps.",
  fil: "La fiche de la matière : thèmes, ressources et comment étudier.",
  hf: "La fiche de la matière : thèmes, ressources et comment étudier.",
  ipc: "La fiche de la matière : unités, ressources et comment étudier.",
  sesiones: "Ce qu’on fait à chaque séance de cours.",
  calendario: "Les dates de l’année scolaire, les évaluations et les examens.",
  tiempo: "La répartition du temps de chaque thème.",
  teoria: "Le cours de chaque thème, avec ses explorations pour aller plus loin.",
  clases: "Le cours de Pensée critique, séance par séance.",
  materiales: "Fiches, activités et documents à télécharger.",
  cuentos: "Des histoires pour penser, avec leurs questions.",
  tarjetas: "Cartes de révision : la question au recto, la réponse au verso.",
  reto: "Des questions contre la montre pour réviser en jouant.",
  parejas: "Jeu de mémoire : associe chaque concept à sa paire.",
  glosario: "Les concepts de chaque thème, avec leur définition et leur origine.",
  ilustres: "Biographies des penseurs et fiches de chaque époque.",
  citas: "Phrases célèbres des philosophes, expliquées.",
  adagios: "Devises classiques en latin et en grec, et citations célèbres des philosophes : ce qu’elles veulent dire et quand les utiliser.",
  duelo: "Débat contre l’ordinateur : repère ses sophismes ou réponds avec des raisons plus fortes, sans perdre ton sang-froid.",
  epocas: "Les fiches de chaque époque, de la Grèce antique à nos jours, avec leur image du cosmos.",
  polemicas: "Des penseurs contemporains qui se sont affrontés : choisis avec qui tu es et pourquoi.",
  perseguidos: "Des philosophes et des scientifiques punis pour leurs idées : ce qui s’est passé et ce que l’on raconte souvent mal.",
  comunidades: "Écoles et cercles de penseurs, et les lieux où ils se réunissaient.",
  mundo: "Si la classe était le monde : les données de la planète, dans ta salle de classe.",
  camino: "Des histoires où tu choisis quoi faire et où tu vois les conséquences.",
  eudaimonia: "Un jeu sur le bonheur selon Aristote.",
  republica: "Un jeu pour organiser la cité idéale de Platon.",
  rayuela: "Trouve la contradiction dans les textes des philosophes.",
  nudos: "Des problèmes qui semblent faciles mais ne le sont pas.",
  dilemas: "Des cas difficiles pour débattre de ce qui est bien.",
  logica: "Tables de vérité, syllogismes, carré des oppositions et diagrammes.",
  leibniz: "Leibniz et ses inventions : la machine à calculer, le binaire et le calcul infinitésimal.",
  universo: "L'univers d'Aristote : les quatre éléments, la chute des corps, l'âme et les êtres vivants, et les fissures qu'a ouvertes la science moderne.",
  infografias: "Chaque thème résumé en une image.",
  galeria: "Œuvres d’art et illustrations des thèmes.",
  mapas: "Cartes conceptuelles des thèmes.",
  cronogramas: "Frises chronologiques des auteurs et des époques.",
  genealogias: "Qui a influencé qui : maîtres, disciples et rivaux.",
  esquemas: "Schémas des idées principales de chaque thème.",
  esqautor: "Un résumé par auteur, pour la PAU.",
  diapositivas: "Présentations des thèmes.",
  rescritura: "Apprends à reformuler un texte avec tes propres mots.",
  pistas: "Des problèmes avec des indices qui se dévoilent peu à peu.",
  cuestionarios: "Questions à choix multiples sur chaque thème, avec correction.",
  juegosucio: "Les pièges de la discussion, pour savoir les reconnaître.",
  unidad: "Toutes les questions d’une unité, réunies.",
  rubricas: "Comment sont corrigés les travaux et les examens.",
  evidencias: "Des traces d’apprentissage de l’année dernière.",
  recursos: "Liens et outils externes.",
  pau: "Comment se déroule l’examen d’accès à l’université.",
  comentario: "Comment faire un commentaire de texte, avec des exemples corrigés.",
  disertaciones: "Comment rédiger une dissertation, avec des modèles.",
  lecturas: "Les textes des auteurs à lire et à commenter.",
  tutoria: "Ressources de tutorat.",
  signos: "Cours de langue des signes."
};
/* cuántos elementos tiene cada sección (si su colección está cargada en esta web) */
const MAPA_CUENTA = { tarjetas: "DECKS", cuestionarios: "QUIZZES", glosario: "GLOSARIO", ilustres: "ILUSTRES", citas: "CITAS", adagios: "ADAGIOS", polemicas: "POLEMICAS", perseguidos: "PERSEGUIDOS", comunidades: "COMUNIDADES",
  infografias: "INFOGRAFIAS", mapas: "MAPS", esquemas: "ESQUEMAS", cronogramas: "CRONOGRAMAS", genealogias: "GENEALOGIAS", lecturas: "LECTURAS",
  galeria: "GALERIA", dilemas: "DILEMAS", disertaciones: "DISERTACIONES", nudos: "NUDOS", pistas: "PISTAS", materiales: "MATERIALS" };
function mapaG(name){ try { return (0, eval)("typeof " + name + " !== 'undefined' ? " + name + " : undefined"); } catch (e){ return undefined; } }
function mapaEsc(s){ return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
function mapaStrip(s){ return String(s == null ? "" : s).replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(); }
function mapaCuenta(v){
  if (v === "teoria"){ const It = window.Itinerario; return It && It.temasDe ? ["fil", "hf", "ipc"].reduce((n, s) => n + It.temasDe(s, true).length, 0) : 0; }
  const c = MAPA_CUENTA[v] && mapaG(MAPA_CUENTA[v]);
  return c ? (Array.isArray(c) ? c.length : Object.keys(c).length) : 0;
}
function mapaItem(el){
  if (el.tagName === "A") return '<li><a class="mapa-a" href="' + mapaEsc(el.getAttribute("href")) + '" target="_blank" rel="noopener">' + mapaEsc(mapaStrip(el.innerHTML)) + '</a></li>';
  const v = el.dataset.view; if (!v || v === "mapa" || !document.getElementById(v)) return "";
  const n = mapaCuenta(v), extra = v === "ilustres" ? mapaEpocas() : "";
  return '<li><button type="button" class="mapa-a" data-igo="' + mapaEsc(v) + '" data-iarg="">' + mapaEsc(mapaStrip(el.textContent)) + '</button>' +
    (n ? ' <span class="mapa-n" title="' + n + " " + MAPA_TXT.elementos + '">' + n + '</span>' : '') +
    (MAPA_DESC[v] ? '<span class="mapa-d">' + mapaEsc(MAPA_DESC[v]) + '</span>' : '') + extra + '</li>';
}
function mapaEpocas(){
  const EF = mapaG("EPOCAS_FICHAS"); if (!EF || typeof iluNombreFicha !== "function") return "";
  return '<span class="mapa-sub"><b>' + MAPA_TXT.epocas + ':</b> ' + Object.keys(EF).map(k =>
    '<button type="button" class="mapa-a" data-igo="ilustres" data-iarg="epoca-' + k + '">' + mapaEsc(iluNombreFicha(k)) + '</button>').join(" · ") + '</span>';
}
function mapaTemas(){
  const It = window.Itinerario, T = mapaG("THEORY"); if (!It || !It.temasDe || !T) return "";
  const lab = k => { const o = T[k], n = It.temaOf("teoria", k, o); return (o.sigla ? o.sigla + " · " : typeof n === "number" ? MAPA_TXT.tema.replace("{n}", n) + " · " : "") + mapaStrip(o.title); };
  const lnk = k => '<button type="button" class="mapa-a" data-igo="teoria" data-iarg="' + mapaEsc(k) + '">' + mapaEsc(lab(k)) + '</button>';
  const exp = k => mapaStrip(T[k].title).replace(/^(Exploración|Esplorazioa|Exploration|Anexo|Eranskina|Annexe|Annex|Appendix|استكشاف)\s*[-–:]\s*/, "");
  return ["fil", "hf", "ipc"].map(s => {
    const ks = It.temasDe(s); if (!ks.length) return "";
    const todos = It.temasDe(s, true), anexos = todos.filter(k => It.esAnexo && It.esAnexo(T[k]));
    return '<div class="mapa-grupo"><h3>' + mapaEsc(MAPA_SUBJ[s]) + '</h3><ol class="mapa-temas">' + ks.map(k => {
      const n = It.temaOf("teoria", k, T[k]), ex = T[k].sigla ? [] : anexos.filter(a => T[a].temaN === n);
      return '<li>' + lnk(k) + (ex.length ? '<details class="mapa-exp"><summary>' + MAPA_TXT.exploraciones + ' (' + ex.length + ')</summary><ul>' +
        ex.map(a => '<li><button type="button" class="mapa-a" data-igo="teoria" data-iarg="' + mapaEsc(a) + '">' + mapaEsc(exp(a)) + '</button></li>').join("") + '</ul></details>' : '') + '</li>';
    }).join("") + '</ol></div>';
  }).join("");
}
function renderMapa(){
  const box = document.getElementById("mapabox"), tabs = document.getElementById("tabs"); if (!box || !tabs) return;
  const grupos = [], sueltos = [];
  [...tabs.children].forEach(el => {
    if (el.classList.contains("navsec")){
      const g = el.querySelector(".navgroup"), items = [...el.querySelectorAll(".navmenu > button, .navmenu > a")].map(mapaItem).join("");
      if (items) grupos.push('<div class="mapa-grupo"><h3>' + mapaEsc(mapaStrip(g ? g.textContent : "")) + '</h3><ul class="mapa-lista">' + items + '</ul></div>');
    } else if (el.matches("button[data-view], a")) sueltos.push(mapaItem(el));
  });
  const s = sueltos.join("");
  box.innerHTML = '<h2 class="sec">' + MAPA_TXT.secciones + '</h2><div class="mapa-cols">' +
    (s ? '<div class="mapa-grupo"><h3>' + MAPA_TXT.otras + '</h3><ul class="mapa-lista">' + s + '</ul></div>' : '') + grupos.join("") + '</div>' +
    (function(){ const t = mapaTemas(); return t ? '<h2 class="sec">' + MAPA_TXT.temas + '</h2><div class="mapa-cols">' + t + '</div>' : ""; })();
}
document.addEventListener("DOMContentLoaded", () => { try { renderMapa(); } catch (e){} });
