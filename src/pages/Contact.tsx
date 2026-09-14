import React, { useState } from 'react';
import GlassCard from '../components/GlassCard';
import { ScrollReveal } from '../components/ScrollReveal';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import SEO from '../components/SEO';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

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

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Shardia | Best Web Developer in Jalandhar, Punjab",
    "description": "Get in touch with Shardia for custom web development, full-stack React/Next.js engineering, and digital growth consulting in Jalandhar, Punjab.",
    "url": "https://shardia.tech/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Shardia",
      "telephone": "+919814078213",
      "email": "jagnoormarok@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jalandhar",
        "addressRegion": "Punjab",
        "postalCode": "144001",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <div style={{ paddingTop: '15vh', minHeight: '80vh', paddingBottom: '10rem', paddingLeft: '2rem', paddingRight: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <SEO 
        title="Contact Best Web Developer in Jalandhar, Punjab | Shardia"
        description="Looking to hire the best web developer in Jalandhar or Punjab? Contact Shardia for high-performance websites, custom web apps, and digital consulting."
        canonical="/contact"
        keywords="hire web developer jalandhar, contact shardia, web developer in jalandhar, web development company in jalandhar, software developer punjab"
        schema={contactSchema}
      />

      <ScrollReveal>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,140,0,0.1)', border: '1px solid rgba(255,140,0,0.3)', borderRadius: '20px', padding: '0.3rem 0.8rem', marginBottom: '1rem', color: 'rgba(255,140,0,1)', fontSize: '0.85rem', fontWeight: 600 }}>
            <MapPin size={14} /> JALANDHAR, PUNJAB • LOCAL & GLOBAL INQUIRIES
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>
            Initiate a Project
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto', lineHeight: 1.8 }}>
            Looking for the best web developer in Jalandhar or Punjab? Share your project vision below and we'll analyze your requirements to craft a winning digital solution.
          </p>
        </div>

        {/* Quick Contact Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '3rem'
        }}>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <MapPin color="rgba(255,140,0,1)" size={20} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>Location</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Jalandhar, Punjab 144001</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Mail color="rgba(255,140,0,1)" size={20} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>Direct Email</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>jagnoormarok@gmail.com</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Phone color="rgba(255,140,0,1)" size={20} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>Phone / WhatsApp</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>+91 9814078213</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Clock color="rgba(255,140,0,1)" size={20} style={{ flexShrink: 0 }} />
            <div>
              <div style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600 }}>Response Time</div>
              <div style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>Under 24 Hours</div>
            </div>
          </div>
        </div>
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
                Thank you for reaching out. One of our lead engineers will review your details and get back to you within 24 hours.
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
                    <option value="Custom Website Development">Custom Website Development</option>
                    <option value="React / Next.js Web App">React / Next.js Web App</option>
                    <option value="E-Commerce Platform">E-Commerce Platform</option>
                    <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                    <option value="Technical SEO & Speed Optimization">Technical SEO & Speed Optimization</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label style={labelStyle}>Budget</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} style={inputStyle} required>
                    <option value="" disabled>Select a range...</option>
                    <option value="₹15,000 - ₹25,000">₹15,000 - ₹25,000</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                    <option value="₹1,00,000+">₹1,00,000+</option>
                    <option value="Undecided">Undecided / Retainer</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label style={labelStyle}>Timeline</label>
                  <select name="timeline" value={formData.timeline} onChange={handleChange} style={inputStyle} required>
                    <option value="" disabled>Select timeline...</option>
                    <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
                    <option value="2-4 weeks">2-4 weeks</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                {/* Business Name */}
                <div>
                  <label style={labelStyle}>Business / Personal Name</label>
                  <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} style={inputStyle} required placeholder="Your Brand or Company" />
                </div>

                {/* Phone */}
                <div>
                  <label style={labelStyle}>Phone (WhatsApp)</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} placeholder="+91 9814078213" />
                </div>

                {/* Email */}
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required placeholder="you@company.com" />
                </div>
              </div>

              {/* Project Description */}
              <div>
                <label style={labelStyle}>Describe your business requirements</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}
                  required
                  placeholder="Tell us about the project goals, target audience, technical needs, and timeline..."
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
