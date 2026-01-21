import { Play, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import bg from "@/assets/bg.png";
import auto from "@/assets/auto.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden"
    >
      {/* Background */}
      {/* <div className="absolute inset-0 hero-gradient" /> */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `
linear-gradient(
  135deg,
  rgba(15, 76, 129, 0.65),
  rgba(15, 76, 129, 0.45)
)

,
      url(${bg})
    ` }}
      />
      
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              هل تريد شراء{" "}
              <span className="text-accent">سيارة مستعملة</span>؟
            </h1>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              لكن ليس لديك الخبرة في فحص السيارات المستعملة؟ إتصل الان لحجز موعد مع
              أحد التقنيين لدينا، واحصل على تقرير شامل ومفصل قبل الشراء واترك
              المسؤولية لنا.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-lg"
              >
                <a
                  href="https://wa.me/212699581184"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  طلب الخدمة
                  <ArrowLeft className="w-5 h-5 mr-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-lg"
              >
                <a
                  href="https://fb.watch/qSGpIxcuyo/?mibextid=w8EBqM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-5 h-5 ml-2" />
                  فيديو توضيحي
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">+150</div>
                <div className="text-sm opacity-80">نقطة فحص</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">+1000</div>
                <div className="text-sm opacity-80">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">+6</div>
                <div className="text-sm opacity-80">مدن مغطاة</div>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="hidden lg:block animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" />
              <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/20">
                {/* <div className="aspect-video bg-gradient-to-br from-primary-foreground/20 to-transparent rounded-2xl flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 mx-auto bg-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-primary-foreground text-xl font-semibold">فحص شامل ومعتمد</p>
                    <p className="text-primary-foreground/70">أكثر من 150 نقطة تفتيش</p>
                  </div>
                </div> */}
                <div className="aspect-video rounded-2xl overflow-hidden relative">
  <img
    src={auto}
    alt="فحص السيارة"
    className="w-full h-full object-cover"
  />

  {/* Overlay خفيف باش يبقى النص واضح */}
  <div className="absolute inset-0 bg-[#0F4C81]/0" />

  {/* المحتوى */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
        <svg
          className="w-10 h-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>

      <p className="text-white text-xl font-semibold">
        فحص شامل ومعتمد
      </p>
      <p className="text-white/80">
        أكثر من 150 نقطة تفتيش
      </p>
    </div>
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
