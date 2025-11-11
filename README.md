# Color Flipper 🎨

Un changeur de couleur d'arrière-plan interactif avec une interface moderne et des boutons colorés.

## 🌐 Voir le projet en direct

**[Cliquez ici pour voir le projet en live](https://maxroe66.github.io/Color-Flipper/)**

## ✨ Fonctionnalités

- ✅ Changer la couleur de fond par couleur spécifique (vert, rouge, bleu)
- ✅ Générer une couleur aléatoire
- ✅ Boutons colorés avec gradients
- ✅ Transitions fluides entre les couleurs
- ✅ Interface intuitive et responsive
- ✅ Animations au survol des boutons
- ✅ Design professionnel et moderne

## 🛠️ Technologies utilisées

- **HTML5** - Structure
- **CSS3** - Styling avec gradients, animations et media queries
- **JavaScript (Vanilla)** - Logique de changement de couleur

## 📂 Structure du projet

```
Color-Flipper/
├── index.html       # Structure HTML
├── styles.css       # Styles et animations
├── script.js        # Logique JavaScript
└── README.md        # Documentation
```

## 🎨 Caractéristiques du design

- Dégradé violet élégant en arrière-plan (changeable)
- **Titre** avec animation au chargement
- **Boutons stylisés** avec dégradés individuels :
  - 🟢 **Green** : Dégradé vert
  - 🔴 **Red** : Dégradé rouge/orange
  - 🔵 **Blue** : Dégradé bleu/violet
  - 🎲 **Random** : Dégradé rose/rouge
- Animations au survol (translateY)
- Ombres avec effects 3D
- Design responsive (mobile, tablette, desktop)
- Transitions fluides de couleur

## 🚀 Comment utiliser

1. Ouvrez [le site en live](https://maxroe66.github.io/Color-Flipper/)
2. Cliquez sur un bouton pour changer la couleur :
   - **Green** → Fond vert
   - **Red** → Fond rouge/orange
   - **Blue** → Fond bleu
   - **Random** → Couleur aléatoire
3. Répétez autant que vous voulez !

## 🧠 Concepts JavaScript couverts

- Variables et états
- Événements (click, addEventListener)
- Manipulation du DOM (querySelector, style)
- Boucles et conditions
- Générer des nombres aléatoires
- Fonctions et logique fonctionnelle
- Event delegation (écouter les clics sur body)

## ⚙️ Comment ça marche

```javascript
// 1. Écouter les clics sur tous les boutons
body.addEventListener("click", (event) => {
    // 2. Récupérer le bouton cliqué
    const clickedElement = event.target;
    
    // 3. Changer la couleur selon le bouton
    switch (clickedElement.id) {
        case "green":
            body.style.backgroundColor = "green";
            break;
        case "random":
            body.style.backgroundColor = randomColor();
            break;
    }
});

// 4. Générer une couleur aléatoire
function randomColor() {
    const colors = ["green", "red", "blue", "yellow", "pink", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
```

## 🎯 Logique de génération aléatoire

- Tableau de couleurs prédéfinies
- Génère un index aléatoire entre 0 et la longueur du tableau
- Retourne la couleur à cet index
- Simple mais efficace !

## 📊 Tableau des couleurs

| Bouton | Couleur | Type |
|--------|---------|------|
| Green | Vert | Spécifique |
| Red | Rouge/Orange | Spécifique |
| Blue | Bleu/Violet | Spécifique |
| Random | Aléatoire | Dynamique |

## 🎯 Prochaines améliorations possibles

- [ ] Afficher le code couleur (hex, rgb)
- [ ] Copier le code au presse-papiers
- [ ] Historique des couleurs
- [ ] Sauvegarde des couleurs favorites
- [ ] Gradient personnalisé
- [ ] Palette de couleurs
- [ ] Export en image

---

**Auteur:** maxroe66  
**Date:** Novembre 2025
