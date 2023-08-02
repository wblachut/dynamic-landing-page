import { globalStyles } from '~/global/styles';

export const newsletterStyle = {
  section: {
    ...globalStyles.section,
    background: globalStyles.color.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: '70vh',
    flexDirection: 'column' as const,
  },
  h2: {
    width: '40vw',
    padding: '2rem 0',
    fontSize: '2.5rem',
    textAlign: 'center' as const,
  },
  input: {
    backgroundColor: globalStyles.color.lightBg,
    borderRadius: '24px',
    width: '420px',
    height: '3rem',
    padding: '0 2rem',
    marginRight: '1rem',
    border: 'none',
  },
  button: {
    backgroundColor: globalStyles.color.accentColor,
    borderRadius: '24px',
    width: '160px',
    height: '3rem',
    border: 'none',
  },
  span: {
    width: '520px',
    height: '400px',
    backgroundSize: 'cover',
  },
};
