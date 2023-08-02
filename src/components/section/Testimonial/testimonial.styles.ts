import { globalStyles } from '~/global/styles';

export const testimonialStyle = {
  section: {
    ...globalStyles.section,
    backgroundColor: globalStyles.color.darkBg,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column' as const,
    height: '60vh',
    paddingLeft: '12rem',
  },
  mark: {
    width: '36x',
  },
  span: {
    width: '60vw',
    color: globalStyles.color.lightFont,
    fontSize: '1.5rem',
    padding: '2rem 0 4rem 0',
  },
  author: {
    color: globalStyles.color.grey,
    fontSize: '1rem',
  },
};
