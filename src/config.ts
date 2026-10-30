// Réglages globaux du site Jauge
// Projet Sanity (identifiant public, visible côté navigateur : ce n'est pas un secret)
export const SANITY = { projectId: 'z43vvgf6', dataset: 'production' };

export const SITE = {
  name: 'Jauge',
  url: 'https://jauge.media',
  description:
    "Jauge est le média des entrepreneurs solo : trésorerie, outils IA, acquisition client et charge mentale. Avis tranchés, tests réels, pas de top 10 générique.",
  locale: 'fr_FR',
  lang: 'fr-FR',
  ogImage: '/og-image.jpg',
  logo: '/jauge.png',
  contactEmail: 'contact@jauge.media',
};

// Les 4 jauges. Le slug correspond à l'URL de la catégorie et au champ "slug" de la catégorie dans Sanity.
export const CATEGORIES = [
  { slug: 'ia-automatisation', title: 'Outils & IA', short: 'Outils & IA', icon: 'cpu', tag: 'tag-ia' },
  { slug: 'acquisition-growth', title: 'Acquisition & Growth', short: 'Growth', icon: 'target', tag: 'tag-acquisition' },
  { slug: 'finance-assurances', title: 'Argent & Trésorerie', short: 'Argent', icon: 'wallet', tag: 'tag-finance' },
  { slug: 'la-jauge', title: 'La Jauge', short: 'La Jauge', icon: 'brain', tag: 'tag-jauge' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const categoryBySlug = (slug: string) => CATEGORIES.find((c) => c.slug === slug);

// Rubriques (sous-catégories) de chaque jauge : alimentent les filtres et le champ "Rubrique" dans Sanity.
export const SUBCATEGORIES: Record<string, { value: string; label: string; icon: string }[]> = {
  "ia-automatisation": [
    {
      "value": "outils-ia",
      "icon": "cpu",
      "label": "Outils IA"
    },
    {
      "value": "no-code",
      "icon": "settings",
      "label": "Workflows no-code"
    },
    {
      "value": "admin",
      "icon": "file-text",
      "label": "Automatisation admin"
    },
    {
      "value": "guide",
      "icon": "rocket",
      "label": "Guide entrepreneur"
    },
    {
      "value": "generative",
      "icon": "sparkles",
      "label": "IA générative"
    }
  ],
  "acquisition-growth": [
    {
      "value": "seo",
      "icon": "search",
      "label": "SEO"
    },
    {
      "value": "paid",
      "icon": "trending-up",
      "label": "Acquisition payante"
    },
    {
      "value": "linkedin",
      "icon": "briefcase",
      "label": "Prospection & LinkedIn"
    },
    {
      "value": "tunnel",
      "icon": "funnel",
      "label": "Tunnel de vente"
    },
    {
      "value": "crm",
      "icon": "settings",
      "label": "CRM & automatisation"
    }
  ],
  "finance-assurances": [
    {
      "value": "compte-pro",
      "icon": "bank",
      "label": "Compte pro"
    },
    {
      "value": "assurances",
      "icon": "shield",
      "label": "Assurances"
    },
    {
      "value": "fiscalite",
      "icon": "file-text",
      "label": "Fiscalité"
    },
    {
      "value": "comptabilite",
      "icon": "bar-chart",
      "label": "Comptabilité"
    },
    {
      "value": "tresorerie",
      "icon": "credit-card",
      "label": "Trésorerie"
    }
  ],
  "la-jauge": [
    {
      "value": "charge-mentale",
      "icon": "brain",
      "label": "Charge mentale"
    },
    {
      "value": "solitude-echec",
      "icon": "waves",
      "label": "Solitude & échec"
    },
    {
      "value": "argent-risque",
      "icon": "wallet",
      "label": "Argent & risque"
    },
    {
      "value": "imposteur",
      "icon": "mask",
      "label": "Imposteur"
    },
    {
      "value": "repos-limites",
      "icon": "battery",
      "label": "Repos & burnout"
    }
  ]
};

export const subcategoryLabel = (category: string, value?: string) =>
  SUBCATEGORIES[category]?.find((s) => s.value === value)?.label;
