import Navbar from '@/components/Navbar'

const Layout = ({ children }) => {
  return (
    <section className="container mx-auto xl:max-w-screen-xl px-4">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;