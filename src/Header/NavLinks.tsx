import { NavLink } from 'react-router-dom';
import { ContactButton } from './ContactButton';
import { ReactComponent as Logo } from '~/assets/logo.svg';
import { globalStyles } from '~/global/styles';
import { getLinkName } from './helpers/navLinksHelpers';

export interface Page {
  url: string;
  id: string;
}

export interface PagesDataProp {
  pagesData: Page[];
}

const CONTACT_BTN_TEXT = 'Contact us';

const navStyles = {
  nav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: globalStyles.color.white,
    position: 'sticky' as const,
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
};

export const NavLinks = ({ pagesData }: PagesDataProp) => {
  return (
    <nav style={navStyles.nav}>
      <ul style={{ listStyle: 'none', display: 'flex', margin: 10, padding: '0px 10px' }}>
        <NavLink to='/' style={navStyles.logoBox}>
          <Logo />
        </NavLink>
        {pagesData.map((navElement, index) => (
          <NavLink
            key={navElement.id}
            to={navElement.url}
            style={{ ...navStyles.link, marginLeft: index > 0 ? '1rem' : 0 }}
          >
            {getLinkName(navElement.url)}
          </NavLink>
        ))}
      </ul>
      <ContactButton>{CONTACT_BTN_TEXT}</ContactButton>{' '}
    </nav>
  );
};
