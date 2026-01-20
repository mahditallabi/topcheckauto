import { Battery, Cpu, Paintbrush, Settings, Car, Shield } from "lucide-react";

const services = [
  {
    icon: Battery,
    title: "أنظمة الكهربائية",
    description: "فحص جميع الأنظمة الكهربائية (Batterie - Alternateur)",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "تشخيص السيارة",
    description: "فحص عن طريق جهاز Diagnostique متطور",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Paintbrush,
    title: "فحص الطلاء",
    description: "فحص سمك الطلاء هل أصلي أم لا باستخدام أحدث الأجهزة",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Settings,
    title: "فحص المحرك وناقل الحركة",
    description: "فحص أداء وكفاءة المحرك وناقل الحركة بدقة عالية",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Car,
    title: "هيكل السيارة",
    description: "فحص الهيكل الداخلي والخارجي والتأكد من عدم وجود حادث",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Shield,
    title: "أنظمة السلامة",
    description: "فحص أنظمة السلامة العامة (Airbag - Freinage)",
    color: "from-red-500 to-pink-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            نوفّر لزبنائنا <span className="text-accent">خدمات شاملة</span> ومميزة
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            يتم تنفيذها باحترافية عالية لتواكب تطلعات السوق المغربي وتلبي احتياجات
            ومتطلبات الزبناء لتفادي عمليات النصب
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card rounded-2xl p-8 shadow-lg card-hover overflow-hidden"
            >
              {/* Gradient accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full transition-all duration-500 group-hover:opacity-20 group-hover:scale-150`}
              />

              <div className="relative">
                <div
                  className={`w-14 h-14 mb-6 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}
                >
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Brands */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8 text-lg">خبرة في جميع ماركات السيارات</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Mercedes", "BMW", "Audi", "Toyota", "Volkswagen", "Renault", "Peugeot", "Hyundai"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-lg font-semibold text-foreground/70 hover:text-foreground transition-colors"
                >
                  {brand}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
