import Navbar from '@/components/Navbar'
import Container from '@/components/Container'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  return (
    <Container className="">
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;