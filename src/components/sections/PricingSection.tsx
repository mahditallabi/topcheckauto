// import { Check, Shield, Zap, Award } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const pricingPlans = [
//   {
//     name: "الباقة الأساسية",
//     price: "350",
//     description: "للفحص الأولي والتقييم العام",
//     icon: Shield,
//     features: ["فحص الهيكل الخارجي", "فحص النظام الكهربائي", "فحص المحرك والإطارات", "تقرير مفصل"],
//     popular: false,
//   },
//   {
//     name: "الباقة المتكاملة",
//     price: "550",
//     description: "الفحص الشامل الموصى به",
//     icon: Zap,
//     features: [
//       "جميع مميزات الأساسية",
//       "فحص متعمق للمحرك",
//       "اختبار القيادة 15 دقيقة",
//       "تقرير مع صور وتوصيات",
//       "دعم 7 أيام",
//     ],
//     popular: true,
//   },
//   {
//     name: "الباقة المميزة",
//     price: "800",
//     description: "فحص مكثف للمركبات الفاخرة",
//     icon: Award,
//     features: [
//       "جميع مميزات المتكاملة",
//       "فحص التعليق والفرامل",
//       "تشخيص الكمبيوتر المتقدم",
//       "اختبار قيادة 30 دقيقة",
//       "تقرير مع فيديو",
//       "دعم 30 يوماً",
//       "شهادة ضمان",
//     ],
//     popular: false,
//   },
// ];

// const PricingSection = () => {
//   return (
//     <section id="pricing" className="py-20 bg-background">
//       <div className="container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             باقات فحص <span className="text-accent">السيارات</span>
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed">
//             اختر الباقة المناسبة لسيارتك واحصل على فحص دقيق ومفصل مع فريقنا من الخبراء
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {pricingPlans.map((plan, index) => {
//             const IconComponent = plan.icon;
//             return (
//               <div
//                 key={index}
//                 className={`group bg-secondary rounded-2xl p-8 text-center card-hover ${
//                   plan.popular ? "relative border-2 border-accent shadow-xl" : ""
//                 }`}
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
//                     الأكثر طلباً
//                   </div>
//                 )}

//                 {/* Icon */}
//                 <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
//                   <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
//                 </div>

//                 {/* Title & Description */}
//                 <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
//                 <p className="text-muted-foreground mb-6">{plan.description}</p>

//                 {/* Price */}
//                 <div className="mb-8">
//                   <div className="flex items-baseline justify-center gap-2">
//                     <span className="text-4xl font-bold text-foreground">{plan.price}</span>
//                     <span className="text-lg text-muted-foreground">درهم</span>
//                   </div>
//                 </div>

//                 {/* Features */}
//                 <ul className="space-y-3 mb-8 text-right">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start gap-3">
//                       <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <Check className="w-3 h-3 text-accent" />
//                       </div>
//                       <span className="text-foreground/90 text-sm">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Button */}
//                 <Button
//                   asChild
//                   className={`w-full rounded-xl font-semibold py-6 ${
//                     plan.popular
//                       ? "bg-accent hover:bg-accent/90"
//                       : "bg-primary hover:bg-primary/90"
//                   }`}
//                 >
//                   <a
//                     href="https://wa.me/212699581184"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {plan.popular ? "اختر هذه الباقة" : "اختر الباقة"}
//                   </a>
//                 </Button>
//               </div>
//             );
//           })}
//         </div>

//         {/* Note */}
//         <div className="mt-12 text-center">
//           <p className="text-muted-foreground inline-block bg-secondary rounded-xl px-6 py-3">
//             <span className="font-bold text-accent">ملاحظة:</span> الأسعار تشمل الضريبة 
//             ويمكن أن تختلف حسب نوع السيارة والموقع.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PricingSection;
'use client';

import { Check, Shield, Zap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { useEffect, useState } from "react";
import { getPricing, PricingData } from "@/api/pricing";

const PricingSection = ({ onSelectPackage }) => {
  const { t, locale } = useTranslation('pricing');
  const lang = locale.startsWith('ar') ? 'ar' : 'en';
  const [pricing, setPricing] = useState<PricingData | null>(null);

  useEffect(() => {
    getPricing(lang).then((data) => {
      console.log('PRICING FROM SANITY:', data);
      setPricing(data);
    });
  }, [lang]);

  const pricingPlans =
    pricing?.packages ??
    [
      {
        key: 'basic',
        icon: 'shield',
        name: t('packages.basic.name'),
        description: t('packages.basic.description'),
        price: null,
        popular: false,
        features: "",
      },
      {
        key: 'standard',
        icon: 'zap',
        name: t('packages.standard.name'),
        description: t('packages.standard.description'),
        price: null,
        popular: true,
        features: "",
      },
      {
        key: 'premium',
        icon: 'award',
        name: t('packages.premium.name'),
        description: t('packages.premium.description'),
        price: null,
        popular: false,
        features: "",
      },
    ];

  const ICONS_MAP = {
    shield: Shield,
    zap: Zap,
    award: Award,
  };

  if (!pricing) {
    return (
      <section className="py-20 text-center">
        <p className="text-muted-foreground">
          {locale.startsWith('ar') ? 'جارٍ تحميل الباقات...' : 'Loading pricing...'}
        </p>
      </section>
    );
  }

  // دالة لتخزين الباقة المختارة والانتقال للنموذج
const handleSelectPackage = (plan) => {
  onSelectPackage(plan.key); // basic | standard | premium

  const contactSection = document.getElementById('formcontact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span dangerouslySetInnerHTML={{ __html: t('title') }} />
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => {
            const IconComponent = ICONS_MAP[plan.icon] ?? Shield;
            return (
              <div
                key={index}
                className={`group bg-secondary rounded-2xl p-8 text-center card-hover ${
                  plan.popular ? "relative border-2 border-accent shadow-xl" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {t('packages.standard.popular')}
                  </div>
                )}

                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-lg text-muted-foreground">{t('price.currency')}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 text-right">
                  {Array.isArray(plan.features) && plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground/90 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button - تم التعديل هنا */}
                <Button
                  onClick={() => handleSelectPackage(plan)}
                  className={`w-full rounded-xl font-semibold py-6 ${
                    plan.popular
                      ? "bg-accent hover:bg-accent/90"
                      : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {plan.popular ? t('price.selectPopularButton') : t('price.selectButton')}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground inline-block bg-secondary rounded-xl px-6 py-3">
            <span dangerouslySetInnerHTML={{ __html: t('note') }} />
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
