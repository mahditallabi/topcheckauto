// 'use client';

// import { Phone, MapPin, Clock, Mail, User, Calendar, MessageCircle, CheckCircle } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTranslation } from "@/lib/i18n/useTranslation";
// import { getHero, HeroData } from "@/api/hero";
// import { useEffect, useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// const ContactSection = ({selectedPackage}) => {
//   const { t,locale } = useTranslation('contact');
//   const { tString } = useTranslation('contact');
//   const [hero, setHero] = useState<HeroData | null>(null);
//   const [isSubmitted, setIsSubmitted] = useState(false);
// const [formData, setFormData] = useState({
//   name: "",
//   phone: "",
//   city: "",
//   time: "",
//   package: selectedPackage ?? "", // ⭐
//   message: ""
// });


//   useEffect(() => {
//     getHero(locale).then((data) => {
//       console.log('HERO FROM SANITY:', data);
//       setHero(data);
//     });
//   }, [locale]);
//   useEffect(() => {
//   if (selectedPackage) {
//     setFormData(prev => ({ ...prev, package: selectedPackage }));
//   }
// }, [selectedPackage]);


//   const cities = [
//     "الدار البيضاء",
//     "المحمدية",
//     "الرباط",
//     "تمارة",
//     "سلا",
//     "فاس",
//     "طنجة",
//     "مكناس",
//     "مراكش",
//     "القنيطرة",
//     "مدن أخرى"
//   ];

//   const timeSlots = [
//     "9:00 - 10:00",
//     "10:00 - 11:00",
//     "11:00 - 12:00",
//     "12:00 - 13:00",
//     "14:00 - 15:00",
//     "15:00 - 16:00",
//     "16:00 - 17:00",
//     "17:00 - 18:00"
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSelectChange = (name, value) => {
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch("https://formsubmit.co/ajax/ig.ayoub.dev@gmail.com", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//           ...formData,
//           _subject: "طلب حجز جديد - فحص سيارة",
//           _captcha: "false",
//           _template: "table"
//         })
//       });

//       if (response.ok) {
//         console.log("Form submitted successfully:", formData);
//         setIsSubmitted(true);
        
//         setTimeout(() => {
//           setIsSubmitted(false);
//           setFormData({
//             name: "",
//             phone: "",
//             city: "",
//             time: "",
//             message: "",
//             package: selectedPackage ?? "", // ⭐
//           });
//         }, 5000);
//       } else {
//         console.error("Form submission failed");
//         alert("عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("عذراً، حدث خطأ في الاتصال. يرجى المحاولة مرة أخرى.");
//     }
//   };

//   const contactInfo = [
// {
//   icon: Phone,
//   title: tString('contactInfo.phone'),
//   value: hero?.phone,
//   href: hero?.phone ? `tel:${hero.phone}` : undefined,
// },
// {
//   icon: Mail,
//   title: tString('contactInfo.email'),
//   value: hero?.email,
//   href: hero?.email ? `mailto:${hero.email}` : undefined,
// },
//     {
//       icon: Clock,
//       title: tString('contactInfo.workingHours'),
//       value: tString('contactInfo.workingHoursValue'),
//     },
//     {
//       icon: MapPin,
//       title: tString('contactInfo.area'),
//       value: tString('contactInfo.areaValue'),
//     },
//   ];

//   if (isSubmitted) {
//     return (
//       <section id="contact" className="py-20 bg-background">
//         <div className="container">
//           {/* Header */}
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//               <span dangerouslySetInnerHTML={{ __html: t('title') }} />
//             </h2>
//             <p className="text-muted-foreground text-lg leading-relaxed">
//               {t('description')}
//             </p>
//           </div>

//           <div className="max-w-2xl mx-auto">
//             <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-border shadow-lg">
//               <div className="flex flex-col items-center justify-center space-y-6">
//                 <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
//                   <CheckCircle className="w-12 h-12 text-green-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
//                     تم إرسال طلب الحجز بنجاح!
//                   </h3>
//                   <p className="text-muted-foreground text-lg">
//                     شكراً لك، سنتواصل معك في أقرب وقت ممكن لتأكيد الموعد.
//                   </p>
//                 </div>
//                 <p className="text-sm text-muted-foreground mt-4">
//                   رقم الطلب: <span className="font-mono font-bold">TC-{Date.now().toString().slice(-6)}</span>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="contact" className="py-20 bg-background">
//       <div className="container">
//         {/* Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             <span dangerouslySetInnerHTML={{ __html: t('title') }} />
//           </h2>
//           <p className="text-muted-foreground text-lg leading-relaxed">
//             {t('description')}
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
// {info.href ? (
//   <a
//     href={info.href}
//     className="
//       text-muted-foreground
//       hover:text-accent
//       transition-colors
//       leading-relaxed
//       block
//       break-all
//       sm:break-words
//       overflow-hidden
//     "
//     dir="ltr"
//   >
//     {info.value}
//   </a>
// ) : (
//   <p
//     className="
//       text-muted-foreground
//       leading-relaxed
//       break-all
//       sm:break-words
//       overflow-hidden
//     "
//   >
//     {info.value}
//   </p>
// )}

//             </div>
//           ))}
//         </div>

//         {/* Contact Form */}
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-secondary rounded-2xl p-8">
//             <div className="text-center mb-8">
//               <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                 <Calendar className="w-8 h-8 text-primary" />
//               </div>
//               <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
//                 احجز موعد فحص
//               </h3>
//               <p className="text-muted-foreground">
//                 املأ النموذج وسنتواصل معك خلال 24 ساعة
//               </p>
//             </div>

//             <form id="formcontact" onSubmit={handleSubmit} >
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_subject" value="طلب حجز جديد - فحص سيارة" />
//               <input type="hidden" name="_template" value="table" />
              
//               <div className="grid md:grid-cols-2 gap-6 mb-6">
//                 {/* الاسم الكامل */}
//                 <div className="space-y-3">
//                   <label className="flex items-center gap-2 text-sm font-medium text-foreground">
//                     <User className="w-4 h-4" />
//                     الاسم الكامل *
//                   </label>
//                   <Input
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="أدخل اسمك الكامل"
//                     required
//                     className="h-12 rounded-xl border-border bg-background focus:border-primary"
//                   />
//                 </div>

//                 {/* رقم الهاتف */}
//                 <div className="space-y-3">
//                   <label className="flex items-center gap-2 text-sm font-medium text-foreground">
//                     <Phone className="w-4 h-4" />
//                     رقم الهاتف *
//                   </label>
//                   <Input
//                     name="phone"
//                     type="tel"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+212 600-000000"
//                     required
//                     className="h-12 rounded-xl border-border bg-background focus:border-primary"
//                     dir="ltr"
//                   />
//                 </div>
// {/* الباقة */}
// <div className="space-y-3">
//   <label className="flex items-center gap-2 text-sm font-medium text-foreground">
//     <CheckCircle className="w-4 h-4" />
//     الباقة المختارة *
//   </label>

//   <Select
//     value={formData.package}
//     onValueChange={(value) => handleSelectChange("package", value)}
//     required
//   >
//     <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
//       <SelectValue placeholder="اختر الباقة" />
//     </SelectTrigger>
//     <SelectContent>
//       <SelectItem value="basic">Basic</SelectItem>
//       <SelectItem value="standard">Standard</SelectItem>
//       <SelectItem value="premium">Premium</SelectItem>
//     </SelectContent>
//   </Select>
// </div>

//                 {/* المدينة */}
//                 <div className="space-y-3">
//                   <label className="flex items-center gap-2 text-sm font-medium text-foreground">
//                     <MapPin className="w-4 h-4" />
//                     المدينة *
//                   </label>
//                   <Select
//                     value={formData.city}
//                     onValueChange={(value) => handleSelectChange("city", value)}
//                     required
//                   >
//                     <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
//                       <SelectValue placeholder="اختر مدينتك" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {cities.map((city) => (
//                         <SelectItem key={city} value={city}>
//                           {city}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 {/* الوقت */}
//                 <div className="space-y-3">
//                   <label className="flex items-center gap-2 text-sm font-medium text-foreground">
//                     <Clock className="w-4 h-4" />
//                     الوقت المفضل *
//                   </label>
//                   <Select
//                     value={formData.time}
//                     onValueChange={(value) => handleSelectChange("time", value)}
//                     required
//                   >
//                     <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
//                       <SelectValue placeholder="اختر الوقت" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {timeSlots.map((slot) => (
//                         <SelectItem key={slot} value={slot}>
//                           {slot}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* الرسالة */}
//               <div className="space-y-3 mb-6">
//                 <label className="flex items-center gap-2 text-sm font-medium text-foreground">
//                   <MessageCircle className="w-4 h-4" />
//                   ملاحظات إضافية
//                 </label>
//                 <Textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="أي معلومات إضافية عن السيارة أو طلبات خاصة..."
//                   rows={4}
//                   className="rounded-xl border-border bg-background focus:border-primary resize-none"
//                 />
//               </div>

//               {/* زر الإرسال */}
//               <div>
//                 <Button
//                   type="submit"
//                   className="w-full h-14 rounded-xl bg-accent hover:bg-accent/90 text-white text-lg font-semibold transition-all duration-300 hover:shadow-lg"
//                 >
//                   <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
//                   </svg>
//                   إرسال طلب الحجز
//                 </Button>
//               </div>
//             </form>
//           </div>

//           {/* Note */}
//           <div className="text-center mt-8">
//             <p className="text-muted-foreground inline-block bg-secondary rounded-xl px-6 py-3">
//               <span dangerouslySetInnerHTML={{ __html: tString('booking.note') }} />
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
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = ({ selectedPackage }) => {
  const { t, locale } = useTranslation('contact');
  const { tString } = useTranslation('contact');
  const [hero, setHero] = useState<HeroData | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    time: "",
    package: selectedPackage ?? "",
    message: ""
  });

  useEffect(() => {
    getHero(locale).then((data) => {
      setHero(data);
    });
  }, [locale]);

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({ ...prev, package: selectedPackage }));
    }
  }, [selectedPackage]);

  // Cities based on locale
  const cities = {
    ar: [
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
    ],
    en: [
      "Casablanca",
      "Mohammedia",
      "Rabat",
      "Témara",
      "Salé",
      "Fès",
      "Tanger",
      "Meknès",
      "Marrakech",
      "Kénitra",
      "Other cities"
    ]
  };

  // Time slots based on locale
  const timeSlots = {
    ar: [
      "9:00 - 10:00",
      "10:00 - 11:00",
      "11:00 - 12:00",
      "12:00 - 13:00",
      "14:00 - 15:00",
      "15:00 - 16:00",
      "16:00 - 17:00",
      "17:00 - 18:00"
    ],
    en: [
      "9:00 AM - 10:00 AM",
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "12:00 PM - 1:00 PM",
      "2:00 PM - 3:00 PM",
      "3:00 PM - 4:00 PM",
      "4:00 PM - 5:00 PM",
      "5:00 PM - 6:00 PM"
    ]
  };

  // Packages with translations
  const packages = {
    ar: [
      { value: "basic", label: "الباك الأساسي" },
      { value: "standard", label: "الباك المتعمق" },
      { value: "premium", label: "الباك البريميوم" }
    ],
    en: [
      { value: "basic", label: "Pack Basic" },
      { value: "standard", label: "Pack Approfondi" },
      { value: "premium", label: "Pack Premium" }
    ]
  };

  // Success messages based on locale
  const successMessages = {
    ar: {
      title: "تم إرسال طلب الحجز بنجاح!",
      description: "شكراً لك، سنتواصل معك في أقرب وقت ممكن لتأكيد الموعد.",
      orderNumber: "رقم الطلب"
    },
    en: {
      title: "Booking request sent successfully!",
      description: "Thank you, we will contact you as soon as possible to confirm the appointment.",
      orderNumber: "Order number"
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        throw new Error(locale === 'ar' 
          ? 'معلومات EmailJS غير مكتملة. يرجى التحقق من إعدادات البيئة.'
          : 'EmailJS information is incomplete. Please check environment settings.'
        );
      }

      const templateParams = {
        to_name: "Admin",
        from_name: formData.name,
        from_phone: formData.phone,
        from_city: formData.city,
        preferred_time: formData.time,
        package: formData.package,
        message: formData.message,
        reply_to: hero?.email || "no-reply@example.com",
        subject: locale === 'ar' 
          ? `طلب حجز جديد - ${formData.name}`
          : `New Booking Request - ${formData.name}`,
        date: new Date().toLocaleDateString(locale === 'ar' ? 'ar-MA' : 'fr-FR', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        locale: locale,
        order_number: `TC-${Date.now().toString().slice(-6)}`
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: "",
            phone: "",
            city: "",
            time: "",
            message: "",
            package: selectedPackage ?? "",
          });
        }, 5000);
      } else {
        throw new Error(locale === 'ar' 
          ? 'فشل إرسال البريد الإلكتروني'
          : 'Failed to send email'
        );
      }
      
    } catch (error) {
      console.error("Error sending email:", error);
      
      if (error.message.includes(locale === 'ar' ? 'معلومات EmailJS' : 'EmailJS information')) {
        alert(error.message);
      } else if (error.message.includes(locale === 'ar' ? 'فشل' : 'Failed')) {
        alert(locale === 'ar' 
          ? "عذراً، حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى."
          : "Sorry, an error occurred while sending the request. Please try again."
        );
      } else {
        alert(locale === 'ar' 
          ? "عذراً، حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى لاحقاً."
          : "Sorry, an unexpected error occurred. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: tString('contactInfo.phone'),
      value: hero?.phone,
      href: hero?.phone ? `tel:${hero.phone}` : undefined,
    },
    {
      icon: Mail,
      title: tString('contactInfo.email'),
      value: hero?.email,
      href: hero?.email ? `mailto:${hero.email}` : undefined,
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
    const messages = successMessages[locale];
    
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="container">
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
                    {messages.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {messages.description}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  {messages.orderNumber}: <span className="font-mono font-bold">TC-{Date.now().toString().slice(-6)}</span>
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <span dangerouslySetInnerHTML={{ __html: t('title') }} />
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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
                  className="text-muted-foreground hover:text-accent transition-colors leading-relaxed block break-all sm:break-words overflow-hidden"
                  dir="ltr"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-muted-foreground leading-relaxed break-all sm:break-words overflow-hidden">
                  {info.value}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-secondary rounded-2xl p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {tString('booking.title')}
              </h3>
              <p className="text-muted-foreground">
                {tString('booking.description')}
              </p>
            </div>

            <form id="formcontact" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Full Name */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <User className="w-4 h-4" />
                    {tString('booking.form.fullName')} *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={tString('booking.form.placeholders.fullName')}
                    required
                    disabled={isLoading}
                    className="h-12 rounded-xl border-border bg-background focus:border-primary"
                    dir={locale === 'ar' ? 'rtl' : 'ltr'}
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Phone className="w-4 h-4" />
                    {tString('booking.form.phoneNumber')} *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={tString('booking.form.placeholders.phoneNumber')}
                    required
                    disabled={isLoading}
                    className="h-12 rounded-xl border-border bg-background focus:border-primary"
                    dir="ltr"
                  />
                </div>

                {/* Package */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <CheckCircle className="w-4 h-4" />
                    {locale === 'ar' ? 'الباقة المختارة' : 'Selected Package'} *
                  </label>
                  <Select
                    value={formData.package}
                    onValueChange={(value) => handleSelectChange("package", value)}
                    required
                    disabled={isLoading}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
                      <SelectValue placeholder={locale === 'ar' ? "اختر الباقة" : "Choose package"} />
                    </SelectTrigger>
                    <SelectContent>
                      {packages[locale].map((pkg) => (
                        <SelectItem key={pkg.value} value={pkg.value}>
                          {pkg.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* City */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <MapPin className="w-4 h-4" />
                    {tString('booking.form.city')} *
                  </label>
                  <Select
                    value={formData.city}
                    onValueChange={(value) => handleSelectChange("city", value)}
                    required
                    disabled={isLoading}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
                      <SelectValue placeholder={tString('booking.form.placeholders.city')} />
                    </SelectTrigger>
                    <SelectContent>
                      {cities[locale].map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Preferred Time */}
                <div className="space-y-3">
                  <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                    <Clock className="w-4 h-4" />
                    {locale === 'ar' ? 'الوقت المفضل' : 'Preferred Time'} *
                  </label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => handleSelectChange("time", value)}
                    required
                    disabled={isLoading}
                  >
                    <SelectTrigger className="h-12 rounded-xl border-border bg-background focus:border-primary">
                      <SelectValue placeholder={locale === 'ar' ? "اختر الوقت" : "Choose time"} />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots[locale].map((slot) => (
                        <SelectItem key={slot} value={slot}>
                          {slot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <MessageCircle className="w-4 h-4" />
                  {tString('booking.form.additionalNotes')}
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={tString('booking.form.placeholders.additionalNotes')}
                  rows={4}
                  disabled={isLoading}
                  className="rounded-xl border-border bg-background focus:border-primary resize-none"
                  dir={locale === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-14 rounded-xl bg-accent hover:bg-accent/90 text-white text-lg font-semibold transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                      {locale === 'ar' ? 'جاري الإرسال...' : 'Sending...'}
                    </div>
                  ) : (
                    <>
                      <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      {tString('booking.submitButton')}
                    </>
                  )}
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
