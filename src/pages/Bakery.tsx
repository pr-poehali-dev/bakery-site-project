import React from "react";

const Bakery = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-800 to-amber-700 text-white py-4 shadow-lg">
        <div className="max-w-6xl mx-auto px-5 flex justify-between items-center">
          <div className="logo">
            <h1 className="text-3xl font-bold text-white mb-0">
              🌾 Золотой Колос
            </h1>
            <p className="text-sm opacity-90 -mt-1">Пекарня с душой</p>
          </div>
          <nav>
            <ul className="flex gap-8">
              <li>
                <a
                  href="#home"
                  className="hover:bg-white/20 px-4 py-2 rounded-full transition-all"
                >
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:bg-white/20 px-4 py-2 rounded-full transition-all"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:bg-white/20 px-4 py-2 rounded-full transition-all"
                >
                  Товары
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:bg-white/20 px-4 py-2 rounded-full transition-all"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-b from-amber-50 to-amber-100 py-16 text-center"
      >
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-5xl font-bold text-amber-900 mb-4">
            Свежая выпечка каждый день
          </h2>
          <p className="text-xl text-amber-700 mb-8">
            Традиционные рецепты, натуральные ингредиенты и любовь в каждом
            изделии
          </p>
          <a
            href="#products"
            className="inline-block bg-amber-800 text-white px-8 py-3 rounded-full font-bold hover:bg-amber-700 transition-all hover:-translate-y-1 shadow-lg"
          >
            Посмотреть товары
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">
            О нашей пекарне
          </h2>
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-lg text-amber-700 mb-8">
              Пекарня "Золотой Колос" работает уже более 20 лет, радуя жителей
              города свежей и вкусной выпечкой. Мы используем только натуральные
              ингредиенты и проверенные временем рецепты.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                🥖 Традиционные рецепты
              </h3>
              <p className="text-gray-600">
                Секреты мастерства передаются из поколения в поколение
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                🌱 Натуральные продукты
              </h3>
              <p className="text-gray-600">
                Только качественные ингредиенты от проверенных поставщиков
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:-translate-y-2 transition-all">
              <h3 className="text-xl font-bold text-amber-900 mb-3">
                ⏰ Свежесть каждый день
              </h3>
              <p className="text-gray-600">
                Выпечка готовится ежедневно с раннего утра
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">
            Наши товары
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🍞",
                title: "Хлеб",
                desc: "Белый, черный, цельнозерновой",
                price: "от 45 руб.",
              },
              {
                icon: "🥐",
                title: "Круассаны",
                desc: "Классические и с начинками",
                price: "от 65 руб.",
              },
              {
                icon: "🧁",
                title: "Кексы",
                desc: "Различные вкусы и размеры",
                price: "от 35 руб.",
              },
              {
                icon: "🍰",
                title: "Торты",
                desc: "На заказ и готовые",
                price: "от 850 руб.",
              },
              {
                icon: "🥧",
                title: "Пироги",
                desc: "Сладкие и соленые",
                price: "от 120 руб.",
              },
              {
                icon: "🍪",
                title: "Печенье",
                desc: "Домашнее, различные виды",
                price: "от 25 руб.",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-amber-50 p-8 rounded-2xl text-center hover:-translate-y-2 hover:border-amber-800 border-2 border-transparent transition-all"
              >
                <div className="text-5xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-amber-700 mb-4">{product.desc}</p>
                <span className="text-lg font-bold text-amber-800">
                  {product.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-b from-amber-100 to-amber-200"
      >
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-bold text-center text-amber-900 mb-8">
            Контакты
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                📍 Адрес
              </h3>
              <p className="text-gray-600">
                ул. Хлебная, д. 15
                <br />
                г. Москва, 123456
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                📞 Телефон
              </h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                🕒 Время работы
              </h3>
              <p className="text-gray-600">Пн-Вс: 7:00 - 21:00</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-lg font-bold text-amber-900 mb-3">
                ✉️ Email
              </h3>
              <p className="text-gray-600">info@zolotoykolos.ru</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-5">
          <p>&copy; 2024 Пекарня "Золотой Колос". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Bakery;
