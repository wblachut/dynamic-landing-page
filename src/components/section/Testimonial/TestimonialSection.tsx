import { ReactComponent as QuotationMark } from '~/assets/quotation-mark.svg';
import { testimonialStyle } from './testimonial.styles';

interface TestimonialSectionProps {
  quote: string;
  author: string;
}

export const TestimonialSection = ({ quote, author }: TestimonialSectionProps) => {
  return (
    <section style={testimonialStyle.section}>
      {/* <div style={testimonialStyle.mark}> */}
      <QuotationMark style={testimonialStyle.mark} />
      {/* </div> */}
      <span style={testimonialStyle.span}>{quote}</span>
      <span style={testimonialStyle.author}>{author}</span>
    </section>
  );
};
