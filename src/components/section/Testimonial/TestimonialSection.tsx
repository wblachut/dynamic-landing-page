import QuotationMark from '~/assets/quotation-mark.svg';
import { testimonialStyle } from './testimonial.styles';

interface TestimonialSectionProps {
  quote?: string;
  author?: string;
}

export const TestimonialSection = ({ quote, author }: TestimonialSectionProps) => {
  return (
    <section style={testimonialStyle.section}>
      <img src={QuotationMark} style={testimonialStyle.mark} alt='quotation-mark' />
      <span style={testimonialStyle.span}>{quote ?? ''}</span>
      <span style={testimonialStyle.author}>{author ?? ''}</span>
    </section>
  );
};
