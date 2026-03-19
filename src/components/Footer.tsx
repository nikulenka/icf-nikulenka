export function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-semibold tracking-tight text-stone-900">
            Виталий Никуленко <span className="text-indigo-600 text-sm">Коуч ICF</span>
          </span>
          <p className="text-sm text-stone-500 mt-1">
            Профессиональный коучинг по стандартам ICF
          </p>
        </div>
        <div className="text-sm text-stone-500">
          &copy; {new Date().getFullYear()} Все права защищены.
        </div>
      </div>
    </footer>
  );
}
