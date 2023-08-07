import { globalStyles } from '~/global/styles';

export const navStyles = {
  header: {
    position: 'fixed' as const,
    width: '100vw',
    height: '3rem',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: globalStyles.color.white,
  },
  logoBox: {
    padding: 10,
    marginRight: 40,
  },
  link: {
    padding: 10,
    textDecoration: 'none',
    color: 'inherit',
    cursor: 'pointer',
  },
  nav: {
    display: 'flex',
    padding: '0px 10px',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
