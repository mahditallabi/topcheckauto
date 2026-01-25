// import { useState } from "react";
// import { Phone, Clock, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/logo.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const navLinks = [
//     { label: "الرئيسية", href: "#home" },
//     { label: "خدماتنا", href: "#services" },
//     { label: "لماذا نحن", href: "#why-us" },
//     { label: "الأسعار", href: "#pricing" },
//     { label: "آراء العملاء", href: "#testimonials" },
//     { label: "تواصل معنا", href: "#contact" },
//   ];

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">
//       {/* Top Bar */}
//       <div className="bg-primary text-primary-foreground py-2">
//         <div className="container flex justify-between items-center text-sm">
//           <div className="flex items-center gap-4">
//             <a
//               href="tel:+212699581184"
//               className="flex items-center gap-2 hover:text-accent transition-colors"
//             >
//               <Phone className="w-4 h-4" />
//               <span dir="ltr">+212 699-581184</span>
//             </a>
//           </div>
//           <div className="hidden sm:flex items-center gap-2">
//             <Clock className="w-4 h-4" />
//             <span>الإثنين - السبت: 9:00 - 19:00</span>
//           </div>
//         </div>
//       </div>

//       {/* Main Nav */}
//       <nav className="bg-background/95 backdrop-blur-md shadow-sm">
//         <div className="container flex justify-between items-center py-4">
//           {/* Logo */}
//           {/* <a href="#home" className="flex items-center gap-2">
//             <span className="text-2xl font-bold text-primary">
//               Expert<span className="text-accent">Auto</span>
//             </span>
//           </a> */}

//           <a href="#home" className="flex items-center gap-2">
//             <img
//               src={logo}
//               alt="Expert Auto Logo"
//               className="h-10 w-auto"
//             />
//           </a>
          

//           {/* Desktop Nav */}
//           <div className="hidden lg:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <a key={link.href} href={link.href} className="nav-link font-medium">
//                 {link.label}
//               </a>
//             ))}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden lg:block">
//             <Button asChild className="whatsapp-btn rounded-full px-6">
//               <a
//                 href="https://wa.me/212699581184"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 احجز موعد
//               </a>
//             </Button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="lg:hidden p-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>

//         {/* Mobile Nav */}
//         {isMenuOpen && (
//           <div className="lg:hidden bg-background border-t animate-fade-in">
//             <div className="container py-4 flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   className="py-2 font-medium hover:text-primary transition-colors"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {link.label}
//                 </a>
//               ))}
//               <Button asChild className="whatsapp-btn rounded-full mt-2">
//                 <a
//                   href="https://wa.me/212699581184"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   احجز موعد
//                 </a>
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Header;


import { useEffect, useState } from "react";
import { Phone, Clock, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { getHero, HeroData } from "@/api/hero";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t,locale } = useTranslation('common');
  const [hero, setHero] = useState<HeroData | null>(null);

  useEffect(() => {
    getHero(locale).then((data) => {
      console.log('HERO FROM SANITY:', data);
      setHero(data);
    });
  }, [locale]);
  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.services'), href: '#services' },
    { label: t('nav.whyUs'), href: '#why-us' },
    { label: t('nav.pricing'), href: '#pricing' },
    { label: t('nav.testimonials'), href: '#testimonials' },
    { label: t('nav.contact'), href: '#contact' },
  ];

const formatPhoneForTel = (phone?: string) => {
  if (!phone) return "";
  return phone.replace(/[^0-9+]/g, "");
};
const formatPhoneForWhatsApp = (phone?: string) => {
  if (!phone) return "";
  return phone.replace(/[^0-9]/g, "");
};


  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${formatPhoneForTel(hero?.phone)}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span dir="ltr">{hero?.phone}{" "}</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>الإثنين - السبت: 9:00 - 19:00</span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-background/95 backdrop-blur-md shadow-sm">
        <div className="container flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img src={logo} alt="Expert Auto Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link font-medium">
                {link.label}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
<Button asChild className="whatsapp-btn rounded-full px-6">
  <a
    href={
      hero?.phone
        ? `https://wa.me/${formatPhoneForWhatsApp(hero.phone)}`
        : "#"
    }
    target="_blank"
    rel="noopener noreferrer"
  >
    {t('buttons.bookAppointment')}
  </a>
</Button>

          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menus"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background border-t animate-fade-in">
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="py-2 font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="whatsapp-btn rounded-full mt-2">
                <a
                  href="https://wa.me/212699581184"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('buttons.bookAppointment')}
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
