// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/pistas_uhs.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const PISTAS = [
 {
  "id": "ipc-falacias",
  "subject": "ipc",
  "tema": "Les sophismes",
  "unidad": "ipc-falacias",
  "materia": "Pensée critique · 2e ESO",
  "titulo": "Les sophismes, un par un",
  "lede": "Cinq pièges fréquents. Chaque indice est une marche : d'abord les bases, puis en quoi consiste chaque sophisme. Ne demande que ceux dont tu as besoin.",
  "ciclos": [
   {
    "fase": "Sophisme 1 · L'attaque contre la personne",
    "etiqueta": "Ad hominem",
    "pregunta": "En quoi consiste le sophisme de l'attaque contre la personne (<em>ad hominem</em>) ?",
    "intro": [
     "Réfléchis d'abord par toi-même. Demande les indices un par un : chacun te rapproche d'un pas."
    ],
    "pistas": [
     "Rappelle-toi les bases, pour t'ancrer : un sophisme est une manière d'argumenter capable de convaincre, mais qui manque de rigueur (de bonnes raisons).",
     "Ce sophisme permet à celui qui l'utilise d'échapper à l'argument de l'autre sans avoir à le réfuter.",
     "Comment s'y prend-il ? Au lieu de répondre à ce qui a été dit, il parle de <strong>celui</strong> qui le dit : comment il est, ce qu'il a fait, d'où il vient.",
     "C'est comme répondre « ne l'écoute pas » au lieu de « ce que tu dis est faux parce que… » : on remplace l'idée par la personne."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui définit l'attaque contre la personne ?",
     "opciones": [
      [
       "Répondre à celui qui parle (comment il est ou ce qu'il a fait) au lieu de ce qu'il dit.",
       true
      ],
      [
       "Déformer l'idée de l'autre pour réfuter une version plus facile.",
       false,
       "C'est un autre piège (l'homme de paille) : là, on n'attaque pas la personne, on change son idée."
      ],
      [
       "Dire un mensonge exprès sur le sujet.",
       false,
       "Un sophisme, ce n'est pas mentir : c'est mal raisonner. Ici, la faute est de tirer sur la personne."
      ],
      [
       "Demander des preuves de ce qui est affirmé.",
       false,
       "Demander des preuves est raisonnable : ce n'est pas un sophisme."
      ]
     ],
     "ok": "Exact : on tire sur la personne, pas sur l'idée.",
     "mal": "Fais attention : répond-on à l'idée, ou parle-t-on de celui qui la dit ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Une réponse qui ne répond pas",
      "definicion": [
       "— On devrait moins utiliser le portable en classe.",
       "— Toi ? Tu es le premier à le regarder en cachette."
      ],
      "parrafos": [
       "La réponse ne dit rien sur le portable en classe : elle ne fait que désigner celui qui parle."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce un sophisme ?",
       "opciones": [
        [
         "Parce qu'il attaque la personne et laisse l'idée sans réponse.",
         true
        ],
        [
         "Parce que ce qu'il dit est un mensonge.",
         false,
         "Il peut être vrai que cette personne regarde son portable ; cela ne répond quand même pas à l'idée."
        ],
        [
         "Parce qu'il n'apporte pas de données.",
         false,
         "Le problème, ce ne sont pas les données : c'est qu'il change de cible."
        ]
       ],
       "ok": "Correct.",
       "mal": "Relis : touche-t-on à l'idée ou à la personne ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Sophisme 2 · L'homme de paille",
    "etiqueta": "Homme de paille",
    "pregunta": "En quoi consiste le sophisme de l'homme de paille ?",
    "pistas": [
     "Rappelle-toi, pour t'ancrer : un sophisme est une manière d'argumenter capable de convaincre, mais qui manque de rigueur.",
     "C'est un sophisme qui permet à celui qui l'utilise d'éviter d'affronter le véritable contenu de l'argument adverse.",
     "Et il n'attaque pas la personne (c'était le précédent) : il affirme que l'autre a dit quelque chose qu'il n'a pas dit, pour pouvoir le réfuter facilement.",
     "Ce serait un peu comme parler à un homme de paille, à un mannequin à travers lequel nous parlons pour montrer que nous sommes plus malins que lui."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue l'homme de paille ?",
     "opciones": [
      [
       "On attribue à l'autre une version déformée — plus facile à abattre — de ce qu'il a dit.",
       true
      ],
      [
       "On attaque la personne au lieu de l'idée.",
       false,
       "C'est l'ad hominem. Dans l'homme de paille, on n'attaque pas la personne : on déforme son idée."
      ],
      [
       "On dit un mensonge sur les faits.",
       false,
       "Le piège n'est pas de mentir sur les faits, mais sur ce que l'autre défendait."
      ],
      [
       "On demande à l'autre de démontrer ce qu'il dit.",
       false,
       "C'est raisonnable, ce n'est pas un sophisme."
      ]
     ],
     "ok": "C'est cela : on monte un mannequin de paille et on le renverse, pendant que l'idée réelle reste intacte.",
     "mal": "Attaque-t-on la personne… ou une version fausse de ce qu'elle a dit ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Un adversaire de paille",
      "definicion": [
       "— On devrait moins utiliser la voiture dans le quartier.",
       "— Autrement dit, tu veux interdire les voitures et que les gens aillent à pied à l'hôpital."
      ],
      "parrafos": [
       "Personne n'a demandé d'« interdire les voitures » : on a demandé d'« utiliser moins ». On répond à une version exagérée, beaucoup plus facile à abattre."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Où est le piège ?",
       "opciones": [
        [
         "On réfute quelque chose qui n'a pas été dit (« interdire les voitures »), pas la proposition réelle.",
         true
        ],
        [
         "On insulte celui qui propose.",
         false,
         "Il n'y a pas d'insulte envers la personne : on change sa proposition."
        ],
        [
         "On donne de meilleures raisons.",
         false,
         "On ne donne pas de raisons sur « utiliser moins la voiture » : on l'esquive."
        ]
       ],
       "ok": "Correct.",
       "mal": "Compare ce qui a été demandé avec ce à quoi l'on répond.",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Sophisme 3 · La pente glissante",
    "etiqueta": "Pente glissante",
    "pregunta": "En quoi consiste le sophisme de la pente glissante ?",
    "pistas": [
     "Base : un sophisme ressemble à un bon argument, mais n'en est pas un.",
     "Celui-ci permet de rejeter quelque chose de petit en faisant peur avec une fin catastrophique, sans démontrer que cette fin va se produire.",
     "Comment ? Il enchaîne des étapes — « si nous permettons A, B viendra, puis C, et nous finirons au pire » — comme si chaque étape menait inévitablement à la suivante.",
     "C'est comme dire que, si tu fais un pas sur une pente verglacée, tu rouleras jusqu'en bas sans pouvoir t'arrêter ; or, presque toujours, on peut s'arrêter."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue la pente glissante ?",
     "opciones": [
      [
       "Elle suppose qu'un premier pas conduira inévitablement à un désastre, sans prouver cet enchaînement.",
       true
      ],
      [
       "Elle attaque celui qui propose le premier pas.",
       false,
       "Ce serait de l'ad hominem ; ici, le problème est l'enchaînement non prouvé."
      ],
      [
       "Elle avertit d'une conséquence réelle et démontrée.",
       false,
       "Si l'enchaînement est démontré, ce n'est pas un sophisme : avertir d'un risque réel est légitime. Le piège est de le tenir pour certain sans preuves."
      ],
      [
       "Elle n'offre que deux options.",
       false,
       "C'est le faux dilemme, un autre piège."
      ]
     ],
     "ok": "C'est cela : le saut vers le désastre est tenu pour acquis, mais n'est pas démontré.",
     "mal": "Prouve-t-on qu'un pas mène au suivant, ou le suppose-t-on seulement ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Rouler jusqu'en bas",
      "definicion": [
       "— On laisse utiliser la calculatrice dans cet exercice ?",
       "— Si aujourd'hui la calculatrice, demain ils ne sauront même plus additionner, et ils finiront par ne plus rien pouvoir faire seuls."
      ],
      "parrafos": [
       "On saute de « calculatrice dans un exercice » à « ne plus savoir rien faire » comme si c'était inévitable, sans prouver aucune étape."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce un sophisme ?",
       "opciones": [
        [
         "Elle tient pour sûre une chaîne de conséquences qu'elle ne démontre pas.",
         true
        ],
        [
         "Elle attaque celui qui demande.",
         false,
         "On n'attaque personne : on exagère la conséquence."
        ],
        [
         "Elle offre deux options.",
         false,
         "Le défaut n'est pas d'offrir des options, mais la chute inévitable sans preuves."
        ]
       ],
       "ok": "Correct.",
       "mal": "Regarde le saut : est-il prouvé ou tenu pour acquis ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Sophisme 4 · L'appel à la majorité",
    "etiqueta": "Appel à la majorité",
    "pregunta": "En quoi consiste le sophisme de l'appel à la majorité ?",
    "pistas": [
     "Rappelle-toi : dans un sophisme, ce qui convainc, ce ne sont pas de bonnes raisons.",
     "Celui-ci permet de tenir quelque chose pour bon ou vrai sans raisons, simplement parce que beaucoup de gens le pensent ou le font.",
     "Comment ? Il remplace « c'est vrai / c'est bien » par « tout le monde le croit ou le fait », comme si le second prouvait le premier.",
     "Mais le fait que beaucoup de gens croient quelque chose ne le rend pas vrai : autrefois, presque tout le monde croyait que le Soleil tournait autour de la Terre."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue l'appel à la majorité ?",
     "opciones": [
      [
       "Il prend « beaucoup de gens le croient ou le font » comme preuve que quelque chose est vrai ou bien.",
       true
      ],
      [
       "Il déforme l'idée de l'autre.",
       false,
       "C'est l'homme de paille ; ici, on en appelle au nombre de gens."
      ],
      [
       "Il cite un expert du sujet.",
       false,
       "S'appuyer sur quelqu'un qui sait vraiment peut être raisonnable ; le problème ici est de s'appuyer sur la quantité, pas sur le savoir."
      ],
      [
       "Il n'offre que deux issues.",
       false,
       "C'est le faux dilemme."
      ]
     ],
     "ok": "C'est cela : le nombre ne démontre pas la vérité.",
     "mal": "La raison est-elle « c'est vrai parce que… » ou « tout le monde le fait » ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Parce que tout le monde le fait",
      "definicion": [
       "— Je ne crois pas que tricher à l'examen soit bien.",
       "— Mais si tout le monde triche, ce ne doit pas être si grave."
      ],
      "parrafos": [
       "« Tout le monde le fait » ne dit rien sur le fait que tricher soit bien ou mal : cela compte seulement combien de gens le font."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Où est la faute ?",
       "opciones": [
        [
         "Il utilise « tout le monde le fait » comme si cela prouvait que c'est bien.",
         true
        ],
        [
         "Il attaque la personne.",
         false,
         "On n'attaque personne : on en appelle à la majorité."
        ],
        [
         "Il donne une bonne raison.",
         false,
         "« Tout le monde le fait » n'est pas une raison de dire que c'est bien."
        ]
       ],
       "ok": "Correct.",
       "mal": "Donne-t-on une raison, ou compte-t-on seulement combien de gens le font ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Sophisme 5 · Le faux dilemme",
    "etiqueta": "Faux dilemme",
    "pregunta": "En quoi consiste le sophisme du faux dilemme ?",
    "pistas": [
     "Base : un sophisme est convaincant à l'extérieur et fragile à l'intérieur.",
     "Celui-ci permet de coincer l'autre en ne lui offrant que deux issues, alors qu'il y en a en réalité davantage.",
     "Comment ? Il présente « soit ceci, soit cela » comme s'il n'y avait ni juste milieu ni autres options, pour pousser vers celle qui arrange celui qui parle.",
     "C'est comme ne montrer que deux portes dans une salle qui en compte cinq : les trois autres sont toujours là, mais on ne te les montre pas."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue le faux dilemme ?",
     "opciones": [
      [
       "Il réduit à deux options seulement quelque chose qui en admet en réalité davantage.",
       true
      ],
      [
       "Il fait peur avec une chaîne de conséquences.",
       false,
       "C'est la pente glissante ; ici, ce sont les options qu'on réduit."
      ],
      [
       "Il pose un choix qui n'a vraiment que deux issues.",
       false,
       "S'il n'y a vraiment que deux issues, ce n'est pas un sophisme : le piège est de cacher les autres."
      ],
      [
       "Il attaque celui qui choisit.",
       false,
       "Il n'y a pas d'attaque contre la personne : on limite les options."
      ]
     ],
     "ok": "C'est cela : il y a plus d'issues, mais on ne t'en montre que deux.",
     "mal": "Y a-t-il vraiment seulement deux options, ou en cache-t-on d'autres ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Seulement deux portes",
      "definicion": [
       "— Soit tu me laisses aller à la fête, soit c'est que tu n'as aucune confiance en moi."
      ],
      "parrafos": [
       "Il y a d'autres options (y aller sous conditions, un autre jour, en discuter…), mais on n'en présente que deux pour en imposer une."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce un sophisme ?",
       "opciones": [
        [
         "Il ne présente que deux issues alors qu'il y en a davantage.",
         true
        ],
        [
         "Il exagère une conséquence future.",
         false,
         "Il n'y a pas de chaîne vers le désastre : il y a des options cachées."
        ],
        [
         "Il en appelle à ce que fait la majorité.",
         false,
         "On ne parle pas de la majorité : on réduit les options."
        ]
       ],
       "ok": "Correct.",
       "mal": "Es-tu sûr qu'il n'y a que deux issues ?",
       "intentos": 2
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Cinq pièges que tu sais déjà nommer",
   "parrafos": [
    "Attaque contre la personne, homme de paille, pente glissante, appel à la majorité et faux dilemme. Tous convainquent sans rigueur, mais chacun trompe d'une manière différente.",
    "Défi : trouve aujourd'hui l'un de ces cinq (sur les réseaux, à la télé, dans une discussion) et dis en quoi consiste le piège."
   ]
  }
 },
 {
  "id": "ipc-sesgos",
  "subject": "ipc",
  "tema": "Les biais",
  "unidad": "ipc-sesgos",
  "materia": "Pensée critique · 2e ESO",
  "titulo": "Les biais, un par un",
  "lede": "Les pièges ne sont pas toujours à l'extérieur : beaucoup sont dans ta tête. Chaque indice est une marche : d'abord les bases, puis en quoi consiste chaque biais. Ne demande que ceux dont tu as besoin.",
  "ciclos": [
   {
    "fase": "Biais 1 · Ne chercher que ce qui nous donne raison",
    "etiqueta": "Biais de confirmation",
    "pregunta": "En quoi consiste le biais de confirmation ?",
    "intro": [
     "Réfléchis d'abord par toi-même. Demande les indices un par un : chacun te rapproche d'un pas."
    ],
    "pistas": [
     "Rappelle-toi les bases, pour t'ancrer : un biais est un raccourci de l'esprit qui nous fait penser de travers sans que nous nous en rendions compte ; il est <em>à l'intérieur</em> de nous, à la différence des sophismes, qui sont dans les arguments.",
     "Ce biais nous fait défendre ce que nous pensions déjà sans jamais le mettre vraiment à l'épreuve.",
     "Comment fait-il ? Nous cherchons, nous nous rappelons et nous croyons <strong>seulement ce qui confirme</strong> notre idée, et nous ne voyons pas ce qui nous contredit.",
     "C'est comme porter des lunettes qui laissent passer ce qui te donne raison et effacent le reste."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui définit le biais de confirmation ?",
     "opciones": [
      [
       "Ne remarquer que ce qui confirme ce que tu pensais déjà et ignorer ce qui le contredit.",
       true
      ],
      [
       "Laisser la première donnée que tu entends conditionner tout le reste.",
       false,
       "C'est un autre biais (l'ancrage) : là, tu ne filtres pas selon ton idée préalable, c'est le premier chiffre qui pèse sur toi."
      ],
      [
       "Croire quelque chose parce que le groupe le croit.",
       false,
       "C'est l'effet d'entraînement : ce sont les gens qui te font bouger, pas ton idée d'avant."
      ],
      [
       "Te tromper dans un calcul par étourderie.",
       false,
       "Une étourderie est une erreur ponctuelle, pas un raccourci qui filtre ce que tu vois."
      ]
     ],
     "ok": "Exact : ton idée préalable décide de ce que tu regardes et de ce dont tu te souviens.",
     "mal": "Fais attention : filtres-tu selon ce que tu croyais déjà, ou autre chose pèse-t-il sur toi ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "« Je suis nul en maths »",
      "definicion": [
       "Quelqu'un pense : « Je suis nul en maths. »",
       "Cette personne se souvient parfaitement de l'examen qu'elle a raté en octobre.",
       "Mais elle oublie les trois qu'elle a réussis ensuite, et que, hier, elle a résolu seule un problème difficile."
      ],
      "parrafos": [
       "Son idée préalable décide de ce dont elle se souvient : elle garde l'échec et efface les réussites."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce un biais de confirmation ?",
       "opciones": [
        [
         "Elle ne se souvient que de ce qui confirme son idée et oublie ce qui la contredit.",
         true
        ],
        [
         "Elle a mauvaise mémoire pour tout.",
         false,
         "Elle se souvient très bien de l'échec : sa mémoire choisit ce qu'elle garde."
        ],
        [
         "Elle ment exprès.",
         false,
         "Elle ne ment pas : le biais agit sans qu'elle s'en rende compte."
        ]
       ],
       "ok": "Correct.",
       "mal": "Relis : de quoi se souvient-elle et qu'oublie-t-elle ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Biais 2 · La première donnée nous pèse",
    "etiqueta": "Biais d'ancrage",
    "pregunta": "En quoi consiste le biais d'ancrage ?",
    "pistas": [
     "Rappelle-toi, pour t'ancrer : un biais est un raccourci de l'esprit qui nous fait penser de travers sans que nous nous en rendions compte ; il est à l'intérieur de nous.",
     "Ce biais nous fait mal estimer parce que nous restons collés à un premier chiffre ou à une première idée.",
     "Et il ne filtre pas selon ce que nous croyions déjà (c'était la confirmation) : il laisse la <strong>première donnée que nous entendons</strong> conditionner tout ce que nous décidons ensuite, même si elle n'a rien à voir.",
     "C'est comme jeter l'ancre d'un bateau : tu bouges un peu autour, mais ce premier chiffre te retient."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue le biais d'ancrage ?",
     "opciones": [
      [
       "Le premier nombre ou la première donnée que tu entends conditionne ton estimation ensuite.",
       true
      ],
      [
       "Tu ne cherches que ce qui confirme ton idée d'avant.",
       false,
       "C'est la confirmation. Dans l'ancrage, tu ne pars pas d'une idée préalable : c'est la première donnée qui t'entraîne."
      ],
      [
       "Tu fais quelque chose parce que tout le monde le fait.",
       false,
       "C'est l'effet d'entraînement ; ici, ce qui pèse, c'est un chiffre, pas les gens."
      ],
      [
       "Tu crois que quelque chose arrive souvent parce que tu t'en souviens facilement.",
       false,
       "C'est le biais de disponibilité, un autre biais."
      ]
     ],
     "ok": "C'est cela : la première donnée te retient, même si elle est due au hasard.",
     "mal": "Est-ce une idée à toi d'avant qui te fait bouger… ou le premier chiffre que tu as entendu ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Le prix barré",
      "definicion": [
       "Dans un magasin, tu vois un t-shirt : « Avant 40 €, maintenant 25 € ».",
       "Il te paraît super bon marché et tu l'achètes.",
       "Dans un autre magasin, le même t-shirt coûte 25 € sans aucun « avant », et là il te paraît cher."
      ],
      "parrafos": [
       "Le « 40 € » barré est l'ancre : tu restes collé à ce premier chiffre et tu juges le reste à partir de là."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Où est le biais ?",
       "opciones": [
        [
         "Le premier prix (40 €) conditionne ce qui te paraît cher ou bon marché ensuite.",
         true
        ],
        [
         "Tu achètes parce que tout le monde l'achète.",
         false,
         "On ne parle pas d'autres gens : c'est le prix barré qui pèse sur toi."
        ],
        [
         "Tu ne regardes que ce qui confirme ton idée préalable.",
         false,
         "Tu n'avais pas d'idée préalable : c'est le premier chiffre qui t'ancre."
        ]
       ],
       "ok": "Correct.",
       "mal": "Quel chiffre retient ton jugement ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Biais 3 · C'est ce que fait le groupe",
    "etiqueta": "Effet de mode",
    "pregunta": "En quoi consiste l'effet d'entraînement (biais de groupe) ?",
    "pistas": [
     "Base : un biais est un raccourci de l'esprit qui nous fait penser de travers sans que nous nous en rendions compte, de l'intérieur.",
     "Ce biais nous fait croire ou faire quelque chose sans prendre le temps d'y penser, simplement pour suivre le groupe.",
     "Et ce n'est ni une donnée ni ton idée d'avant qui t'entraîne (c'étaient les précédents) : ce sont <strong>les actes ou les croyances des autres</strong>, pour ne pas rester à l'écart.",
     "C'est comme monter dans une charrette en marche simplement parce qu'elle est déjà pleine de monde : tu montes sans demander où elle va."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue l'effet d'entraînement ?",
     "opciones": [
      [
       "Croire ou faire quelque chose parce que le groupe le croit ou le fait, sans y réfléchir par toi-même.",
       true
      ],
      [
       "Rester collé à la première donnée que tu as entendue.",
       false,
       "C'est l'ancrage ; ici, ce qui te fait bouger, ce sont les gens, pas un chiffre."
      ],
      [
       "Ne remarquer que ce qui confirme ton idée.",
       false,
       "C'est la confirmation : elle part d'une idée à toi, pas de ce que fait le groupe."
      ],
      [
       "Vérifier quelque chose en demandant à plusieurs personnes.",
       false,
       "Demander pour t'informer est raisonnable ; le biais, c'est de suivre le groupe sans réfléchir."
      ]
     ],
     "ok": "C'est cela : c'est le nombre de gens qui te fait bouger, pas les raisons.",
     "mal": "Est-ce une donnée à toi qui te fait bouger… ou ce que font les gens ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Tout le monde a ce jeu",
      "definicion": [
       "— Pourquoi veux-tu précisément ce jeu ?",
       "— Parce que tout le monde l'a dans la classe."
      ],
      "parrafos": [
       "La raison n'est pas que le jeu est bon ou qu'il lui plaît : c'est que le groupe l'a. Il monte dans la charrette sans y réfléchir."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce un biais de groupe ?",
       "opciones": [
        [
         "Il le veut uniquement parce que le groupe l'a, et non pour une raison à lui.",
         true
        ],
        [
         "Un prix qu'il a vu avant pèse sur lui.",
         false,
         "Il n'y a pas de prix en jeu : c'est le groupe qui pèse sur lui."
        ],
        [
         "Il ne se souvient que de ce qui confirme son idée.",
         false,
         "Il n'y a pas d'idée préalable : ce sont les actes des autres qui l'entraînent."
        ]
       ],
       "ok": "Correct.",
       "mal": "Quelle est la vraie raison ? Le jeu ou les gens ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Biais 4 · Ce dont je me souviens facilement me semble fréquent",
    "etiqueta": "Biais de disponibilité",
    "pregunta": "En quoi consiste le biais de disponibilité ?",
    "pistas": [
     "Base : un biais est un raccourci de l'esprit qui nous fait penser de travers sans que nous nous en rendions compte, de l'intérieur.",
     "Ce biais nous fait mal estimer à quelle fréquence quelque chose arrive vraiment.",
     "Et ce n'est ni le groupe ni une première donnée qui t'entraîne (c'étaient les précédents) : tu crois que <strong>ce dont tu te souviens facilement est plus fréquent</strong>, parce que tu l'as vu récemment ou que cela t'a beaucoup marqué.",
     "C'est comme penser qu'il pleut tout le temps simplement parce qu'aujourd'hui tu t'es fait mouiller : ce qui est récent te cache le reste des jours."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue le biais de disponibilité ?",
     "opciones": [
      [
       "Croire que ce dont tu te souviens facilement arrive souvent, même si c'est en réalité rare.",
       true
      ],
      [
       "Faire quelque chose parce que le groupe le fait.",
       false,
       "C'est l'effet d'entraînement ; ici, c'est ta mémoire qui te trompe, pas les gens."
      ],
      [
       "Rester collé au premier chiffre que tu as entendu.",
       false,
       "C'est l'ancrage ; ici, ce qui pèse, c'est la facilité avec laquelle un souvenir te revient."
      ],
      [
       "Compter soigneusement les cas réels avant de décider.",
       false,
       "C'est exactement le contraire du biais : regarder les données, pas les souvenirs."
      ]
     ],
     "ok": "C'est cela : tu confonds « je m'en souviens facilement » avec « cela arrive souvent ».",
     "mal": "Est-ce le groupe, une donnée… ou la facilité avec laquelle tu te souviens de quelque chose qui te trompe ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "La peur de prendre l'avion",
      "definicion": [
       "Aux informations, on voit, de temps en temps seulement, des accidents d'avion, et on les voit beaucoup.",
       "Quelqu'un finit par penser que prendre l'avion est très dangereux et préfère toujours la voiture.",
       "Mais, en nombre de trajets, la voiture a beaucoup plus d'accidents que l'avion."
      ],
      "parrafos": [
       "Les images choquantes se retiennent facilement, et cela fait paraître l'avion plus dangereux qu'il ne l'est."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce un biais de disponibilité ?",
       "opciones": [
        [
         "Il juge d'après ce dont il se souvient fortement, et non d'après le nombre de fois où cela arrive vraiment.",
         true
        ],
        [
         "Il suit ce que fait le groupe.",
         false,
         "On ne parle pas du groupe : c'est ce dont il se souvient qui pèse sur lui."
        ],
        [
         "Un premier prix l'ancre.",
         false,
         "Il n'y a pas de prix : c'est un souvenir marquant qui le trompe."
        ]
       ],
       "ok": "Correct.",
       "mal": "Décide-t-il d'après les données ou d'après ce dont il se souvient le mieux ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Biais 5 · « Je le savais déjà »",
    "etiqueta": "Biais rétrospectif",
    "pregunta": "En quoi consiste le biais rétrospectif ?",
    "pistas": [
     "Base : un biais est un raccourci de l'esprit qui nous fait penser de travers sans que nous nous en rendions compte, de l'intérieur.",
     "Ce biais nous fait nous croire plus malins que nous ne l'avons été, une fois que nous savons comment quelque chose s'est terminé.",
     "Et ce n'est pas ta mémoire de la quantité qui te trompe (c'était la disponibilité) : une fois le résultat connu, il te fait penser que <strong>« tu le savais »</strong> depuis le début, alors qu'avant, tu n'en avais aucune idée claire.",
     "C'est comme dire « c'était évident, on savait qui allait gagner » juste après le match, alors qu'avant tu n'osais pas parier."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui distingue le biais rétrospectif ?",
     "opciones": [
      [
       "Une fois le résultat connu, tu crois que tu le voyais venir depuis le début.",
       true
      ],
      [
       "Tu crois que ce dont tu te souviens facilement arrive souvent.",
       false,
       "C'est la disponibilité ; ici, le problème apparaît quand on connaît la fin."
      ],
      [
       "Tu suis ce que fait le groupe.",
       false,
       "C'est l'effet d'entraînement ; ici, tu te trompes sur ce que tu savais avant."
      ],
      [
       "Tu restes collé à la première donnée que tu as entendue.",
       false,
       "C'est l'ancrage, un autre biais."
      ]
     ],
     "ok": "C'est cela : le résultat réécrit ce que tu croyais savoir avant.",
     "mal": "L'erreur apparaît-elle avant ou après avoir su comment cela s'est terminé ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "« Je savais bien que tu allais échouer »",
      "definicion": [
       "Avant l'examen, personne ne disait rien sur la façon dont se passerait celui d'une personne.",
       "Après avoir appris qu'elle a échoué, quelqu'un lâche : « Je savais bien que tu allais échouer, c'était couru d'avance. »",
       "Mais avant, personne ne l'a dit ni ne l'a tenu pour sûr."
      ],
      "parrafos": [
       "Connaître le résultat fait croire que c'était évident depuis le début, alors qu'avant, ce ne l'était pas."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce un biais rétrospectif ?",
       "opciones": [
        [
         "Une fois la fin connue, il tient pour évident quelque chose qui n'était pas du tout clair avant.",
         true
        ],
        [
         "Il suit ce que fait le groupe.",
         false,
         "Il n'y a pas de groupe : on se trompe sur ce que l'on savait avant."
        ],
        [
         "Il se souvient facilement d'un cas marquant.",
         false,
         "L'erreur naît du fait de connaître le résultat, pas d'un souvenir."
        ]
       ],
       "ok": "Correct.",
       "mal": "Compare ce qui se disait avant avec ce qui se dit après.",
       "intentos": 2
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Cinq raccourcis de ton propre esprit",
   "parrafos": [
    "Confirmation, ancrage, effet d'entraînement, disponibilité et biais rétrospectif. Tous agissent de l'intérieur, sans que tu t'en rendes compte, et chacun te fait penser de travers à sa manière.",
    "Défi : surprends aujourd'hui l'un de ces cinq chez toi ou chez quelqu'un de proche et dis en quoi consiste le piège."
   ]
  }
 },
 {
  "id": "ipc-medios",
  "subject": "ipc",
  "tema": "Regarde les médias à la loupe",
  "unidad": "ipc-medios",
  "materia": "Pensée critique · 2e ESO",
  "titulo": "Repérer les infox, signal après signal",
  "lede": "Cinq signaux pour repérer une fausse information. Chaque indice est une marche : d'abord les bases, puis ce qu'il faut regarder dans chaque signal. Ne demande que ceux dont tu as besoin.",
  "ciclos": [
   {
    "fase": "Signal 1 · La source",
    "etiqueta": "Qui le publie ?",
    "pregunta": "En quoi regarder la source aide-t-il à repérer une infox ?",
    "intro": [
     "Réfléchis d'abord par toi-même. Demande les indices un par un : chacun te rapproche d'un pas."
    ],
    "pistas": [
     "Rappelle-toi les bases, pour t'ancrer : une infox est une information fausse diffusée comme si elle était vraie ; la repérer, c'est se poser des questions avant de croire ou de partager.",
     "Regarder la source permet de savoir s'il y a derrière quelqu'un qui répond de ce qu'il publie ou personne d'identifiable.",
     "Comment le vérifier ? Cherche <strong>qui</strong> le signe : un média ou une institution avec un nom et une trace, ou un compte anonyme ou un message sans origine qui demande seulement de le transférer ?",
     "Règle : si tu ne peux pas dire qui le publie ni le rechercher, considère-le comme non vérifié. Sans signature, il n'y a personne pour en répondre."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui rend une source fiable, en principe ?",
     "opciones": [
      [
       "Qu'elle soit identifiée et réponde de ce qu'elle publie, de sorte que tu puisses la rechercher.",
       true
      ],
      [
       "Que le message ait été beaucoup transféré.",
       false,
       "Le nombre de transferts ne dit pas qui le publie : une infox est transférée énormément."
      ],
      [
       "Que le titre ait l'air très sûr de lui.",
       false,
       "Avoir l'air sûr, c'est facile ; ce qui compte, c'est qui signe et s'il en répond."
      ],
      [
       "Qu'il vienne de quelqu'un de ton groupe.",
       false,
       "Celui qui te le transfère peut être de confiance et avoir pourtant cru une infox."
      ]
     ],
     "ok": "Exact : une source fiable a un nom et une trace, et répond de ce qu'elle dit.",
     "mal": "Regarde bien : peux-tu dire qui publie ce message et le retrouver ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Un message sans signature",
      "definicion": [
       "« Demain, tous les lycées ferment à cause d'un nouveau virus. C'est un médecin, ami de ma tante, qui l'a dit. Transmets-le à tout le monde ! »"
      ],
      "parrafos": [
       "Il ne dit pas quel médecin, ni où une source officielle l'a publié : il n'y a personne d'identifiable pour répondre."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Quel est le problème avec la source ?",
       "opciones": [
        [
         "Il n'y a personne d'identifiable : « un médecin, ami de ma tante » ne se retrouve pas et ne se vérifie pas.",
         true
        ],
        [
         "Qu'il parle de lycées.",
         false,
         "Le sujet n'en fait pas une infox : le problème, c'est qu'il n'y a pas de source."
        ],
        [
         "Qu'il soit en espagnol.",
         false,
         "La langue n'a rien à voir avec la source."
        ]
       ],
       "ok": "Correct.",
       "mal": "Peux-tu dire qui le publie et le retrouver ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Signe 2 · Le titre face au contenu",
    "etiqueta": "Piège à clics",
    "pregunta": "En quoi comparer le titre et le contenu aide-t-il ?",
    "pistas": [
     "Pour rappel : une infox est une fausse information déguisée en vérité ; la repérer, c'est se poser des questions avant de croire.",
     "Comparer le titre et le texte permet de repérer les titres qui promettent beaucoup pour te faire cliquer, mais qui ne tiennent pas leurs promesses.",
     "Et il ne s'agit pas de savoir qui signe (c'était le signe précédent) : ici, tu lis tout et tu vérifies si le texte <strong>soutient</strong> ce que crie le titre, ou s'il l'exagère, l'adoucit ou dit autre chose.",
     "Règle : si le titre te remue et que le texte ne le prouve pas, c'est un piège à clics. Lis au-delà du titre avant de le croire."
    ],
    "comprobacion": {
     "pregunta": "Qu'est-ce qui caractérise un titre piège à clics ?",
     "opciones": [
      [
       "Il promet ou affirme quelque chose que le texte lui-même ne soutient pas.",
       true
      ],
      [
       "Il n'a pas de source identifiable.",
       false,
       "Ça, c'est le signe de la source ; ici, le problème, c'est que le titre ne correspond pas au texte."
      ],
      [
       "Il est long.",
       false,
       "La longueur n'a pas d'importance : ce qui compte, c'est que le texte appuie ce qu'affirme le titre."
      ],
      [
       "Il est bien écrit.",
       false,
       "Être bien écrit ne le rend pas fiable et n'en fait pas un piège à clics."
      ]
     ],
     "ok": "Voilà : le titre crie une chose et le texte ne la soutient pas.",
     "mal": "Le texte prouve-t-il ce que dit le titre, ou l'exagère-t-il ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Ce qui est promis et ce qui est dit",
      "definicion": [
       "Titre : « Un aliment ordinaire GUÉRIT la grippe, c'est confirmé ».",
       "Dans le texte : « une petite étude a vu que cela pourrait peut-être aider un peu ; il faut davantage de preuves »."
      ],
      "parrafos": [
       "Le titre dit « guérit » et « confirmé » ; le texte dit « peut-être » et « il faut davantage de preuves ». Ce n'est pas pareil."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Où est le piège ?",
       "opciones": [
        [
         "Le titre affirme beaucoup plus que ce que le texte soutient.",
         true
        ],
        [
         "Il ne cite personne.",
         false,
         "Le problème que nous regardons ici n'est pas la source, mais le fait que le titre et le texte ne correspondent pas."
        ],
        [
         "Il parle d'un aliment.",
         false,
         "Le sujet n'est pas le problème : c'est l'écart entre le titre et le texte."
        ]
       ],
       "ok": "Correct.",
       "mal": "Compare ce que promet le titre avec ce que dit le texte.",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Signe 3 · La date et le contexte",
    "etiqueta": "Sorti de son moment",
    "pregunta": "En quoi la date et le contexte aident-ils à repérer une infox ?",
    "pistas": [
     "Base : une infox se glisse comme une vérité ; la repérer, c'est se poser des questions avant de partager.",
     "Regarder la date et le contexte permet de repérer quelque chose de réel, mais présenté hors de son moment ou de son lieu pour tromper.",
     "Comment regarder ? Vérifie <strong>quand</strong> et <strong>où</strong> ça s'est passé : une vieille nouvelle diffusée comme si elle était d'aujourd'hui, ou une photo authentique d'un autre endroit ou d'une autre année, présentée comme si elle était de cet événement.",
     "Règle : une photo peut être vraie et le message rester faux. Il ne suffit pas qu'elle existe : elle doit être d'ici et de maintenant."
    ],
    "comprobacion": {
     "pregunta": "Que détecte le signe de la date et du contexte ?",
     "opciones": [
      [
       "Du matériel réel utilisé hors de son moment ou de son lieu pour faire croire à autre chose.",
       true
      ],
      [
       "Des titres qui promettent plus que ce que le texte soutient.",
       false,
       "Ça, c'est le piège à clics ; ici, le matériel est réel, mais il est hors de propos."
      ],
      [
       "Des messages sans auteur identifiable.",
       false,
       "Ça, c'est le signe de la source ; ici, le piège, c'est le moment ou le lieu, pas la signature."
      ],
      [
       "Des nouvelles écrites avec des fautes d'orthographe.",
       false,
       "Les fautes ne sont pas la clé : ce qui compte, c'est que le matériel corresponde à ce moment et à ce lieu."
      ]
     ],
     "ok": "Voilà : réel, mais sorti de son moment ou de son lieu.",
     "mal": "Est-ce de cet événement, de ce lieu et de maintenant, ou d'un autre ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Une photo qui n'est pas d'aujourd'hui",
      "definicion": [
       "« Regardez l'incendie qu'il y a en ce moment dans notre ville ! », avec une photo impressionnante.",
       "La photo est réelle, mais elle vient d'un autre pays et date d'il y a cinq ans."
      ],
      "parrafos": [
       "L'image existe vraiment ; ce qui est faux, c'est de dire qu'elle est d'ici et de maintenant."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi est-ce trompeur ?",
       "opciones": [
        [
         "Il utilise une photo réelle, mais d'un autre lieu et d'un autre moment, comme si elle était de cet événement.",
         true
        ],
        [
         "La photo a été inventée par un ordinateur.",
         false,
         "Pas besoin : il suffit de sortir une photo réelle de son contexte."
        ],
        [
         "On ne comprend pas le message.",
         false,
         "On le comprend parfaitement ; le problème, c'est le moment et le lieu."
        ]
       ],
       "ok": "Correct.",
       "mal": "La photo est-elle de cet événement, ou d'un autre moment et d'un autre lieu ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Signe 4 · L'émotion",
    "etiqueta": "Partager sans réfléchir",
    "pregunta": "En quoi faire attention à l'émotion que provoque un message aide-t-il ?",
    "pistas": [
     "Souviens-toi : une infox est fausse même si elle se présente comme vraie ; la repérer, c'est s'arrêter et se poser des questions avant de croire ou de transmettre.",
     "Faire attention à l'émotion permet de remarquer quand un message est fait pour te pousser à partager sans rien vérifier.",
     "Comment ? Remarque ce que tu ressens en le lisant : s'il te déclenche de la colère ou de la peur et te met la pression en même temps (« transmets-le vite ! »), l'émotion fait le travail que devraient faire les preuves.",
     "Règle : plus un message te secoue et te met la pression, plus il faut freiner. L'émotion va plus vite que la vérification."
    ],
    "comprobacion": {
     "pregunta": "En quoi l'émotion est-elle un signal d'alerte ?",
     "opciones": [
      [
       "Le message cherche à te donner de la colère ou de la peur et à te presser pour que tu le partages sans vérifier.",
       true
      ],
      [
       "Il utilise une photo d'une autre année.",
       false,
       "Ça, c'est le signe de la date et du contexte ; ici, la clé, c'est ce que le message te fait ressentir."
      ],
      [
       "Il n'a pas de signature.",
       false,
       "Ça, c'est le signe de la source ; ici, nous regardons l'émotion et la pression, pas qui le publie."
      ],
      [
       "Que tout message qui provoque une émotion soit faux.",
       false,
       "Non : une nouvelle vraie peut aussi émouvoir. L'alerte, c'est l'émotion combinée à la pression de transmettre sans vérifier."
      ]
     ],
     "ok": "Voilà : une forte émotion plus la pression, c'est un signal pour freiner.",
     "mal": "Le message te pousse-t-il à partager sans vérifier ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Colère et pression",
      "definicion": [
       "« C'est scandaleux !! On nous trompe tous. Partage-le avant qu'ils l'effacent ! »"
      ],
      "parrafos": [
       "Il ne donne pas un seul fait vérifiable : seulement de la colère et de la pression pour que tu le diffuses avant de réfléchir."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Quel est le signal d'alerte ?",
       "opciones": [
        [
         "Il joue sur l'indignation et la pression au lieu de donner quelque chose que tu puisses vérifier.",
         true
        ],
        [
         "Il est trop long.",
         false,
         "Il n'est pas long ; le problème, c'est qu'il pousse à partager sans preuves."
        ],
        [
         "Il est mal écrit.",
         false,
         "Même s'il était bien écrit, il utiliserait toujours l'émotion et la pression."
        ]
       ],
       "ok": "Correct.",
       "mal": "Te donne-t-il des faits, ou seulement de la colère et de la pression ?",
       "intentos": 2
      }
     }
    ]
   },
   {
    "fase": "Signe 5 · Recouper",
    "etiqueta": "Quelqu'un d'autre en parle-t-il ?",
    "pregunta": "En quoi recouper la nouvelle avec d'autres sources aide-t-il ?",
    "pistas": [
     "Base : une infox est une fausse information qui circule comme une vérité ; la repérer, c'est vérifier avant de croire.",
     "Recouper permet de confirmer ou de démonter la nouvelle grâce à d'autres : si elle était vraie et importante, elle ne serait pas seule.",
     "Comment ? Cherche si <strong>d'autres sources fiables et indépendantes</strong> disent la même chose. Il ne suffit pas qu'on la répète beaucoup au même endroit ou entre des comptes qui se copient : elles doivent être différentes et fiables.",
     "Règle : si quelque chose de gros n'apparaît qu'à un endroit et nulle part ailleurs, méfie-toi. Une vérité importante laisse généralement plus d'une trace."
    ],
    "comprobacion": {
     "pregunta": "Que signifie bien recouper une nouvelle ?",
     "opciones": [
      [
       "Vérifier si plusieurs sources fiables et indépendantes disent la même chose.",
       true
      ],
      [
       "Regarder si elle a beaucoup de « j'aime » ou de partages.",
       false,
       "La popularité ne prouve rien : une infox peut être répétée énormément."
      ],
      [
       "Relire seulement le titre.",
       false,
       "Relire le titre, ce n'est pas recouper : il faut chercher ailleurs, dans d'autres sources."
      ],
      [
       "La transmettre pour voir ce que les gens en pensent.",
       false,
       "C'est comme ça que l'infox se diffuse : d'abord on recoupe, et seulement ensuite, éventuellement, on partage."
      ]
     ],
     "ok": "Exact : recouper, c'est chercher la même information dans plusieurs sources fiables et indépendantes.",
     "mal": "Une autre source fiable en parle-t-elle, ou est-elle seule à un endroit ?"
    },
    "rescate": [
     {
      "boton": "J'ai besoin d'un exemple",
      "etiqueta": "Exemple (dernier recours)",
      "titulo": "Seulement à un endroit",
      "definicion": [
       "« Ils ont découvert quelque chose d'énorme qui change tout, mais AUCUN média n'ose en parler. Tu ne l'as qu'ici. »"
      ],
      "parrafos": [
       "Si c'était vrai et si important, d'autres sources fiables le reprendraient. Qu'elle soit seulement à un endroit est une raison de se méfier, pas de croire."
      ],
      "comprobacion": {
       "etiqueta": "Vérification de l'exemple",
       "pregunta": "Pourquoi faut-il se méfier ?",
       "opciones": [
        [
         "Quelque chose d'aussi grand n'est confirmé par aucune autre source fiable et indépendante.",
         true
        ],
        [
         "Parce qu'il utilise des majuscules.",
         false,
         "Les majuscules ne sont pas la clé : ce qui compte, c'est que personne d'autre ne le confirme."
        ],
        [
         "Parce qu'il est court.",
         false,
         "La longueur n'a pas d'importance : ce qui compte, c'est qu'il n'est qu'à un seul endroit."
        ]
       ],
       "ok": "Correct.",
       "mal": "Une autre source fiable le confirme-t-elle, ou est-il seul là ?",
       "intentos": 2
      }
     }
    ]
   }
  ],
  "cierre": {
   "titulo": "Cinq signes pour repérer une infox",
   "parrafos": [
    "La source (qui le publie ?), le titre face au contenu, la date et le contexte, l'émotion et le recoupement avec d'autres sources. Une infox est une fausse nouvelle qui circule comme si elle était vraie ; chaque signe est une question que tu te poses avant de croire ou de partager.",
    "Défi : prends un message ou un titre de cette semaine et passe-le au crible des cinq signes, un par un."
   ]
  }
 }
];
