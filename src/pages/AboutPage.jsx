import { FiShoppingBag, FiTruck, FiShield, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";

function AboutUsPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Hero */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 bg-[var(--bg-secondary)] rounded-2xl p-6 md:p-10 shadow-[var(--shadow-sm)]">
        {/* Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] mt-3 leading-tight">
            We make shopping
            <br />
            <span className="text-[var(--primary)]">simple & enjoyable.</span>
          </h1>

          <p className="mt-5 text-[var(--text-secondary)] leading-7 max-w-xl">
            We believe shopping should be simple, fast, and enjoyable. Our goal
            is to help you discover quality products at great prices and enjoy a
            smooth shopping experience from start to finish.
          </p>
          <Link to="/">
            <button className="mt-7 px-6 py-3 rounded-lg bg-[var(--primary)] text-[var(--text-white)] cursor-pointer hover:opacity-90 transition">
              Start Shopping
            </button>
          </Link>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-72 md:h-96 rounded-2xl bg-[var(--bg-tertiary)] flex items-center justify-center overflow-hidden">
            <img
              src="/src/assets/images.webp"
              alt="About our store"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mt-10 bg-[var(--bg-secondary)] rounded-2xl p-6 md:p-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
            Our Story
          </h2>

          <p className="mt-4 text-[var(--text-secondary)] leading-7">
            What started as a simple idea became a place where people can
            discover products they love without the complexity of traditional
            online shopping. We are constantly working to improve our collection
            and create a better experience for our customers.
          </p>
        </div>
      </section>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border-primary)] rounded-xl p-5 hover:shadow-[var(--shadow-sm)] transition">
      <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[var(--bg-tertiary)] text-[var(--primary)] text-xl">
        {icon}
      </div>

      <h3 className="mt-4 font-semibold text-[var(--text-primary)]">{title}</h3>

      <p className="mt-2 text-sm text-[var(--text-muted)] leading-6">{text}</p>
    </div>
  );
}

export default AboutUsPage;
