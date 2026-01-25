// import { Play, ArrowLeft } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { useEffect, useState } from "react";
// import bg1 from "@/assets/bg.png";
// import bg2 from "@/assets/bg2.png";
// import bg3 from "@/assets/bg3.png";

// const HeroSection = () => {
// const backgrounds = [bg1, bg2, bg3];
// const [index, setIndex] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setIndex((prev) => (prev + 1) % backgrounds.length);
//   }, 5000); // تبديل كل 5 ثواني

//   return () => clearInterval(interval);
// }, [backgrounds.length]);

//   return (
// <section
//   id="home"
//   className="relative min-h-screen pt-[80px] flex items-center justify-center overflow-hidden"
//     >
//       {/* Background */}
// <AnimatePresence>
//   <motion.div
//     key={index}
//     className="absolute inset-0 bg-cover bg-center"
//     style={{
//       backgroundImage: `
//         linear-gradient(
//           135deg,
//           rgba(3, 37, 76, 0.55),
//           rgba(15, 76, 129, 0.45)
//         ),
//         url(${backgrounds[index]})
//       `,
//     }}
//     initial={{ opacity: 0, scale: 1.05 }}
//     animate={{ opacity: 1, scale: 1 }}
//     exit={{ opacity: 0 }}
//     transition={{ duration: 1.2, ease: "easeInOut" }}
//   />
// </AnimatePresence>


//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-50" />

//       <div className="relative z-10 mx-auto px-6 md:px-8 py-16 text-center text-primary-foreground max-w-4xl">

//         <motion.h1
//           className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           هل تريد شراء{" "}
//           <span className="text-accent">سيارة مستعملة</span>؟
//         </motion.h1>
//         <motion.p
//           className="text-lg md:text-xl mb-8 opacity-90"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//         >
//           لكن ليس لديك الخبرة في فحص السيارات المستعملة؟ إتصل الان لحجز موعد مع أحد التقنيين لدينا، واحصل على تقرير شامل ومفصل قبل الشراء واترك المسؤولية لنا.
//         </motion.p>

//         <motion.div
//           className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//         >
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//             <Button
//               asChild
//               size="lg"
//               className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-lg"
//             >
//               <a href="#contactForm" rel="noopener noreferrer">
//                احجز الخبير الأن
//                 <ArrowLeft className="w-5 h-5 mr-2" />
//               </a>
//             </Button>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//             <Button
//               asChild
//               size="lg"
//               className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-lg"
//             >
//               <a
//                 href="#pricing"
//                 rel="noopener noreferrer"
//               >
//               تمن الخدمة
//               </a>
//             </Button>
//           </motion.div>
//           {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//             <Button
//               asChild
//               variant="outline"
//               size="lg"
//               className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-lg"
//             >
//               <a
//                 href="https://fb.watch/qSGpIxcuyo/?mibextid=w8EBqM"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Play className="w-5 h-5 ml-2" />
//                 فيديو توضيحي
//               </a>
//             </Button>
//           </motion.div> */}
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           className="flex flex-wrap gap-8 justify-center pt-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         >
//           <div className="text-center">
//             <div className="text-3xl md:text-4xl font-bold text-accent">+150</div>
//             <div className="text-sm opacity-80">نقطة فحص</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl md:text-4xl font-bold text-accent">+1000</div>
//             <div className="text-sm opacity-80">عميل سعيد</div>
//           </div>
//           <div className="text-center">
//             <div className="text-3xl md:text-4xl font-bold text-accent">+6</div>
//             <div className="text-sm opacity-80">مدن مغطاة</div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//         animate={{ y: [0, 10, 0] }}
//         transition={{ repeat: Infinity, duration: 1.5 }}
//       >
//         <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
//           <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
'use client';

import { Play, ArrowLeft } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import bg1 from "@/assets/bg.png";
import bg2 from "@/assets/bg2.png";
import bg3 from "@/assets/bg3.png";
import { useTranslation } from "@/lib/i18n/useTranslation";
import { getHero, HeroData } from "@/api/hero";

const HeroSection = () => {
  const backgrounds = [bg1, bg2, bg3];
  const [index, setIndex] = useState(0);
  const { t , locale} = useTranslation('home');
  console.log('LOCALE:', locale);


    // 🟢 Hero من Sanity
  const [hero, setHero] = useState<HeroData | null>(null);

useEffect(() => {
  getHero(locale).then((data) => {
    console.log('HERO FROM SANITY:', data);
    setHero(data);
  });
}, [locale]);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // تبديل كل 5 ثواني

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-[80px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                135deg,
                rgba(3, 37, 76, 0.55),
                rgba(15, 76, 129, 0.45)
              ),
              url(${backgrounds[index]})
            `,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-50" />

      <div className="relative z-10 mx-auto px-6 md:px-8 py-16 text-center text-primary-foreground max-w-4xl">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {hero?.title}{" "}
          <span className="text-accent">{hero?.title2}{" "}</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {hero?.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-lg"
            >
              <a href="#formcontact" rel="noopener noreferrer">
                {t('hero.cta1')}
                <ArrowLeft className="w-5 h-5 mr-2" />
              </a>
            </Button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
            <Button
              asChild
              size="lg"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-lg"
            >
              <a
                href="#pricing"
                rel="noopener noreferrer"
              >
                {t('hero.cta2')}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-8 justify-center pt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">+150</div>
            <div className="text-sm opacity-80">{t('hero.stats.inspectionPoints')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">+1000</div>
            <div className="text-sm opacity-80">{t('hero.stats.happyClients')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">+6</div>
            <div className="text-sm opacity-80">{t('hero.stats.citiesCovered')}</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
