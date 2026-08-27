
import { motion } from 'framer-motion';
import { ScrollReveal, RevealItem } from '../components/ScrollReveal';
import PageLayout from '../components/PageLayout';

const Insights = () => {
  return (
    <PageLayout
      title="Insights"
      description="Engineering logs, architecture deep-dives, and strategic playbooks on the future of the web. We open-source our knowledge to help other businesses scale."
    >
      <ScrollReveal staggerChildren style={{ display: 'flex', flexDirection: 'column' }}>
        {[
          { title: "Building a Custom WebGL Renderer for High-Performance SaaS", date: "Aug 09, 2026", category: "Engineering", readTime: "8 min read" },
          { title: "Why Your Legacy Monolith is Killing Your Conversion Rate", date: "Jul 22, 2026", category: "Strategy", readTime: "5 min read" },
          { title: "Scaling Node.js Microservices to 10k RPS for Enterprise Apps", date: "Jul 05, 2026", category: "Infrastructure", readTime: "12 min read" }
        ].map((post, i) => (
          <RevealItem key={i}>
            <motion.div 
              style={{ 
                padding: '2.5rem 0', 
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '2rem'
              }}
              whileHover={{ x: 10, borderBottomColor: 'rgba(255,140,0,0.5)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            >
              <div>
                <p style={{ color: 'rgba(255, 140, 0, 1)', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.8rem', marginBottom: '0.5rem', fontWeight: 600 }}>{post.category} &mdash; {post.date}</p>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', fontWeight: 500 }}>{post.title}</h3>
              </div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {post.readTime}
                <span style={{ fontSize: '1.5rem', color: 'rgba(255,140,0,1)' }}>&rarr;</span>
              </div>
            </motion.div>
          </RevealItem>
        ))}
      </ScrollReveal>
    </PageLayout>
  );
};

export default Insights;
