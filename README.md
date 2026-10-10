# Site freelance — sites web pour gîtes & chambres d’hôtes en Bretagne

Site statique (HTML/CSS/JS pur) : aucune étape de build, aucune dépendance externe, aucun CDN
(polices et images auto-hébergées). La version précédente (portfolio CV) est conservée intacte dans `../site-v1/`.

## Lancer en local

```bash
cd site
python3 -m http.server 8000
# site :  http://localhost:8000
# démo :  http://localhost:8000/demo-gite/
```

## Structure

```
site/
├── index.html              # page de vente (hero, constat, services, démo, méthode, à propos, tarifs,
│                           #   témoignages masqués, zone, FAQ, contact) + SEO, Open Graph, JSON-LD
├── css/style.css           # styles du site (polices, palette mer/granit/lin, responsive, mouvement réduit)
├── js/config.js            # ⚙️ interrupteurs (téléphone, témoignages)
├── js/main.js              # applique la config, animations douces au défilement
├── assets/fonts/           # Cormorant Garamond + Inter (woff2, OFL)
├── assets/img/             # photos optimisées (WebP, plusieurs tailles) + og-image.jpg
├── assets/favicon.svg
├── demo-gite/              # maquette d’un gîte FICTIF (« Ker Exemple »), bandeau « Maquette de démonstration »
│   ├── index.html          #   (noindex : la démo n’a pas vocation à être référencée)
│   ├── demo.css, demo.js
│   └── img/
├── CREDITS.md              # crédits photos et polices
└── screenshots/            # desktop.png, mobile.png, demo-desktop.png, demo-mobile.png
```

## Interrupteurs (`js/config.js`)

| Clé | Défaut | Effet |
|---|---|---|
| `showPhone` | `false` | `true` affiche le téléphone (lien `tel:`) dans « Contact ». Le numéro n’existe que dans ce fichier ; s’il ne doit jamais être public, supprimez aussi la valeur `phone` (le fichier est lisible une fois en ligne). |
| `showTestimonials` | `false` | `true` affiche la section « Témoignages » (et son lien dans le menu). La section est vide : ajoutez d’abord de vrais avis dans `index.html` (modèle en commentaire au-dessus de `<section id="temoignages">`). |

Seul l’e-mail est affiché. Aucune adresse postale n’apparaît sur le site ni dans les données structurées.

## Crédits photos

Toutes les photos sont sous licence Unsplash ou Pexels ; détail (photographe, lien source) dans `CREDITS.md`
et en pied de page de la démo. Photographes : le Sixième Rêve, Thierry Coulon (Pexels), Liz Vo, Esra Afşar,
Eric Barbeau, aleida van der Beek.

## À compléter avant mise en ligne

Repérez les commentaires `À PERSONNALISER` / `À COMPLÉTER` dans `index.html`.

1. **Nom de marque** : actuellement « Thibault Carré — Sites pour gîtes & chambres d’hôtes » (en-tête, `<title>`, `og:site_name`, JSON-LD, pied de page).
2. **Prix** : la section Tarifs affiche « Sur devis ». Un bloc commenté permet d’ajouter des formules « à partir de XXX € HT ».
3. **Témoignages** : uniquement de vrais avis avec accord écrit, puis `showTestimonials: true`.
4. **Domaine** : ajouter `<link rel="canonical">`, rendre absolues les URL `og:image` et ajouter `"url"` dans le JSON-LD.
5. **Mentions légales** (obligatoires pour un site professionnel : statut, SIRET, hébergeur) et, si un formulaire réel est ajouté, une politique de confidentialité.
6. **Offre** : vérifier que les services annoncés (FR/EN/DE, réservation en ligne, hébergement, maintenance) correspondent à ce que vous voulez vendre, et qui fournit les traductions.

## Maquette de démonstration

`demo-gite/` présente « Ker Exemple », un établissement **entièrement fictif** : bandeau visible en haut de page,
tarifs « XX € (tarif fictif) », contact `contact@ker-exemple.example` (domaine réservé, inexistant), aucun téléphone ni
adresse, formulaire désactivé. Ne jamais la présenter comme un client réel.
