# Jauge — jauge.media

Média pour entrepreneurs solo. Site construit avec **Astro** (pages HTML générées à l'avance, rapides et lisibles par Google et les IA), contenus gérés dans **Sanity**, hébergé sur **Vercel**.

## Comment ça marche

- **Écrire un article** : `jauge.media/studio` → Articles → « + ». Remplir titre, chapeau, « L'essentiel », jauge, rubrique, auteur·rice, puis **Publier**.
- **Mise en ligne** : chaque publication déclenche une reconstruction du site (≈ 1 min) grâce au webhook Sanity → Vercel.
- **Pages fixes** (accueil, à propos, bons plans…) : fichiers `src/pages/*.astro`.
- **Menu / pied de page** : `src/components/Nav.astro`, `src/components/Footer.astro`.
- **Les 4 jauges et leurs rubriques** : `src/config.ts` (utilisé à la fois par le site et par Sanity).
- **Style** : `public/style.css`.

## Ce qui est généré automatiquement

`/sitemap.xml` (une jauge n’y apparaît qu’à partir de son 1er article), `/robots.txt` (ouvert aux robots IA), `/llms.txt` (résumé du site pour les IA), `/rss.xml`, les données structurées (Article, Auteur, FAQ, fil d'Ariane) et les listes d'articles par jauge.

## Variables d'environnement

Voir `.env.example`. Sans `PUBLIC_SANITY_PROJECT_ID`, le site se construit quand même, sans articles.

## Développement local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build
```

Test sans Sanity : `JAUGE_FIXTURE=chemin/donnees.json npm run build` exécute les requêtes sur un jeu de données local.
