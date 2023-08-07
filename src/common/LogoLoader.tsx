import Logo from '~/assets/logo.svg';
import { globalStyles } from '~/global/styles';

export const LogoLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundColor: globalStyles.color.lightBg,
        maskImage: `url(${Logo})`,
      }}
    >
      <img src={Logo} alt='Logo' style={{ width: '10rem' }} />
    </div>
  );
};
