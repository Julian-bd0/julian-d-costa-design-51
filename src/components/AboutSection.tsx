import profilePhoto from "@/assets/profile-photo.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={profilePhoto}
                alt="Julian D Costa"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl gradient-bg opacity-20 -z-10" />
          </div>

          {/* Text */}
          <div>
            <h2 className="section-title">About Me</h2>
            <div className="blue-divider !mx-0" />

            <p className="mt-6 text-muted-foreground leading-relaxed">
              Julian is a <span className="font-semibold text-primary">Graphics Designer</span> experienced
              in <span className="font-semibold text-primary">logo design</span>, brochures, banners,
              certificates, and social media design.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              He currently serves as a <span className="font-semibold text-primary">Graphics Designer
              at Chattogram Catholic Archdiocese</span> (2023–Present), contributing to organizational
              branding and youth initiatives.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-secondary border border-border">
              <h3 className="font-semibold text-foreground mb-1">Educational Background</h3>
              <p className="text-muted-foreground text-sm">
                Honours in Management — National University
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
