import Navbar from '@/components/Navbar'
import Container from '@/components/Container'

const Layout = ({ children }) => {
  return (
    <section className="container mx-auto lg:max-w-screen-lg px-5">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;