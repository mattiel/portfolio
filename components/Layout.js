import Navbar from '@/components/Navbar'

const Layout = ({ children }) => {
  return (
    <section className="container mx-auto lg:max-w-screen-lg px-6">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;