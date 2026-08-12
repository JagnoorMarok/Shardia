import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeline: '',
    businessName: '',
    phone: '',
    email: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.warn("Telegram credentials missing. Simulating successful submission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 1000);
      return;
    }

    const message = `
🔥 <b>New Project Inquiry!</b>
---------------------------
<b>Type:</b> ${formData.projectType}
<b>Budget:</b> ${formData.budget}
<b>Timeline:</b> ${formData.timeline}
<b>Business:</b> ${formData.businessName}
<b>Phone:</b> ${formData.phone || 'N/A'}
<b>Email:</b> ${formData.email}

<b>Description:</b>
${formData.description}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setIsSubmitted(true);
      // Reset form
      setFormData({
        projectType: '', budget: '', timeline: '', businessName: '', phone: '', email: '', description: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try emailing us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '1rem',
    background: 'rgba(5, 5, 8, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    color: '#fff',
    fontFamily: 'var(--font-sans)',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border 0.3s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '0.5rem',
    color: 'var(--color-text-muted)',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  };

  return (
    <div style={{ paddingTop: '15vh', minHeight: '80vh', paddingBottom: '10rem', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <ScrollReveal>
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1rem', color: '#fff', textAlign: 'center', letterSpacing: '-0.02em' }}>Initiate a Project</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '4rem', textAlign: 'center', lineHeight: 1.8 }}>
          Provide us with some initial details. We review every inquiry to ensure we are the right technical partner for your business goals.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={0.2}>
        <GlassCard hoverEffect={false} style={{ padding: '3rem' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <div style={{
                width: '80px', height: '80px',
                background: 'rgba(255,140,0,0.1)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 2rem',
                color: 'rgba(255,140,0,1)',
                fontSize: '2.5rem'
              }}>
                ✓
              </div>
              <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem' }}>Inquiry Received</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Thank you for reaching out. One of our partners will review your details and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                style={{
                  padding: '1rem 2rem',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  transition: 'all 0.3s'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={e => e.currentTarget.style.background = 'transparent'}
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {/* Project Type */}
                <div>
                  <label style={labelStyle}>Project Type</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} style={inputStyle} required>
                    <option value="" disabled>Select a type...</option>
                    <option value="Web Development">Web Application Development</option>
                    <option value="App Development">Mobile App Development</option>
                    <option value="3D / WebGL">WebGL / Experiential</option>
                    <option value="Systems Architecture">Backend / Systems Architecture</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label style={labelStyle}>Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} style={inputStyle} required>
                    <option value="" disabled>Select a range...</option>
                    <option value="₹2L - ₹5L">₹15,000 - ₹25,000</option>
                    <option value="₹5L - ₹15L">₹25,000- ₹50,000</option>
                    <option value="₹15L+">₹50,000+</option>
                    <option value="Undecided">Undecided</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label style={labelStyle}>Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} style={inputStyle} required>
                    <option value="" disabled>Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {/* Business Name */}
                <div>
                  <label style={labelStyle}>Business Name</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} style={inputStyle} required placeholder="Acme Corp" />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+1 (555) 000-0000" />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required placeholder="hello@acme.com" />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label style={labelStyle}>Describe your business problem</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                  required
                  placeholder="Tell us about the challenges you're facing, your goals, and technical requirements..."
                />
              </div>

              <MagneticButton>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '1.25rem 3.5rem',
                    background: isSubmitting ? 'rgba(255,140,0,0.5)' : 'rgba(255,140,0,1)',
                    border: 'none',
                    color: '#000',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    borderRadius: '8px',
                    alignSelf: 'flex-start'
                  }}
                  whileHover={isSubmitting ? {} : { scale: 1.05, backgroundColor: 'rgba(255,160,50,1)' }}
                  whileTap={isSubmitting ? {} : { scale: 0.95 }}
                >
                  {isSubmitting ? 'Transmitting...' : 'Submit Inquiry'}
                </motion.button>
              </MagneticButton>
            </form>
          )}
        </GlassCard>
      </ScrollReveal>
    </div>
  );
};

export default Contact;
