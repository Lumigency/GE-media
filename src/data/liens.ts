// Liens sortants vers les outils recommandés, utilisés via jauge.media/go/<outil>.
//
// Pour passer un outil en lien affilié : remplacer `url` par ton lien de tracking
// et mettre `affiliate: true`. Toutes les pages du site suivent automatiquement.
export interface OutboundLink {
  name: string;
  url: string;
  affiliate: boolean;
}

export const LIENS: Record<string, OutboundLink> = {
  qonto: { name: 'Qonto', url: 'https://qonto.com/fr', affiliate: false },
  brevo: { name: 'Brevo', url: 'https://www.brevo.com/fr/', affiliate: false },
  n8n: { name: 'n8n (auto-hébergé)', url: 'https://n8n.io/', affiliate: false },
  'n8n-cloud': { name: 'n8n Cloud', url: 'https://n8n.io/pricing/', affiliate: false },
  claude: { name: 'Claude', url: 'https://claude.ai', affiliate: false },
  notion: { name: 'Notion', url: 'https://www.notion.com/fr', affiliate: false },
  airtable: { name: 'Airtable', url: 'https://www.airtable.com/', affiliate: false },
  jasper: { name: 'Jasper', url: 'https://www.jasper.ai/', affiliate: false },
  legalplace: { name: 'LegalPlace', url: 'https://www.legalplace.fr/', affiliate: false },
  legalstart: { name: 'Legalstart', url: 'https://www.legalstart.fr/', affiliate: false },
};
