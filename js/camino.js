// Generado por web_i18n/i18n_rebuild.js (fr) a partir de web/js/camino.js. No editar a mano: editar la memoria tm/fr.json y regenerar.
const CAMINOS = [
 {
  "id": "audio",
  "subject": "ipc",
  "emoji": "🔊",
  "titulo": "L'audio du groupe",
  "tema": "Infox et médias",
  "intro": "Un audio circule dans le groupe de la classe. Que fais-tu avec ?",
  "start": "inicio",
  "escenas": {
   "inicio": {
    "texto": "Dimanche, 22 h 30. Dans le groupe WhatsApp de la classe, quelqu'un transfère un audio : une voix dit que demain le collège ferme à cause d'une invasion de punaises de lit et que « c'est la directrice qui l'a dit ». En cinq minutes, il y a quarante messages.",
    "opciones": [
     {
      "t": "Le transférer au groupe de ma famille et à celui de l'équipe.",
      "to": "reenvio"
     },
     {
      "t": "Demander dans le groupe : « Qui l'a dit ? Y a-t-il quelque chose d'officiel ? »",
      "to": "preguntar"
     },
     {
      "t": "Regarder d'abord le site du collège et les notifications officielles.",
      "to": "comprobar"
     }
    ]
   },
   "reenvio": {
    "texto": "Ta mère prévient son travail que demain elle ne pourra pas venir parce qu'elle restera avec ton frère. Pendant ce temps, dans le groupe, quelqu'un écrit : « D'où ça sort ? Sur le site, il n'y a rien. »",
    "opciones": [
     {
      "t": "Insister : « Si autant de gens le disent, c'est que c'est vrai. »",
      "to": "f_bulo"
     },
     {
      "t": "Supprimer le message et prévenir que ce n'est pas vérifié.",
      "to": "f_rectificar"
     }
    ]
   },
   "preguntar": {
    "texto": "On te répond : « C'est la cousine d'Ane qui l'a dit, elle connaît la directrice. » Quelques personnes te traitent de rabat-joie parce que tu poses la question.",
    "opciones": [
     {
      "t": "Me taire pour ne pas faire mauvaise figure.",
      "to": "f_silencio"
     },
     {
      "t": "Proposer de vérifier avant de continuer à le transférer.",
      "to": "comprobar"
     }
    ]
   },
   "comprobar": {
    "texto": "Sur le site du collège, il n'y a rien. Tu cherches une phrase de l'audio sur internet et tu trouves : c'est un audio d'il y a deux ans… et d'un collège d'une autre ville.",
    "opciones": [
     {
      "t": "Le dire dans le groupe et mettre le lien.",
      "to": "f_detective"
     },
     {
      "t": "Ne rien dire : « Ce n'est pas mon problème. »",
      "to": "f_silencio"
     }
    ]
   }
  },
  "finales": {
   "f_bulo": {
    "emoji": "📣",
    "titulo": "Infox en chaîne",
    "texto": "L'audio arrive à des centaines de personnes. Le lendemain, le collège ouvre normalement et plusieurs familles ont réorganisé leur journée pour rien.",
    "idea": "« Si beaucoup de gens le disent, c'est que c'est vrai » est un sophisme : l'appel à la majorité. Une infox ne devient pas vraie à force d'être répétée ; elle devient plus dangereuse."
   },
   "f_rectificar": {
    "emoji": "↩️",
    "titulo": "Rectifier, c'est aussi penser",
    "texto": "Ton message arrête plusieurs personnes qui allaient le transférer. Il t'a coûté de reconnaître l'erreur, mais le groupe t'en est reconnaissant.",
    "idea": "Tout le monde peut se tromper ; l'important est de corriger. Changer d'avis devant les preuves n'est pas une faiblesse : c'est penser de façon critique."
   },
   "f_silencio": {
    "emoji": "🤐",
    "titulo": "Le silence compte aussi",
    "texto": "L'infox continue de circuler. Tu savais (ou tu soupçonnais) qu'elle était fausse, mais tu as préféré ne pas te faire remarquer.",
    "idea": "La « spirale du silence » : quand nous croyons que la majorité pense autrement, nous nous taisons, et ainsi l'erreur paraît encore plus majoritaire. Se taire est aussi une façon de décider."
   },
   "f_detective": {
    "emoji": "🕵️",
    "titulo": "Détective d'infox",
    "texto": "Avec le lien, le groupe se calme. Quelqu'un te remercie même. Demain, il y a cours, comme toujours.",
    "idea": "Les quatre questions avant de croire ou de partager : qui le dit (source) ? de quand est-ce (date) ? d'autres sites fiables le confirment-ils (recoupement) ? qui y gagne si je le crois (intérêt) ?"
   }
  }
 },
 {
  "id": "foto",
  "subject": "ipc",
  "emoji": "📸",
  "titulo": "La photo de la récré",
  "tema": "Pression du groupe",
  "intro": "Ta bande veut publier une photo d'un camarade. Tous te regardent.",
  "start": "inicio",
  "escenas": {
   "inicio": {
    "texto": "À la récré, ta bande rit devant une photo d'Iker, de ta classe, en train de trébucher en cours d'EPS. Mikel propose de la publier sur Instagram avec un mème. Tous te regardent en attendant ta réaction.",
    "opciones": [
     {
      "t": "Rire et dire : « Publie-la ! »",
      "to": "sube"
     },
     {
      "t": "Dire : « Sans moi, là, c'est trop. »",
      "to": "paso"
     },
     {
      "t": "Ne rien dire et changer de sujet.",
      "to": "callo"
     }
    ]
   },
   "sube": {
    "texto": "La photo obtient deux cents « j'aime » et un tas de commentaires. Le lendemain, Iker ne vient pas en classe. Dans le groupe, on dit : « C'était une blague, il ne supporte rien. »",
    "opciones": [
     {
      "t": "Leur donner raison : « C'était juste une blague. »",
      "to": "f_broma"
     },
     {
      "t": "Écrire à Iker en privé pour voir comment il va.",
      "to": "f_reparar"
     }
    ]
   },
   "paso": {
    "texto": "Mikel se moque : « Qu'est-ce que tu es ennuyeux. » Mais Unai, qui était resté silencieux, te regarde et hoche la tête : il a l'air de penser comme toi.",
    "opciones": [
     {
      "t": "Expliquer mes raisons et chercher le soutien d'Unai.",
      "to": "f_valiente"
     },
     {
      "t": "Céder pour ne pas rester à l'écart.",
      "to": "sube"
     }
    ]
   },
   "callo": {
    "texto": "La photo est publiée quand même. Pendant l'après-midi, tu ne cesses d'y penser et tu te sens mal à l'aise.",
    "opciones": [
     {
      "t": "Parler avec Iker ou le raconter à la professeure principale.",
      "to": "f_reparar"
     },
     {
      "t": "L'oublier : « Je n'ai rien fait. »",
      "to": "f_testigo"
     }
    ]
   }
  },
  "finales": {
   "f_broma": {
    "emoji": "😶",
    "titulo": "Juste une blague ?",
    "texto": "Iker met des jours à revenir et évite le groupe. La photo continue de circuler même si vous l'avez déjà supprimée.",
    "idea": "Une blague est drôle pour tout le monde ; si seuls certains rient aux dépens d'un autre, c'est une humiliation. Ce qui est mis sur internet ne peut pas être entièrement retiré."
   },
   "f_reparar": {
    "emoji": "🤝",
    "titulo": "Il n'est jamais trop tard pour réparer",
    "texto": "Iker apprécie le message. Avec l'aide de la professeure principale, la photo est retirée et le sujet est abordé en heure de vie de classe.",
    "idea": "Réparer le mal (demander pardon, accompagner, prévenir un adulte), c'est aussi prendre parti. L'empathie : se mettre à la place de l'autre et agir en conséquence."
   },
   "f_valiente": {
    "emoji": "🦁",
    "titulo": "Dire non en groupe",
    "texto": "Avec Unai de ton côté, le plan retombe. La photo n'est pas publiée. Mikel grogne, mais il ne se passe rien de plus.",
    "idea": "Dans l'expérience d'Asch, il suffisait qu'une seule personne du groupe soit en désaccord pour que les autres osent dire ce qu'elles pensaient. Un allié change tout."
   },
   "f_testigo": {
    "emoji": "👀",
    "titulo": "Le témoin décide aussi",
    "texto": "Personne ne t'en veut, mais la photo fait du mal et tu le savais. D'autres fois, cela se reproduira.",
    "idea": "Dans le harcèlement, il n'y a pas seulement celui qui agresse et celui qui le subit : il y a aussi les témoins. Ce que font (ou ne font pas) les spectateurs décide souvent de la fin de l'histoire."
   }
  }
 }
];
