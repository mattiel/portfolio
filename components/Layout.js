import Navbar from '@/components/Navbar'
import Container from '@/components/Container'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  return (
    <Container className="relative">
      <div 
        className="absolute top-0 left-[.5px] h-full mx-5 border-l border-r border-dashed border-gray-500 border-opacity-10 pointer-events-none flex justify-evenly items-start"
        style={{zIndex: -1, width: 'calc(100% - 2.5rem - 1px)'}}
      >
        <div className="ml-2 h-full border-l border-dashed border-gray-500 border-opacity-10 hidden md:block" style={{width: '1px'}}></div>
        <div className="ml-2 h-full border-l border-dashed border-gray-500 border-opacity-10 hidden md:block" style={{width: '1px'}}></div>
      </div>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;