import { Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Inspection complète de la carrosserie et de l'intérieur",
  "Inspection complète des systèmes électroniques",
  "Contrôle approfondi du moteur et de la transmission, avec analyse des fluides",
  "Test de conduite pour analyser la tenue de route et les bruits éventuels",
];

const cities = [
  "الدار البيضاء",
  "الرباط",
  "طنجة",
  "مراكش",
  "فاس",
  "أكادير",
  "مكناس",
  "وجدة",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Pricing Card */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card rounded-3xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-primary text-primary-foreground p-8 text-center">
                <p className="text-lg opacity-80 mb-2">A partir de</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-6xl font-bold">350</span>
                  <span className="text-2xl">DH</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6 text-center">
                  Nos Services :
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3" dir="ltr">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  className="w-full mt-8 whatsapp-btn rounded-full text-lg"
                >
                  <a
                    href="https://wa.me/212699581184"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contactez-nous
                    <ArrowLeft className="w-5 h-5 mr-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Cities */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              نغطي جميع <span className="text-accent">المدن المغربية</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              فريقنا من التقنيين المحترفين متواجدون في جميع أنحاء المملكة المغربية
              لتقديم خدمة فحص السيارات في موقعك.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {cities.map((city) => (
                <div
                  key={city}
                  className="bg-secondary rounded-xl p-4 text-center font-semibold text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                >
                  {city}
                </div>
              ))}
            </div>

            <p className="mt-6 text-muted-foreground text-center">
              والمزيد من المدن والمناطق المحيطة...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
