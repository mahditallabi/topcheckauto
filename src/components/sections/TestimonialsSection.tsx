// import { Star } from "lucide-react";

// const testimonials = [
//   {
//     name: "أحمد البكري",
//     role: "زبون من الدار البيضاء",
//     content: "خدمة ممتازة وفريق محترف. ساعدوني في اكتشاف مشاكل كانت مخفية في السيارة التي كنت سأشتريها.",
//     rating: 5,
//   },
//   {
//     name: "سارة المنصوري",
//     role: "زبونة من الرباط",
//     content: "تجربة رائعة! التقني كان محترفاً جداً وشرح لي كل التفاصيل. وفرت الكثير من المال.",
//     rating: 5,
//   },
//   {
//     name: "محمد الفاسي",
//     role: "زبون من فاس",
//     content: "خدمة سريعة ودقيقة. التقرير كان مفصلاً جداً وساعدني في التفاوض على سعر أفضل.",
//     rating: 5,
//   },
//   {
//     name: "كريمة الطنجاوي",
//     role: "زبونة من طنجة",
//     content: "أفضل استثمار قبل شراء سيارة مستعملة. اكتشفوا أن السيارة تعرضت لحادث وتم إصلاحها.",
//     rating: 5,
//   },
// ];

// const TestimonialsSection = () => {
//   return (
//     <section id="testimonials" className="py-20 bg-background">
//       <div className="container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             آراء <span className="text-accent">عملائنا</span>
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed">
//             تجارب حقيقية من زبائن استفادوا من خدماتنا في مختلف مدن المغرب
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={testimonial.name}
//               className="group bg-secondary rounded-2xl p-8 text-center card-hover"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               {/* Avatar */}
//               <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
//                 <span className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
//                   {testimonial.name.charAt(0)}
//                 </span>
//               </div>

//               {/* Rating */}
//               <div className="flex justify-center gap-1 mb-4">
//                 {[...Array(testimonial.rating)].map((_, i) => (
//                   <Star key={i} className="w-4 h-4 fill-accent text-accent" />
//                 ))}
//               </div>

//               {/* Content */}
//               <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
//                 "{testimonial.content}"
//               </p>

//               {/* Author */}
//               <div>
//                 <p className="font-bold text-foreground">{testimonial.name}</p>
//                 <p className="text-sm text-muted-foreground mt-1">{testimonial.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats */}
//         <div className="mt-12 pt-8 border-t border-border">
//           <div className="text-center">
//             <p className="text-muted-foreground inline-block bg-secondary rounded-xl px-6 py-3">
//               <span className="font-bold text-accent">+98%</span> رضا العملاء •{" "}
//               <span className="font-bold text-accent">4.9/5</span> تقييم
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
'use client';

import { Star } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';

type LocalizedText = {
  ar: string;
  en: string;
};

type Testimonial = {
  name: LocalizedText;
  role: LocalizedText;
  content: LocalizedText;
  rating: number;
};

const TestimonialsSection = () => {
  const { tArray, tString, locale } = useTranslation('testimonials');

  
 const testimonials = tArray<Testimonial>('testimonials');

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span
              dangerouslySetInnerHTML={{
                __html: tString('title'),
              }}
            />
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {tString('description')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-2xl p-8 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <span className="text-2xl font-bold text-primary group-hover:text-primary-foreground transition-colors">
                  {testimonial.name[locale].charAt(0)}
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6 text-sm">
                “{testimonial.content[locale]}”
              </p>

              {/* Author */}
              <div>
                <p className="font-bold text-foreground">
                  {testimonial.name[locale]}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.role[locale]}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-muted-foreground inline-block bg-secondary rounded-xl px-6 py-3">
              <span className="font-bold text-accent">
                {tString('stats.clientSatisfaction')}
              </span>
              <span className="font-bold text-accent">
                {tString('stats.rating')}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
