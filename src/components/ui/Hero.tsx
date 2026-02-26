'use client';

import { motion } from 'framer-motion';
import HubCarousel from './HubCarousel';

interface HeroProps {
  backgroundClass?: string;
}

const Hero = ({
  backgroundClass = 'bg-slate-900',
}: HeroProps) => {
  return (
    <section className="bg-white">
      <div className={`${backgroundClass} overflow-hidden relative rounded-[2.5rem] md:rounded-[4rem] min-h-[300px] sm:min-h-[360px] md:min-h-[480px] lg:min-h-[540px] shadow-2xl shadow-black/20`}>
        <HubCarousel />
      </div>
    </section>
  );
};

export default Hero;
