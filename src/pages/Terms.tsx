
import PageLayout from '../components/PageLayout';

const Terms = () => {
  return (
    <PageLayout 
      title="Terms of Service" 
      description={`Last Updated: ${new Date().toLocaleDateString()}`}
      maxWidth="800px"
    >
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Agreement to Terms</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          By accessing or using Shardia's website, platform, and engineering services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>2. Intellectual Property</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          The Service and its original content, features, and functionality are the exclusive property of Shardia and its licensors. Our services are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Acceptable Use</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          You agree not to use our services for any unlawful purpose or in any way that interrupts, damages, or impairs the service. We reserve the right to investigate and take appropriate legal action against anyone who violates this provision.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Termination</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination.
        </p>
      </section>
    </PageLayout>
  );
};

export default Terms;
