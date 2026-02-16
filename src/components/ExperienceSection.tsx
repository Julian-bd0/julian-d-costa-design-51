import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="section-container text-center">
        <h2 className="section-title">Professional Experience</h2>
        <div className="blue-divider" />

        {/* Timeline */}
        <div className="max-w-2xl mx-auto mt-12">
          <div className="relative pl-8 border-l-2 border-primary/30">
            {/* Timeline dot */}
            <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full gradient-bg flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>

            <div className="text-left pb-4">
              <span className="text-sm font-semibold text-primary">
                2023 – Present
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-1">
                Graphics Designer
              </h3>
              <p className="text-muted-foreground text-sm mt-0.5">
                Chattogram Catholic Archdiocese
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mt-3">
                Working on branding materials, youth organization visuals, event
                banners, certificates, and promotional designs. Contributing to
                organizational identity and community outreach through
                purpose-driven visual design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
