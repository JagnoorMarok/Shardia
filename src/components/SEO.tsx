import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  keywords?: string;
  schema?: Record<string, unknown>;
}

const DEFAULT_TITLE = 'Best Web Developer in Jalandhar, Punjab | Shardia Web Solutions';
const DEFAULT_DESC = 'Looking for the best web developer in Jalandhar or Punjab? Shardia is the top-rated web development & software agency engineering custom high-performance websites, React/Next.js web applications, and scalable digital solutions.';
const DEFAULT_KEYWORDS = 'best web developer in jalandhar, web developer in jalandhar, best web developer in punjab, web developer punjab, website developer in jalandhar, website development company in jalandhar, web designer in jalandhar, best web developers jalandhar, software development jalandhar, react developer jalandhar, freelance web developer jalandhar, ecommerce website jalandhar, full stack developer punjab, shardia, shardia web solutions';
const BASE_URL = 'https://shardia.tech';

export const SEO = ({
  title,
  description = DEFAULT_DESC,
  canonical,
  keywords = DEFAULT_KEYWORDS,
  schema
}: SEOProps) => {
  useEffect(() => {
    // 1. Update Document Title
    const finalTitle = title 
      ? (title.includes('Shardia') ? title : `${title} | Shardia Web Solutions`)
      : DEFAULT_TITLE;
    document.title = finalTitle;

    // Helper to create or update meta tags
    const updateMetaTag = (attribute: string, name: string, content: string) => {
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // 2. Update Meta Description & Keywords
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);

    // 3. Update Canonical Link
    const finalUrl = canonical ? (canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`) : window.location.href;
    let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', finalUrl);

    // 4. Update Open Graph & Twitter
    updateMetaTag('property', 'og:title', finalTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', finalUrl);
    updateMetaTag('name', 'twitter:title', finalTitle);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:url', finalUrl);

    // 5. Inject Per-Page Schema (if provided)
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      scriptTag.text = JSON.stringify(schema);
      scriptTag.id = 'page-schema';
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, canonical, keywords, schema]);

  return null;
};

export default SEO;
