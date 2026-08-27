
import PageLayout from '../components/PageLayout';

const Privacy = () => {
  return (
    <PageLayout 
      title="Privacy Policy" 
      description={`Last Updated: ${new Date().toLocaleDateString()}`}
      maxWidth="800px"
    >
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          We collect information that you provide directly to us when you inquire about our services, use our platform, or communicate with our team. This may include contact details, project specifications, and technical requirements necessary to deliver our solutions.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          The information we collect is strictly used to provide, maintain, and improve our engineering services. This includes facilitating project communication, processing payments, delivering technical support, and ensuring the security of our infrastructure.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>3. Data Security & Sharing</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          We do not sell your personal data. We may share necessary information with trusted third-party service providers (such as cloud hosting providers or payment processors) solely for the purpose of operating our business and delivering our services to you. We implement industry-standard security measures to protect your data.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>4. Your Rights</h2>
        <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
          Depending on your location, you may have the right to access, correct, or delete your personal data. To exercise these rights, please contact our privacy team.
        </p>
      </section>
    </PageLayout>
  );
};

export default Privacy;
