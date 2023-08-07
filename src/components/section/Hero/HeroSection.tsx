import { heroStyle } from './hero.style';

interface HeroSectionProps {
  text: string;
  imgSrc: HTMLImageElement['src'];
}

export const HeroSection = ({ text, imgSrc }: HeroSectionProps) => {
  return (
    <section style={heroStyle.section}>
      <h3 style={heroStyle.text}>{text}</h3>
      <img src={imgSrc} style={heroStyle.img} alt='hero-section-img' />
    </section>
  );
};
