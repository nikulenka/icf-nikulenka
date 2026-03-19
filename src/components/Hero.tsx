import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 leading-tight mb-6">
            Раскройте свой потенциал с <span className="text-indigo-600">коучем ICF</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-lg">
            Помогаю достигать амбициозных целей, находить баланс и двигаться вперед с уверенностью и ясностью.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-sm"
            >
              Записаться на сессию
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            <a
              href="#about"
              className="inline-flex justify-center items-center px-6 py-3 border border-stone-300 text-base font-medium rounded-xl text-stone-700 bg-white hover:bg-stone-50 transition-colors shadow-sm"
            >
              Узнать больше
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden shadow-2xl relative bg-stone-200">
            {/* 
              Внимание: Загрузите ваше фото в папку public с именем profile.jpg 
              через панель файлов слева.
            */}
            <img
              src="/profile.png"
              alt="Виталий Никуленко - Коуч ICF"
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
              }}
            />
            <div className="absolute inset-0 border border-black/5 rounded-2xl"></div>
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
          <div className="absolute -top-6 -right-6 w-48 h-48 bg-amber-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}
