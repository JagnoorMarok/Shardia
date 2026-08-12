
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      style={{ 
        maxWidth: '800px', 
        margin: '120px auto 100px', 
        padding: '0 2rem',
        color: 'var(--color-text-muted)',
        lineHeight: 1.8
      }}
    >
      <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Privacy Policy</h1>
      
      <p style={{ marginBottom: '1.5rem' }}><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
        <p>This is a placeholder for the Privacy Policy. We collect information that you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us.</p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Use of Information</h2>
        <p>We may use the information we collect about you to provide, maintain, and improve our services, including to facilitate payments, send receipts, provide products and services you request (and send related information), develop new features, provide customer support to Users and Drivers, develop safety features, authenticate users, and send product updates and administrative messages.</p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Sharing of Information</h2>
        <p>We may share the information we collect about you as described in this Statement or as described at the time of collection or sharing, including with third parties to provide you a service you requested through a partnership or promotional offering made by a third party or us.</p>
      </section>

      <p style={{ fontStyle: 'italic', marginTop: '4rem', fontSize: '0.9rem' }}>
        Note: This is a placeholder privacy policy. Please consult a legal professional to draft a policy tailored to your specific business needs and local regulations.
      </p>
    </motion.div>
  );
};

export default Privacy;
