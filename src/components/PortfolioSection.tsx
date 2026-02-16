import { useState } from "react";

const categories = ["All", "Logo", "Branding", "Print", "Social Media"];

const works = [
  { title: "Archdiocese Logo Redesign", cat: "Logo", color: "from-primary to-primary-light" },
  { title: "Youth Org Brand Identity", cat: "Branding", color: "from-primary-light to-primary" },
  { title: "Event Banner Series", cat: "Print", color: "from-primary-dark to-primary" },
  { title: "Social Media Campaign", cat: "Social Media", color: "from-primary to-primary-dark" },
  { title: "Certificate Template", cat: "Print", color: "from-primary-light to-primary-dark" },
  { title: "Community Brochure", cat: "Print", color: "from-primary-dark to-primary-light" },
];

const PortfolioSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? works : works.filter((w) => w.cat === active);

  return (
    <section id="portfolio" className="section-padding bg-secondary">
      <div className="section-container text-center">
        <h2 className="section-title">Selected Works</h2>
        <div className="blue-divider" />

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "gradient-bg text-primary-foreground"
                  : "bg-background text-muted-foreground hover:text-primary border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {filtered.map((work, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${work.color} opacity-90`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-primary-foreground">
                <h3 className="font-semibold text-lg">{work.title}</h3>
                <span className="mt-2 text-sm text-primary-foreground/70">
                  {work.cat}
                </span>
              </div>
              <div className="absolute inset-0 bg-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
