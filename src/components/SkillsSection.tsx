import { Paintbrush, Layers, PenTool, Printer } from "lucide-react";

const skills = [
  { icon: PenTool, name: "Adobe Illustrator", desc: "Vector graphics & logo design" },
  { icon: Paintbrush, name: "Adobe Photoshop", desc: "Photo editing & compositing" },
  { icon: Layers, name: "Branding", desc: "Visual identity systems" },
  { icon: Printer, name: "Print Design", desc: "Brochures, banners & more" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary">
      <div className="section-container text-center">
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <div className="blue-divider" />
        <p className="section-subtitle mt-4">
          Tools and disciplines I use to bring ideas to life.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="card-elevated p-6 flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <skill.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-sm">{skill.name}</h3>
              <p className="text-muted-foreground text-xs mt-1">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
