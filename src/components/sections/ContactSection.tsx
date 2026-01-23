// import { Phone, MapPin, Clock, Mail, User, Calendar, MessageCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const contactInfo = [
//   {
//     icon: Phone,
//     title: "الهاتف",
//     value: "+212 699-581184",
//     href: "tel:+212699581184",
//   },
//   {
//     icon: Mail,
//     title: "البريد الإلكتروني",
//     value: "contact@topcheck-auto.ma",
//     href: "mailto:contact@topcheck-auto.ma",
//   },
//   {
//     icon: Clock,
//     title: "ساعات العمل",
//     value: "الإثنين - السبت: 9:00 - 19:00",
//   },
//   {
//     icon: MapPin,
//     title: "المنطقة",
//     value: "جميع أنحاء المغرب",
//   },
// ];

// const ContactSection = () => {
//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             تواصل <span className="text-accent">معنا</span>
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed">
//             نحن هنا لمساعدتك في اتخاذ القرار الصحيح قبل شراء سيارتك المستعملة.
//             تواصل معنا الآن للحصول على موعد فحص.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Contact Info Cards */}
//           {contactInfo.map((info, index) => (
//             <div
//               key={info.title}
//               className="group bg-secondary rounded-2xl p-8 text-center card-hover"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
//                 <info.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
//               </div>
//               <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
//               {info.href ? (
//                 <a
//                   href={info.href}
//                   className="text-muted-foreground hover:text-accent transition-colors leading-relaxed block"
//                   dir="ltr"
//                 >
//                   {info.value}
//                 </a>
//               ) : (
//                 <p className="text-muted-foreground leading-relaxed">{info.value}</p>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <div className="max-w-2xl mx-auto">
//           <div className="group bg-secondary rounded-2xl p-8 text-center card-hover mb-8">
//             <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
//               <Calendar className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
//             </div>
//             <h3 className="text-2xl font-bold text-foreground mb-4">احجز موعد فحص</h3>
//             <p className="text-muted-foreground mb-6">
//               املأ المعلومات التالية وسنتواصل معك خلال 24 ساعة
//             </p>

//             <form className="space-y-6">
//               <div className="grid sm:grid-cols-2 gap-6">
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
//                     <User className="w-4 h-4" />
//                     الاسم الكامل
//                   </div>
//                   <input
//                     type="text"
//                     placeholder="أدخل اسمك الكامل"
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors"
//                   />
//                 </div>

//                 <div className="space-y-3">
//                   <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
//                     <Phone className="w-4 h-4" />
//                     رقم الهاتف
//                   </div>
//                   <input
//                     type="tel"
//                     placeholder="+212 600-000000"
//                     required
//                     className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors"
//                     dir="ltr"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-3">
//                 <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
//                   <MapPin className="w-4 h-4" />
//                   المدينة
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="المدينة التي تقيم فيها"
//                   required
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors"
//                 />
//               </div>

//               <div className="space-y-3">
//                 <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
//                   <MessageCircle className="w-4 h-4" />
//                   ملاحظات إضافية
//                 </div>
//                 <textarea
//                   placeholder="أي معلومات إضافية عن السيارة أو طلبات خاصة..."
//                   rows={3}
//                   className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors resize-none"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full h-14 rounded-xl bg-accent hover:bg-accent/90 text-white text-lg font-semibold transition-all duration-300 group"
//               >
//                 <span className="flex items-center justify-center">
//                   إرسال طلب الحجز
//                   <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
//                   </svg>
//                 </span>
//               </Button>
//             </form>
//           </div>

//           {/* Note */}
//           <div className="text-center">
//             <p className="text-muted-foreground inline-block bg-secondary rounded-xl px-6 py-3">
//               <span className="font-bold text-accent">ملاحظة:</span> سنتواصل معك في أقرب وقت ممكن لتأكيد الموعد.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
'use client';

import { Phone, MapPin, Clock, Mail, User, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/useTranslation";

const ContactSection = () => {
  const { t } = useTranslation('contact');
  const { tString } = useTranslation('contact');


const contactInfo = [
  {
    icon: Phone,
    title: tString('contactInfo.phone'),
    value: "+212 699-581184",
    href: "tel:+212699581184",
  },
  {
    icon: Mail,
    title: tString('contactInfo.email'),
    value: "contact@topcheck-auto.ma",
    href: "mailto:contact@topcheck-auto.ma",
  },
  {
    icon: Clock,
    title: tString('contactInfo.workingHours'),
    value: tString('contactInfo.workingHoursValue'),
  },
  {
    icon: MapPin,
    title: tString('contactInfo.area'),
    value: tString('contactInfo.areaValue'),
  },
];


  return (
    <section id="contact" className="py-20 bg-background">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Contact Info Cards */}
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="group bg-secondary rounded-2xl p-8 text-center card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <info.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{info.title}</h3>
              {info.href ? (
                <a
                  href={info.href}
                  className="text-muted-foreground hover:text-accent transition-colors leading-relaxed block"
                  dir="ltr"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground leading-relaxed">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="group bg-secondary rounded-2xl p-8 text-center card-hover mb-8">
            <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
              <Calendar className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">{tString('booking.title')}</h3>
            <p className="text-muted-foreground mb-6">
              {tString('booking.description')}
            </p>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
                    <User className="w-4 h-4" />
                    {tString('booking.form.fullName')}
                  </div>
                  <input
                    type="text"
                    placeholder={tString('booking.form.placeholders.fullName')}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
                    <Phone className="w-4 h-4" />
                    {t('booking.form.phoneNumber')}
                  </div>
                  <input
                    type="tel"
                    placeholder={tString('booking.form.placeholders.phoneNumber')}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
                  <MapPin className="w-4 h-4" />
                  {t('booking.form.city')}
                </div>
                <input
                  type="text"
                  placeholder={tString('booking.form.placeholders.city')}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground justify-center sm:justify-start">
                  <MessageCircle className="w-4 h-4" />
                  {t('booking.form.additionalNotes')}
                </div>
                <textarea
                  placeholder={tString('booking.form.placeholders.additionalNotes')}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 rounded-xl bg-accent hover:bg-accent/90 text-white text-lg font-semibold transition-all duration-300 group"
              >
                <span className="flex items-center justify-center">
                  {t('booking.submitButton')}
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                </span>
              </Button>
            </form>
          </div>

          {/* Note */}
          <div className="text-center">
            <p className="text-muted-foreground inline-block bg-secondary rounded-xl px-6 py-3">
              <span dangerouslySetInnerHTML={{ __html: tString('booking.note') }} />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;