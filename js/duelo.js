// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/duelo.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const DUELO_FALACIAS = {
 "persona": {
  "nombre": "Attaquer la personne",
  "tec": "ad hominem",
  "q": "Qu’est-ce que la façon d’être de la personne a à voir avec la qualité de son idée ?"
 },
 "famoso": {
  "nombre": "C’est une célébrité qui le dit",
  "tec": "fausse autorité",
  "q": "Est-ce un vrai expert de CE sujet, ou seulement quelqu’un de célèbre ?"
 },
 "siempre": {
  "nombre": "On a toujours fait comme ça",
  "tec": "appel à la tradition",
  "q": "Que ce soit ainsi depuis toujours, est-ce que ça le rend bon ?"
 },
 "pena": {
  "nombre": "Faire pitié au lieu de donner des raisons",
  "tec": "appel à la pitié",
  "q": "Me donne-t-il une raison, ou cherche-t-il seulement à m’attendrir ?"
 },
 "deformar": {
  "nombre": "Déformer ce que tu as dit",
  "tec": "homme de paille",
  "q": "Ai-je vraiment dit ça, ou l’a-t-il exagéré pour mieux l’attaquer ?"
 },
 "pocos": {
  "nombre": "Conclure sur tous à partir de quelques cas",
  "tec": "généralisation hâtive",
  "q": "Sur combien de cas ? Est-ce vraiment valable pour tous ?"
 },
 "causa": {
  "nombre": "Après, donc à cause de",
  "tec": "fausse cause",
  "q": "Y a-t-il une preuve que l’un cause l’autre, ou se suivent-ils simplement ?"
 },
 "dos": {
  "nombre": "Il n’y a que deux options",
  "tec": "faux dilemme",
  "q": "Es-tu sûr qu’il n’existe aucune autre option ?"
 },
 "miedo": {
  "nombre": "Faire peur pour convaincre",
  "tec": "appel à la peur",
  "q": "Me donne-t-il une raison, ou seulement de la peur ?"
 },
 "todos": {
  "nombre": "Tout le monde le dit",
  "tec": "ad populum",
  "q": "Que beaucoup de gens le fassent, est-ce que ça en fait une vérité ?"
 },
 "notrue": {
  "nombre": "Redéfinir à sa convenance",
  "tec": "« no true scotsman »",
  "q": "Changes-tu la définition juste pour esquiver le contre-exemple ? (Socrate a accepté la distinction… et l’a retournée.)"
 },
 "equivoco": {
  "nombre": "Jouer sur le double sens",
  "tec": "équivoque / amphibologie",
  "q": "Ce mot a deux sens : dans lequel l’emploies-tu ? Si tu changes de sens en cours de route, tu n’as rien prouvé."
 }
};
const DUELO_ORDEN_FAL = [
 "persona",
 "famoso",
 "siempre",
 "pena",
 "deformar",
 "pocos",
 "causa",
 "dos",
 "miedo",
 "todos",
 "notrue",
 "equivoco"
];
const DUELO_ESTRAT = {
 "insulto": {
  "t": "«  Tu penses vraiment ça ? Faut être sacrément borné pour ne pas le voir. Allez, laisse tomber.  »",
  "nombre": "l’insulte",
  "schop": "stratagème 38, l’« ultima ratio »",
  "q": "Ce n’est pas une raison, c’est une insulte. Demande-lui de parler du sujet, pas de toi."
 },
 "ira": {
  "t": "«  Bien sûr, toi, tu es toujours si lent pour tout ; normal que tu ne comprennes pas.  »",
  "nombre": "la provocation à la colère",
  "schop": "stratagème 8",
  "q": "«  Sous l’emprise de la colère, personne ne juge bien.  » Respire : ne mords pas à l’hameçon."
 },
 "persona": {
  "t": "«  Toi, tu ne connais rien à la vie, alors mieux vaut ne pas donner ton avis là-dessus.  »",
  "nombre": "l’attaque personnelle",
  "schop": "ad hominem, stratagème 21",
  "q": "Que ce soit toi qui le dises ne change rien à la qualité de l’idée."
 },
 "categoria": {
  "t": "«  Ce que tu dis, c’est typique d’un facho. Seul un imbécile penserait comme ça.  »",
  "nombre": "l’étiquette odieuse qu’on te colle",
  "schop": "ranger dans une catégorie détestable",
  "q": "L’étiquette ne réfute rien. Où est la raison ?"
 },
 "miedo": {
  "t": "«  Si tu continues à me contredire, tu vas te retrouver sans amis.  »",
  "nombre": "la menace",
  "schop": "appel à la peur (ad baculum)",
  "q": "La peur n’est pas une raison. Pourquoi ce qu’il dit serait-il vrai ?"
 },
 "desvio": {
  "t": "«  Et toi alors ? L’autre jour, tu as fait pareil. Parlons plutôt de ça.  »",
  "nombre": "le détournement et le retour contre toi",
  "schop": "stratagèmes 18 et 29",
  "q": "Que je me trompe ne répond pas à la question. Revenons au sujet."
 },
 "autoridad": {
  "t": "«  C’est un prix Nobel qui l’a dit, et c’est plus que démontré. Il n’y a plus rien à ajouter.  »",
  "nombre": "l’autorité brandie pour te faire taire",
  "schop": "stratagème 30",
  "q": "Qui, où et pourquoi ? Une citation sans raison ne clôt pas le sujet."
 }
};
const DUELO_REACCIONES = [
 {
  "lbl": "L’insulter à ton tour",
  "t": "«  Eh bien toi, t’es encore plus bête, allez !  »"
 },
 {
  "lbl": "Te rendre et lui donner raison",
  "t": "«  D’accord, d’accord… comme tu veux.  »"
 },
 {
  "lbl": "Fuir le sujet",
  "t": "«  Je laisse tomber, parlons d’autre chose.  »"
 }
];
const DUELO_TEMAS = [
 {
  "id": "moviles",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Faut-il laisser les portables hors de la classe ?",
  "cpuLado": "L’ordinateur défend : «  qu’on les utilise librement en classe  ».",
  "tuLado": "Tu défends : «  mieux vaut les laisser hors de la salle  ».",
  "opp": [
   {
    "t": "Le portable te donne un dictionnaire et une calculatrice instantanément ; bien utilisé, c’est un outil d’étude.",
    "f": null
   },
   {
    "t": "Un gourou de la technologie l’a dit lors d’une conférence : interdire le portable, c’est être analphabète numérique.",
    "f": "famoso",
    "peso": 1,
    "interes": "Ce gourou conseille une entreprise qui vend des tablettes et des applications aux lycées."
   },
   {
    "t": "Dans tous les lycées modernes, on les utilise déjà ; rester à la traîne, c’est un truc de ploucs.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "Ou bien portable libre, ou bien on élèvera des gamins incapables de vivre au XXIe siècle.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "Je connais deux élèves qui ont réussi en cherchant des choses sur leur portable ; c’est clair que ça aide tout le monde.",
    "f": "pocos",
    "peso": 2
   },
   {
    "t": "Si on apprend à s’en servir avec des règles, on apprend à se réguler mieux que si on l’interdit complètement.",
    "f": null
   }
  ],
  "counters": [
   {
    "t": "Dans les classes où l’on a ramassé les portables, l’attention a augmenté et les tricheries ont baissé : il y a des données.",
    "str": 3
   },
   {
    "t": "Un outil utile peut servir à des moments précis, sans qu’on l’ait sur soi pendant toute l’heure.",
    "str": 2
   },
   {
    "t": "Pour ce qu’il faut, il y a les tablettes de l’établissement, sans notifications personnelles.",
    "str": 2
   },
   {
    "t": "Beaucoup de gens apprécient de se déconnecter un moment ; la classe peut être cet endroit.",
    "str": 1
   },
   {
    "t": "Ou bien le portable dehors, ou bien ce sera un cybercafé et personne n’apprendra rien.",
    "f": "dos"
   },
   {
    "t": "C’est mon oncle qui le dit, lui qui est prof depuis 30 ans, donc dehors et point final.",
    "f": "famoso"
   }
  ]
 },
 {
  "id": "comida",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Est-il conseillé de manger du fast-food tous les jours ?",
  "cpuLado": "L’ordinateur défend : «  oui, allez-y, tous les jours  ».",
  "tuLado": "Tu défends : «  de temps en temps oui, tous les jours non  ».",
  "opp": [
   {
    "t": "C’est pas cher et rapide ; pour qui a peu de temps, ça règle le repas.",
    "f": null
   },
   {
    "t": "C’est le footballeur le plus célèbre du monde qui en fait la pub, donc ça ne peut pas être si mauvais.",
    "f": "famoso",
    "peso": 1,
    "interes": "Le footballeur touche des millions pour faire la publicité de cette chaîne de fast-food."
   },
   {
    "t": "Toute la classe y mange le vendredi ; il y a bien une raison.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "Mon cousin mange des hamburgers et il est super costaud : cette nourriture te rend fort.",
    "f": "causa",
    "peso": 2
   },
   {
    "t": "Ou tu manges ça, ou tu restes sur ta faim ; il n’y a pas d’autre option bon marché.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "Ne m’enlève pas le seul plaisir de la journée, alors que je suis déjà si mal.",
    "f": "pena",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Sur l’étiquette, il est écrit qu’un menu contient presque tout le sel et le gras d’une journée entière : à force, ça se paie.",
    "str": 3
   },
   {
    "t": "En manger de temps en temps n’est pas le problème ; le problème, c’est tous les jours.",
    "str": 2
   },
   {
    "t": "Pour le prix d’un menu quotidien, tu cuisines varié pour moins cher sur la semaine.",
    "str": 2
   },
   {
    "t": "Il y a des sandwichs et des fruits tout aussi rapides et moins chers.",
    "str": 1
   },
   {
    "t": "J’en connais un qui est tombé malade en mangeant ça ; donc tous ceux qui en mangent tombent malades.",
    "f": "pocos"
   },
   {
    "t": "Si tu continues à manger ça, tu finiras à l’hôpital, c’est sûr.",
    "f": "miedo"
   }
  ]
 },
 {
  "id": "mascota",
  "grupo": "dia",
  "nivel": [
   "eso"
  ],
  "claim": "Adopte-t-on un animal de compagnie dès aujourd’hui ?",
  "cpuLado": "L’ordinateur défend : «  oui, dès aujourd’hui  ».",
  "tuLado": "Tu défends : «  bien le préparer avant, pas aujourd’hui à l’improviste  ».",
  "opp": [
   {
    "t": "Il y a des animaux au refuge qui ont besoin d’un foyer le plus vite possible ; attendre leur coûte aussi.",
    "f": null
   },
   {
    "t": "Regarde sa petite bouille ; si on ne le ramène pas aujourd’hui, je vais être tout triste.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Dans ma famille, on a toujours eu un chien, donc il faut en avoir un tout de suite.",
    "f": "siempre",
    "peso": 1
   },
   {
    "t": "Tous mes amis ont un animal ; je suis le seul à ne pas en avoir.",
    "f": "todos",
    "peso": 1
   },
   {
    "t": "Ou on l’adopte aujourd’hui, ou on n’aura jamais d’animal.",
    "f": "dos",
    "peso": 3
   },
   {
    "t": "La vétérinaire dit d’attendre, mais comme elle n’a pas d’enfants, elle ne connaît rien aux familles.",
    "f": "persona",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Un chien vit dix ou quinze ans, et chaque jour il faut le nourrir, le sortir et payer le vétérinaire : il faut l’organiser avant.",
    "str": 3
   },
   {
    "t": "On peut adopter dès qu’on sait qui le sort chaque jour ; c’est préparer, pas renoncer.",
    "str": 2
   },
   {
    "t": "Si on le ramène sans plan et qu’ensuite on ne peut pas s’en occuper, c’est l’animal qui souffre le plus.",
    "str": 2
   },
   {
    "t": "Une semaine pour préparer la maison et l’emploi du temps, ce n’est pas grand-chose.",
    "str": 1
   },
   {
    "t": "Donc, d’après toi, les animaux n’ont aucune importance.",
    "f": "deformar"
   },
   {
    "t": "Un vétérinaire influenceur a dit que le plus tôt serait le mieux, donc aujourd’hui.",
    "f": "famoso"
   }
  ]
 },
 {
  "id": "trasimaco",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "La justice n’est-elle que l’intérêt du plus fort ? · Socrate contre Thrasymaque",
  "cpuLado": "L’ordinateur est Thrasymaque : être injuste est plus rentable et rend plus heureux ; la justice ne sert que le puissant.",
  "tuLado": "Tu es Socrate : la justice est une vertu qui profite à celui qui la possède, et la vie juste est plus heureuse.",
  "estrat": [
   {
    "t": "Il fait irruption comme une bête fauve : «  Quel tas de sottises vous nous débitez depuis tout à l’heure !  »",
    "nombre": "l’entrée brutale",
    "schop": "intimider avant d’argumenter",
    "q": "Le ton n’est pas un argument. Qu’a-t-il à dire sur le sujet ?"
   },
   {
    "t": "Il éclate d’un grand rire : «  Voilà la fameuse ironie de Socrate ; je savais bien que tu te défilerais.  »",
    "nombre": "la moquerie",
    "schop": "ridiculiser au lieu de réfuter",
    "q": "Rire ne réfute rien. Demande-lui la raison."
   },
   {
    "t": "«  Socrate, tu as encore une nourrice ? Car elle te laisse le nez qui coule et ne te mouche pas.  »",
    "nombre": "l’insulte de la nourrice",
    "schop": "stratagème 38, l’« ultima ratio »",
    "q": "C’est une insulte, pas une réponse. Reviens au sujet."
   }
  ],
  "opp": [
   {
    "t": "Le juste en retire toujours moins : il ne trompe pas dans les affaires, il paie ses impôts et, quand il gouverne, il profite aux autres et non à lui-même.",
    "f": null
   },
   {
    "t": "Quand un médecin se trompe, à cet instant il n’agit pas en médecin. Pareil pour celui qui commande : au sens strict, le gouvernant ne se trompe pas.",
    "f": "notrue",
    "peso": 1
   },
   {
    "t": "Toi, tu ne poses des questions que pour gagner, par amour de l’honneur ; tu ne cherches pas la vérité, donc tes questions ne comptent pas.",
    "f": "persona",
    "peso": 3
   },
   {
    "t": "Regarde qui triomphe : les tyrans et les tricheurs. C’est évident que c’est l’injustice qui rend heureux.",
    "f": "pocos",
    "peso": 2
   },
   {
    "t": "Ou tu es injuste et tu en tires profit, ou tu es juste et on te dévore tout cru ; il n’y a pas de juste milieu.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Le juste est un nigaud qu’on exploite ; l’injuste, le malin qui exploite. Ou l’un, ou l’autre. C’est pourquoi l’injustice est la vertu.",
    "f": "dos",
    "fAlt": [
     "persona"
    ],
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Même une bande de voleurs a besoin d’un peu de justice entre eux pour arriver à quelque chose ; l’injustice les dresse les uns contre les autres et les détruit.",
    "str": 3
   },
   {
    "t": "Les gouvernants se trompent et font des lois qui leur nuisent ; alors leur obéir ne profite pas au plus fort.",
    "str": 2
   },
   {
    "t": "Le médecin, en tant que médecin, cherche le bien du malade, pas le sien ; celui qui commande bien cherche le bien du gouverné.",
    "str": 2
   },
   {
    "t": "Si la fonction de l’âme est de vivre, et que la justice est sa vertu, le juste vit bien ; et bien vivre, c’est être heureux.",
    "str": 2
   },
   {
    "t": "Un sophiste se fait payer pour enseigner à avoir raison sans l’avoir ; comment pourrait-on te croire ?",
    "f": "persona"
   },
   {
    "t": "Ou bien tu admets que la justice est une vertu, ou bien tu reconnais que tu aimerais qu’on te vole ; choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "atheismusstreit",
  "grupo": "contemporanea",
  "nivel": [
   "hf"
  ],
  "claim": "L’Atheismusstreit (1798) : est-il athée d’identifier Dieu à l’ordre moral du monde ?",
  "cpuLado": "L’ordinateur, ce sont les accusateurs de Fichte : c’est de l’athéisme, et l’athéisme doit être interdit.",
  "tuLado": "Tu es Fichte : le Dieu digne de foi est l’ordre moral vivant du monde ; un Dieu-chose à part serait une idole.",
  "estrat": [
   {
    "t": "Un pamphlet anonyme circule, «  Lettre d’un père à son fils étudiant  » : quiconque lira ta revue perdra la foi et l’âme.",
    "nombre": "le pamphlet anonyme",
    "schop": "attaquer sans se montrer (empoisonner le puits)",
    "q": "Celui qui accuse dans l’ombre n’argumente pas. Qu’affirme-t-il, et avec quelle preuve ?"
   },
   {
    "t": "Le gouvernement de Saxe menace de confisquer la revue et de punir ceux qui la liront.",
    "nombre": "la menace de censure",
    "schop": "la force au lieu des raisons (ad baculum)",
    "q": "Bâillonner une idée ne la réfute pas. Où est l’argument ?"
   },
   {
    "t": "«  Athée !  » Ce mot suffit ; il n’y a plus rien à discuter avec toi.",
    "nombre": "l’étiquette infamante",
    "schop": "ranger dans une catégorie détestable",
    "q": "L’étiquette ne réfute rien. En quoi consiste exactement ce que je dis ?"
   }
  ],
  "opp": [
   {
    "t": "Un Dieu qui n’est ni substance, ni personne, ni créateur, mais seulement «  l’ordre moral  », en quoi se distingue-t-il de l’absence de Dieu ?",
    "f": null
   },
   {
    "t": "Fichte dit que Dieu n’est qu’une idée que nous nous faisons ; autrement dit, il nie Dieu. C’est un athée.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Si tu ôtes le Dieu personnel, la morale, le serment et l’État s’effondrent. Il faut l’interdire tout de suite.",
    "f": "miedo",
    "peso": 3
   },
   {
    "t": "Fichte est un jacobin et un fauteur de troubles ; on sait bien quelle sorte de philosophie sort d’un tel homme.",
    "f": "persona",
    "peso": 2
   },
   {
    "t": "Le catéchisme que toute la chrétienté professe dit que Dieu est personne et créateur ; qui est-il pour le corriger ?",
    "f": "siempre",
    "peso": 1
   },
   {
    "t": "Tous les gens bien sont scandalisés par cette revue ; il y a bien une raison.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Le vrai Dieu est l’ordre moral vivant du monde, ce en quoi tu as confiance quand tu agis bien : ce n’est pas «  une idée à moi  », c’est ce qu’il y a de plus réel.",
    "str": 3
   },
   {
    "t": "Faire de Dieu une chose ou une personne, un être parmi les êtres, l’abaisse au rang d’idole ; nier cette idole, ce n’est pas nier Dieu.",
    "str": 3
   },
   {
    "t": "Punir une idée par la censure ne la réfute pas : si je me trompe, démontrez-le, ne me bâillonnez pas.",
    "str": 2
   },
   {
    "t": "Jugez mes raisons, pas ma politique : que je sois jacobin ou non ne dit pas si j’ai raison.",
    "str": 2
   },
   {
    "t": "Ou vous acceptez mon idéalisme tout entier, ou vous n’êtes que des fanatiques superstitieux.",
    "f": "dos"
   },
   {
    "t": "Celui qui m’accuse est un curé ignorant qui n’a pas lu une ligne de Kant.",
    "f": "persona"
   }
  ]
 },
 {
  "id": "descartes-dualismo",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Le dualisme de Descartes : l’esprit et le corps sont-ils deux substances ou une seule ?",
  "cpuLado": "L’ordinateur est le moniste (Spinoza, La Mettrie) : il n’y a qu’une substance ; une âme à part est de trop.",
  "tuLado": "Tu es Descartes : l’esprit est une chose qui pense, réellement distincte du corps étendu.",
  "estrat": [
   {
    "t": "«  Ce sont des contes de curés : l’âme immortelle est une superstition pour effrayer les gens.  »",
    "nombre": "le mépris",
    "schop": "ranger dans une catégorie détestable",
    "q": "Le mépris n’est pas un argument. Qu’est-ce qui cloche exactement dans la distinction ?"
   },
   {
    "t": "«  Toi, qui te caches derrière ton ‘je pense, donc je suis’, tu n’oses pas regarder le corps en face.  »",
    "nombre": "la pique personnelle",
    "schop": "ad hominem",
    "q": "Mon caractère ne décide pas si l’esprit et le corps sont distincts."
   },
   {
    "t": "«  Arrête de nous embrouiller avec ton ‘clair et distinct’ et parle comme une personne normale.  »",
    "nombre": "la moquerie",
    "schop": "ridiculiser au lieu de réfuter",
    "q": "Se moquer du vocabulaire ne réfute pas l’idée."
   }
  ],
  "opp": [
   {
    "t": "Si l’âme n’est pas étendue, elle ne peut ni pousser ni mouvoir le corps ; le contact exige l’étendue. Comment interagissent-ils, alors ?",
    "f": null
   },
   {
    "t": "Une seule substance à deux attributs, la pensée et l’étendue, suffit à tout expliquer, sans deux mondes dont on ne sait comment ils se touchent.",
    "f": null
   },
   {
    "t": "D’après toi, le corps est une prison sans valeur et seule l’âme compte ; tu méprises toute la chair.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Ou l’âme est une substance à part, ou tu n’es qu’une machine sans liberté : choisis.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Un verre de vin change tes pensées ; donc penser n’est que de la chimie du corps, il n’y a pas d’âme.",
    "f": "causa",
    "peso": 2
   },
   {
    "t": "Les médecins et les savants modernes sont tous matérialistes ; vas-tu avoir raison tout seul ?",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Je peux douter d’avoir un corps, mais pas de penser ; et ce que je conçois clairement et distinctement comme séparé peut exister séparément.",
    "str": 3
   },
   {
    "t": "Que le corps influence l’esprit ne prouve pas qu’ils soient la même chose : le musicien n’est pas son instrument, même s’il en joue.",
    "str": 3
   },
   {
    "t": "Je ne méprise pas le corps : je dis que je forme avec lui une union très étroite, pas qu’il soit une prison.",
    "str": 2
   },
   {
    "t": "Qu’une substance unique soit plus simple ne la rend pas vraie : il faut encore expliquer pourquoi je pense à la première personne.",
    "str": 2
   },
   {
    "t": "Ou tu admets une âme immortelle, ou tu es un animal sans dignité : il n’y a pas de juste milieu.",
    "f": "dos"
   },
   {
    "t": "Spinoza a été expulsé de sa communauté ; comment pourrais-tu croire un homme pareil ?",
    "f": "persona"
   }
  ]
 },
 {
  "id": "hegel-kant",
  "grupo": "contemporanea",
  "nivel": [
   "hf"
  ],
  "claim": "Hegel contre Kant : la raison a-t-elle des limites infranchissables ou peut-elle tout penser ?",
  "cpuLado": "L’ordinateur défend Kant : nous ne connaissons que des phénomènes ; de la chose en soi, il faut se taire.",
  "tuLado": "Tu es Hegel : ces limites sont un préjugé ; la chose en soi est un vide et la contradiction fait avancer la pensée.",
  "estrat": [
   {
    "t": "«  Tes phrases sont si obscures que personne ne te comprend ; c’est facile de faire le profond comme ça.  »",
    "nombre": "la moquerie sur l’obscurité",
    "schop": "ridiculiser au lieu de réfuter",
    "q": "Que tu aies du mal à me lire ne réfute pas ce que je dis. Qu’est-ce qui est faux, exactement ?"
   },
   {
    "t": "«  Toi, tu écris pour avoir l’air important, pas pour clarifier quoi que ce soit.  »",
    "nombre": "la pique personnelle",
    "schop": "ad hominem",
    "q": "Mon style ne décide pas si Kant avait raison ou non."
   },
   {
    "t": "«  Arrête de nous embrouiller avec ta ‘dialectique’ et réponds-moi par oui ou par non.  »",
    "nombre": "l’impatience",
    "schop": "forcer et détourner",
    "q": "Simplifier de force ne répond pas à la question."
   }
  ],
  "opp": [
   {
    "t": "Nous ne connaissons que des phénomènes, jamais la chose en soi : l’espace, le temps et les catégories sont à nous, pas aux choses.",
    "f": null
   },
   {
    "t": "Quand la raison sort de l’expérience, elle tombe dans des antinomies : elle prouve avec la même force une thèse et son contraire. Cela marque une limite.",
    "f": null
   },
   {
    "t": "Donc, d’après toi, la raison sait déjà tout et nous pouvons inventer le monde à volonté.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Ou tu acceptes mes limites, ou tu retournes à la vieille métaphysique délirante des âmes et des mondes. Il n’y a rien d’autre.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "La Critique de la raison pure est le chef-d’œuvre de la philosophie ; qui es-tu pour corriger Kant ?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Sans ces limites, la philosophie retombe dans le fanatisme et la superstition : c’est dangereux.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Examiner la faculté de connaître avant de connaître, c’est vouloir apprendre à nager sans entrer dans l’eau.",
    "str": 3
   },
   {
    "t": "La chose en soi, ce qui reste quand on retire à l’objet tout ce que j’en pense, n’est pas un mystère : c’est l’abstraction la plus vide.",
    "str": 3
   },
   {
    "t": "La contradiction des antinomies n’est pas la fin de la raison, mais son moteur : le vrai est le tout qui les dépasse.",
    "str": 2
   },
   {
    "t": "Je ne dis pas que nous inventons le monde : je dis que pensée et réalité ne sont pas deux mondes séparés par un mur.",
    "str": 2
   },
   {
    "t": "Ou tu penses la totalité comme moi, ou tu n’es qu’un sceptique lâche : choisis.",
    "f": "dos"
   },
   {
    "t": "Kant était un vieux routinier qui n’est jamais sorti de Königsberg ; que pouvait-il savoir du devenir ?",
    "f": "persona"
   }
  ]
 },
 {
  "id": "calicles",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrate contre Calliclès (Gorgias) : la loi du plus fort a-t-elle raison ?",
  "cpuLado": "L’ordinateur est Calliclès : par nature, le fort doit commander et avoir plus ; se retenir est bon pour les faibles.",
  "tuLado": "Tu es Socrate : il est pire de commettre une injustice que de la subir, et la vie sans mesure n’est pas heureuse.",
  "estrat": [
   {
    "t": "«  Arrête de poser des petites questions d’esclave et parle comme un homme.  »",
    "nombre": "le mépris viril",
    "schop": "ranger dans une catégorie détestable",
    "q": "Le ton viril n’est pas un argument. Qu’est-ce qui est faux dans ce que je dis ?"
   },
   {
    "t": "«  Tu n’as pas honte, à ton âge, de perdre ton temps à jouer avec les mots ?  »",
    "nombre": "la pique sur l’âge",
    "schop": "ad hominem",
    "q": "Mon âge ne décide pas si j’ai raison."
   },
   {
    "t": "«  C’est ridicule, tu m’ennuies ; réponds toi-même, toi qui sais tant de choses.  »",
    "nombre": "l’impatience",
    "schop": "détourner et forcer",
    "q": "S’ennuyer ne réfute rien. Revenons à la question."
   }
  ],
  "opp": [
   {
    "t": "La justice de l’égalité, ce sont les nombreux faibles qui l’inventent pour enchaîner le fort par peur ; par nature, le meilleur doit avoir plus.",
    "f": null
   },
   {
    "t": "Regarde la nature : le lion ne respecte aucune loi et l’État fort s’impose au faible. Les choses sont ainsi, et elles doivent l’être.",
    "f": "pocos",
    "peso": 1
   },
   {
    "t": "La philosophie est bonne pour les enfants ; un homme fait qui continue à philosopher est ridicule et mérite une bonne fessée.",
    "f": "persona",
    "peso": 3
   },
   {
    "t": "Ou tu commandes et tu jouis, ou on te commande et tu subis : il n’y a pas de bonne vie à mi-chemin.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Si tu n’apprends pas la rhétorique et que tu continues avec tes questions, n’importe qui t’emmènera devant un tribunal et te fera condamner à mort sans que tu saches te défendre.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "D’après toi, il faudrait se laisser piétiner et ne jamais se défendre ; tu prêches la lâcheté.",
    "f": "deformar",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Si le plus fort est celui qui peut le plus, et que la multitude peut plus qu’un seul, alors la justice de la multitude est celle de la nature : ta propre loi te contredit.",
    "str": 3
   },
   {
    "t": "L’âme sans mesure est un tonneau percé : tu as beau verser, il ne se remplit jamais ; cette vie n’est pas un bonheur, c’est un manque sans fin.",
    "str": 3
   },
   {
    "t": "Plaisir et douleur se ressentent en même temps (l’assoiffé boit avec plaisir alors qu’il souffre encore de la soif), mais pas le bien et le mal ; donc le plaisir n’est pas le bien.",
    "str": 2
   },
   {
    "t": "Je ne dis pas de se laisser piétiner : je dis que commettre l’injustice nuit plus à l’âme que la subir ; c’est pourquoi je préfère recevoir le coup que le donner.",
    "str": 2
   },
   {
    "t": "Tu défends cela parce que tu es un ambitieux sans scrupules ; c’est pourquoi je ne te crois pas.",
    "f": "persona"
   },
   {
    "t": "Ou tu admets que la justice a de la valeur, ou tu reconnais que tu n’es qu’un tyran : choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "eutifron",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrate contre Euthyphron : qu'est-ce que la piété ?",
  "cpuLado": "L’ordinateur est Euthyphron : un devin qui se croit expert en religion et qui va dénoncer son propre père ; il assure savoir ce qu’est «  le pieux  ».",
  "tuLado": "Tu es Socrate : tu ne cherches pas des exemples, mais la définition : le trait par lequel toute action pieuse est pieuse.",
  "estrat": [
   {
    "t": "«  J’en sais bien plus que toi sur ces choses, Socrate ; je suis devin, après tout.  »",
    "nombre": "la suffisance de l’expert",
    "schop": "se prévaloir de sa propre autorité",
    "q": "Que tu sois devin ne répond pas à la question : dis-moi ce qu’est le pieux."
   },
   {
    "t": "«  Tu me fatigues avec toutes tes petites questions ; n’importe qui comprend ça, sauf toi.  »",
    "nombre": "l’impatience",
    "schop": "dédain / ad hominem",
    "q": "Te fatiguer ne réfute rien. Revenons à la question."
   },
   {
    "t": "«  Je suis pressé, Socrate, on m’attend ; on remet ça à un autre jour.  »",
    "nombre": "la fuite",
    "schop": "esquiver la question",
    "q": "Partir, ce n’est pas répondre : fuir laisse la question debout."
   }
  ],
  "opp": [
   {
    "t": "Qu’est-ce que le pieux ? Le pieux, c’est ce que je fais en ce moment même : poursuivre celui qui commet un crime. Voilà.",
    "f": null
   },
   {
    "t": "Zeus lui-même a enchaîné son père Cronos ; si les dieux font ces choses, qui suis-je pour ne pas les imiter ?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "C’est évident : le pieux est ce qui est cher aux dieux, et l’impie ce qui leur est odieux.",
    "f": null
   },
   {
    "t": "Alors le pieux sera ce qu’aiment TOUS les dieux sans exception ; aucun qui soit vraiment dieu n’aimerait un crime.",
    "f": "notrue",
    "peso": 2
   },
   {
    "t": "C’est pieux parce que les dieux l’aiment, point final ; ça te suffit pour savoir ce que c’est.",
    "f": null
   },
   {
    "t": "Tout Athènes sait très bien ce qu’est la piété ; il n’y a que toi qui fais semblant de ne pas comprendre.",
    "f": "todos",
    "peso": 2
   }
  ],
  "counters": [
   {
    "t": "Je t’ai demandé CE QU’EST la piété, pas un exemple de chose pieuse. Donne-moi le trait par lequel toute action pieuse est pieuse, pour mesurer n’importe quel acte avec lui.",
    "str": 3
   },
   {
    "t": "Si les dieux se disputent entre eux, comme le racontent les poètes, la même chose sera aimée des uns et haïe des autres : pieuse et impie à la fois. Ta définition se contredit.",
    "str": 3
   },
   {
    "t": "Le pieux est-il aimé des dieux PARCE QU’il est pieux, ou est-il pieux PARCE QU’ils l’aiment ? S’ils l’aiment parce qu’il est déjà pieux, être aimé n’est pas ce qui le rend pieux : tu me dis ce qui lui arrive, pas ce qu’il est.",
    "str": 3
   },
   {
    "t": "Ton «  commerce  » avec les dieux revient au point de départ : leur plaire, ce n’est rien d’autre qu’être aimé d’eux, et cela, nous l’avons déjà réfuté. Tu tournes en rond.",
    "str": 2
   },
   {
    "t": "Un homme capable de traîner son propre père en justice n’a pas de cœur ; je ne me fie à rien de ce qu’il dit.",
    "f": "persona"
   },
   {
    "t": "Ou tu définis la piété ici et maintenant, ou reconnais que tu es un impie : choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "eutidemo",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrate contre Euthydème et Dionysodore : l’art de vaincre par les mots",
  "cpuLado": "L’ordinateur, ce sont les frères éristes Euthydème et Dionysodore : ils se vantent de tout réfuter, quoi que dise l’autre, en jouant sur le double sens des mots.",
  "tuLado": "Tu es Socrate : distingue les sens de chaque mot et montre qu’ils réfutent le terme, pas la chose.",
  "estrat": [
   {
    "t": "Ils rient en duo : «  Vous voyez ? Le grand Socrate ne sait même pas répondre à une question d’enfant.  »",
    "nombre": "le rire en duo",
    "schop": "ridiculiser au lieu de réfuter",
    "q": "Rire ne réfute rien. Où est la faille dans ce que je dis ?"
   },
   {
    "t": "Ils te harcèlent à tour de rôle sans te laisser penser : «  Réponds maintenant ! Oui ou non ! Vite !  »",
    "nombre": "le harcèlement à tour de rôle",
    "schop": "bousculer pour que tu ne distingues pas",
    "q": "Bousculer n’est pas argumenter. Laisse-moi le temps de distinguer les sens."
   },
   {
    "t": "«  Peu importe ce que tu répondras, tu tomberas quand même ; autant te rendre tout de suite.  »",
    "nombre": "le bluff des invincibles",
    "schop": "intimider par une fausse invincibilité",
    "q": "Que vous vous vantiez de gagner ne prouve pas que vous avez raison."
   }
  ],
  "opp": [
   {
    "t": "Ceux qui apprennent, sont-ce les sages ou les ignorants ? Si ce sont les sages, ils apprennent ce qu’ils savent déjà ; si ce sont les ignorants, ils apprennent sans rien comprendre. Donc apprendre est impossible.",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Sais-tu quelque chose ? Alors tu es un sage. Et celui qui sait, sait. Donc tu sais TOUT, et tu l’as toujours su.",
    "f": "equivoco",
    "peso": 2,
    "interes": "Les deux frères se font payer pour enseigner cet art : plus le piège éblouit, plus il y a d’élèves payants."
   },
   {
    "t": "As-tu un chien, et est-il père de chiots ? Alors il est père et il est à toi : c’est ton père. Et toi, tu es le frère des chiots.",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Tu veux que le jeune devienne sage, c’est-à-dire qu’il cesse d’être ce qu’il est ; tu veux qu’il cesse d’être : tu veux qu’il meure !",
    "f": "equivoco",
    "peso": 2
   },
   {
    "t": "Toute question se résout par oui ou non. Réponds seulement oui ou non et tu verras comme tu tomberas ; nuancer, c’est de la triche.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Tout à l’heure tu as dit une chose et maintenant une autre ; donc tu te contredis et tu as perdu, quoi que tu dises.",
    "f": "deformar",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Je distingue : «  apprendre  » signifie deux choses, acquérir un savoir nouveau et comprendre ce qu’on possède déjà. L’ignorant apprend au premier sens. L’équivoque dissipée, il n’y a plus de paradoxe.",
    "str": 3
   },
   {
    "t": "«  Savoir quelque chose  » n’est pas «  tout savoir  » : de ce qu’il sache une chose, il ne s’ensuit pas qu’il les sache toutes. Tu joues sur le mot «  savoir  ».",
    "str": 3
   },
   {
    "t": "«  Il est père  » et «  il est à moi  » sont vrais séparément, mais ne s’additionnent pas : le chien est père de ses chiots et à moi comme animal, pas mon père. Tu confonds deux sens du verbe «  être  ».",
    "str": 3
   },
   {
    "t": "Vouloir que quelqu’un devienne sage, ce n’est pas vouloir qu’il «  cesse d’être  » : c’est vouloir qu’il reste lui-même et qu’en plus il sache. Tu réfutes un mot, pas mon souhait.",
    "str": 2
   },
   {
    "t": "Seuls deux bonimenteurs de foire diraient une chose pareille ; je ne vais pas vous prêter la moindre attention.",
    "f": "persona"
   },
   {
    "t": "Ou bien vous admettez que votre jeu n’est que du bavardage, ou bien vous êtes des charlatans : choisissez.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "criton",
  "grupo": "socrates",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Socrate contre Criton : faut-il s'évader d'une condamnation injuste ?",
  "cpuLado": "L’ordinateur est Criton : un ami qui entre à l’aube dans la prison pour convaincre Socrate de s’enfuir ; il a de l’argent, des contacts et un plan.",
  "tuLado": "Tu es Socrate : la question n’est pas ce qu’on dira ni ce qui convient, mais si fuir est juste ; et on ne doit jamais commettre d’injustice.",
  "estrat": [
   {
    "t": "«  Tu me briseras le cœur ; si tu meurs, je perds un ami irremplaçable et personne ne croira que j’ai fait tout mon possible.  »",
    "nombre": "le chantage de l’ami",
    "schop": "faire pitié / culpabiliser",
    "q": "Ta peine compte pour moi, mais elle ne décide pas de ce qui est juste."
   },
   {
    "t": "«  Dépêche-toi, le bateau va arriver, c’est cette nuit ou jamais ; pas le temps de philosopher !  »",
    "nombre": "la précipitation",
    "schop": "bousculer pour que tu ne réfléchisses pas",
    "q": "La hâte n’est pas un argument ; justement parce que c’est grave, il faut y réfléchir."
   },
   {
    "t": "«  Tu vas rester là, tranquille, pendant que tes enfants deviennent orphelins ? Quelle sorte de père es-tu ?  »",
    "nombre": "le reproche au père",
    "schop": "culpabiliser au lieu d’argumenter",
    "q": "Insinuer que je suis un mauvais père ne répond pas à la question de savoir si s’évader est juste."
   }
  ],
  "opp": [
   {
    "t": "Si tu ne t’évades pas, les gens diront que nous, tes amis, avons été des radins et des lâches de ne pas avoir dépensé pour te sauver. Pense à notre réputation.",
    "f": "todos",
    "peso": 2,
    "interes": "Criton s’inquiète de sa propre réputation : il craint qu’on dise qu’il n’a pas voulu payer l’évasion."
   },
   {
    "t": "Pense à tes enfants : tu les laisses orphelins, sans éducation ni soutien. Les abandonner ainsi, c’est de l’égoïsme.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Ou tu t’évades et tu vis, ou tu restes et tu donnes la victoire à ceux qui t’ont injustement condamné : il n’y a pas d’autre issue.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Rester, c’est choisir la voie de la facilité ; n’importe qui ayant du cran aurait déjà fui.",
    "f": "persona",
    "fAlt": [
     "todos"
    ],
    "peso": 1
   },
   {
    "t": "Nous avons les moyens et des amis prêts à te faire sortir ; le risque pour nous, nous l’assumons de bon cœur.",
    "f": null
   },
   {
    "t": "Ta mort profite à ceux qui t’ont injustement condamné et blesse ceux qui t’aiment.",
    "f": null
   }
  ],
  "counters": [
   {
    "t": "Il ne faut pas se soucier de l’opinion de la majorité, mais de celui qui sait : pour la santé, nous suivons le médecin, pas la foule ; pour le juste, c’est pareil. La masse peut tuer, mais elle ne décide pas de ce qui est juste.",
    "str": 3
   },
   {
    "t": "La question n’est pas ce qu’on dira, mais si s’évader est juste ; et on ne doit jamais commettre d’injustice, pas même pour rendre un tort subi.",
    "str": 3
   },
   {
    "t": "Si chaque particulier annule les jugements qui lui déplaisent, aucune cité ne tient. En vivant ici, j’ai accepté d’obéir aux lois et j’ai pu partir si je n’étais pas d’accord : rompre ce pacte maintenant serait injuste.",
    "str": 3
   },
   {
    "t": "Mes enfants sont mieux élevés par un père qui ne rompt pas ses engagements : fuir leur apprendrait le contraire. Je leur laisse de bons amis et un bon exemple plutôt qu’un père fugitif.",
    "str": 2
   },
   {
    "t": "Seul un lâche comme toi, qui craint le qu’en-dira-t-on, me demande de fuir.",
    "f": "persona"
   },
   {
    "t": "Ou nous fuyons cette nuit même, ou tu m’abandonnes à la mort : choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-erasmo-lutero",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Érasme contre Luther (1524-1525) : avons-nous un libre arbitre ?",
  "cpuLado": "L’ordinateur est Luther : sans la grâce, la volonté est esclave du péché et le salut vient de Dieu seul.",
  "tuLado": "Tu es Érasme : l’être humain a une force propre, petite, qui coopère avec la grâce ; et dans ce qui est obscur, prudence.",
  "estrat": [
   {
    "t": "« Le Saint-Esprit n’est pas sceptique : toi, tu n’oses rien affirmer. »",
    "nombre": "la moquerie du sceptique",
    "schop": "ridiculiser au lieu de réfuter",
    "q": "Être prudent là où l’Écriture est obscure, ce n’est pas être sceptique. Réponds à ce que j’ai dit."
   },
   {
    "t": "« Tu écris comme un rhéteur élégant qui ne risque jamais rien. »",
    "nombre": "la pique contre l’humaniste",
    "schop": "ad hominem",
    "q": "Mon style ne décide pas si nous avons un libre arbitre."
   },
   {
    "t": "« Qui doute de cela n’est plus un bon chrétien. »",
    "nombre": "l’excommunication de poche",
    "schop": "ranger dans une catégorie détestable",
    "q": "Être en désaccord sur ce point ne me fait pas sortir de la foi. Dis-moi ce qui cloche dans mon raisonnement."
   }
  ],
  "opp": [
   {
    "t": "Sans la grâce, la volonté humaine est soumise au péché : elle ne peut pas choisir le bien par elle-même.",
    "f": null
   },
   {
    "t": "Si le salut dépendait en partie de notre effort, personne ne pourrait en être sûr et chacun finirait par se vanter de ses mérites devant Dieu.",
    "f": null
   },
   {
    "t": "Ou bien le salut est tout entier l’œuvre de Dieu, ou bien il est tout entier notre œuvre : il n’y a pas de juste milieu.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "D’après toi, l’être humain se sauve tout seul, par ses propres forces, et la grâce de Dieu est de trop.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Si tu concèdes un peu de libre arbitre, demain tout le monde voudra acheter le ciel avec des œuvres et des aumônes, comme avec les indulgences.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Augustin a déjà tranché la question contre Pélage : qui es-tu pour corriger un Père de l’Église ?",
    "f": "famoso",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si nous ne pouvions rien choisir, les commandements, les récompenses et les châtiments de l’Écriture n’auraient aucun sens, et Dieu punirait ce que nous ne pouvons pas éviter.",
    "str": 3
   },
   {
    "t": "Je ne dis pas que nous nous sauvons seuls : je dis que la volonté coopère avec la grâce, comme l’enfant que son père aide à faire les pas vers le fruit qu’il lui montre.",
    "str": 3
   },
   {
    "t": "Que le salut ne soit pas seulement notre œuvre n’oblige pas à dire que nous ne faisons rien : entre le tout et le rien, il y a place pour coopérer.",
    "str": 2
   },
   {
    "t": "Là où l’Écriture reste obscure, mieux vaut ne pas faire d’affirmations tranchées qui divisent les chrétiens.",
    "str": 2
   },
   {
    "t": "Ou tu acceptes le libre arbitre, ou tu devras reconnaître que Dieu est un tyran cruel : choisis.",
    "f": "dos"
   },
   {
    "t": "Tu parles ainsi parce que tu es un moine rebelle qui ne veut que briser l’Église.",
    "f": "persona"
   }
  ]
 },
 {
  "id": "pol-leibniz-newton-clarke",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Leibniz contre Newton et Clarke (1715-1716) : qu’est-ce que l’espace ?",
  "cpuLado": "L’ordinateur est Clarke, porte-parole de Newton : l’espace est absolu et réel, et Dieu gouverne le monde sans cesse.",
  "tuLado": "Tu es Leibniz : l’espace n’est que l’ordre des choses qui coexistent, et un Dieu parfait n’a pas besoin de retoucher son œuvre.",
  "estrat": [
   {
    "t": "« La Royal Society a déjà statué que le calcul est de Newton ; pourquoi faudrait-il te croire maintenant ? »",
    "nombre": "le tribunal juge et partie",
    "schop": "invoquer une autorité intéressée",
    "q": "Ce rapport, c’est en bonne partie Newton lui-même qui l’a rédigé, et en plus il ne traite pas de l’espace. Revenons au sujet."
   },
   {
    "t": "« Ton Dieu horloger sent le matérialisme : c’est comme ça qu’on commence, et on finit sans Dieu. »",
    "nombre": "l’étiquette dangereuse",
    "schop": "ranger dans une catégorie détestable",
    "q": "L’appeler matérialisme ne le réfute pas. Qu’est-ce qui cloche dans mon argument ?"
   },
   {
    "t": "« Un philosophe des cours allemandes ne va pas apprendre la physique à l’Angleterre. »",
    "nombre": "le mépris national",
    "schop": "ad hominem",
    "q": "D’où je viens ne décide pas de ce qu’est l’espace."
   }
  ],
  "opp": [
   {
    "t": "L’espace est réel et indépendant des corps : même s’il n’y avait rien, il serait toujours là.",
    "f": null
   },
   {
    "t": "Dans la physique de Newton, il y a des effets, comme les forces qui apparaissent quand on fait tourner un seau d’eau, qui semblent exiger un espace absolu.",
    "f": null
   },
   {
    "t": "Autrement dit, d’après toi, Dieu a fabriqué le monde et s’en est désintéressé : nous n’avons besoin de lui pour rien.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Si le monde fonctionne tout seul, comme une horloge, demain plus personne ne croira en Dieu : ta philosophie mène à l’athéisme.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Newton est le plus grand savant de notre temps et il pense comme moi ; c’est toi qui vas le contredire ?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Dans toute l’Angleterre, on accepte déjà la physique de Newton.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si l’espace était absolu, Dieu aurait pu placer l’univers entier quelques mètres plus loin sans que rien ne change, et il n’aurait aucune raison de choisir. Or rien n’arrive sans raison suffisante.",
    "str": 3
   },
   {
    "t": "L’espace est un ordre de choses qui coexistent, comme le temps est un ordre de successions : sans choses, il ne reste rien à ordonner.",
    "str": 3
   },
   {
    "t": "Si Dieu devait remonter sa machine et la réparer de temps en temps, ce serait un horloger maladroit. Un Dieu parfait fait une œuvre qui n’a pas besoin de réparations.",
    "str": 2
   },
   {
    "t": "Je ne dis pas que Dieu se retire : il conserve le monde à tout moment. Ce que je nie, c’est qu’il doive le corriger comme un mauvais artisan.",
    "str": 2
   },
   {
    "t": "Ton Newton est un plagiaire de mon calcul ; tout est dit.",
    "f": "persona"
   },
   {
    "t": "Ou l’espace n’est qu’une relation, ou tu devras dire que Dieu est un être étendu, comme un corps : choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-voltaire-rousseau-lisboa",
  "grupo": "moderna",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Voltaire contre Rousseau après le tremblement de terre de Lisbonne (1755) : « tout est bien » ?",
  "cpuLado": "L’ordinateur est Voltaire : dire « tout est bien » devant des milliers de morts innocents, c’est insulter les victimes.",
  "tuLado": "Tu es Rousseau : la Providence n’est pas la coupable ; beaucoup de nos maux, c’est nous qui les causons.",
  "estrat": [
   {
    "t": "« Ah, l’optimiste ! Un vrai docteur Pangloss : tout va à merveille dans le meilleur des mondes possibles. »",
    "nombre": "la caricature",
    "schop": "ridiculiser au lieu de réfuter",
    "q": "Une caricature ne répond pas à ce que j’ai dit sur la façon dont Lisbonne était construite."
   },
   {
    "t": "« Vous, qui avez écrit contre les sciences et les arts, vous prétendez me donner des leçons ? »",
    "nombre": "la pique personnelle",
    "schop": "ad hominem",
    "q": "Ce que j’ai pu écrire avant ne décide pas qui a raison sur Lisbonne."
   },
   {
    "t": "« Même dans les salons de Paris, on se moque déjà de l’optimisme. »",
    "nombre": "le rire du public",
    "schop": "en appeler au public plutôt qu’aux raisons",
    "q": "Que les gens rient, ce n’est pas un argument."
   }
  ],
  "opp": [
   {
    "t": "Un enfant écrasé dans les bras de sa mère n’a rien fait de mal : aucune théorie sur l’ordre de l’univers ne convaincra celui qui souffre que sa douleur était nécessaire.",
    "f": null
   },
   {
    "t": "Le mal est réel et la raison ne sait pas l’expliquer : l’honnêteté, c’est de le reconnaître au lieu de le déguiser.",
    "f": null
   },
   {
    "t": "D’après vous, les Lisboètes l’ont bien cherché et méritaient de mourir.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Imaginez-vous sous les décombres, entendant crier vos enfants : croyez-vous encore à la Providence ?",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Ou vous acceptez que tout est bien, ou vous reconnaissez que le monde est un chaos sans aucun ordre : choisissez.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Regardez Lisbonne : cela suffit pour savoir que dans la nature il n’y a aucun ordre.",
    "f": "pocos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Le tremblement de terre est naturel, mais le désastre ne l’est pas tout à fait : la nature n’avait point rassemblé là vingt mille maisons de six à sept étages.",
    "str": 3
   },
   {
    "t": "Si les habitants avaient vécu plus dispersés et dans des maisons plus basses, il y aurait eu beaucoup moins de morts : le nombre de victimes dépend aussi de notre façon de construire et de vivre.",
    "str": 3
   },
   {
    "t": "Beaucoup sont morts pour être retournés chercher leurs habits, leurs papiers ou leur argent : cela aussi est notre œuvre, pas celle de la nature.",
    "str": 2
   },
   {
    "t": "Votre poème ôte à celui qui souffre le seul espoir qui lui reste. Je préfère une consolation raisonnable à un désespoir qui n’aide personne.",
    "str": 2
   },
   {
    "t": "Vous vivez riche et à l’aise dans votre château : que savez-vous de la souffrance ?",
    "f": "persona"
   },
   {
    "t": "Ou vous croyez à la Providence, ou vous êtes un athée : il n’y a pas d’autre choix.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-sartre-camus",
  "grupo": "contemporanea",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Sartre contre Camus (1952) : peut-on justifier la violence au nom de l’histoire ?",
  "cpuLado": "L’ordinateur est Sartre : personne n’est en dehors de l’histoire, et critiquer l’URSS sans nuances fait le jeu de la droite.",
  "tuLado": "Tu es Camus : la révolte contre l’injustice a des limites ; aucune fin future ne justifie les camps.",
  "estrat": [
   {
    "t": "« Vous arrivez partout avec un piédestal portatif. »",
    "nombre": "la moquerie du piédestal",
    "schop": "ridiculiser la personne",
    "q": "Mon caractère ne répond pas à ce que j’ai dit sur les camps."
   },
   {
    "t": "« Vous ne connaissez pas la philosophie : vous n’avez lu ni Hegel ni Marx comme il faut. »",
    "nombre": "l’accusation d’incompétence",
    "schop": "ad hominem",
    "q": "Si je les lis mal, dis-moi en quoi. Sinon, réponds à l’argument."
   },
   {
    "t": "« Continuez comme ça et vous finirez dans le camp des bourgeois. »",
    "nombre": "l’étiquette de l’ennemi",
    "schop": "ranger dans une catégorie détestable",
    "q": "Me ranger dans un camp ne réfute pas ce que je dis."
   }
  ],
  "opp": [
   {
    "t": "Personne n’est en dehors de l’histoire : se taire ou rester pur a aussi des conséquences, et cela favorise d’ordinaire ceux qui commandent déjà.",
    "f": null
   },
   {
    "t": "On ne peut pas juger l’histoire de l’extérieur, avec des principes purs : il faut s’y engager, même si l’on se salit les mains.",
    "f": null
   },
   {
    "t": "D’après vous, comme la révolution peut mal tourner, le mieux est de ne rien faire et de laisser les ouvriers comme ils sont.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Ou vous êtes avec les ouvriers et avec le Parti, ou vous êtes avec la bourgeoisie : il n’y a pas de place au milieu.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Chacune de vos paroles contre les camps, la droite s’en servira pour attaquer les travailleurs.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Vous parlez de morale du haut de votre succès d’écrivain ; les ouvriers n’ont pas de temps pour ces luxes.",
    "f": "persona",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si une fin future justifie de tuer aujourd’hui, n’importe quel crime peut se justifier. C’est pourquoi il faut nommer les camps, quel que soit celui qui les maintient.",
    "str": 3
   },
   {
    "t": "« Je me révolte, donc nous sommes » : la révolte naît en défendant quelque chose de commun à tous, et c’est pourquoi elle ne peut se retourner contre les autres sans se trahir.",
    "str": 3
   },
   {
    "t": "Je ne dis pas qu’il ne faut pas s’engager : je dis que l’engagement a des limites, et la première est de ne pas accepter le meurtre planifié.",
    "str": 2
   },
   {
    "t": "Taire une injustice parce que c’est ton propre camp qui la commet, ce n’est pas s’engager dans l’histoire : c’est renoncer à la juger.",
    "str": 2
   },
   {
    "t": "Vous défendez l’URSS parce que cela arrange votre revue.",
    "f": "persona"
   },
   {
    "t": "Ou vous condamnez tous les camps, ou vous êtes complice d’assassins : choisissez.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-maniqueos",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustin contre les manichéens (Hippone, 392) : d’où vient le mal ?",
  "cpuLado": "L’ordinateur est Fortunat, prêtre manichéen : il y a deux substances éternelles en lutte, la lumière et les ténèbres.",
  "tuLado": "Tu es Augustin : il n’y a qu’un seul Dieu bon, tout ce qu’il a fait est bon, et le mal naît de notre libre volonté.",
  "estrat": [
   {
    "t": "« Tu as été des nôtres pendant neuf ans : de quel droit nous critiques-tu maintenant ? »",
    "nombre": "le reproche du passé",
    "schop": "ad hominem",
    "q": "Avoir pensé autre chose avant ne décide pas qui a raison maintenant. Reviens à l’argument."
   },
   {
    "t": "« Ici, tout le monde sait que nous, les manichéens, sommes des gens honnêtes ; toi, tu ne fais que répéter des calomnies. »",
    "nombre": "la diversion vers la réputation",
    "schop": "changer de sujet",
    "q": "Je ne discute pas de vos mœurs, mais de l’origine du mal."
   },
   {
    "t": "« Ce que tu dis là, c’est de la philosophie de Grecs, pas la foi du Christ. »",
    "nombre": "l’étiquette suspecte",
    "schop": "ranger dans une catégorie détestable",
    "q": "L’appeler « de Grecs » ne le réfute pas. Qu’est-ce qu’il y a de faux ?"
   }
  ],
  "opp": [
   {
    "t": "Nous sentons tous en nous une lutte entre deux forces qui tirent en sens contraires : cela montre qu’il y a deux natures.",
    "f": null
   },
   {
    "t": "Si tout vient d’un Dieu bon et tout-puissant, d’où sort tant de mal dont personne ne veut ?",
    "f": null
   },
   {
    "t": "Ou le mal est une substance aussi réelle que le bien, ou il n’existe pas et toute la souffrance est une illusion : choisis.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "D’après toi, Dieu est l’auteur du mal, puisque c’est lui qui a tout fait.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Mani a été envoyé comme le Paraclet promis par le Christ : c’est toi qui vas le corriger ?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "Si tu nies le principe des ténèbres, tu porteras seul la faute de tous tes péchés : c’est ce que tu veux ?",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si rien ne peut nuire à Dieu, pourquoi enverrait-il une partie de lui-même souffrir dans ce monde ? Et si quelque chose pouvait lui nuire, il ne serait pas Dieu.",
    "str": 3
   },
   {
    "t": "Si le mal n’est pas notre faute, mais celle d’une autre nature, cela n’a aucun sens ni de se repentir, ni de punir, ni de récompenser.",
    "str": 3
   },
   {
    "t": "Dieu a fait toutes les choses bonnes ; la seule chose qu’on appelle mal est notre péché volontaire, qui n’est pas une substance, mais un vouloir tordu.",
    "str": 2
   },
   {
    "t": "La lutte que nous sentons en nous ne prouve pas deux natures : elle prouve une volonté divisée, qui veut et n’arrive pas tout à fait à vouloir.",
    "str": 2
   },
   {
    "t": "Vous, les manichéens, vous êtes des hypocrites qui prêchez la pureté et vivez comme tout le monde.",
    "f": "persona"
   },
   {
    "t": "Ou tu acceptes un seul Dieu, ou tu adores le démon : il n’y a rien d’autre.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-jeronimo",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustin contre Jérôme (394-405) : peut-on mentir pour une bonne cause ?",
  "cpuLado": "L’ordinateur est Jérôme : la réprimande de Paul à Pierre fut un accommodement prudent, non un mensonge.",
  "tuLado": "Tu es Augustin : si l’on admet un seul mensonge « utile » dans l’Écriture, on ne peut plus se fier à aucun passage.",
  "estrat": [
   {
    "t": "« Un jeune homme ne doit pas provoquer un vieillard sur le terrain des Écritures : le bœuf fatigué frappe plus fort du pied. »",
    "nombre": "le poids de l’âge",
    "schop": "se prévaloir de sa propre autorité",
    "q": "L’âge ne décide pas si un texte ment. Réponds-moi là-dessus."
   },
   {
    "t": "« Ta lettre a fait le tour de la moitié de l’Italie avant de m’arriver : tu cherches la gloire à mes dépens ? »",
    "nombre": "le soupçon sur les intentions",
    "schop": "ad hominem",
    "q": "Mes intentions ne changent pas l’argument. Y a-t-il eu mensonge, oui ou non ?"
   },
   {
    "t": "« Tu sais l’hébreu, toi ? Alors ne m’apprends pas à lire la Bible. »",
    "nombre": "le mépris de l’expert",
    "schop": "se prévaloir de sa propre autorité",
    "q": "Je ne discute pas ton hébreu, mais la question de savoir si l’on peut accepter un mensonge utile."
   }
  ],
  "opp": [
   {
    "t": "Pierre et Paul, par prudence, ont fait comme s’ils observaient la Loi pour ne pas scandaliser les Juifs : s’adapter, ce n’est pas mentir.",
    "f": null
   },
   {
    "t": "Il faut lire les textes avec les meilleurs interprètes et dans leur langue originale, pas avec des traductions de traductions.",
    "f": null
   },
   {
    "t": "Origène et les grands commentateurs l’ont lu ainsi avant moi : tu vas tous les corriger ?",
    "f": "famoso",
    "peso": 2
   },
   {
    "t": "D’après toi, alors, les apôtres se disputaient comme des enfants et l’Église a commencé par un scandale.",
    "f": "deformar",
    "peso": 2
   },
   {
    "t": "Ou tu acceptes ma lecture, ou tu donnes raison aux païens comme Porphyre, qui se moquent des apôtres.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "On l’a toujours lu ainsi dans les écoles d’Alexandrie.",
    "f": "siempre",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si l’on admet une seule fois un mensonge utile dans une autorité aussi haute, n’importe qui pourra appeler « utile » la phrase qui le dérange : il ne restera aucun passage sûr.",
    "str": 3
   },
   {
    "t": "L’autorité d’un texte dépend du fait qu’il ne mente jamais ; c’est pourquoi Paul a dû réprimander Pierre pour de vrai, parce que Pierre avait mal agi.",
    "str": 3
   },
   {
    "t": "Taire quelque chose par prudence est une chose, affirmer ce qui est faux en est une autre : la première peut être sage, la seconde, c’est mentir.",
    "str": 2
   },
   {
    "t": "Que les païens se moquent n’est pas une raison pour changer le sens du texte : la vérité ne s’ajuste pas à la peur des moqueries.",
    "str": 2
   },
   {
    "t": "Tu défends cela parce que tu es un vieillard orgueilleux qui ne supporte pas qu’on le corrige.",
    "f": "persona"
   },
   {
    "t": "Ou tu me donnes raison, ou tu es ennemi de la vérité de l’Écriture : choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-petiliano",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustin contre les donatistes (vers 400-411) : un sacrement est-il valide s’il est donné par un mauvais prêtre ?",
  "cpuLado": "L’ordinateur est Pétilien, évêque donatiste : un ministre souillé ne peut purifier personne ; la véritable Église est celle des purs.",
  "tuLado": "Tu es Augustin : celui qui baptise vraiment, c’est le Christ ; le prêtre n’est qu’un instrument, et le sacrement est valide même s’il est indigne.",
  "estrat": [
   {
    "t": "« Tu as été prêtre des manichéens : qui es-tu pour parler de sacrements ? »",
    "nombre": "la fausse accusation",
    "schop": "ad hominem",
    "q": "Je n’ai jamais été prêtre manichéen, et même si je l’avais été, cela ne répond pas à l’argument."
   },
   {
    "t": "« Tu es un dialecticien, un artiste de la tromperie : avec des mots tordus, tu démontres tout. »",
    "nombre": "le mépris de la logique",
    "schop": "discréditer la méthode",
    "q": "Raisonner avec soin, ce n’est pas tromper. Montre où est l’erreur."
   },
   {
    "t": "« Votre Église a pactisé avec les traîtres : vous n’avez aucune autorité pour parler. »",
    "nombre": "la disqualification du groupe",
    "schop": "ad hominem",
    "q": "Ce qu’ont pu faire d’autres ne décide pas si le sacrement dépend du ministre."
   }
  ],
  "opp": [
   {
    "t": "Ce qui compte, c’est la conscience de celui qui donne le sacrement : une conscience souillée ne peut laver celle de celui qui le reçoit.",
    "f": null
   },
   {
    "t": "Une Église qui accueille comme pasteurs ceux qui ont trahi la foi pour se sauver perd sa sainteté.",
    "f": null
   },
   {
    "t": "D’après toi, peu importe que le prêtre soit un criminel : la façon dont vivent les pasteurs n’a aucune importance.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Ou l’Église est pure, ou elle est la synagogue du diable : il n’y a pas de juste milieu.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Les martyrs sont morts pour ne pas trahir : si tu acceptes les traîtres, tu craches sur leur sang.",
    "f": "pena",
    "peso": 2
   },
   {
    "t": "Dans toute la Numidie, le peuple est avec nous.",
    "f": "todos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si le baptême dépendait de la conscience du prêtre, personne ne pourrait être sûr d’être baptisé, car la conscience d’autrui ne se voit pas.",
    "str": 3
   },
   {
    "t": "Celui qui baptise vraiment, c’est le Christ : le ministre, bon ou mauvais, ne fait que prêter ses mains. C’est pourquoi on place son espérance dans le Christ, non dans un homme.",
    "str": 3
   },
   {
    "t": "Je ne dis pas que la façon dont vivent les pasteurs est indifférente : je dis que leur péché les condamne, eux, et n’annule pas ce que le Christ donne par leurs mains.",
    "str": 2
   },
   {
    "t": "Si seuls les sacrements des purs sont valides, vous devriez refaire les vôtres chaque fois qu’on découvre un péché chez l’un de vos évêques.",
    "str": 2
   },
   {
    "t": "Vous, les donatistes, vous êtes des fanatiques violents, donc vous n’avez pas raison.",
    "f": "persona"
   },
   {
    "t": "Ou vous revenez à l’Église catholique, ou vous êtes des hérétiques condamnés : choisissez.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-volusiano",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustin contre les païens (408-412) : le christianisme fait-il de moins bons citoyens ?",
  "cpuLado": "L’ordinateur est Volusien, un païen cultivé : pardonner à l’ennemi et tendre l’autre joue ne convient pas à un État qui doit se défendre.",
  "tuLado": "Tu es Augustin : la doctrine chrétienne n’interdit pas de servir la patrie ; si tous vivaient selon elle, l’État serait en meilleure santé.",
  "estrat": [
   {
    "t": "« Depuis que les empereurs sont chrétiens, Rome est tombée aux mains d’Alaric. Faut-il en dire plus ? »",
    "nombre": "la cause de la catastrophe",
    "schop": "insinuer sans argumenter",
    "q": "Qu’une chose vienne après une autre ne prouve pas qu’elle en soit la cause. Continuons avec les raisons."
   },
   {
    "t": "« Toi, un Africain de province, tu vas apprendre à un Romain ce qu’est la patrie ? »",
    "nombre": "le mépris de l’origine",
    "schop": "ad hominem",
    "q": "Mon origine ne décide pas si l’Évangile nuit à l’État."
   },
   {
    "t": "« Cicéron l’a déjà dit : le premier devoir, c’est la patrie. Tu oses contredire Cicéron ? »",
    "nombre": "le grand nom",
    "schop": "faire appel à l’autorité",
    "q": "Je respecte Cicéron, mais la question est de savoir si la doctrine chrétienne détruit ce devoir, et elle ne le fait pas."
   }
  ],
  "opp": [
   {
    "t": "Une morale qui ordonne de ne pas rendre le mal pour le mal laisse la cité sans défense face à celui qui la pille.",
    "f": null
   },
   {
    "t": "Une religion se juge aussi à ce qu’elle fait de la vie publique, pas seulement à ce qu’elle promet pour après la mort.",
    "f": null
   },
   {
    "t": "Rome a été pillée après avoir abandonné ses dieux : les dieux l’ont punie.",
    "f": "causa",
    "peso": 3
   },
   {
    "t": "D’après toi, les soldats devraient jeter leurs armes et se laisser tuer.",
    "f": "deformar",
    "peso": 2
   },
   {
    "t": "Nos ancêtres ont toujours honoré les dieux de Rome, et c’est ainsi qu’elle est devenue grande.",
    "f": "siempre",
    "peso": 2
   },
   {
    "t": "Si tu continues à prêcher cela, demain il ne restera personne pour défendre ton Hippone contre les barbares.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Que ceux qui disent que la doctrine du Christ est contraire à l’État donnent une armée comme celle que cette doctrine demande : des soldats qui n’abusent pas, ne volent pas et se contentent de leur solde.",
    "str": 3
   },
   {
    "t": "Les maux de Rome n’ont pas commencé avec les chrétiens : ses propres auteurs, comme Salluste, déploraient déjà la corruption des mœurs.",
    "str": 3
   },
   {
    "t": "L’Évangile n’ordonne pas aux soldats de déposer les armes, mais de ne pas en abuser : Jean-Baptiste leur a dit de se contenter de leur solde, non de déserter.",
    "str": 2
   },
   {
    "t": "Tendre l’autre joue est une disposition du cœur pour ne pas se venger, non une loi qui obligerait un État à ne pas punir les criminels.",
    "str": 2
   },
   {
    "t": "Vous, les païens, vous êtes des superstitieux qui adorez des statues, qu’est-ce que vous en savez ?",
    "f": "persona"
   },
   {
    "t": "Ou tu te fais chrétien, ou tu resteras coupable de la ruine de Rome.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-pelagio",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Pélage contre Augustin (411-418) : pouvons-nous faire le bien par nos propres forces ?",
  "cpuLado": "L’ordinateur est Augustin : depuis Adam, nous naissons blessés ; sans la grâce de Dieu, la volonté n’arrive ni à vouloir ni à faire le bien.",
  "tuLado": "Tu es Pélage : Dieu nous a faits capables de ne pas pécher ; si Dieu ordonne quelque chose, c’est que nous pouvons l’accomplir.",
  "estrat": [
   {
    "t": "« À Diospolis, tu as condamné en paroles ce que tu continues à défendre dans tes écrits. »",
    "nombre": "l’accusation de duplicité",
    "schop": "ad hominem",
    "q": "Si je me contredis, montre-le dans l’argument. Ce qui a pu se dire dans un concile ne répond pas à la question."
   },
   {
    "t": "« Tu es un moine orgueilleux qui se croit capable de se sauver tout seul. »",
    "nombre": "la pique sur le caractère",
    "schop": "ad hominem",
    "q": "Mon caractère ne décide pas si la volonté peut faire le bien."
   },
   {
    "t": "« Les conciles d’Afrique et l’évêque de Rome t’ont condamné : que veux-tu de plus ? »",
    "nombre": "le poids de la condamnation",
    "schop": "faire appel à l’autorité",
    "q": "Une condamnation n’est pas une raison. Qu’y a-t-il de faux dans ce que je dis ?"
   }
  ],
  "opp": [
   {
    "t": "Nous savons souvent ce qui est bien et pourtant nous ne le faisons pas : la volonté est divisée et a besoin d’être guérie.",
    "f": null
   },
   {
    "t": "Si nous pouvions être bons par nos seules forces, le Christ serait venu seulement pour donner l’exemple, non pour sauver.",
    "f": null
   },
   {
    "t": "D’après toi, l’être humain n’a besoin de Dieu pour rien.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Ou tout est grâce de Dieu, ou tout est mérite de l’être humain : il n’y a pas de juste milieu.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "L’apôtre Paul l’a déjà dit, et celui qui ne l’accepte pas n’est pas chrétien.",
    "f": "notrue",
    "peso": 2
   },
   {
    "t": "Si on t’écoute, les gens se rempliront d’orgueil et plus personne ne priera.",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si nous ne pouvons pas éviter le péché, nous n’en sommes pas responsables, et cela n’a aucun sens d’exiger quoi que ce soit de nous.",
    "str": 3
   },
   {
    "t": "Si Dieu ordonne quelque chose, c’est que nous pouvons l’accomplir : ordonner l’impossible serait injuste.",
    "str": 3
   },
   {
    "t": "La grâce, c’est la capacité que Dieu nous a donnée en nous créant, avec la loi et l’exemple du Christ : je ne nie pas la grâce, je dis en quoi elle consiste.",
    "str": 2
   },
   {
    "t": "Dire que sans la grâce nous ne faisons pas le bien donne une excuse parfaite à celui qui ne veut pas faire d’effort.",
    "str": 2
   },
   {
    "t": "Toi, au fond, tu es toujours manichéen : c’est pour cela que tu vois le mal partout.",
    "f": "persona"
   },
   {
    "t": "Ou l’être humain est entièrement libre, ou il est une marionnette de Dieu : choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-julian",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Julien d’Éclane contre Augustin (419-430) : un nouveau-né peut-il porter le péché d’un autre ?",
  "cpuLado": "L’ordinateur est Augustin : nous naissons tous avec le péché originel hérité d’Adam, et c’est pourquoi on baptise aussi les enfants.",
  "tuLado": "Tu es Julien d’Éclane : il n’y a pas de péché sans volonté propre, et un Dieu juste ne peut rendre personne coupable du péché d’un autre.",
  "estrat": [
   {
    "t": "« Grand protecteur des enfants ! Et tu les laisses sans baptême ? »",
    "nombre": "l’ironie",
    "schop": "ridiculiser au lieu de réfuter",
    "q": "L’ironie n’est pas un argument. Comment celui qui n’a rien voulu peut-il être coupable ?"
   },
   {
    "t": "« Tu es un évêque déposé et exilé : ton opinion ne compte pas. »",
    "nombre": "la disqualification",
    "schop": "ad hominem",
    "q": "Mon exil ne décide pas s’il y a péché sans volonté."
   },
   {
    "t": "« Tu défends la même chose que Pélage, et Pélage est déjà condamné. »",
    "nombre": "la culpabilité par association",
    "schop": "ranger dans une catégorie détestable",
    "q": "Être d’accord avec quelqu’un de condamné ne prouve pas que je me trompe. Réponds à l’argument."
   }
  ],
  "opp": [
   {
    "t": "Tous, dès le commencement, nous sommes enclins au mal et subissons la douleur, l’ignorance et la mort sans l’avoir choisi : cela demande une explication.",
    "f": null
   },
   {
    "t": "Si les enfants n’avaient rien dont être sauvés, le Christ ne serait pas le sauveur de tous.",
    "f": null
   },
   {
    "t": "D’après toi, l’être humain naît parfait et n’a pas besoin du Christ.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "L’Église baptise les enfants depuis toujours pour la rémission des péchés : donc ils ont un péché.",
    "f": "siempre",
    "peso": 2
   },
   {
    "t": "Si nous t’écoutons, les parents cesseront de baptiser leurs enfants et ceux-ci seront perdus.",
    "f": "miedo",
    "peso": 2
   },
   {
    "t": "Ou tu acceptes le péché originel, ou tu nies l’Écriture tout entière.",
    "f": "dos",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Rendre quelqu’un coupable de ce qu’il n’a pas fait, c’est la définition même de l’injustice, et on ne peut pas l’attribuer à Dieu.",
    "str": 3
   },
   {
    "t": "Il n’y a pas de péché dans l’être humain s’il n’y a aucune part de volonté propre ou d’assentiment, et un nouveau-né n’a encore rien voulu.",
    "str": 3
   },
   {
    "t": "Le désir sexuel est une force naturelle créée par Dieu, bonne si on en use avec mesure : ce n’est pas la trace d’un péché.",
    "str": 2
   },
   {
    "t": "Si la nature humaine est mauvaise dès la naissance, cela ressemble trop au principe mauvais des manichéens.",
    "str": 2
   },
   {
    "t": "Tu n’es rien de plus que l’Aristote des Puniques, un rhéteur africain.",
    "f": "persona"
   },
   {
    "t": "Ou tu me donnes raison, ou tu rends Dieu coupable d’un crime : choisis.",
    "f": "dos"
   }
  ]
 },
 {
  "id": "pol-agustin-maximino",
  "grupo": "agustin",
  "nivel": [
   "fil",
   "hf"
  ],
  "claim": "Augustin contre Maximin (vers 427-428) : le Fils est-il égal au Père ?",
  "cpuLado": "L’ordinateur est Maximin, évêque arien : seul le Père est Dieu sans origine ; le Fils est Dieu, mais engendré et subordonné à lui.",
  "tuLado": "Tu es Augustin : le Père, le Fils et le Saint-Esprit sont chacun Dieu, avec la même puissance, et tous trois ensemble sont un seul Dieu.",
  "estrat": [
   {
    "t": "« Tu parles sous la protection du pouvoir des empereurs : comme ça, n’importe qui gagne un débat. »",
    "nombre": "le soupçon d’avantage",
    "schop": "ad hominem",
    "q": "Qui protège qui ne décide pas de ce que dit l’Écriture. Reviens à l’argument."
   },
   {
    "t": "(Il parle et parle sans répondre, jusqu’à épuiser le temps.)",
    "nombre": "faire passer le temps",
    "schop": "détourner et faire durer",
    "q": "Allonger le discours ne répond pas à la question. Le Fils est-il égal au Père, oui ou non ?"
   },
   {
    "t": "« Tu es un vieillard de soixante-dix ans accroché à des formules. »",
    "nombre": "la pique sur l’âge",
    "schop": "ad hominem",
    "q": "Mon âge ne change pas l’argument."
   }
  ],
  "opp": [
   {
    "t": "Un fils procède de son père, et ce qui a son origine dans un autre ne lui est pas égal.",
    "f": null
   },
   {
    "t": "L’Écriture montre le Fils envoyé par le Père et lui obéissant : lue au pied de la lettre, elle enseigne la subordination.",
    "f": null
   },
   {
    "t": "Trois cent trente évêques ont signé à Rimini ce que je défends.",
    "f": "todos",
    "peso": 2
   },
   {
    "t": "D’après toi, le Père et le Fils sont la même personne déguisée.",
    "f": "deformar",
    "peso": 3
   },
   {
    "t": "Ou le Fils est inférieur au Père, ou il y a deux dieux : il n’y a pas d’autre issue.",
    "f": "dos",
    "peso": 2
   },
   {
    "t": "Les Goths, qui défendent Rome, croient comme moi : tu vas t’opposer à eux ?",
    "f": "miedo",
    "peso": 1
   }
  ],
  "counters": [
   {
    "t": "Si le Père est Dieu et que le Fils est aussi Dieu, mais autre et inférieur, alors vous adorez deux dieux ; et s’il n’y a qu’un seul Dieu, vous n’adorez pas le Christ.",
    "str": 3
   },
   {
    "t": "« Écoute, Israël, le Seigneur ton Dieu est un » : le Père est Dieu, le Fils est Dieu, le Saint-Esprit est Dieu, et la Trinité elle-même est un seul Dieu.",
    "str": 3
   },
   {
    "t": "Que le Fils procède du Père ne le rend pas inférieur : la lumière qui sort d’une lampe est autant lumière que la lampe.",
    "str": 2
   },
   {
    "t": "Je ne dis pas qu’ils sont la même personne : ils sont trois, distincts entre eux, mais d’une seule puissance et d’une seule nature.",
    "str": 2
   },
   {
    "t": "Vous, les ariens, vous êtes des barbares qui ne comprenez rien.",
    "f": "persona"
   },
   {
    "t": "Ou tu acceptes Nicée, ou tu es hors de l’Église : choisis.",
    "f": "dos"
   }
  ]
 }
];
