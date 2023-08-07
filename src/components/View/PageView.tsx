import { TestimonialSection } from '../section/Testimonial/TestimonialSection';
import { Section, SinglePage } from '~/api/model.dto';
import { HeroSection } from '../section/Hero/HeroSection';
import { SectionType, SubscribeMutation } from '~/model/types';
import { mockSinglePageData } from '~/mock/mockSinglePageData';
import { NewsletterSection } from '../section/Newsletter/NewsletterSection';
import { QueryFunction, useQuery } from 'react-query';
import { fetchSimplePage } from '~/api/apiClient';

const PageView = ({
  pageId,
  subscribeMutation,
}: {
  pageId: string;
  subscribeMutation: SubscribeMutation;
}) => {
  // TODO: find out why query bellow generate error and fix it
  // const { data, isSuccess } = useQuery({
  //   queryKey: ['simplePage', pageId],
  //   queryFn: fetchSimplePage(pageId!) as unknown as QueryFunction<unknown, string[]>,
  //   enabled: !!pageId,
  // });

  const pageData = mockSinglePageData;
  const sections = (pageData as SinglePage).sections ?? [];

  return (
    <main data-pageid={pageId}>
      {sections.map((section: Section) => (
        <div key={section.type}>{getComponentBySectionType(section, subscribeMutation)}</div>
      ))}
    </main>
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

export default PageView;
