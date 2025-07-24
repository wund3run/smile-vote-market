import { useEffect } from 'react';

interface Organization {
  name: string;
  logo: string;
  sameAs: string[];
}

interface ArticleMeta {
  author?: string;
  section?: string;
  tags?: string[];
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  organization?: Organization;
  locale?: string;
  type?: string;
  themeColor?: string;
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
  alternateUrls?: Record<string, string>;
  articleMeta?: ArticleMeta;
}

const defaultSEO = {
  title: "Mimios - Smarter Dental Commerce",
  description: "Empowering the business of smiles. Where dental clinics and suppliers connect for streamlined procurement, compliance, and industry excellence.",
  keywords: [
    "dental marketplace",
    "dental B2B platform",
    "dental procurement",
    "dental supplier network",
    "clinic management",
    "dental commerce",
    "dental vendor portal",
    "dental analytics",
    "dental compliance",
    "dental supply chain",
    "mimios",
    "dental technology platform",
    "dental inventory management",
    "dental quality control",
    "ISO certified dental products"
  ],
  image: "/assets/dental-lab.jpg",
  url: "https://mimios.com",
  organization: {
    name: "Mimios",
    logo: "https://mimios.com/logo.png",
    sameAs: [
      "https://facebook.com/mimios",
      "https://twitter.com/mimios",
      "https://linkedin.com/company/mimios",
      "https://instagram.com/mimios"
    ]
  },
  locale: "en_US",
  type: "website",
  themeColor: "#0284c7",
  publishedTime: new Date().toISOString(),
  modifiedTime: new Date().toISOString()
};

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  organization = defaultSEO.organization,
  locale = defaultSEO.locale,
  type = defaultSEO.type,
  themeColor = defaultSEO.themeColor,
  publishedTime = defaultSEO.publishedTime,
  modifiedTime = defaultSEO.modifiedTime,
  noIndex = false,
  alternateUrls = {},
  articleMeta
}: SEOProps) {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords.join(', '));
    updateMetaTag('author', organization.name);
    updateMetaTag('theme-color', themeColor);
    updateMetaTag('robots', noIndex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:locale', locale, true);
    updateMetaTag('og:site_name', organization.name, true);

    // Twitter tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@mimios');

    // Article meta (if applicable)
    if (articleMeta) {
      updateMetaTag('article:published_time', publishedTime, true);
      updateMetaTag('article:modified_time', modifiedTime, true);
      if (articleMeta.author) {
        updateMetaTag('article:author', articleMeta.author, true);
      }
      if (articleMeta.section) {
        updateMetaTag('article:section', articleMeta.section, true);
      }
    }

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Update structured data
    const updateStructuredData = (id: string, data: object) => {
      let script = document.querySelector(`script[data-id="${id}"]`) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-id', id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    // Organization schema
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: organization.name,
      logo: organization.logo,
      sameAs: organization.sameAs,
      url: url,
      description: description,
      image: image
    };

    // Website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: title,
      description: description,
      url: url,
      potentialAction: {
        "@type": "SearchAction",
        target: `${url}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    };

    updateStructuredData('organization', organizationSchema);
    updateStructuredData('website', websiteSchema);

  }, [title, description, keywords, image, url, organization, locale, type, themeColor, publishedTime, modifiedTime, noIndex, articleMeta]);

  return null; // This component doesn't render anything
}
