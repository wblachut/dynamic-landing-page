import { TestimonialSection } from '../Testimonial/TestimonialSection';
import { NewsletterSection } from '../Newsletter/NewsletterSection';
import { Section } from '~/api/model.dto';
import { HeroSection } from '../Hero/HeroSection';
import { SectionType, SubscribeMutation } from '~/model/types';
import { mockSinglePageData } from '~/mock/mockSinglePageData';

const PageView = ({
  pageId,
  subscribeMutation,
}: {
  pageId: string;
  subscribeMutation: SubscribeMutation;
}) => {
  // TODO: find out why query bellow generate error and fix it

  // const { isLoading, data: singlePageData } = useQuery(
  //   ['simplePage', pageId],
  //   () => fetchSimplePage(pageId),
  // );

  // TODO: Use singlePageData instead of mock
  const sections = mockSinglePageData.sections ?? [];

  return (
    <main data-pageId={pageId}>
      {sections.map((section: Section) => getComponentBySectionType(section, subscribeMutation))}
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
