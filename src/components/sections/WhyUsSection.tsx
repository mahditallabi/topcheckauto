// import { Zap, MessageCircle, Clock, Eye, Shield, Users, Award, CheckCircle } from "lucide-react";

// // أو استخدم import صورة عادية إذا لم تكن تستخدم Next.js

// // إذا كنت لا تستخدم Next.js، استبدل Image بـ img وأضف src للصورة
// import expert from "@/assets/expert.png"; // ضع رابط الصورة هنا

// const features = [
//   {
//     icon: Zap,
//     title: "السهولة",
//     description: "يتنقل التقني إلى مالك السيارة، فوجودك ليس إلزاميًا حتى لو رأيت سيارة في مدينة أخرى",
//   },
//   {
//     icon: MessageCircle,
//     title: "النصائح",
//     description: "يوصي التقنيون لدينا بما إذا كان بإمكانك شراء السيارة أم لا إضافة إلى الثمن المناسب لها",
//   },
//   {
//     icon: Clock,
//     title: "الجاهزية",
//     description: "التقنيون لدينا على استعداد دائم للإستجابة لمطالبكم في أي وقت",
//   },
//   {
//     icon: Eye,
//     title: "الشفافية",
//     description: "يقوم التقنيون لدينا المحترفون بفحص السيارة في أكثر من 150 نقطة تفتيش",
//   },
// ];

// const WhyUsSection = () => {
//   return (
//     <section id="why-us" className="py-20 bg-background">
//       <div className="container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             لماذا <span className="text-accent">نحن</span>؟
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed">
//             نلتزم بتوفير تجربة شراء لسيارات المستعملة بدون أي مشاكل. فريقنا المؤهل من
//             تقنيين متخصصين لمرافقتك طوال العملية، وتزويدك بمعلومات دقيقة ومفصلة حول كل
//             سيارة.
//           </p>
//         </div>

//         {/* Main Content - Image Left, Info Right */}
//         <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
//           {/* Image Section */}
//           <div className="relative group">
//             {/* Decorative Elements */}
//             <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
//             {/* Main Image Container */}
//             <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
//               {/* إذا كنت تستخدم Next.js */}
// <img
//   src={expert}
//   alt="خدمة فحص السيارات"
//   className="w-full h-auto object-cover"
// />

              


//               {/* Overlay Badge */}
//               <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
//                 منذ 2018
//               </div>
//             </div>

//             {/* Stats on Image */}
//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-2xl p-6 shadow-xl border border-border w-4/5">
//               <div className="grid grid-cols-3 gap-4">
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-accent">+5</div>
//                   <div className="text-sm text-muted-foreground">سنوات خبرة</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-accent">+1000</div>
//                   <div className="text-sm text-muted-foreground">عميل</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-bold text-accent">96%</div>
//                   <div className="text-sm text-muted-foreground">دقة</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Info Section */}
//           <div className="space-y-8">
//             <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-border">
//               <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
//                 <Shield className="w-8 h-8 text-accent" />
//                 مهمتنا ورؤيتنا
//               </h3>
//               <p className="text-muted-foreground leading-relaxed mb-6">
//                 نهدف إلى جعل سوق السيارات المستعملة أكثر أمانًا وشفافية للمشترين.
//                 نحن نؤمن بأن كل مشتري سيارة يستحق أن يعرف الحقيقة الكاملة عن المركبة
//                 قبل اتخاذ قرار الشراء.
//               </p>
              
//               <div className="space-y-4">
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
//                   <span className="text-foreground">فريق من التقنيين المعتمدين</span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
//                   <span className="text-foreground">أحدث أجهزة التشخيص</span>
//                 </div>
//                 <div className="flex items-start gap-3">
//                   <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
//                   <span className="text-foreground">خدمة في جميع أنحاء المغرب</span>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               <div className="bg-card rounded-2xl p-6 text-center border border-border hover:border-accent transition-colors">
//                 <Award className="w-12 h-12 text-accent mx-auto mb-4" />
//                 <h4 className="font-bold text-foreground mb-2">جودة عالية</h4>
//                 <p className="text-sm text-muted-foreground">
//                   أعلى معايير الجودة في الفحص
//                 </p>
//               </div>
              
//               <div className="bg-card rounded-2xl p-6 text-center border border-border hover:border-accent transition-colors">
//                 <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
//                 <h4 className="font-bold text-foreground mb-2">ضمان الخدمة</h4>
//                 <p className="text-sm text-muted-foreground">
//                   تقارير مضمونة ودقيقة
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Features Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={feature.title}
//               className="group bg-secondary rounded-2xl p-8 text-center card-hover"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
//                 <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
//               <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyUsSection;
'use client';

import {
  Zap,
  MessageCircle,
  Clock,
  Eye,
  Shield,
  Award,
  CheckCircle,
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { urlFor } from '@/lib/sanityImage'
import { getHero, HeroData } from "@/api/hero";
import { useEffect, useState } from "react";

type Feature = {
  title: string;
  description: string;
};

const WhyUsSection = () => {
  const { tString, tArray,locale } = useTranslation('whyUs');
      // 🟢 Hero من Sanity
  const [hero, setHero] = useState<HeroData | null>(null);

useEffect(() => {
  getHero(locale).then((data) => {
    console.log('HERO FROM SANITY:', data);
    setHero(data);
  });
}, [locale]);
  const missionPoints = tArray<string>('mission.points');
  const features = tArray<Feature>('features');
  const imageUrl = hero?.image
   ? urlFor(hero.image).width(1000).height(400).quality(80).url()
   : "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80";

  return (
    <section id="why-us" className="py-20 bg-background">
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src={imageUrl}
                alt="خدمة فحص السيارات"
                className="w-full h-[400px] object-contain"
              />

              <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                منذ 2018
              </div>
            </div>

            {/* Stats */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card rounded-2xl p-6 shadow-xl border border-border w-4/5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-accent">+5</div>
                  <div className="text-sm text-muted-foreground">
                    {tString('stats.experience')}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">+1000</div>
                  <div className="text-sm text-muted-foreground">
                    {tString('stats.clients')}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">96%</div>
                  <div className="text-sm text-muted-foreground">
                    {tString('stats.accuracy')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-accent" />
                {tString('mission.title')}
              </h3>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {tString('mission.description')}
              </p>

              <div className="space-y-4">
                {missionPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 text-center border border-border hover:border-accent transition-colors">
                <Award className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">
                  {tString('qualityCards.highQuality.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {tString('qualityCards.highQuality.description')}
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 text-center border border-border hover:border-accent transition-colors">
                <Shield className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="font-bold text-foreground mb-2">
                  {tString('qualityCards.serviceGuarantee.title')}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {tString('qualityCards.serviceGuarantee.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-secondary rounded-2xl p-8 text-center card-hover"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                {index === 0 && <Zap className="w-8 h-8 text-primary" />}
                {index === 1 && <MessageCircle className="w-8 h-8 text-primary" />}
                {index === 2 && <Clock className="w-8 h-8 text-primary" />}
                {index === 3 && <Eye className="w-8 h-8 text-primary" />}
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
