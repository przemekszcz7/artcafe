/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Phone, MapPin, Clock, Facebook, Star, Quote, ChevronRight, UtensilsCrossed, Coffee, Camera, Music } from "lucide-react";

const LOGO_URL = "https://i.postimg.cc/QNpr7hmC/322248613-1193005211591487-8652041688890543179-n.jpg";
const FB_URL = "https://www.facebook.com/ArtCafeStalowaWola";
const FB_REVIEWS_URL = "https://www.facebook.com/ArtCafeStalowaWola/reviews/?id=100057337013033&sk=reviews";

const GALLERY_IMAGES = [
  "https://i.postimg.cc/nLYv7sXq/660415996-1442375741016979-3885508130276684683-n.jpg",
  "https://i.postimg.cc/25F4vq1L/662488886-1443437337577486-1103837626890136980-n.jpg",
  "https://i.postimg.cc/LsBzfqJ1/662546803-1443437254244161-7167293052893908607-n.jpg"
];

const OPENING_HOURS = [
  { day: "Poniedziałek", hours: "ZAMKNIĘTE", closed: true },
  { day: "Wtorek", hours: "12:00 - 20:00" },
  { day: "Środa", hours: "12:00 - 20:00" },
  { day: "Czwartek", hours: "12:00 - 20:00" },
  { day: "Piątek", hours: "12:00 - 21:00" },
  { day: "Sobota", hours: "13:00 - 21:00" },
  { day: "Niedziela", hours: "12:00 - 21:00" },
];

const FEATURES = [
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Kuchnia Regionalna",
    desc: "Tradycyjne receptury przekazywane z pokolenia na pokolenie, wzbogacone o nowoczesny sznyt."
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Artystyczna Atmosfera",
    desc: "Miejsce, gdzie kulinaria spotykają się ze sztuką w unikalnym, klimatycznym wnętrzu."
  },
  {
    icon: <Music className="w-6 h-6" />,
    title: "Lokalne Wydarzenia",
    desc: "Organizujemy wieczory z muzyką na żywo i spotkania przybliżające kulturę naszego regionu."
  }
];

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-brand-brown selection:text-brand-cream">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-texture" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-brown/5 blur-[100px] rounded-full" />
      </div>

      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-cream/60 backdrop-blur-xl border-b border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-1 bg-brand-accent/20 rounded-full blur group-hover:bg-brand-accent/40 transition-all" />
              <img src={LOGO_URL} alt="Art Cafe Logo" className="relative w-14 h-14 rounded-full object-cover border border-brand-brown/10" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight leading-none">Art Cafe</span>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-bold mt-1">Stalowa Wola</span>
            </div>
          </div>
          
          <nav className="hidden lg:flex items-center gap-12 text-[11px] uppercase tracking-[0.25em] font-bold text-brand-brown/60">
            {['O nas', 'Specjały', 'Galeria', 'Godziny', 'Kontakt'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-brand-brown hover:line-accent transition-all duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href="tel:536594474"
            className="flex items-center gap-3 bg-brand-brown text-brand-cream px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-accent transition-all duration-300 shadow-xl shadow-brand-brown/20"
          >
            <Phone size={14} />
            <span className="hidden sm:inline">Rezerwacja:</span> 536 594 474
          </a>
        </div>
      </header>

      <main className="relative z-10">
        {/* Dramatic Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-b from-brand-brown/40 via-transparent to-brand-cream z-10" />
             <img
               src={GALLERY_IMAGES[0]}
               alt="Restauracja Art Cafe Wnętrze"
               className="w-full h-full object-cover"
             />
          </motion.div>
          
          <div className="relative z-20 text-center px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "circOut" }}
            >
              <img
                src={LOGO_URL}
                alt="Art Cafe Logo Large"
                className="w-32 h-32 md:w-56 md:h-56 mx-auto rounded-full border-[6px] border-brand-cream mb-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)]"
              />
              <span className="inline-block text-brand-cream text-sm uppercase tracking-[0.5em] font-bold mb-6 backdrop-blur-sm bg-black/10 px-4 py-1 rounded-full border border-white/20">
                Poczuj smak regionu
              </span>
              <h1 className="text-7xl md:text-9xl text-brand-cream font-serif mb-6 drop-shadow-2xl leading-tight">
                Art Cafe
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-brand-cream/80 text-lg font-serif italic tracking-wide">
                 <span>Kuchnia Regionalna</span>
                 <div className="hidden md:block w-20 h-px bg-white/30" />
                 <span>Wyjątkowa Atmosfera</span>
                 <div className="hidden md:block w-20 h-px bg-white/30" />
                 <span>Stalowa Wola</span>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Przewiń</span>
            <div className="w-px h-16 bg-gradient-to-b from-brand-brown/40 to-transparent" />
          </motion.div>
        </section>

        {/* Feature Highlights Section */}
        <section id="o-nas" className="py-32 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                {...fadeIn}
                transition={{ delay: idx * 0.2 }}
                className="group p-10 rounded-[40px] bg-white hover:bg-brand-brown hover:text-brand-cream transition-all duration-500 shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-brand-brown/5"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-cream group-hover:text-brand-brown transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl mb-4 font-bold">{feature.title}</h3>
                <p className="opacity-60 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Deep Dive Section - Our Philosophy */}
        <section className="py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div {...fadeIn} className="relative">
              <div className="absolute -top-12 -left-12 text-[150px] font-serif text-brand-brown/5 leading-none select-none">37-450</div>
              <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Tradycja i Smak</span>
              <h2 className="text-5xl md:text-6xl mb-10 leading-tight">
                Przybliżamy Gościom <br />
                <span className="italic font-light">smaki naszego regionu.</span>
              </h2>
              <p className="text-lg text-brand-brown/70 leading-relaxed mb-10 max-w-lg">
                Restauracja „Art Cafe” to nie tylko jedzenie. To podróż kulinarna przez historię i kulturę Stalowej Woli i okolic. Każdy składnik dobieramy z niezwykłą starannością, stawiając na lokalnych dostawców i autentyczność.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-brand-cream bg-brand-brown/10 flex items-center justify-center overflow-hidden">
                      <Star size={16} className="text-brand-accent fill-brand-accent" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-40">Setki zadowolonych gości</p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="relative grid grid-cols-2 gap-4">
               <div className="space-y-4 translate-y-12">
                  <img src={GALLERY_IMAGES[1]} className="rounded-3xl shadow-2xl h-64 w-full object-cover" />
                  <img src={GALLERY_IMAGES[2]} className="rounded-3xl shadow-2xl h-80 w-full object-cover" />
               </div>
               <div className="space-y-4">
                  <img src={GALLERY_IMAGES[0]} className="rounded-3xl shadow-2xl h-80 w-full object-cover" />
                  <div className="bg-brand-accent p-8 rounded-3xl text-brand-cream">
                    <h4 className="text-2xl font-serif mb-2 font-bold leading-tight uppercase tracking-tighter">Specjalizujemy się w daniach kuchni regionalnej</h4>
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Full Gallery with Staggered Layout */}
        <section id="galeria" className="py-32 px-6 bg-brand-brown text-brand-cream">
           <div className="max-w-7xl mx-auto">
             <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                <motion.div {...fadeIn}>
                  <span className="text-brand-accent font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Visual Journey</span>
                  <h2 className="text-5xl md:text-7xl font-serif tracking-tight">Nasze wnętrza <br />& specjały</h2>
                </motion.div>
                <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="max-w-sm text-brand-cream/60 font-medium">
                  Zapraszamy do obejrzenia kadrów z naszej restauracji. Każdy detal został zaprojektowany z myślą o Państwa komforcie.
                </motion.div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
               <motion.div {...fadeIn} className="md:col-span-8 group relative overflow-hidden rounded-[40px] aspect-video">
                 <img src={GALLERY_IMAGES[0]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-brown to-transparent opacity-60" />
                 <div className="absolute bottom-10 left-10">
                   <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-60 mb-2">Wnętrze</p>
                   <h3 className="text-3xl font-serif">Artystyczna dusza</h3>
                 </div>
               </motion.div>
               <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="md:col-span-4 group relative overflow-hidden rounded-[40px] aspect-square">
                 <img src={GALLERY_IMAGES[1]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
                 <div className="absolute inset-x-0 bottom-0 p-10 bg-brand-accent/90 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2">Kuchnia</p>
                    <h3 className="text-2xl font-serif">Świeżość i tradycja</h3>
                 </div>
               </motion.div>
               <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="md:col-span-4 group relative overflow-hidden rounded-[40px] aspect-square">
                 <img src={GALLERY_IMAGES[2]} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" />
               </motion.div>
               <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="md:col-span-8 flex flex-col justify-center p-12 bg-zinc-900/50 rounded-[40px] border border-white/5">
                 <Quote className="text-brand-accent mb-6" size={40} />
                 <p className="text-3xl font-serif leading-relaxed italic mb-8">"Najlepsza kuchnia regionalna w Stalowej Woli. Atmosfera nie do podrobienia, a obsługa sprawia, że czujesz się jak u starych dobrych znajomych."</p>
                 <div className="flex items-center gap-4">
                   <div className="w-10 h-px bg-brand-accent" />
                   <span className="text-xs uppercase tracking-widest font-bold opacity-60">Gość Art Cafe</span>
                 </div>
               </motion.div>
             </div>
           </div>
        </section>

        {/* Info Grid - Hours & Contact */}
        <section id="godziny" className="py-40 bg-brand-cream relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
              <motion.div {...fadeIn} className="lg:col-span-5">
                <div className="sticky top-40">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-brand-brown text-brand-cream flex items-center justify-center">
                      <Clock size={24} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif">Godziny i Rezerwacje</h2>
                  </div>
                  <p className="text-lg text-brand-brown/60 mb-12 max-w-md">
                    Planujesz wizytę? Zobacz kiedy jesteśmy otwarci i zarezerwuj stolik, aby mieć pewność najlepszego miejsca.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                     <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-14 h-14 rounded-full border border-brand-brown/10 flex items-center justify-center group-hover:bg-brand-brown group-hover:text-brand-cream transition-all">
                          <Phone size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Zadzwoń do nas</p>
                          <a href="tel:536594474" className="text-2xl font-serif hover:text-brand-accent transition-colors tracking-tight">536 594 474</a>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="w-14 h-14 rounded-full border border-brand-brown/10 flex items-center justify-center group-hover:bg-brand-brown group-hover:text-brand-cream transition-all">
                          <MapPin size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold opacity-40">Odwiedź nas</p>
                          <address className="not-italic text-2xl font-serif tracking-tight">Sandomierska 1, Stalowa Wola</address>
                        </div>
                     </div>
                  </div>

                  <a 
                    href={FB_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#1877F2] text-white rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 active:scale-95 transition-all shadow-xl shadow-blue-500/20"
                  >
                    <Facebook size={18} /> Obserwuj na Facebooku
                  </a>
                </div>
              </motion.div>

              <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="lg:col-span-7">
                <div className="bg-white p-12 md:p-20 rounded-[60px] shadow-2xl border border-brand-brown/5">
                  <h3 className="text-3xl font-serif mb-12 text-center uppercase tracking-widest font-bold text-brand-brown/20 leading-none">Tygodniowy Grafik</h3>
                  <div className="space-y-8">
                    {OPENING_HOURS.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-end group">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-1 group-hover:opacity-100 opacity-40 transition-opacity">{idx === 0 ? "Odpoczynek" : "Zapraszamy"}</span>
                          <span className="text-2xl font-serif leading-none">{item.day}</span>
                        </div>
                        <div className="flex-1 border-b border-dotted border-brand-brown/10 mx-6 mb-1" />
                        <span className={`text-xl font-medium ${item.closed ? "text-red-500 italic opacity-60" : "font-light"}`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map & Social Integration */}
        <section id="kontakt" className="py-40 bg-zinc-50 border-y border-brand-brown/5 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-20">
               <motion.div {...fadeIn}>
                 <MapPin className="text-brand-accent mx-auto mb-6" size={48} />
                 <h2 className="text-5xl md:text-7xl font-serif mb-8 tracking-tighter">Gdzie nas znaleźć?</h2>
                 <p className="text-xl text-brand-brown/50 max-w-2xl font-medium uppercase tracking-widest">W samym centrum serca Stalowej Woli</p>
               </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
              <motion.div {...fadeIn} className="h-[550px] rounded-[50px] overflow-hidden shadow-[0_48px_80px_-16px_rgba(0,0,0,0.15)] border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.7923691915453!2d22.039161877035976!3d50.593812377030524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722d2ce19bfee23%3A0xc9d2aadad0fea3e3!2sSandomierska%201%2C%2037-450%20Stalowa%20Wola!5e0!3m2!1spl!2spl!4v1778313770087!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              <div className="flex flex-col gap-8">
                 <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-brand-brown p-12 rounded-[50px] text-brand-cream relative overflow-hidden group">
                    <Facebook className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 rotate-12 transition-transform duration-700 group-hover:scale-110" />
                    <Star className="text-brand-accent mb-6" size={32} />
                    <h3 className="text-3xl font-serif mb-6 leading-tight">Mamy nienaganną reputację <br />wśród naszych gości.</h3>
                    <p className="text-brand-cream/60 text-lg font-light mb-10">
                      Dołącz do społeczności Art Cafe na Facebooku i przeczytaj najnowsze recenzje naszych gości. Twoja opinia również jest dla nas niezwykle ważna.
                    </p>
                    <a
                      href={FB_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 bg-brand-cream text-brand-brown px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-accent transition-colors group"
                    >
                      Czytaj opinie <ChevronRight className="group-hover:translate-x-2 transition-transform" size={16} />
                    </a>
                 </motion.div>

                 <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-white p-12 rounded-[50px] shadow-xl border border-brand-brown/5 flex flex-col justify-center items-center text-center">
                    <Camera className="text-brand-brown/20 mb-6" size={40} />
                    <h4 className="text-2xl font-serif mb-4">Uwiecznij swoje chwile</h4>
                    <p className="text-brand-brown/50 font-medium leading-relaxed">
                      Wizytę w Art Cafe warto zapamiętać. Nie zapomnij oznaczyć nas na swoich zdjęciach!
                    </p>
                 </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 border-b border-brand-brown/10 pb-20">
            <div className="flex flex-col items-start gap-8">
              <div className="flex items-center gap-4">
                <img src={LOGO_URL} alt="Art Cafe Logo" className="w-16 h-16 rounded-full object-cover" />
                <span className="font-serif text-3xl font-bold tracking-tight">Art Cafe</span>
              </div>
              <p className="text-brand-brown/50 font-medium leading-relaxed italic">
                „Poprzez nasze specjały chcielibyśmy przybliżyć naszym gościom smaki naszego regionu.”
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Menu Główne</span>
              <nav className="flex flex-col gap-4 font-serif text-xl">
                 <a href="#o-nas" className="hover:text-brand-accent transition-colors">Nasza Historia</a>
                 <a href="#galeria" className="hover:text-brand-accent transition-colors">Nasza Galeria</a>
                 <a href="#godziny" className="hover:text-brand-accent transition-colors">Godziny Otwarcia</a>
                 <a href="#kontakt" className="hover:text-brand-accent transition-colors">Gdzie Jesteśmy?</a>
              </nav>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold opacity-40">Lokalizacja</span>
              <p className="font-serif text-xl leading-relaxed">
                ul. Sandomierska 1 <br />
                37-450 Stalowa Wola
              </p>
              <div className="flex gap-4">
                <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-brand-brown/10 flex items-center justify-center hover:bg-brand-brown hover:text-brand-cream transition-all">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
            <p>&copy; {new Date().getFullYear()} Art Cafe Stalowa Wola</p>
            <p>Design & Kulinaria: Smak Regionu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
