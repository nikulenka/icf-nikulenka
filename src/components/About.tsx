import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Compass, Zap, Award, ChevronDown } from 'lucide-react';

export function About() {
  const [isCertOpen, setIsCertOpen] = useState(false);
  const features = [
    {
      icon: <Target className="h-6 w-6 text-indigo-600" />,
      title: 'Фокус на результат',
      description: 'Работаем над конкретными целями, создавая пошаговый план их достижения.'
    },
    {
      icon: <Compass className="h-6 w-6 text-indigo-600" />,
      title: 'Ясность и осознанность',
      description: 'Помогаю увидеть ситуацию под новым углом и найти скрытые ресурсы.'
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-600" />,
      title: 'Стандарты ICF',
      description: 'Строгая конфиденциальность, этика и профессиональный подход к каждой сессии.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl mb-4">
            Профессиональный коучинг
          </h2>
          <p className="text-lg text-stone-600">
            Как сертифицированный коуч ICF, я создаю безопасное и поддерживающее пространство для вашего роста. Моя задача — помочь вам найти собственные ответы и раскрыть внутренний потенциал.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-stone-50 rounded-2xl p-8 border border-stone-100"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <button
            onClick={() => setIsCertOpen(!isCertOpen)}
            className="w-full flex items-center justify-between p-6 bg-stone-50 rounded-2xl border border-stone-200 hover:border-indigo-200 transition-colors text-left"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium text-stone-900">
                Сертификат Professional Coach of International Level (ICF Level 2)
              </span>
            </div>
            <motion.div
              animate={{ rotate: isCertOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0 ml-4"
            >
              <ChevronDown className="w-5 h-5 text-stone-400" />
            </motion.div>
          </button>

          <AnimatePresence>
            {isCertOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 mt-4 bg-white rounded-2xl border border-stone-100 shadow-sm">
                  <img
                    src="/certificate.png"
                    alt="Сертификат ICF Level 2"
                    className="w-full h-auto rounded-lg border border-stone-100"
                  />
                  <p className="text-sm text-stone-500 mt-4 text-center">
                    European Coaching University • 150 часов обучения
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
