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

import { Phone, MapPin, Clock, Mail, User, Calendar, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { getHero, HeroData } from "@/api/hero";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactSection = ({selectedPackage}) => {
  const { t,locale } = useTranslation('contact');
  const { tString } = useTranslation('contact');
  const [hero, setHero] = useState<HeroData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
const [formData, setFormData] = useState({
  name: "",
  phone: "",
  city: "",
  time: "",
  package: selectedPackage ?? "", // ⭐
  message: ""
});


  useEffect(() => {
    getHero(locale).then((data) => {
      console.log('HERO FROM SANITY:', data);
      setHero(data);
    });
  }, [locale]);
  useEffect(() => {
  if (selectedPackage) {
    setFormData(prev => ({ ...prev, package: selectedPackage }));
  }
}, [selectedPackage]);


  const cities = [
    "الدار البيضاء",
    "المحمدية",
    "الرباط",
    "تمارة",
    "سلا",
    "فاس",
    "طنجة",
    "مكناس",
    "مراكش",
    "القنيطرة",
    "مدن أخرى"
  ];

  const timeSlots = [
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/ig.ayoub.dev@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: "طلب حجز جديد - فحص سيارة",
          _captcha: "false",
          _template: "table"
        })
      });

      if (response.ok) {
        console.log("Form submitted successfully:", formData);
        setIsSubmitted(true);
        
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            city: "",
            time: "",
            message: "",
            package: selectedPackage ?? "", // ⭐
          });
        }, 5000);
      } else {
        console.error("Form submission failed");
        alert("عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.");
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: tString('contactInfo.phone'),
      value: hero?.phone,
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

  if (isSubmitted) {
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

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-border shadow-lg">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    تم إرسال طلب الحجز بنجاح!
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    شكراً لك، سنتواصل معك في أقرب وقت ممكن لتأكيد الموعد.
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  رقم الطلب: <span className="font-mono font-bold">TC-{Date.now().toString().slice(-6)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
                  className="text-muted-foreground hover:text-accent transition-colors leading-relaxed block break-words overflow-hidden"

                  dir="ltr"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground hover:text-accent transition-colors leading-relaxed block break-words overflow-hidden"
>{info.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                احجز موعد فحص
              </h3>
              <p className="text-muted-foreground">
                املأ النموذج وسنتواصل معك خلال 24 ساعة
              </p>
            </div>

            <form id="formcontact" onSubmit={handleSubmit} action="https://formsubmit.co/your-email@example.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="طلب حجز جديد - فحص سيارة" />
              <input type="hidden" name="_template" value="table" />
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* الاسم الكامل */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <User className="w-4 h-4" />
                    الاسم الكامل *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    required
                    className="h-12 rounded-xl border-border bg-background focus:border-primary"
                  />
                </div>

                {/* رقم الهاتف */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone className="w-4 h-4" />
                    رقم الهاتف *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+212 600-000000"
                    required
                    className="h-12 rounded-xl border-border bg-background focus:border-primary"
                    dir="ltr"
                  />
                </div>
{/* الباقة */}
<div className="space-y-3">
  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
    <CheckCircle className="w-4 h-4" />
    الباقة المختارة *
  </label>

  <Select
    value={formData.package}
    onValueChange={(value) => handleSelectChange("package", value)}
    required
  >
    <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
      <SelectValue placeholder="اختر الباقة" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="basic">Basic</SelectItem>
      <SelectItem value="standard">Standard</SelectItem>
      <SelectItem value="premium">Premium</SelectItem>
    </SelectContent>
  </Select>
</div>

                {/* المدينة */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MapPin className="w-4 h-4" />
                    المدينة *
                  </label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleSelectChange("city", value)}
                    required
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
                      <SelectValue placeholder="اختر مدينتك" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* الوقت */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock className="w-4 h-4" />
                    الوقت المفضل *
                  </label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleSelectChange("time", value)}
                    required
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
                      <SelectValue placeholder="اختر الوقت" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* الرسالة */}
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageCircle className="w-4 h-4" />
                  ملاحظات إضافية
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="أي معلومات إضافية عن السيارة أو طلبات خاصة..."
                  rows={4}
                  className="rounded-xl border-border bg-background focus:border-primary resize-none"
                />
              </div>

              {/* زر الإرسال */}
              <div>
                <Button
                  type="submit"
                  className="w-full h-14 rounded-xl bg-accent hover:bg-accent/90 text-white text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  إرسال طلب الحجز
                </Button>
              </div>
            </form>
          </div>

          {/* Note */}
          <div className="text-center mt-8">
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
