import { ReactNode } from 'react';
import NavigationMenu from './navigationMenu';
import StickyFooter from './footer';

interface Props {
  children: ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      {children}
      <StickyFooter />
    </div>
  );
};

export default Layout;
