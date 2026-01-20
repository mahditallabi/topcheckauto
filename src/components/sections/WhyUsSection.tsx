import { Zap, MessageCircle, Clock, Eye } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "السهولة",
    description: "يتنقل التقني إلى مالك السيارة، فوجودك ليس إلزاميًا حتى لو رأيت سيارة في مدينة أخرى",
  },
  {
    icon: MessageCircle,
    title: "النصائح",
    description: "يوصي التقنيون لدينا بما إذا كان بإمكانك شراء السيارة أم لا إضافة إلى الثمن المناسب لها",
  },
  {
    icon: Clock,
    title: "الجاهزية",
    description: "التقنيون لدينا على استعداد دائم للإستجابة لمطالبكم في أي وقت",
  },
  {
    icon: Eye,
    title: "الشفافية",
    description: "يقوم التقنيون لدينا المحترفون بفحص السيارة في أكثر من 150 نقطة تفتيش",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            لماذا <span className="text-accent">نحن</span>؟
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            نلتزم بتوفير تجربة شراء لسيارات المستعملة بدون أي مشاكل. فريقنا المؤهل من
            تقنيين متخصصين لمرافقتك طوال العملية، وتزويدك بمعلومات دقيقة ومفصلة حول كل
            سيارة.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-secondary rounded-2xl p-8 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
