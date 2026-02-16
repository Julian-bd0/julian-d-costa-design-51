import { Crown, Palette, Share2 } from "lucide-react";

const services = [
  {
    icon: Crown,
    title: "Logo Design",
    desc: "Professional and memorable logo creation tailored to brand identity.",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Complete branding solutions including visual identity systems.",
  },
  {
    icon: Share2,
    title: "Social Media Design",
    desc: "Creative and engaging designs for social media platforms.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container text-center">
        <h2 className="section-title">Services I Offer</h2>
        <div className="blue-divider" />
        <p className="section-subtitle mt-4">
          Focused design services to elevate your brand.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-elevated p-8 text-center group"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-5 text-primary-foreground">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
