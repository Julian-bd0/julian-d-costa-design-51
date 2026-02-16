import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-bg opacity-80" />
      </div>

      <div className="relative z-10 section-container text-center py-32">
        {/* Profile Photo */}
        <div className="animate-fade-up mb-8">
          <img
            src={profilePhoto}
            alt="Julian D Costa"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-primary-foreground/30 shadow-xl"
          />
        </div>

        <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
          Julian D Costa
        </h1>
        <p className="animate-fade-up-delay-1 text-xl md:text-2xl font-light text-primary-foreground/80 mb-2">
          Professional Graphics Designer
        </p>
        <p className="animate-fade-up-delay-2 text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8">
          Creative Branding &amp; Print Design Specialist — crafting clean, impactful,
          and purpose-driven visual identities for organizations and communities.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg border-2 border-primary-foreground/40 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
