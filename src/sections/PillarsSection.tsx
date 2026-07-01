import { ScrollReveal } from '../components/ScrollReveal';

const pillars = [
  {
    number: '01',
    title: 'Predictable Inbound',
    description:
      'A strategy that brings the right clients to you — consistently — without relying on word of mouth.',
  },
  {
    number: '02',
    title: 'Already Proven',
    description:
      "This isn't a new experiment. It's a working playbook, currently generating results for existing Interior Clients.",
  },
  {
    number: '03',
    title: 'Zero Risk',
    description:
      "180 days. Results guaranteed. If we don't deliver, we keep working — at no charge — until you do.",
  },
];

export function PillarsSection() {
  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delay={index * 120}>
              <div className="group bg-[#111111] border border-[#1a1a1a] rounded-2xl p-8 transition-all duration-300 hover:border-[#27272a] hover:-translate-y-0.5 h-full">
                <span className="text-[#c8f17c] text-xl font-bold tracking-tight mb-6 block">
                  {pillar.number}
                </span>
                <h3 className="text-white text-2xl font-semibold tracking-[-0.01em] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-[#a1a1aa] text-base leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
