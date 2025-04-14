import React, { useState, useRef } from 'react';
import { Send, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    message: ''
  });
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.name.trim() || formData.name.length < 2) {
      alert('Please enter a valid name');
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return false;
    }

    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit phone number');
      return false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      alert('Please enter a message (minimum 10 characters)');
      return false;
    }

    if (!termsAgreed) {
      alert('Please agree to the Terms and Privacy Policy');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace these with your EmailJS credentials
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current!,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        message: ''
      });
      setTermsAgreed(false);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const Modal = ({ show, onClose, title, children }: { show: boolean; onClose: () => void; title: string; children: React.ReactNode }) => (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="cyber-card max-w-lg w-full"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-neon-blue">{title}</h3>
              <button
                onClick={onClose}
                className="p-1 hover:text-neon-purple transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="text-gray-300">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="cyber-title mb-4">Get in Touch</h1>
      <p className="text-gray-300 mb-8">Have a question or want to connect? Send me a message using the form below.</p>
      
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-cyber-dark border border-cyber-light rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue text-gray-100"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-cyber-dark border border-cyber-light rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue text-gray-100"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <div className="flex gap-2">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="px-4 py-2 bg-cyber-dark border border-cyber-light rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue text-gray-100"
            >
              <option value="+1">+1 USA</option>
              <option value="+44">+44 GBR</option>
              <option value="+251">+251 ETH</option>
              <option value="+91">+91 IND</option>
              <option value="+52">+52 MEX</option>
            </select>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="555-123-4567"
              className="flex-1 px-4 py-2 bg-cyber-dark border border-cyber-light rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue text-gray-100"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 bg-cyber-dark border border-cyber-light rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue text-gray-100"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={termsAgreed}
            onChange={(e) => setTermsAgreed(e.target.checked)}
            className="rounded border-cyber-light text-neon-blue focus:ring-neon-blue bg-cyber-dark"
          />
          <label htmlFor="terms" className="text-sm text-gray-300">
            I agree to the{' '}
            <button
              type="button"
              onClick={() => setShowTerms(true)}
              className="text-neon-blue hover:text-neon-purple"
            >
              Terms
            </button>
            {' '}and{' '}
            <button
              type="button"
              onClick={() => setShowPrivacy(true)}
              className="text-neon-blue hover:text-neon-purple"
            >
              Privacy Policy
            </button>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full cyber-button flex items-center justify-center"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <Send className="h-5 w-5 mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>

      <Modal
        show={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms of Service"
      >
        <div className="space-y-4">
          <p><strong>1. Acceptance:</strong> By submitting this form, you agree to these terms.</p>
          <p><strong>2. Data Use:</strong> Information will be used only for communication purposes.</p>
          <p><strong>3. No Guarantees:</strong> Submission doesn't guarantee a response.</p>
          <p><strong>4. Use Responsibly:</strong> Please use this form only for legitimate business inquiries.</p>
        </div>
      </Modal>

      <Modal
        show={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <div className="space-y-4">
          <p><strong>1. Information Collected:</strong> Name, email, phone number, and message content.</p>
          <p><strong>2. Usage:</strong> Your information will be used solely for communication purposes.</p>
          <p><strong>3. Data Storage:</strong> Information is stored securely and not shared with third parties.</p>
          <p><strong>4. Your Rights:</strong> You can request to view, modify, or delete your submitted information.</p>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;