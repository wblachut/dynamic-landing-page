import { globalStyles } from '~/global/styles';

export const heroStyle = {
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
    height: '56vh',
    width: '30vw',
    backgroundSize: 'cover',
    objectFit: 'cover' as const,
  },
};
