# Portfolio - pf-laurent

Site personnel construit avec React + Vite.

Ce dépôt contient le code source du portfolio "pf-laurent". Le site est une application React créée avec Vite et peut être déployée sur GitHub Pages. Si vous obtenez une erreur 404 en visitant le lien de preview, c'est très probablement dû au paramètre `base` de Vite (les assets sont recherchés au mauvais chemin). Le workflow GitHub Actions inclus dans ce dépôt construit le site avec la bonne base pour que le site soit joignable à l'URL de Pages du dépôt.

URL de preview après déploiement
- Si votre dépôt est `BenjyKlaut/laurent-portfolio`, l'URL publique sera :
  `https://BenjyKlaut.github.io/laurent-portfolio/`

Ce que fait le workflow
- Installe les dépendances (dans le dossier `pf-laurent`).
- Lance la commande de build en définissant `VITE_BASE=/laurent-portfolio/` pour que Vite génère les bonnes URLs d'assets.
- Upload le dossier `pf-laurent/dist` vers GitHub Pages et déclenche le déploiement.

Prérequis locaux
- Node.js 18+ (recommandé)
- npm (ou yarn/pnpm)

Commandes utiles
- Développement local (HMR) :
  - cd pf-laurent
  - npm install
  - npm run dev

- Build pour la production :
  - cd pf-laurent
  - npm ci
  - npm run build

- Preview local d'une build de production :
  - cd pf-laurent
  - npm run preview

Comment éviter les 404 (explication technique)
- Vite génère des liens vers les assets en fonction d'une option `base`. Pour les pages de projet GitHub Pages (URL de la forme `https://<user>.github.io/<repo>/`), il faut que `base` soit `/<repo>/` (par ex. `/laurent-portfolio/`).
- Deux façons de configurer `base` :
  1) Dans `vite.config.js` :
     export default defineConfig({
       base: '/laurent-portfolio/',
       plugins: [react()]
     })

  2) Ou en passant `VITE_BASE` à la build (le workflow fait cela automatiquement) :
     VITE_BASE=/laurent-portfolio/ npm run build

Si vous changez le nom du dépôt, mettez à jour `VITE_BASE` dans le workflow ou changez `base` dans `vite.config.js`.

Dépannage
- Page 404 après déploiement : vérifiez que la build a été faite avec la bonne base (inspectez les URLs dans `dist/index.html`).
- Assets cassés (404 pour `/assets/...`) : base incorrecte.
- Workflow qui ne se déclenche pas : poussez sur la branche `main` (le workflow est configuré pour `push` sur `main`).

Contribuer
- Forkez le repo, créez une branche, faites vos changements dans `pf-laurent/`, puis ouvrez une PR.

Licence
- MIT (ou adaptez selon vos préférences)
