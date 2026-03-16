import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  type?: string;
}

const SEOHead = ({ title, description, canonical, type = "website" }: SEOHeadProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);

    // OG tags
    const setMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (el) {
        el.setAttribute("content", content);
      }
    };

    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", type);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (link) {
        link.href = canonical;
      }
    }
  }, [title, description, canonical, type]);

  return null;
};

export default SEOHead;
