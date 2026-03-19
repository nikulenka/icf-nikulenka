import { motion } from 'motion/react';
import { Target, Compass, Zap } from 'lucide-react';

export function About() {
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
      </div>
    </section>
  );
}
