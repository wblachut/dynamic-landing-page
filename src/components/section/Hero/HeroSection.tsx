import { globalStyles } from '~/global/styles';

const heroStyle = {
  section: {
    ...globalStyles.section,
    background: globalStyles.color.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  },
  text: {
    width: '30vw',
    fontSize: '2.5rem',
  },
  img: {
    width: '520px',
    height: '400px',
    backgroundSize: 'cover',
  },
};

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
