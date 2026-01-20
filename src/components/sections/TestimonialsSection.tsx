import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "أحمد البكري",
    role: "زبون من الدار البيضاء",
    content: "خدمة ممتازة وفريق محترف. ساعدوني في اكتشاف مشاكل كانت مخفية في السيارة التي كنت سأشتريها. أنصح الجميع بهذه الخدمة.",
    rating: 5,
  },
  {
    name: "سارة المنصوري",
    role: "زبونة من الرباط",
    content: "تجربة رائعة! التقني كان محترفاً جداً وشرح لي كل التفاصيل. وفرت الكثير من المال بفضل تقريرهم الشامل.",
    rating: 5,
  },
  {
    name: "محمد الفاسي",
    role: "زبون من فاس",
    content: "خدمة سريعة ودقيقة. التقرير كان مفصلاً جداً وساعدني في التفاوض على سعر أفضل. شكراً لفريق ExpertAuto!",
    rating: 5,
  },
  {
    name: "كريمة الطنجاوي",
    role: "زبونة من طنجة",
    content: "أفضل استثمار قبل شراء سيارة مستعملة. اكتشفوا أن السيارة تعرضت لحادث وتم إصلاحها. نجوني من خسارة كبيرة!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            ماذا يقول <span className="text-accent">عملاؤنا</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            آراء حقيقية من زبناء استفادوا من خدماتنا
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-lg card-hover relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 left-6 w-10 h-10 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
