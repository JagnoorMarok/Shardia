
import { motion } from 'framer-motion';

const Terms = () => {
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
      <h1 style={{ color: '#fff', fontSize: '3rem', marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Terms of Service</h1>
      
      <p style={{ marginBottom: '1.5rem' }}><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
        <p>This is a placeholder for the Terms of Service. By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the service.</p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Intellectual Property</h2>
        <p>The Service and its original content, features and functionality are and will remain the exclusive property of Shardia and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Termination</h2>
        <p>We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination.</p>
      </section>

      <p style={{ fontStyle: 'italic', marginTop: '4rem', fontSize: '0.9rem' }}>
        Note: This is a placeholder Terms of Service. Please consult a legal professional to draft terms tailored to your specific business needs and local regulations.
      </p>
    </motion.div>
  );
};

export default Terms;
