import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, Phone } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Произошла ошибка');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Ошибка сети. Пожалуйста, попробуйте позже.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl mb-4">
              Свяжитесь со мной
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Готовы начать работу или есть вопросы? Заполните форму, и я свяжусь с вами в ближайшее время.
            </p>

            <div className="space-y-6">
              <a
                href="https://t.me/nikulenka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-xl border border-stone-200 hover:border-indigo-300 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-[#0088cc]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#0088cc]/20 transition-colors">
                  <MessageCircle className="h-6 w-6 text-[#0088cc]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500">Telegram</p>
                  <p className="text-lg font-medium text-stone-900">@nikulenka</p>
                </div>
              </a>

              <a
                href="https://wa.me/381616911648"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-xl border border-stone-200 hover:border-green-300 hover:shadow-sm transition-all group"
              >
                <div className="w-12 h-12 bg-[#25D366]/10 rounded-full flex items-center justify-center mr-4 group-hover:bg-[#25D366]/20 transition-colors">
                  <Phone className="h-6 w-6 text-[#25D366]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-500">WhatsApp</p>
                  <p className="text-lg font-medium text-stone-900">+381 61 691 1648</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-stone-200"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                  Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                  placeholder="Иван Иванов"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                  placeholder="ivan@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Опишите ваш запрос..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  'Отправка...'
                ) : (
                  <>
                    Отправить сообщение
                    <Send className="ml-2 -mr-1 h-5 w-5" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 text-green-800 rounded-xl text-sm">
                  Спасибо! Ваше сообщение успешно отправлено.
                </div>
              )}
              
              {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-800 rounded-xl text-sm">
                  {errorMessage}
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
