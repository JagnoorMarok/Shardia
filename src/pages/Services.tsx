import GlassCard from '../components/GlassCard';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';
import PageLayout from '../components/PageLayout';
import SEO from '../components/SEO';

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development & Software Engineering Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shardia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jalandhar",
        "addressRegion": "Punjab",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Jalandhar" },
      { "@type": "AdministrativeArea", "name": "Punjab" },
      { "@type": "Country", "name": "India" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Shardia Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development Jalandhar",
            "description": "High-speed, SEO-engineered business websites built for maximum conversion in Jalandhar, Punjab."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Full-Stack Web App Engineering",
            "description": "Scalable cloud-native web applications using React, Next.js, and TypeScript."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX & Product Experience Design",
            "description": "High-conversion digital interfaces and interactive design systems."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Technical SEO & Performance Optimization",
            "description": "Sub-second load times, Core Web Vitals optimization, and Google Local search ranking acceleration."
          }
        }
      ]
    }
  };

  return (
    <PageLayout
      title="Capabilities"
      description="We don't sell hours. We sell outcomes. Premier web development and software engineering services based in Jalandhar, Punjab, built to scale your business."
    >
      <SEO 
        title="Web Development & Software Services in Jalandhar, Punjab | Shardia"
        description="Looking for the best web developer in Jalandhar, Punjab? Explore Shardia's custom web development, full-stack React/Next.js engineering, UI/UX design, and SEO optimization."
        canonical="/services"
        keywords="web development services jalandhar, website development jalandhar, web design punjab, best web developer in jalandhar, react developer jalandhar, custom software jalandhar, full stack development punjab, seo agency jalandhar"
        schema={serviceSchema}
      />
      <ScrollReveal staggerChildren style={{ display: 'grid', gap: '4rem' }}>
        
        <RevealItem>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.1)', lineHeight: 1 }}>01</div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', marginTop: '-2rem' }}>Product Strategy</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Before writing a single line of code, we define the architecture and roadmap that will yield the highest ROI. We mitigate technical debt early and ensure the product solves real market needs for businesses in Jalandhar, Punjab, and worldwide.
              </p>
            </div>
            <GlassCard style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(20,20,29,0.8) 0%, rgba(255,140,0,0.05) 100%)' }}>
              <h4 style={{ color: 'rgba(255, 140, 0, 1)', marginBottom: '1rem' }}>Key Deliverables</h4>
              <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 2 }}>
                <li>Market & Competitor Technical Analysis</li>
                <li>System Architecture Design</li>
                <li>Database Schema & Scaling Roadmap</li>
                <li>Go-To-Market Technical Strategy</li>
              </ul>
            </GlassCard>
          </div>
        </RevealItem>

        <RevealItem>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.1)', lineHeight: 1 }}>02</div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', marginTop: '-2rem' }}>Full-Stack Web Engineering</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                We build blazing fast, secure, and robust web applications. As Jalandhar's leading full-stack developers, we engineer reactive frontends and complex microservice backends designed to scale alongside your user base.
              </p>
            </div>
            <GlassCard style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(20,20,29,0.8) 0%, rgba(100,200,255,0.05) 100%)' }}>
              <h4 style={{ color: 'rgba(100, 200, 255, 1)', marginBottom: '1rem' }}>Key Deliverables</h4>
              <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 2 }}>
                <li>Custom Web Applications (React & Next.js)</li>
                <li>REST & GraphQL API Development</li>
                <li>Third-party Integrations (Stripe, Razorpay, Twilio)</li>
                <li>Automated CI/CD Pipelines & Cloud Architecture</li>
              </ul>
            </GlassCard>
          </div>
        </RevealItem>

        <RevealItem>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.1)', lineHeight: 1 }}>03</div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', marginTop: '-2rem' }}>Experience Design (UI/UX)</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                Aesthetic interfaces that convert. We merge high-end visual design with deep UX psychology to create frictionless digital experiences that delight your users and drive customer retention.
              </p>
            </div>
            <GlassCard style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(20,20,29,0.8) 0%, rgba(255,140,0,0.05) 100%)' }}>
              <h4 style={{ color: 'rgba(255, 140, 0, 1)', marginBottom: '1rem' }}>Key Deliverables</h4>
              <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 2 }}>
                <li>Wireframing & Interactive Prototyping</li>
                <li>User Journey Mapping & Information Architecture</li>
                <li>High-Fidelity UI Design Systems</li>
                <li>WebGL & Advanced Micro-Interactions</li>
              </ul>
            </GlassCard>
          </div>
        </RevealItem>

        <RevealItem>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center', flexDirection: 'row-reverse' }}>
            <div style={{ flex: '1 1 300px' }}>
              <div style={{ fontSize: '4rem', fontWeight: 800, color: 'rgba(255, 140, 0, 0.1)', lineHeight: 1 }}>04</div>
              <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', marginTop: '-2rem' }}>Technical SEO & Speed Optimization</h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                A beautiful website is useless if customers can't find it. We engineer sub-second load times, structured schema markup, and Google-friendly architectures that help businesses in Jalandhar and Punjab dominate search rankings.
              </p>
            </div>
            <GlassCard style={{ flex: '1 1 400px', background: 'linear-gradient(135deg, rgba(20,20,29,0.8) 0%, rgba(74,222,128,0.05) 100%)' }}>
              <h4 style={{ color: '#4ade80', marginBottom: '1rem' }}>Key Deliverables</h4>
              <ul style={{ color: 'var(--color-text-muted)', paddingLeft: '1.2rem', lineHeight: 2 }}>
                <li>95+ Google PageSpeed & Core Web Vitals Optimization</li>
                <li>Local Business & Service Schema (JSON-LD)</li>
                <li>Keyword & Metadata Strategy for Punjab Markets</li>
                <li>Semantic HTML5 & Crawler-First Indexing</li>
              </ul>
            </GlassCard>
          </div>
        </RevealItem>

      </ScrollReveal>
    </PageLayout>
  );
};

export default Services;
