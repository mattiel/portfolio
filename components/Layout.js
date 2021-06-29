import Navbar from '@/components/Navbar'
import Container from '@/components/Container'

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;