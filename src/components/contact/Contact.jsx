import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingInput = ({ label, name, type = 'text', value, onChange, required }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative w-full group">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        autoComplete="off"
        className="peer w-full bg-transparent border-0 border-b px-0 py-3 text-white text-base outline-none transition-colors duration-300"
        style={{
          borderColor: focused ? '#AC6AFF' : 'rgba(172,106,255,0.2)',
          caretColor: '#AC6AFF',
        }}
      />
      <label
        htmlFor={name}
        className="absolute left-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          top: isActive ? '-8px' : '12px',
          fontSize: isActive ? '11px' : '14px',
          color: focused ? '#AC6AFF' : 'rgba(255,255,255,0.35)',
          letterSpacing: isActive ? '0.12em' : '0.04em',
          textTransform: isActive ? 'uppercase' : 'none',
          fontWeight: isActive ? 600 : 400,
        }}
      >
        {label}
      </label>
      {/* Focus glow line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ background: 'linear-gradient(90deg, #AC6AFF, #FF98E2)' }}
        initial={{ width: '0%' }}
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Subtle glow under line */}
      {focused && (
        <div
          className="absolute bottom-0 left-0 right-0 h-4 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(172,106,255,0.08), transparent)',
          }}
        />
      )}
    </div>
  );
};

const FloatingTextarea = ({ label, name, value, onChange, required }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <div className="relative w-full group">
      <textarea
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows="4"
        className="peer w-full bg-transparent border-0 border-b px-0 py-3 text-white text-base outline-none resize-none transition-colors duration-300"
        style={{
          borderColor: focused ? '#AC6AFF' : 'rgba(172,106,255,0.2)',
          caretColor: '#AC6AFF',
        }}
      />
      <label
        htmlFor={name}
        className="absolute left-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          top: isActive ? '-8px' : '12px',
          fontSize: isActive ? '11px' : '14px',
          color: focused ? '#AC6AFF' : 'rgba(255,255,255,0.35)',
          letterSpacing: isActive ? '0.12em' : '0.04em',
          textTransform: isActive ? 'uppercase' : 'none',
          fontWeight: isActive ? 600 : 400,
        }}
      >
        {label}
      </label>
      <motion.div
        className="absolute bottom-0 left-0 h-px"
        style={{ background: 'linear-gradient(90deg, #AC6AFF, #FF98E2)' }}
        initial={{ width: '0%' }}
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [sending, setSending] = useState(false);

  const [formData, setFormData] = useState({
    from_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .send('service_j38b1nq', 'template_7d0z0qs', formData, {
        publicKey: 'OSOwRGBuyrs8__7vU',
      })
      .then(() => {
        setFormData({ from_name: '', user_email: '', message: '' });
        setEmailSent(true);
        setSending(false);
      })
      .catch(() => {
        setEmailError(true);
        setSending(false);
      });
  };

  const filledFields = [formData.from_name, formData.user_email, formData.message].filter(Boolean).length;

  return (
    <div
      id="contact"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0E0C15, #110A1F, #0E0C15)' }}
    >
      {/* Background ambient orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(172,106,255,0.06), transparent 70%)',
          top: '10%',
          left: '-10%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,152,226,0.05), transparent 70%)',
          bottom: '5%',
          right: '-5%',
        }}
      />

      {/* Header */}
      <motion.div
        className="text-center mb-12 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span className="inline-flex items-center gap-2 text-xs tracking-[0.35em] uppercase text-purple-400 font-medium mb-4">
          <span className="inline-block w-6 h-px bg-purple-400" />
          Get in touch
          <span className="inline-block w-6 h-px bg-purple-400" />
        </span>
        <h2
          className="text-5xl md:text-7xl font-bold"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #e8d5ff 40%, #AC6AFF 80%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Contact Me
        </h2>
      </motion.div>

      {/* Form container */}
      <motion.div
        className="relative z-10 w-full max-w-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div
          className="relative rounded-2xl p-8 md:p-10"
          style={{
            background: 'rgba(12, 8, 22, 0.6)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(172,106,255,0.12)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.5)',
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
            style={{ background: 'linear-gradient(90deg, transparent, #AC6AFF55, #FF98E244, transparent)' }}
          />

          {/* Progress bar */}
          <div className="flex gap-2 mb-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(172,106,255,0.1)' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #AC6AFF, #FF98E2)' }}
                  initial={{ width: '0%' }}
                  animate={{ width: filledFields > i ? '100%' : '0%' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {emailSent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-10 gap-6"
              >
                {/* Animated checkmark */}
                <div className="relative">
                  <motion.div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(122,219,120,0.1)',
                      border: '2px solid rgba(122,219,120,0.4)',
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <motion.svg
                      width="32" height="32" viewBox="0 0 24 24" fill="none"
                      stroke="#7ADB78" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <motion.path
                        d="M5 12l5 5L20 7"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      />
                    </motion.svg>
                  </motion.div>
                  <div
                    className="absolute inset-0 rounded-full blur-xl -z-10 opacity-20"
                    style={{ background: '#7ADB78' }}
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-sm text-white/50">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="flex flex-col gap-8"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FloatingInput
                  label="Your name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  label="Your email"
                  name="user_email"
                  type="email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                />
                <FloatingTextarea
                  label="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />

                {/* Submit button */}
                <div className="flex flex-col items-center gap-4 pt-2">
                  <motion.button
                    type="submit"
                    disabled={sending}
                    className="relative w-full py-3.5 rounded-xl font-medium text-sm tracking-wider uppercase overflow-hidden"
                    style={{
                      background: sending
                        ? 'rgba(172,106,255,0.15)'
                        : 'linear-gradient(135deg, #AC6AFF, #8B3CC4)',
                      color: '#fff',
                      border: 'none',
                      cursor: sending ? 'wait' : 'pointer',
                      boxShadow: '0 0 30px rgba(172,106,255,0.25)',
                    }}
                    whileHover={!sending ? { scale: 1.02, boxShadow: '0 0 40px rgba(172,106,255,0.4)' } : {}}
                    whileTap={!sending ? { scale: 0.98 } : {}}
                  >
                    {sending ? (
                      <motion.span
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Sending...
                      </motion.span>
                    ) : (
                      'Send Message'
                    )}
                    {/* Shimmer effect */}
                    {!sending && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                        }}
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                      />
                    )}
                  </motion.button>

                  {emailError && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-sm"
                      style={{ color: '#FF776F' }}
                    >
                      Failed to send. Please try again later.
                    </motion.p>
                  )}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Subtle glow under form */}
        <div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(172,106,255,0.08), transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </motion.div>
    </div>
  );
};

export default Contact;
