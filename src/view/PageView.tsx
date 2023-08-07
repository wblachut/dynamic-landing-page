import { TestimonialSection } from '../components/section/Testimonial/TestimonialSection';
import { Section } from '~/api/model.dto';
import { HeroSection } from '../components/section/Hero/HeroSection';
import { SectionType, SubscribeMutation } from '~/model/types';
import { mockSinglePageData } from '~/mock/mockSinglePageData';
import { NewsletterSection } from '../components/section/Newsletter/NewsletterSection';
import { usePageData } from '../hooks/usePageData';
import { Suspense } from 'react';
import { LogoLoader } from '~/common/LogoLoader/LogoLoader';

export const PageView = ({
  pageId,
  subscribeMutation,
}: {
  pageId: string;
  subscribeMutation?: SubscribeMutation;
}) => {
  // Custom fetch used because queries in nested Router components generated errors
  const { pageData, isLoading, isError } = usePageData(pageId);
  const page = pageData ?? mockSinglePageData;
  const sections = page.sections ?? [];
  const isSuccess = !isLoading && !isError;

  return (
    <Suspense fallback={<LogoLoader />}>
      <main>
        {isSuccess &&
          sections.map((section: Section) => (
            <div key={section.type}>{getComponentBySectionType(section, subscribeMutation)}</div>
          ))}
      </main>
    </Suspense>
  );
};

// MAP SECTION TO UI COMPONENTS
export const getComponentBySectionType = (section: Section, subscribeMutation: any) => {
  switch (section.type) {
    case SectionType.HERO:
      return <HeroSection text={section.text ?? ''} imgSrc={section.img ?? ''} />;
    case SectionType.TESTIMONIAL:
      return <TestimonialSection quote={section.text ?? ''} author={section.author ?? ''} />;
    case SectionType.NEWSLETTER:
      return <NewsletterSection subscribeMutation={subscribeMutation} />;
    default:
      return <></>;
  }
};
