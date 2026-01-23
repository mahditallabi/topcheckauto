// import { Facebook, Instagram, Phone } from "lucide-react";
// import logo from "@/assets/logo.png";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="container py-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Logo & Description */}
//           <div>
//             {/* <a href="#home" className="text-2xl font-bold inline-block mb-4">
//               Expert<span className="text-accent">Auto</span>
//             </a> */}
//                       <a href="#home" className="flex items-center gap-2 mb-10">
//                         <img
//                           src={logo}
//                           alt="Expert Auto Logo"
//                           className="h-10 w-auto"
//                         />
//                       </a>
//             <p className="opacity-80 leading-relaxed">
//               خبراء فحص السيارات المستعملة في المغرب. نساعدك على اتخاذ القرار
//               الصحيح قبل الشراء.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#home" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
//                   الرئيسية
//                 </a>
//               </li>
//               <li>
//                 <a href="#services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
//                   خدماتنا
//                 </a>
//               </li>
//               <li>
//                 <a href="#why-us" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
//                   لماذا نحن
//                 </a>
//               </li>
//               <li>
//                 <a href="#pricing" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
//                   الأسعار
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
//                   تواصل معنا
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact & Social */}
//           <div>
//             <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
//             <div className="space-y-3 mb-6">
//               <a
//                 href="tel:+212699581184"
//                 className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
//               >
//                 <Phone className="w-5 h-5" />
//                 <span dir="ltr">+212 699-581184</span>
//               </a>
//             </div>

//             <div className="flex gap-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
//               >
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
//               >
//                 <Instagram className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
//           <p className="opacity-60 text-sm">
//             © {currentYear} TopCheck Auto. جميع الحقوق محفوظة.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
 'use client';

import { Facebook, Instagram, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { useTranslation } from "@/lib/i18n/useTranslation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('common');

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <a href="#home" className="flex items-center gap-2 mb-10">
              <img src={logo} alt="Expert Auto Logo" className="h-10 w-auto" />
            </a>
            <p className="opacity-80 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#services" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('nav.whyUs')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('nav.pricing')}
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t('footer.contactUs')}</h4>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+212699581184"
                className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                <span dir="ltr">+212 699-581184</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="opacity-60 text-sm">
            © {currentYear} TopCheck Auto. {t('footer.rightsReserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;