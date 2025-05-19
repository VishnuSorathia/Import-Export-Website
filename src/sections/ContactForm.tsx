"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ChevronRight, AlertCircle, CheckCircle, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function ContactForm() {
  const { resolvedTheme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    phone: false,
    inquiry: false,
    message: false
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    inquiry: false,
    message: false
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    inquiry: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFocus = (field: string) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    if (!formData[field as keyof typeof formData]) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
    validateField(field as keyof typeof errors);
  };

  const validateField = (field: keyof typeof errors) => {
    let errorMessage = '';
    switch (field) {
      case 'name':
        if (!formData.name) errorMessage = 'Name is required';
        break;
      case 'email':
        if (!formData.email) {
          errorMessage = 'Email is required';
        } else if (!validateEmail(formData.email)) {
          errorMessage = 'Please enter a valid email';
        }
        break;
      case 'inquiry':
        if (!formData.inquiry) errorMessage = 'Please select an inquiry type';
        break;
      case 'message':
        if (!formData.message) errorMessage = 'Message is required';
        break;
    }
    setErrors(prev => ({ ...prev, [field]: errorMessage }));
    return !errorMessage;
  };

  const resetForm = () => {
    setFormStatus('idle');
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiry: '',
      message: ''
    });
    setFocused({
      name: false,
      email: false,
      phone: false,
      inquiry: false,
      message: false
    });
    setTouched({
      name: false,
      email: false,
      inquiry: false,
      message: false
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTouched = {
      name: true,
      email: true,
      inquiry: true,
      message: true
    };
    setTouched(newTouched);

    let formIsValid = true;
    Object.keys(newTouched).forEach(field => {
      const isValid = validateField(field as keyof typeof errors);
      if (!isValid) formIsValid = false;
    });

    if (!formIsValid) return;

    setFormStatus('submitting');

    // Simulated form submission
    setTimeout(() => {
      if (Math.random() > 0.2) {
        setFormStatus('success');
        resetForm();
      } else {
        setFormStatus('error');
      }
    }, 1500);
  };

  return (
    <section id="contact" className="relative bg-gray-50 dark:bg-gray-900"> {/* Removed py-24 md:py-32 */}
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-gray-300 to-gray-500 dark:from-gray-700 dark:to-gray-600"></div>
      <div className="absolute top-1/4 -left-64 w-96 h-96 rounded-full bg-gradient-to-r from-gray-200/20 to-gray-300/20 dark:from-gray-800/20 dark:to-gray-700/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 rounded-full bg-gradient-to-r from-gray-300/20 to-gray-400/20 dark:from-gray-700/20 dark:to-gray-600/20 blur-3xl"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block font-medium text-gray-600 dark:text-gray-400 text-lg mb-4"
          >
            Contact Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Have questions about our services? Reach out to our team and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Contact Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-xl max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-12 text-white">
              <div className="relative h-full">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-black/10 blur-3xl translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-10">Contact Information</h3>

                  <div className="space-y-8 mb-12">
                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Our Location</h4>
                        <p className="text-white/80">Global Trade & Co Headquarters</p>
                        <p className="text-white/80">Mumbai, India</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-white/80">+91 22 1234 5678</p>
                        <p className="text-white/80">+91 98765 43210</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <div className="p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-white/80">info@malaxmiandco.com</p>
                        <p className="text-white/80">support@malaxmiandco.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <h4 className="font-semibold mb-4">Follow Us</h4>
                    <div className="flex gap-3">
                      {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
                        <a
                          key={social}
                          href="#"
                          className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
                          aria-label={social}
                        >
                          {social === 'facebook' && <Facebook className="w-5 h-5" />}
                          {social === 'twitter' && <Twitter className="w-5 h-5" />}
                          {social === 'linkedin' && <Linkedin className="w-5 h-5" />}
                          {social === 'instagram' && <Instagram className="w-5 h-5" />}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12 bg-white dark:bg-gray-800">
              <div className="relative h-full">
                <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">Send a Message</h3>

                {/* Form Status Messages */}
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gray-100 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-600 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">Message sent successfully!</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={resetForm}
                        className="ml-auto p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                        aria-label="Close"
                      >
                        <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-gray-100 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-600 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-gray-100">Something went wrong</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Please try again or contact us directly.
                        </p>
                      </div>
                      <button
                        onClick={() => setFormStatus('idle')}
                        className="ml-auto p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors"
                        aria-label="Close"
                      >
                        <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      </button>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none ${
                          focused.name || formData.name
                            ? 'transform -translate-y-3 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                            : 'top-3 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={() => handleBlur('name')}
                        className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg outline-none transition-all ${
                          errors.name && touched.name
                            ? 'ring-2 ring-gray-500 focus:ring-2 focus:ring-gray-500'
                            : focused.name
                              ? 'ring-2 ring-gray-600 dark:ring-gray-400'
                              : 'ring-1 ring-gray-300 dark:ring-gray-600'
                        } ${focused.name || formData.name ? 'pt-5 pb-2' : 'py-3'}`}
                        required
                      />
                      {errors.name && touched.name && (
                        <p className="text-gray-700 dark:text-gray-300 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <label
                        htmlFor="email"
                        className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none ${
                          focused.email || formData.email
                            ? 'transform -translate-y-3 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                            : 'top-3 text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg outline-none transition-all ${
                          errors.email && touched.email
                            ? 'ring-2 ring-gray-500 focus:ring-2 focus:ring-gray-500'
                            : focused.email
                              ? 'ring-2 ring-gray-600 dark:ring-gray-400'
                              : 'ring-1 ring-gray-300 dark:ring-gray-600'
                        } ${focused.email || formData.email ? 'pt-5 pb-2' : 'py-3'}`}
                        required
                      />
                      {errors.email && touched.email && (
                        <p className="text-gray-700 dark:text-gray-300 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none ${
                        focused.phone || formData.phone
                          ? 'transform -translate-y-3 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                          : 'top-3 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => handleFocus('phone')}
                      onBlur={() => handleBlur('phone')}
                      className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg outline-none transition-all ${
                        focused.phone
                          ? 'ring-2 ring-gray-600 dark:ring-gray-400'
                          : 'ring-1 ring-gray-300 dark:ring-gray-600'
                      } ${focused.phone || formData.phone ? 'pt-5 pb-2' : 'py-3'}`}
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="relative">
                    <label
                      htmlFor="inquiry"
                      className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none ${
                        focused.inquiry || formData.inquiry
                          ? 'transform -translate-y-3 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                          : 'top-3 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      Type of Inquiry
                    </label>
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                      onFocus={() => handleFocus('inquiry')}
                      onBlur={() => handleBlur('inquiry')}
                      className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg outline-none appearance-none transition-all ${
                        errors.inquiry && touched.inquiry
                          ? 'ring-2 ring-gray-500 focus:ring-2 focus:ring-gray-500'
                          : focused.inquiry
                            ? 'ring-2 ring-gray-600 dark:ring-gray-400'
                            : 'ring-1 ring-gray-300 dark:ring-gray-600'
                      } ${focused.inquiry || formData.inquiry ? 'pt-5 pb-2' : 'py-3'}`}
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option value="import">OCC Import</option>
                      <option value="export">OCC Export</option>
                      <option value="highsea">High-Sea Sales</option>
                      <option value="logistics">Shipping & Logistics</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                    {errors.inquiry && touched.inquiry && (
                      <p className="text-gray-700 dark:text-gray-300 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.inquiry}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className={`absolute left-3 px-1 transition-all duration-200 pointer-events-none ${
                        focused.message || formData.message
                          ? 'transform -translate-y-3 text-xs bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                          : 'top-3 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      rows={4}
                      className={`w-full px-4 py-3 bg-gray-100 dark:bg-gray-700/50 rounded-lg outline-none resize-none transition-all ${
                        errors.message && touched.message
                          ? 'ring-2 ring-gray-500 focus:ring-2 focus:ring-gray-500'
                          : focused.message
                            ? 'ring-2 ring-gray-600 dark:ring-gray-400'
                            : 'ring-1 ring-gray-300 dark:ring-gray-600'
                      } ${focused.message || formData.message ? 'pt-5 pb-2' : 'py-3'}`}
                      required
                    ></textarea>
                    {errors.message && touched.message && (
                      <p className="text-gray-700 dark:text-gray-300 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    whileHover={{ scale: formStatus === 'submitting' ? 1 : 1.02 }}
                    whileTap={{ scale: formStatus === 'submitting' ? 1 : 0.98 }}
                    className={`w-full py-4 px-6 rounded-lg text-white font-medium transition-all duration-300 ${
                      formStatus === 'submitting'
                        ? 'bg-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 shadow-md hover:shadow-xl'
                    }`}
                  >
                    {formStatus === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-xl overflow-hidden shadow-lg h-96 relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.895492512903!2d72.83399231485473!3d19.07598378709893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c8e8e8e8e8%3A0x7f8c9c8e8e8e8e8!2sMa%20Laxmi%20%26%20Co%20Headquarters!5e0!3m2!1sen!2sin!4v1637823456789!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
